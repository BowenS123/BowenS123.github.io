const GITHUB_USERNAME = "BowenS123";

// Mobiel menu
const navToggle = document.getElementById("navToggle");
const topnav = document.getElementById("topnav");
if (navToggle && topnav) {
  navToggle.addEventListener("click", () => {
    const isOpen = topnav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  topnav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      topnav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Actieve navlink op basis van scrollpositie
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".topnav a");

function setActiveLink() {
  let current = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      current = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();

// Footer datum
const updateDateEl = document.getElementById("updateDate");
if (updateDateEl) {
  updateDateEl.textContent = new Date().toLocaleDateString("nl-BE", {
    year: "numeric",
    month: "long",
  });
}

// GitHub Live Repositories
const repoGrid = document.getElementById("repoGrid");
const githubStatus = document.getElementById("githubStatus");

function timeAgo(dateString) {
  const diffDays = Math.floor((Date.now() - new Date(dateString)) / 86400000);
  if (diffDays < 1) return "vandaag";
  if (diffDays === 1) return "1 dag geleden";
  if (diffDays < 30) return `${diffDays} dagen geleden`;
  const months = Math.floor(diffDays / 30);
  if (months < 12) return `${months} ${months === 1 ? "maand" : "maanden"} geleden`;
  const years = Math.floor(months / 12);
  return `${years} ${years === 1 ? "jaar" : "jaar"} geleden`;
}

async function loadGithubRepos() {
  if (!repoGrid) return;
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`
    );
    if (!response.ok) throw new Error(`GitHub API status ${response.status}`);
    const repos = await response.json();

    const visibleRepos = repos.filter((repo) => !repo.fork);

    if (visibleRepos.length === 0) {
      repoGrid.innerHTML = `<p class="repo-placeholder">Nog geen publieke repositories gevonden voor @${GITHUB_USERNAME}.</p>`;
      if (githubStatus) githubStatus.textContent = "geen repos gevonden";
      return;
    }

    repoGrid.innerHTML = visibleRepos
      .map(
        (repo) => `
      <a class="repo-card reveal" href="${repo.html_url}" target="_blank" rel="noopener">
        <span class="repo-name">${escapeHtml(repo.name)}</span>
        <p class="repo-desc">${repo.description ? escapeHtml(repo.description) : "Geen beschrijving toegevoegd."}</p>
        <span class="repo-meta">
          ${repo.language ? `<span><span class="repo-lang-dot"></span>${repo.language}</span>` : ""}
          <span>bijgewerkt ${timeAgo(repo.updated_at)}</span>
        </span>
      </a>`
      )
      .join("");

    if (githubStatus) {
      githubStatus.textContent = `${visibleRepos.length} repositories, live via GitHub API`;
      githubStatus.classList.add("is-live");
    }

    document.querySelectorAll('.repo-card.reveal').forEach(el => observer.observe(el));
  } catch (error) {
    repoGrid.innerHTML = `<p class="repo-error">Kon GitHub-repositories niet laden. Bekijk ze rechtstreeks op <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" rel="noopener">github.com/${GITHUB_USERNAME}</a>.</p>`;
    if (githubStatus) githubStatus.textContent = "kon niet laden";
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// Typing effect hero
const textToType = "Elektronica-ICT: automatisatie, embedded systems en IoT";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
  if (typingElement && index < textToType.length) {
    typingElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 35);
  }
}

// Slideshow Functionaliteit (Automatisch & Handmatig)
function initSlideshows() {
  const slideshows = document.querySelectorAll('[data-slideshow]');

  slideshows.forEach((slideshow) => {
    const slides = slideshow.querySelectorAll('.slide');
    const dots = slideshow.querySelectorAll('.dot');
    const prevBtn = slideshow.querySelector('.slide-prev');
    const nextBtn = slideshow.querySelector('.slide-next');
    let currentSlide = 0;
    let autoSlideTimer;

    if (!slides.length) return;

    function showSlide(n) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));

      currentSlide = (n + slides.length) % slides.length;

      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function startTimer() {
      stopTimer();
      autoSlideTimer = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 4000);
    }

    function stopTimer() {
      if (autoSlideTimer) clearInterval(autoSlideTimer);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        startTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        startTimer();
      });
    }

    dots.forEach((dot, idx) => {
      if (idx >= slides.length) {
        dot.hidden = true;
        return;
      }
      dot.addEventListener('click', () => {
        showSlide(idx);
        startTimer();
      });
    });

    slideshow.addEventListener('mouseenter', stopTimer);
    slideshow.addEventListener('mouseleave', startTimer);

    startTimer();
  });
}

// Logo's: valt een icoon weg, toon dan een kleurrijk letterbadge
function initSkillIcons() {
  document.querySelectorAll("img.skill-icon").forEach((img) => {
    const fallback = () => {
      const mono = document.createElement("span");
      mono.className = "skill-mono";
      mono.textContent = img.dataset.mono || (img.nextElementSibling ? img.nextElementSibling.textContent.slice(0, 2) : "?");
      mono.style.setProperty("--mono", img.dataset.color || "#1F3D2C");
      img.replaceWith(mono);
    };
    img.addEventListener("error", fallback, { once: true });
    // her-laden zodat een fout die al gebeurde voor dit script toch wordt opgevangen
    const src = img.getAttribute("src");
    img.removeAttribute("src");
    img.setAttribute("src", src);
  });
}

// Projectfoto's: eerst lokaal (assets/projecten/lora/), daarna de GitHub-repo van het project
const LORA_LOCAL_BASE = "assets/projecten/lora/";
const LORA_IMAGE_BASE =
  "https://raw.githubusercontent.com/BowenS123/PXLDIGITAL_GREEN_PROJECT_RESEARCH_Lora/main/docs/images/";

function loadProjectImages() {
  document.querySelectorAll(".slide img[data-src]").forEach((img) => {
    const file = img.dataset.src;
    img.addEventListener("error", () => {
      if (!img.dataset.triedRemote) {
        img.dataset.triedRemote = "1";
        img.src = LORA_IMAGE_BASE + file;
      } else {
        img.closest(".slide").classList.add("is-missing");
      }
    });
    img.src = LORA_LOCAL_BASE + file;
  });
}

// Scroll Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

window.addEventListener("DOMContentLoaded", () => {
  typeWriter();

  document.querySelectorAll('.project-card, .skill-category-card, .entry-card, .section h2').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  loadGithubRepos();
  initSlideshows();
  initSkillIcons();
  loadProjectImages();
});