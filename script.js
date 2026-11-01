const GITHUB_USERNAME = "BowenS123";

const translations = {
  nl: {
    menu: "Menu",
    "nav.about": "Over mij",
    "nav.skills": "Vaardigheden",
    "nav.projects": "Projecten",
    "nav.timeline": "Tijdlijn",
    "nav.certificates": "Certificaten",
    "nav.contact": "Contact",
    "hero.eyebrow": "PXL Hogeschool · Elektronica-ICT · Jaar 3",
    "hero.description": "Student Elektronica-ICT met een sterke achtergrond in Elektromechanica. Ik combineer hardware en software om processen slimmer en efficiënter te maken, van hands-on hardware en PCB-ontwerp tot embedded code. Deze pagina bundelt mijn projecten en GitHub-werk.",
    "hero.projects": "Bekijk mijn projecten",
    "hero.github": "GitHub-profiel",
    "facts.hardware": "Hardware + software",
    "facts.hardwareSub": "Van sensor tot dashboard",
    "facts.projects": "3 projecten",
    "facts.projectsSub": "Uitgewerkt en gedocumenteerd",
    "facts.studySub": "PXL Hogeschool · jaar 3",
    "about.title": "Over mij",
    "about.lead": "Ik bouw systemen waarin hardware en software samenwerken, van sensor tot dashboard.",
    "about.p1": "Ik ben Bowen Liang, student Elektronica-ICT met een achtergrond in Elektromechanica. Als tech-enthousiasteling hou ik van nieuwe gadgets en zoek ik graag naar manieren om processen te automatiseren en systemen slimmer te maken.",
    "about.p2": "Mijn passie ligt bij <strong>hands-on hardware</strong>: het ontwerpen, solderen en testen van fysieke opstellingen, printplaten (PCB's) en microcontrollers. Na mijn opleiding Elektromechanica maakte ik de stap naar de digitale wereld om hardware naadloos te combineren met software.",
    "about.p3": "Elektronica-ICT geeft me de tools om geautomatiseerde systemen van A tot Z te ontwerpen, te programmeren en werkend op te leveren.",
    "skills.title": "Mijn vaardigheden",
    "skills.lead": "Tijdens mijn opleiding ontwikkelde ik vaardigheden in programmeren, embedded systems, FPGA-ontwikkeling, netwerken en industriële automatisering. Klik op een badge voor meer informatie.",
    "skills.programming": "Programmeren",
    "skills.programmingSub": "Software en talen",
    "skills.embedded": "Embedded systems",
    "skills.embeddedSub": "Hardware & microcontrollers",
    "skills.fpga": "FPGA & hardware acceleration",
    "skills.fpgaSub": "Digitale logica en SoC-ontwikkeling",
    "skills.networks": "Netwerken & protocollen",
    "skills.networksSub": "Communicatiestandaarden",
    "skills.automation": "Automatisering",
    "skills.automationSub": "PLC & domotica",
    "projects.kicker": "Geselecteerd werk · 02",
    "projects.title": "Mijn projecten",
    "projects.lead": "Projecten waarin ik hardware, embedded software, C en industriële automatisering samenbreng. Elk project toont mijn rol, het resultaat en de gebruikte technologie.",
    "project.contribution": "Mijn bijdrage en resultaten",
    "project.completed": "Prototype afgerond",
    "project.specificContribution": "Mijn specifieke bijdrage",
    "project.results": "Resultaten",
    "lora.kicker": "Project onderzoek · PXL Digital Lora Project",
    "lora.title": "LoRa GPS-tracker met Raspberry Pi-dashboard",
    "lora.meta": "Jaar 2, Project onderzoek (42EAI1100)",
    "lora.summary": "Een batterijgevoede ESP32-zender meet locatie, temperatuur en lichtniveau en stuurt die via LoRa (868 MHz) naar een Raspberry Pi 5. Daar worden de gegevens getoond op een Node-RED-dashboard en op een LCD-scherm. Tijdens een veldtest haalde het systeem een betrouwbaar bereik van ongeveer <strong>1,1 km</strong> met een eenvoudige gluestick-antenne.",
    "lora.contribution": "Ik schreef de application note van de zender, bouwde de ESP32-firmware met GPS en temperatuurmeting, en ontwierp de batterijvoeding (Li-ion, TP4056-lader en step-up converter) met stroommetingen van het slaapverbruik. Daarnaast werkte ik mee aan de Node-RED-flow en het dashboard van de ontvanger.",
    "industry.title": "Industry 4.0: geautomatiseerde verwerkingslijn",
    "industry.summary": "Een semi-geautomatiseerde productielijn voor het identificeren, wegen en verwerken van pannenkoekingrediënten. De Beckhoff PLC coördineert de transportband, QR-camera, robotarm, weegschaal, inductieve sensor en mixer.",
    "industry.modules": "hoofdmodules",
    "industry.identification": "productidentificatie",
    "industry.communication": "JSON-communicatie",
    "industry.contribution": "Mijn bijdrage en reflectie",
    "cprogramming.kicker": "Eerstejaarsvak · eindproject",
    "cprogramming.title": "C programming: Minesweeper",
    "cprogramming.meta": "Jaar 1 · C programming · zelfstandig project",
    "cprogramming.repo": "GitHub Repo",
    "cprogramming.summary": "Mijn eerste grotere project in C: een terminalversie van Minesweeper. In deze repository staan ook de oefeningen waarmee ik de basis van C leerde, van variabelen en lussen tot functies, arrays en headerbestanden.",
    "cprogramming.demoKicker": "Browserdemo",
    "cprogramming.demoTitle": "Speel Minesweeper",
    "cprogramming.flagMode": "Vlagmodus",
    "cprogramming.newGame": "Nieuwe game",
    "cprogramming.mines": "Mijnen",
    "cprogramming.demoHelp": "Klik om een vakje te openen. Rechtsklik om een vlag te plaatsen.",
    "lora.caption1": "De LoRa-zender met sensoren",
    "lora.caption2": "Node-RED dashboard met live metingen",
    "lora.caption3": "Ontvanger in behuizing (buitenkant)",
    "lora.caption4": "Ontvanger in behuizing (binnenkant)",
    "lora.caption5": "Veldtest: bereik van ongeveer 1,1 km",
    "industry.kicker": "Project engineering · teamproject",
    "industry.meta": "Jaar 2, Project Engineering (43EAI1090/2EAI-PEN), semester 2",
    "github.title": "Live vanaf GitHub",
    "github.lead": "Automatisch gesynchroniseerd met mijn profiel",
    "github.activity": "GitHub-activiteit",
    "timeline.kicker": "Ontwikkeling · van basis naar systeem",
    "timeline.title": "Mijn projecttijdlijn",
    "timeline.lead": "Van elektronica en embedded systemen naar geïntegreerde productielijnen: hier zie je hoe mijn projecten zich doorheen de opleiding ontwikkelden.",
    "timeline.foundation": "Fundament",
    "timeline.foundationTitle": "Elektronica, microcontrollers en PCB-design",
    "timeline.foundationText": "Ik bouwde de basis op in C, digitale technieken, mechatronica en hardwareproductie. Daardoor leerde ik schakelingen niet alleen ontwerpen, maar ook meten, testen en documenteren.",
    "timeline.loraKicker": "Project onderzoek · afgerond",
    "timeline.loraTitle": "LoRa GPS-tracker",
    "timeline.loraText": "Een eerste volledig systeemproject: sensordata verzamelen met een ESP32, draadloos versturen via LoRa en visualiseren op een Raspberry Pi-dashboard.",
    "timeline.industryKicker": "Project engineering · prototype afgerond",
    "timeline.industryTitle": "Industry 4.0-verwerkingslijn",
    "timeline.industryText": "Mijn meest geïntegreerde project tot nu toe: PLC-automatisatie, TwinCAT Vision voor QR-scanning, MQTT-communicatie, een robotarm en een ESP32-mixer in één productielijn.",
    "timeline.upcomingKicker": "Nog te starten",
    "timeline.upcomingTitle": "Nieuwe projecten volgen",
    "timeline.upcomingText": "Dit studiejaar moet nog komen. Hier voeg ik later nieuwe projecten, technologieën en resultaten toe.",
    "timeline.nextKicker": "In voorbereiding",
    "timeline.nextTitle": "Stage en bachelorproef",
    "timeline.nextText": "De volgende stap is mijn ervaring verdiepen in een professionele omgeving, met focus op embedded software, industriële automatisatie en betrouwbare systeemintegratie.",
    "certificates.title": "Certificaten & activiteiten",
    "certificates.lead": "Certificaten van behaalde cursussen en overige relevante activiteiten.",
    "certificates.view": "Bekijk",
    "certificates.completed": "voltooid",
    "contact.lead": "Wil je meer weten over mijn projecten en vaardigheden?",
    "footer.text": "Portfolio Elektronica-ICT van Bowen Liang. Laatst bijgewerkt:"
  },
  en: {
    menu: "Menu",
    "nav.about": "About me",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.timeline": "Timeline",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",
    "hero.eyebrow": "PXL University of Applied Sciences · Electronics-ICT · Year 3",
    "hero.description": "Electronics-ICT student with a strong background in electromechanics. I combine hardware and software to make processes smarter and more efficient, from hands-on hardware and PCB design to embedded code. This page brings together my projects and GitHub work.",
    "hero.projects": "View my projects",
    "hero.github": "GitHub profile",
    "facts.hardware": "Hardware + software",
    "facts.hardwareSub": "From sensor to dashboard",
    "facts.projects": "3 projects",
    "facts.projectsSub": "Developed and documented",
    "facts.studySub": "PXL University · year 3",
    "about.title": "About me",
    "about.lead": "I build systems where hardware and software work together, from sensor to dashboard.",
    "about.p1": "I am Bowen Liang, an Electronics-ICT student with a background in electromechanics. As a technology enthusiast, I enjoy exploring new gadgets and finding ways to automate processes and make systems smarter.",
    "about.p2": "My passion is <strong>hands-on hardware</strong>: designing, soldering and testing physical setups, printed circuit boards (PCBs) and microcontrollers. After studying electromechanics, I moved into the digital world to combine hardware and software seamlessly.",
    "about.p3": "Electronics-ICT gives me the tools to design, program and deliver automated systems from A to Z.",
    "skills.title": "My skills",
    "skills.lead": "During my studies I developed skills in programming, embedded systems, FPGA development, networking and industrial automation. Click a badge for more information.",
    "skills.programming": "Programming",
    "skills.programmingSub": "Software and languages",
    "skills.embedded": "Embedded systems",
    "skills.embeddedSub": "Hardware & microcontrollers",
    "skills.fpga": "FPGA & hardware acceleration",
    "skills.fpgaSub": "Digital logic and SoC development",
    "skills.networks": "Networks & protocols",
    "skills.networksSub": "Communication standards",
    "skills.automation": "Automation",
    "skills.automationSub": "PLC & home automation",
    "projects.kicker": "Selected work · 02",
    "projects.title": "My projects",
    "projects.lead": "Projects where I bring together hardware, embedded software, C and industrial automation. Each project shows my role, the result and the technologies used.",
    "project.contribution": "My contribution and results",
    "project.completed": "Prototype completed",
    "project.specificContribution": "My specific contribution",
    "project.results": "Results",
    "lora.kicker": "Research project · PXL Digital LoRa Project",
    "lora.title": "LoRa GPS tracker with Raspberry Pi dashboard",
    "lora.meta": "Year 2, Research project (42EAI1100)",
    "lora.summary": "A battery-powered ESP32 transmitter measures location, temperature and light levels and sends them via LoRa (868 MHz) to a Raspberry Pi 5. The data is displayed on a Node-RED dashboard and an LCD screen. During a field test, the system achieved a reliable range of approximately <strong>1.1 km</strong> with a simple gluestick antenna.",
    "lora.contribution": "I wrote the transmitter application note, built the ESP32 firmware with GPS and temperature measurement, and designed the battery power supply (Li-ion, TP4056 charger and boost converter) while measuring sleep-mode consumption. I also contributed to the receiver's Node-RED flow and dashboard.",
    "industry.title": "Industry 4.0: automated processing line",
    "industry.summary": "A semi-automated production line for identifying, weighing and processing pancake ingredients. The Beckhoff PLC coordinates the conveyor belt, QR camera, robot arm, scale, inductive sensor and mixer.",
    "industry.modules": "main modules",
    "industry.identification": "product identification",
    "industry.communication": "JSON communication",
    "industry.contribution": "My contribution and reflection",
    "cprogramming.kicker": "First-year course · final project",
    "cprogramming.title": "C programming: Minesweeper",
    "cprogramming.meta": "Year 1 · C programming · individual project",
    "cprogramming.repo": "GitHub Repo",
    "cprogramming.summary": "My first larger C project: a terminal version of Minesweeper. The repository also contains the exercises through which I learned the foundations of C, from variables and loops to functions, arrays and header files.",
    "cprogramming.demoKicker": "Browser demo",
    "cprogramming.demoTitle": "Play Minesweeper",
    "cprogramming.flagMode": "Flag mode",
    "cprogramming.newGame": "New game",
    "cprogramming.mines": "Mines",
    "cprogramming.demoHelp": "Click a cell to reveal it. Right-click to place a flag.",
    "lora.caption1": "LoRa transmitter with sensors",
    "lora.caption2": "Node-RED dashboard with live measurements",
    "lora.caption3": "Receiver enclosure (outside)",
    "lora.caption4": "Receiver enclosure (inside)",
    "lora.caption5": "Field test: range of approximately 1.1 km",
    "industry.kicker": "Project engineering · team project",
    "industry.meta": "Year 2, Project Engineering (43EAI1090/2EAI-PEN), semester 2",
    "github.title": "Live from GitHub",
    "github.lead": "Automatically synchronized with my profile",
    "github.activity": "GitHub activity",
    "timeline.kicker": "Development · from foundation to system",
    "timeline.title": "My project timeline",
    "timeline.lead": "From electronics and embedded systems to integrated production lines: see how my projects developed throughout my studies.",
    "timeline.foundation": "Foundation",
    "timeline.foundationTitle": "Electronics, microcontrollers and PCB design",
    "timeline.foundationText": "I built my foundation in C, digital techniques, mechatronics and hardware production. This taught me to design, measure, test and document circuits.",
    "timeline.loraKicker": "Research project · completed",
    "timeline.loraTitle": "LoRa GPS tracker",
    "timeline.loraText": "A first complete system project: collecting sensor data with an ESP32, sending it wirelessly via LoRa and visualizing it on a Raspberry Pi dashboard.",
    "timeline.industryKicker": "Project engineering · prototype completed",
    "timeline.industryTitle": "Industry 4.0 processing line",
    "timeline.industryText": "My most integrated project so far: PLC automation, TwinCAT Vision for QR scanning, MQTT communication, a robot arm and an ESP32 mixer in one production line.",
    "timeline.upcomingKicker": "Not started yet",
    "timeline.upcomingTitle": "New projects to come",
    "timeline.upcomingText": "This study year is still ahead. I will add new projects, technologies and results here later.",
    "timeline.nextKicker": "In preparation",
    "timeline.nextTitle": "Internship and bachelor's thesis",
    "timeline.nextText": "The next step is to deepen my experience in a professional environment, focusing on embedded software, industrial automation and reliable system integration.",
    "certificates.title": "Certificates & activities",
    "certificates.lead": "Certificates from completed courses and other relevant activities.",
    "certificates.view": "View",
    "certificates.completed": "completed",
    "contact.lead": "Would you like to learn more about my projects and skills?",
    "footer.text": "Electronics-ICT portfolio by Bowen Liang. Last updated:"
  }
};

