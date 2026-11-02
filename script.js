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
    "facts.projects": "4 projecten",
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
    "lora.details": "Systeemopbouw en resultaten",
    "lora.roleTitle": "Mijn rol in het systeem",
    "lora.resultsTitle": "Testresultaten en leerpunten",
    "lora.rangeLabel": "Bereik",
    "lora.rangeText": "Ongeveer 1,1 km betrouwbare verbinding met een 15 cm gluestick-antenne.",
    "lora.powerLabel": "Stroomverbruik",
    "lora.powerText": "Ongeveer 90 mA in light-sleep en 150 mA actief, gemeten met een USB-tester.",
    "lora.learningLabel": "Leerpunt",
    "lora.learningText": "Regelgeving (ETSI EN 300 220: 14 dBm EIRP, 1 % duty cycle) bepaalt mee de instellingen van de module.",
    "industry.title": "Industry 4.0: geautomatiseerde verwerkingslijn",
    "industry.summary": "Een semi-geautomatiseerde productielijn voor het identificeren, wegen en verwerken van pannenkoekingrediënten. De Beckhoff PLC coördineert de transportband, QR-camera, robotarm, weegschaal, inductieve sensor en mixer.",
    "industry.modules": "hoofdmodules",
    "industry.identification": "productidentificatie",
    "industry.communication": "JSON-communicatie",
    "industry.contribution": "Mijn bijdrage en reflectie",
    "industry.details": "Systeemopbouw en mijn rol",
    "industry.roleTitle": "Mijn rol in het systeem",
    "industry.roleText": "Mijn belangrijkste bijdrage was de configuratie van de transportbandmotor via de EL7332 EtherCAT-terminal, inclusief CoE-parameters en de NC-as. Daarnaast werkte ik aan de PSoC6-robotarm en de MQTT-communicatie met de PLC. De berichten werden als JSON verstuurd, zodat commando’s, statussen en foutmeldingen gestructureerd uitgewisseld konden worden. Ook werkte ik mee aan TwinCAT Vision: de GIGE-camera leest in FB_QrVision QR-codes als Mono8-beeld en geeft de scanstatus door aan de PLC. Tot slot schreef ik mee aan de Application Note en documenteerde ik de technische werking, tests en gebruikersbediening.",
    "industry.reflectionTitle": "Wat ik geleerd heb",
    "industry.phase1Label": "Fase 1: Situatie",
    "industry.phase1Text": "Voor de semi-geautomatiseerde productielijn werkte ik aan EtherCAT-motorsturing, de PSoC6-robotarm, MQTT/JSON-communicatie en QR-detectie met TwinCAT Vision.",
    "industry.phase2Label": "Fase 2: Terugblik",
    "industry.phase2Text": "De afzonderlijke subsystemen werkten betrouwbaar in hun eigen testomgeving. De volledige integratie was nog niet afgerond, waardoor timing en foutafhandeling over de hele lijn verder getest moesten worden.",
    "industry.phase3Label": "Fase 3: Kernkenmerken",
    "industry.phase3Text": "De modulaire aanpak was een sterke keuze: de PLC coördineert, terwijl de PSoC6 en ESP32 hun eigen taak uitvoeren. Duidelijke MQTT-topics, statusfeedback en een overzichtelijke HMI zijn daarbij essentieel.",
    "industry.phase4Label": "Fase 4: Alternatieven",
    "industry.phase4Text": "Ik zou vooraf een duidelijke rolverdeling, vaste feature branches en gezamenlijke integratietests afspreken. Vooral de timing tussen transportband, vision en robotarm moet vanaf het begin als één keten getest worden.",
    "industry.phase5Label": "Fase 5: Uitproberen",
    "industry.phase5Text": "Bij een volgende iteratie zou ik eerst de afzonderlijke tests automatiseren en daarna stapsgewijs de volledige cyclus valideren: QR-scan, wegen, metaaldetectie, mengen en foutafhandeling onder continue belasting.",
    "intercom.kicker": "Project Innovation · teamproject",
    "intercom.title": "Intercom: realtime audio over het netwerk",
    "intercom.meta": "Jaar 3 · Innovation · teamproject met drie studenten",
    "intercom.summary": "Een netwerkgebaseerd intercomsysteem met een Raspberry Pi als centrale zender en Google AIY Voice Kits als ontvangers in de kamers. De microfoon wordt live gestreamd via UDP naar één kamer of naar alle kamers tegelijk. Met een aparte knop speel je een alarmgeluid (sirene) af in het hele systeem.",
    "intercom.statRooms": "kamers + alle kamers",
    "intercom.statStream": "live audiostream",
    "intercom.statAudio": "mono, 16-bit audio",
    "intercom.photoCaption": "Google AIY Voice Kit: de ontvanger in elke kamer",
    "intercom.details": "Hoe het systeem werkt",
    "intercom.sender": "Zender",
    "intercom.senderText": "De Raspberry Pi leest zes drukknoppen via GPIO: vier kamers, één knop voor alle kamers en één sirene-knop. De microfoon wordt opgenomen met arecord en in pakketjes van 4096 bytes via UDP naar de gekozen kamers gestuurd. Drie threads draaien tegelijk: microfoon, sirene en knoppen.",
    "intercom.network": "Netwerk",
    "intercom.networkText": "De gekozen kamer wordt bepaald door het doel-IP-adres. De audiopakketjes gaan via UDP rechtstreeks naar één ontvanger of gelijktijdig naar alle kamers, zonder dat een centrale server de audio moet verwerken.",
    "intercom.receiver": "Ontvanger",
    "intercom.receiverText": "De AIY Voice Kit ontvangt de pakketjes in een aparte thread en zet ze in een wachtrij. Een tweede thread past het volume aan met NumPy en speelt het geluid af via aplay. Een Flask-dashboard (poort 8080) toont de status en laat toe om het volume, de mute en het zendtarget te beheren.",
    "intercom.controls": "Bediening en status",
    "intercom.controlsText": "Het dashboard beheert volume, mute en zenddoel. De status-LED geeft meteen feedback: rood is gedempt, groen betekent dat audio binnenkomt en blauw staat voor stand-by. De fysieke knop op de kit schakelt mute in of uit.",
    "timeline.intercomKicker": "Project Innovation",
    "timeline.intercomTitle": "Intercom-systeem",
    "timeline.intercomText": "Een intercom over het netwerk: live audio van een Raspberry Pi naar Google AIY Voice Kits via UDP en multithreaded Python, met mute-knop, status-LED's en een webdashboard.",
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
    "timeline.cKicker": "Eerstejaarsvak · eindproject",
    "timeline.cTitle": "C programming: Minesweeper",
    "timeline.cText": "Mijn eerste grotere programmeerproject in C. Ik oefende met functies, arrays, structs, enums, inputvalidatie en recursie door een speelbare terminalversie van Minesweeper te bouwen.",
    "timeline.statusDone": "Afgerond",
    "timeline.statusOpen": "Prototype klaar, integratie loopt nog",
    "timeline.loraKicker": "Project onderzoek",
    "timeline.loraTitle": "LoRa GPS-tracker",
    "timeline.loraText": "Een eerste volledig systeemproject: sensordata verzamelen met een ESP32, draadloos versturen via LoRa en visualiseren op een Raspberry Pi-dashboard.",
    "timeline.industryKicker": "Project engineering",
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
    "facts.projects": "4 projects",
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
    "lora.details": "System design and results",
    "lora.roleTitle": "My role in the system",
    "lora.resultsTitle": "Test results and lessons learned",
    "lora.rangeLabel": "Range",
    "lora.rangeText": "Approximately 1.1 km of reliable connection with a 15 cm gluestick antenna.",
    "lora.powerLabel": "Power consumption",
    "lora.powerText": "Approximately 90 mA in light sleep and 150 mA when active, measured with a USB tester.",
    "lora.learningLabel": "Key lesson",
    "lora.learningText": "Regulations (ETSI EN 300 220: 14 dBm EIRP, 1% duty cycle) also determine the module settings.",
    "industry.title": "Industry 4.0: automated processing line",
    "industry.summary": "A semi-automated production line for identifying, weighing and processing pancake ingredients. The Beckhoff PLC coordinates the conveyor belt, QR camera, robot arm, scale, inductive sensor and mixer.",
    "industry.modules": "main modules",
    "industry.identification": "product identification",
    "industry.communication": "JSON communication",
    "industry.contribution": "My contribution and reflection",
    "industry.details": "System design and my role",
    "industry.roleTitle": "My role in the system",
    "industry.roleText": "My main contribution was configuring the conveyor motor through the EL7332 EtherCAT terminal, including the CoE parameters and NC axis. I also worked on the PSoC6 robot arm and MQTT communication with the PLC. Messages were sent as JSON so commands, statuses and error messages could be exchanged in a structured way. I also contributed to TwinCAT Vision: the GigE camera reads QR codes as Mono8 images in FB_QrVision and passes the scan status to the PLC. Finally, I helped write the application note and documented the technical operation, tests and user controls.",
    "industry.reflectionTitle": "What I learned",
    "industry.phase1Label": "Phase 1: Situation",
    "industry.phase1Text": "For the semi-automated production line, I worked on EtherCAT motor control, the PSoC6 robot arm, MQTT/JSON communication and QR detection with TwinCAT Vision.",
    "industry.phase2Label": "Phase 2: Review",
    "industry.phase2Text": "The individual subsystems worked reliably in their own test environments. Full integration was not yet complete, so timing and error handling across the entire line required further testing.",
    "industry.phase3Label": "Phase 3: Key insights",
    "industry.phase3Text": "The modular approach was a strong choice: the PLC coordinates the process while the PSoC6 and ESP32 each perform their own task. Clear MQTT topics, status feedback and an accessible HMI are essential.",
    "industry.phase4Label": "Phase 4: Alternatives",
    "industry.phase4Text": "I would agree on clear responsibilities, fixed feature branches and shared integration tests in advance. The timing between conveyor, vision and robot arm should be tested as one chain from the start.",
    "industry.phase5Label": "Phase 5: Try it out",
    "industry.phase5Text": "In a next iteration, I would first automate the individual tests and then validate the complete cycle step by step: QR scan, weighing, metal detection, mixing and error handling under continuous load.",
    "intercom.kicker": "Innovation project · team project",
    "intercom.title": "Intercom: real-time audio over the network",
    "intercom.meta": "Year 3 · Innovation · team project with three students",
    "intercom.summary": "A network-based intercom system with a Raspberry Pi as central transmitter and Google AIY Voice Kits as receivers in the rooms. The microphone is streamed live over UDP to one room or to all rooms at once. A separate button plays an alarm sound (siren) throughout the system.",
    "intercom.statRooms": "rooms + all rooms",
    "intercom.statStream": "live audio stream",
    "intercom.statAudio": "mono, 16-bit audio",
    "intercom.photoCaption": "Google AIY Voice Kit: the receiver in every room",
    "intercom.details": "How the system works",
    "intercom.sender": "Transmitter",
    "intercom.senderText": "The Raspberry Pi reads six push buttons through GPIO: four rooms, one button for all rooms and one siren button. The microphone is recorded with arecord and sent in 4096-byte packets over UDP to the selected rooms. Three threads run at the same time: microphone, siren and buttons.",
    "intercom.network": "Network",
    "intercom.networkText": "The destination IP address determines the selected room. Audio packets travel directly over UDP to one receiver or to all rooms at the same time, without a central server processing the audio.",
    "intercom.receiver": "Receiver",
    "intercom.receiverText": "The AIY Voice Kit receives the packets in a separate thread and puts them in a queue. A second thread adjusts the volume with NumPy and plays the sound through aplay. A Flask dashboard (port 8080) shows the status and lets you manage the volume, mute and transmit target.",
    "intercom.controls": "Controls and status",
    "intercom.controlsText": "The dashboard controls volume, mute and the transmit target. The status LED gives immediate feedback: red means muted, green means audio is coming in and blue means standby. The physical button on the kit toggles mute.",
    "timeline.intercomKicker": "Innovation project",
    "timeline.intercomTitle": "Intercom system",
    "timeline.intercomText": "A network intercom: live audio from a Raspberry Pi to Google AIY Voice Kits over UDP and multithreaded Python, with a mute button, status LEDs and a web dashboard.",
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
    "timeline.cKicker": "First-year course · final project",
    "timeline.cTitle": "C programming: Minesweeper",
    "timeline.cText": "My first larger programming project in C. I practised functions, arrays, structs, enums, input validation and recursion by building a playable terminal version of Minesweeper.",
    "timeline.statusDone": "Completed",
    "timeline.statusOpen": "Prototype ready, integration ongoing",
    "timeline.loraKicker": "Research project",
    "timeline.loraTitle": "LoRa GPS tracker",
    "timeline.loraText": "A first complete system project: collecting sensor data with an ESP32, sending it wirelessly via LoRa and visualizing it on a Raspberry Pi dashboard.",
    "timeline.industryKicker": "Project engineering",
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
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.innerHTML = dictionary[key];
    }
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