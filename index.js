/**
 * ==========================================================================
 * KRISHNA DURGAVARJHULA — PORTFOLIO ENGINE
 * Code Structure Clean-up, Memoization & Condensed Declarative Architecture
 * ==========================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. HIGH-PERFORMANCE MEMOIZATION UTILITIES
     ========================================================================== */

  /**
   * Generic Memoization Utility with Map cache
   * Caches function results based on arguments to eliminate redundant calculations
   * @param {Function} fn Function to memoize
   * @returns {Function} Memoized version of fn
   */
  const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
      const key = args.length === 1 && typeof args[0] !== 'object'
        ? args[0]
        : JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  };

  /**
   * Memoized DOM element queries to eliminate repetitive DOM tree traversal
   */
  const getElem = memoize((id) => document.getElementById(id));
  const queryElem = memoize((selector) => document.querySelector(selector));
  const queryAll = memoize((selector) => Array.from(document.querySelectorAll(selector)));

  /* ==========================================================================
     2. CONDENSED DATA STRUCTURES (SINGLE SOURCE OF TRUTH)
     ========================================================================== */

  const BIO_TEXT = "I'm a Computer Science student at UC Berkeley with experience in full-stack web engineering, embedded systems, machine learning, and hardware prototyping. I co-authored published IEEE research on assistive smart-cane navigation systems, engineered production web tools at the Lift & Shift Foundation, and published the Breathe mobile application on Google Play. My technical work spans iterative software architecture, autonomous systems, and embedded hardware development.";

  const PROJECTS_DATA = [
    {
      id: "stealth",
      title: "Stealth Startup",
      subtitle: "Intern (JUL 2026 - Present)",
      image: "https://i.pinimg.com/originals/78/e4/41/78e441c15ef5f6244972bb4aea4f83f5.gif",
      bullets: [
        "Expanded core validation logic and backend services using TypeScript to increase rule coverage and ensure system performance.", 
        "Applied automated testing suites, GitHub, and continuous integration workflows to validate changes and streamline development."
      ],
    },
    {
      id: "breathe",
      title: "Breathe App",
      subtitle: "Respiratory Symptom & Environmental Trigger Tracker",
      image: "Images/Screenshot 2026-11-08 at 5.57.20 PM.png",
      bullets: [
        "Developed an <span class=\"kw\">Android application</span> enabling users to log respiratory symptoms and correlate them with localized environmental and weather triggers over time.",
        "Implemented native full-stack architecture using Node.js for backend services, <span class=\"kw\">Firebase dynamic authentication</span> and data persistence, and Expo for iterative test automation.",
        "Published and actively maintained on the <span class=\"kw\">Google Play Store</span> with responsive user analytics."
      ],
      actions: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.krishna.breathe&pcampaignid=web_share", primary: true },
        { label: "GitHub Repo", url: "https://github.com/kri-dur/breathe", primary: false }
      ]
    },
    {
      id: "roar",
      title: "UC Berkeley's Robot Open Autonomous Racing(ROAR) Academy",
      subtitle: "Autonomous Racing Simulations",
      image: "Images/Screenshot 2026-11-08 at 6.08.06 PM.png",
      bullets: [
        "Selected for ROAR, where students learn from faculty about <span class=\"kw\">autonomous driving</span> concepts.",
        "Programmed machine learning simulations in Python, and related libraries/frameworks like <span class=\"kw\">NumPy, Keras, and Tensorflow</span>, for autonomous driving algorithms.",
        "Improved model performance through optimization, reinforcement learning, and gradient descent.",
        "Wrote sigmoid functions for trajectory planning using NumPy & Matplotlib.",
        "Developed PID control loops and mathematical trajectory functions visualized via Matplotlib to optimize vehicle control and racing dynamics."
      ],
      actions: []
    },
    {
      id: "cane",
      title: "Sensory-Based Smart Cane System",
      subtitle: "Integrated Fall & Obstacle Detection (COSITE 2025 / IEEE Published)",
      image: "Images/IMG_6198.jpeg",
      bullets: [
        "Co-authored and engineered an environmentally-friendly <span class=\"kw\">assistive smart-cane system</span> and accompanying mobile application to support seniors and reduce fall incidents.",
        "Integrated ultrasonic terrain sensors, thermoelectric generators (TECs) harnessing palm heat for power using TEGs, Bluetooth module, haptic feedback alerts, and real-time pulse monitoring.",
        "Presented at COSITE 2025 and <span class=\"kw\">published in IEEE Xplore</span>: 'An Assistive Sensory-Based System for Integrated Fall and Obstacle Detection'.",
        "Awarded <span class=\"kw\">1st Place in category at ACSEF</span> and qualified for CSEF."
      ],
      actions: [
        { label: "IEEE Publication", url: "https://ieeexplore.ieee.org/document/11414341", primary: true }
      ]
    },
    {
      id: "liftnshift",
      title: "Lift & Shift Foundation",
      subtitle: "Web Developer Intern (2023–2026)",
      image: "Images/LiftnShift.jpg",
      bullets: [
        "Architected core front-end elements, resolved platform issues for the Lift & Shift Foundation web platform, and applied <span class=\"kw\">full-stack development</span>.",
        "Collaborated within an engineering team to develop an <span class=\"kw\">accessible web-based IDE</span> designed for military veterans transitioning into software development careers.",
        "Maintained responsive cross-browser compatibility and contributed to production codebases through git-based peer code reviews."
      ],
      actions: [
        { label: "Website", url: "https://www.weliftandshift.org", primary: true }
      ]
    },
    {
      id: "bluestamp",
      title: "Phone-Controlled Robotic Arm",
      subtitle: "BlueStamp Engineering (2022)",
      image: "Images/Bluestamp2.png",
      bullets: [
        "Engineered a <span class=\"kw\">4-degree-of-freedom robotic manipulator</span> controlled wirelessly via a custom smartphone interface.",
        "Authored <span class=\"kw\">embedded C++ Arduino firmware</span> coordinating PWM servo kinematics and Bluetooth serial communication protocols.",
        "Fabricated hardware mountings and produced comprehensive electrical and circuit schematics documentation."
      ],
      actions: [
        { label: "Project Docs", url: "https://kri-dur.github.io/Krishna_D_BSE/", primary: true }
      ]
    },
    // {
    //   id: "futurecity",
    //   title: "Crater Cove Sustainable Lunar City",
    //   subtitle: "Future City Competition (2021)",
    //   image: "Images/FutureCity2.jpeg",
    //   bullets: [
    //     "Collaborated with team Crater Cove on engineering a <span class=\"kw\">self-sufficient lunar colony</span> infrastructure.",
    //     "Researched and integrated sustainable closed-loop energy systems and power grid distribution.",
    //     "Honored with regional awards for <span class=\"kw\">'Most Advanced Smart Grid'</span> and 'Best Land Surveying Practices'."
    //   ],
    //   actions: []
    // }
  ];

  const SKILLS_DATA = [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg", category: "Languages" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg", category: "Languages" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg", category: "Languages" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg", category: "Languages" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg", category: "Languages" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css/css-plain.svg", category: "Languages" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", category: "Languages" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-plain.svg", category: "Frameworks" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", category: "Frameworks" },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg", category: "Frameworks" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg", category: "Tools" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", category: "Tools" },
    { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-plain.svg", category: "Tools" },
    { name: "Hardware & IoT", icon: "Images/Logos/Hardware.png", category: "Systems" },
    { name: "Gleam", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gleam/gleam-plain.svg", category: "Languages" },
    { name: "Adobe Suite", icon: "Images/Logos/Adobe.png", category: "Design" },
    { name: "Film & Video", icon: "Images/Logos/Video.png", category: "Media" },
    { name: "3D CAD", icon: "https://www.svgrepo.com/show/473788/sketchup.svg", category: "Design" }
  ];

  const TIMELINE_DATA = [
    {
      date: "Jul 2025 -> Present",
      title: "Intern - Undisclosed Stealth Startup",
      description: "..."
    },
    {
      date: "Dec 2025",
      title: "IEEE Publication & COSITE 2025 Presentation",
      description: "Presented research paper 'An Assistive Sensory-Based System for Integrated Fall and Obstacle Detection' at COSITE 2025; published in IEEE Xplore."
    },
    {
      date: "Mar 2025",
      title: "1st Category Award — ACSEF / CSEF Qualifier",
      description: "Won 1st Place in category at Alameda County Science & Engineering Fair for the smart cane assistive system, qualifying for the California State Science Fair."
    },
    {
      date: "Aug 2024",
      title: "Added a timeline to my personal website!",
      description: "As the title says..."
    },
    {
      date: "Jul 2024",
      title: "UC Berkeley ROAR Academy & Coding Tomorrow",
      description: "Completed intensive autonomous driving and Python machine learning coursework at UC Berkeley ROAR Academy; taught introductory web development to middle-schoolers."
    },
    {
      date: "2023 –> 2026",
      title: "Web Developer Intern — Lift & Shift Foundation",
      description: "Developing assistive IDE and web infrastructure to empower veterans re-entering the tech workforce."
    },
    {
      date: "2022",
      title: "MIT Beaverworks Assistive Technology",
      description: "Prototyped proximity-sensor integrated smart cane with C++ and microcontrollers to assist mobility-impaired individuals."
    },
    {
      date: "2022",
      title: "BlueStamp Engineering — Robotic Arm",
      description: "Engineered and demonstrated 4-DOF phone-controlled robotic arm with Arduino firmware and circuit design."
    },
    {
      date: "2021",
      title: "Future City Competition — Lunar Habitat",
      description: "Designed sustainable lunar settlement with team Crater Cove; won Best Land Surveying Practices and Most Advanced Smart Grid."
    }
  ];

  /* ==========================================================================
     3. CONDENSED TEMPLATE GENERATORS (MEMOIZED)
     ========================================================================== */

  /**
   * Memoized template generator for project cards
   * Generates crisp, sharp, borderless picture cards with snappy action buttons
   */
  const renderProjectCard = memoize((projectJson) => {
    const p = JSON.parse(projectJson);

    const bulletsHtml = p.bullets
      .map(bullet => `<li>${bullet}</li>`)
      .join("");

    const actionsHtml = p.actions && p.actions.length > 0
      ? p.actions.map(act => `
          <a href="${act.url}" target="_blank" rel="noopener noreferrer" class="btn-sharp ${act.primary ? '' : 'btn-secondary'}">
            ${act.label} ↗
          </a>
        `).join("")
      : "";

    return `
      <article class="project-card" id="${p.id}">
        <div class="project-media">
          <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy" />
        </div>
        <div class="project-info">
          <div>
            <h3 class="project-title">${p.title}</h3>
            <div class="project-subtitle">${p.subtitle}</div>
            <ul class="project-bullets">${bulletsHtml}</ul>
          </div>
          ${actionsHtml ? `<div class="project-actions">${actionsHtml}</div>` : ""}
        </div>
      </article>
    `;
  });

  /**
   * Memoized template generator for skill cards
   */
  const renderSkillCard = memoize((skillJson) => {
    const s = JSON.parse(skillJson);
    return `
      <div class="skill-card">
        <img src="${s.icon}" alt="${s.name}" class="skill-icon" loading="lazy" />
        <div class="skill-name">${s.name}</div>
        <div class="skill-category">${s.category}</div>
      </div>
    `;
  });

  /**
   * Memoized template generator for timeline items
   */
  const renderTimelineItem = memoize((itemJson) => {
    const item = JSON.parse(itemJson);
    return `
      <div class="timeline-item">
        <div class="timeline-date">${item.date}</div>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-body">${item.description}</p>
      </div>
    `;
  });

  /* ==========================================================================
     4. POPULATE DOM WITH CONDENSED STRUCTURES
     ========================================================================== */

  function renderDynamicContent() {
    // Populate Projects
    const projectsList = getElem("projects-list");
    if (projectsList) {
      projectsList.innerHTML = PROJECTS_DATA
        .map(p => renderProjectCard(JSON.stringify(p)))
        .join("");
    }

    // Populate Skills
    const skillsGrid = getElem("skills-grid");
    if (skillsGrid) {
      skillsGrid.innerHTML = SKILLS_DATA
        .map(s => renderSkillCard(JSON.stringify(s)))
        .join("");
    }

    // Populate Timeline
    const timelineStream = getElem("timeline-stream");
    if (timelineStream) {
      timelineStream.innerHTML = TIMELINE_DATA
        .map(t => renderTimelineItem(JSON.stringify(t)))
        .join("");
    }
  }

  /* ==========================================================================
     5. MEMOIZED TYPEWRITER BIO EFFECT
     ========================================================================== */

  let typewriterTimeout = null;
  let charIndex = 0;
  let isTypingFinished = false;

  function initTypewriter() {
    const target = getElem("typewriter-text");
    const skipBtn = getElem("typewriter-skip");
    if (!target) return;

    function finishTypewriter() {
      if (isTypingFinished) return;
      if (typewriterTimeout) clearTimeout(typewriterTimeout);
      target.textContent = BIO_TEXT;
      isTypingFinished = true;
      if (skipBtn) skipBtn.style.display = "none";
    }

    function typeChar() {
      if (charIndex < BIO_TEXT.length && !isTypingFinished) {
        const char = BIO_TEXT.charAt(charIndex);
        target.textContent += char;
        charIndex++;

        let delay = 20;
        if (char === ".") delay = 60;
        else if (char === ",") delay = 40;
        else if (char === " ") delay = 25;

        typewriterTimeout = setTimeout(typeChar, delay);
      } else {
        finishTypewriter();
      }
    }

    if (skipBtn) {
      skipBtn.addEventListener("click", finishTypewriter);
    }

    const typewriterBox = getElem("typewriter-box");
    if (typewriterBox) {
      typewriterBox.addEventListener("click", finishTypewriter);
    }

    typeChar();
  }

  /* ==========================================================================
     6. SMOOTH SCROLLING & SCROLL-SPY (SYMMETRICAL ACTIVE STATES)
     ========================================================================== */

  function initSmoothNavigation() {
    const navButtons = queryAll(".nav-btn[data-target]");
    const header = getElem("header");

    navButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute("data-target");
        const targetSection = getElem(targetId);

        if (targetSection) {
          const headerHeight = header ? header.offsetHeight : 64;
          const targetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: targetTop,
            behavior: "smooth"
          });
        }
      });
    });
  }

  /**
   * IntersectionObserver for scroll-spy highlighting
   * Snappily updates the active button so symmetrical brackets pop into view
   */
  function initScrollSpy() {
    const sections = queryAll("section[id]");
    const navButtons = queryAll(".nav-btn[data-target]");
    if (!sections.length || !navButtons.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navButtons.forEach((btn) => {
            if (btn.getAttribute("data-target") === id) {
              btn.classList.add("active");
            } else {
              btn.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }

  /**
   * Passive Scroll Listener with requestAnimationFrame for Header Elevation
   */
  function initHeaderElevation() {
    const header = getElem("header");
    if (!header) return;

    let ticking = false;

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (window.pageYOffset > 10) {
              header.classList.add("header-scrolled");
            } else {
              header.classList.remove("header-scrolled");
            }
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ==========================================================================
     7. INITIALIZATION ON DOM READY
     ========================================================================== */

  function onReady() {
    renderDynamicContent();
    initSmoothNavigation();
    initScrollSpy();
    initHeaderElevation();
    initTypewriter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();