let currentLanguage = localStorage.getItem("portfolio-language") || "nl";
const languageToggle = document.getElementById("languageToggle");
const typingElement = document.getElementById("typing-text");
let typingIndex = 0;
let typingTimer;

function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "nl";
  const dictionary = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "en"
    ? "Bowen Liang, Electronics-ICT Portfolio"
    : "Bowen Liang, Portfolio Elektronica-ICT";
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute(
      "content",
      currentLanguage === "en"
        ? "Electronics-ICT portfolio by Bowen Liang for embedded systems, IoT and industrial automation."
        : "Portfolio Elektronica-ICT van Bowen Liang voor embedded systems, IoT en industriële automatisering."
    );
  }
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  if (languageToggle) {
    languageToggle.textContent = currentLanguage === "nl" ? "EN" : "NL";
    languageToggle.setAttribute("aria-label", currentLanguage === "nl" ? "Switch to English" : "Schakel naar Nederlands");
  }
  localStorage.setItem("portfolio-language", currentLanguage);
  updateDate();
  updateTypingText();
}

function updateDate() {
  if (updateDateEl) {
    updateDateEl.textContent = new Date().toLocaleDateString(currentLanguage === "en" ? "en-GB" : "nl-BE", {
      year: "numeric",
      month: "long"
    });
  }
}

function updateTypingText() {
  typingIndex = 0;
  if (typingTimer) clearTimeout(typingTimer);
  if (typingElement) {
    typingElement.textContent = "";
    typeWriter();
  }
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "nl" ? "en" : "nl");
    loadGithubRepos();
  });
}

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

const updateDateEl = document.getElementById("updateDate");
applyLanguage(currentLanguage);

// GitHub Live Repositories
const repoGrid = document.getElementById("repoGrid");
const githubStatus = document.getElementById("githubStatus");

function timeAgo(dateString) {
  const diffDays = Math.floor((Date.now() - new Date(dateString)) / 86400000);
  if (currentLanguage === "en") {
    if (diffDays < 1) return "today";
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 30) return `${diffDays} days ago`;
    const months = Math.floor(diffDays / 30);
    if (months < 12) return `${months} ${months === 1 ? "month" : "months"} ago`;
    const years = Math.floor(months / 12);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
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
      repoGrid.innerHTML = `<p class="repo-placeholder">${currentLanguage === "en" ? "No public repositories found" : "Nog geen publieke repositories gevonden"} @${GITHUB_USERNAME}.</p>`;
      if (githubStatus) githubStatus.textContent = currentLanguage === "en" ? "no repositories found" : "geen repos gevonden";
      return;
    }

    repoGrid.innerHTML = visibleRepos
      .map(
        (repo) => `
      <a class="repo-card reveal" href="${repo.html_url}" target="_blank" rel="noopener">
        <span class="repo-name">${escapeHtml(repo.name)}</span>
        <p class="repo-desc">${repo.description ? escapeHtml(repo.description) : (currentLanguage === "en" ? "No description added." : "Geen beschrijving toegevoegd.")}</p>
        <span class="repo-meta">
          ${repo.language ? `<span><span class="repo-lang-dot"></span>${repo.language}</span>` : ""}
          <span>${currentLanguage === "en" ? "updated" : "bijgewerkt"} ${timeAgo(repo.updated_at)}</span>
        </span>
      </a>`
      )
      .join("");

    if (githubStatus) {
      githubStatus.textContent = currentLanguage === "en"
        ? `${visibleRepos.length} repositories, live via GitHub API`
        : `${visibleRepos.length} repositories, live via GitHub API`;
      githubStatus.classList.add("is-live");
    }

    document.querySelectorAll('.repo-card.reveal').forEach(el => observer.observe(el));
  } catch (error) {
    repoGrid.innerHTML = `<p class="repo-error">${currentLanguage === "en" ? "Could not load GitHub repositories. View them directly on" : "Kon GitHub-repositories niet laden. Bekijk ze rechtstreeks op"} <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" rel="noopener">github.com/${GITHUB_USERNAME}</a>.</p>`;
    if (githubStatus) githubStatus.textContent = currentLanguage === "en" ? "could not load" : "kon niet laden";
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function typeWriter() {
  const textToType = currentLanguage === "en"
    ? "Electronics-ICT: automation, embedded systems and IoT"
    : "Elektronica-ICT: automatisatie, embedded systems en IoT";
  if (typingElement && typingIndex < textToType.length) {
    typingElement.textContent += textToType.charAt(typingIndex);
    typingIndex++;
    typingTimer = setTimeout(typeWriter, 35);
  }
}

function initMinesweeperGames() {
  document.querySelectorAll("[data-minesweeper-game]").forEach((gameElement) => {
    const boardElement = gameElement.querySelector("[data-game-board]");
    const statusElement = gameElement.querySelector("[data-game-status]");
    const minesElement = gameElement.querySelector("[data-game-mines]");
    const modeButton = gameElement.querySelector("[data-game-mode]");
    const resetButton = gameElement.querySelector("[data-game-reset]");
    const size = 8;
    const mineCount = 10;
    let cells;
    let gameOver;
    let flagMode = false;

    function neighbours(row, column) {
      const positions = [];
      for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
        for (let columnOffset = -1; columnOffset <= 1; columnOffset += 1) {
          const nextRow = row + rowOffset;
          const nextColumn = column + columnOffset;
          if (nextRow >= 0 && nextRow < size && nextColumn >= 0 && nextColumn < size) {
            positions.push(cells[nextRow][nextColumn]);
          }
        }
      }
      return positions;
    }

    function updateStatus(message) {
      statusElement.textContent = message;
    }

    function render() {
      boardElement.innerHTML = "";
      cells.flat().forEach((cell) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "web-game-cell";
        button.setAttribute("role", "gridcell");
        button.setAttribute("aria-label", `${cell.row + 1}, ${cell.column + 1}`);
        if (cell.revealed) {
          button.classList.add("is-revealed");
          button.textContent = cell.mine ? "💣" : (cell.count || "");
          button.dataset.number = cell.count || "";
        } else if (cell.flagged) {
          button.classList.add("is-flagged");
          button.textContent = "⚑";
        }
        button.addEventListener("click", () => {
          if (flagMode) {
            toggleFlag(cell);
          } else {
            reveal(cell);
          }
        });
        button.addEventListener("contextmenu", (event) => {
          event.preventDefault();
          toggleFlag(cell);
        });
        boardElement.appendChild(button);
      });
    }

    function reveal(cell) {
      if (gameOver || cell.revealed || cell.flagged) return;
      cell.revealed = true;
      if (cell.mine) {
        gameOver = true;
        cells.flat().forEach((mineCell) => {
          if (mineCell.mine) mineCell.revealed = true;
        });
        updateStatus(currentLanguage === "en" ? "Game over — you hit a mine." : "Game over — je raakte een mijn.");
        render();
        return;
      }
      if (cell.count === 0) {
        neighbours(cell.row, cell.column).forEach((nextCell) => {
          if (!nextCell.mine && !nextCell.revealed) reveal(nextCell);
        });
      }
      if (cells.flat().every((nextCell) => nextCell.mine || nextCell.revealed)) {
        gameOver = true;
        updateStatus(currentLanguage === "en" ? "You won — congratulations!" : "Je hebt gewonnen — proficiat!");
      }
      render();
    }

    function toggleFlag(cell) {
      if (gameOver || cell.revealed) return;
      cell.flagged = !cell.flagged;
      render();
    }

    function start() {
      gameOver = false;
      flagMode = false;
      cells = Array.from({ length: size }, (_, row) =>
        Array.from({ length: size }, (_, column) => ({
          row, column, mine: false, revealed: false, flagged: false, count: 0
        }))
      );
      let placed = 0;
      while (placed < mineCount) {
        const cell = cells[Math.floor(Math.random() * size)][Math.floor(Math.random() * size)];
        if (!cell.mine) {
          cell.mine = true;
          placed += 1;
        }
      }
      cells.flat().forEach((cell) => {
        if (!cell.mine) cell.count = neighbours(cell.row, cell.column).filter((nextCell) => nextCell.mine).length;
      });
      minesElement.textContent = mineCount;
      if (modeButton) {
        modeButton.classList.remove("is-active");
        modeButton.setAttribute("aria-pressed", "false");
      }
      updateStatus(currentLanguage === "en" ? "Find all safe cells." : "Vind alle veilige vakjes.");
      render();
    }

    if (modeButton) {
      modeButton.addEventListener("click", () => {
        flagMode = !flagMode;
        modeButton.classList.toggle("is-active", flagMode);
        modeButton.setAttribute("aria-pressed", String(flagMode));
      });
    }
    resetButton.addEventListener("click", start);
    start();
  });
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
  initMinesweeperGames();

  document.querySelectorAll('.project-card, .skill-category-card, .entry-card, .section h2').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  loadGithubRepos();
  initSlideshows();
  initSkillIcons();
  loadProjectImages();
});