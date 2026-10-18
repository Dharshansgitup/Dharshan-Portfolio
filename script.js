(() => {
  "use strict";

  // Project and credential cards are generated from portfolio-data.js so future
  // additions do not require editing the page structure in index.html.
  function escapeHTML(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function safeHref(value) {
    const href = String(value == null ? "" : value).trim();
    if (/^https:\/\//i.test(href) || /^mailto:/i.test(href) || /^tel:/i.test(href)) return href;
    if (/^assets\/[A-Za-z0-9_./-]+$/.test(href) && !href.includes("../")) return href;
    return "";
  }

  // Project artwork is image-first. Deliberately avoid mock UI/text diagrams so new cards
  // cannot show stacked dashboard labels if an image is temporarily missing.


  function renderProjects() {
    const track = document.getElementById("projectTrack");
    const position = document.getElementById("projectPosition");
    const items = Array.isArray(window.PORTFOLIO_DATA?.projects) ? window.PORTFOLIO_DATA.projects : [];
    if (!track) return;
    track.innerHTML = items.map((project, index) => {
      const number = String(index + 1).padStart(2, "0");
      const cardClasses = ["project-card", project.featured ? "project-featured" : "", project.wide ? "project-wide" : ""].filter(Boolean).join(" ");
      const imagePath = safeHref(project.image);
      const projectUrl = safeHref(project.url);
      // No mock-dashboard fallback: text overlays sit on the photo or the clean art gradient.
      const visualMarkup = "";
      const link = projectUrl
        ? `<a href="${escapeHTML(projectUrl)}" target="_blank" rel="noreferrer">${escapeHTML(project.linkLabel || "View project")} ↗</a>`
        : `<span class="project-no-repo">ACADEMIC PROJECT</span>`;
      return `<article class="${cardClasses}" data-project-slug="${escapeHTML(project.slug || number)}">
        <div class="project-number">${number}</div>
        <div class="project-art ${escapeHTML(project.artClass || "project-art-image")} depth-surface" data-depth>
          ${visualMarkup}
          ${imagePath ? `<img class="project-photo" src="${escapeHTML(imagePath)}" alt="${escapeHTML(project.imageAlt || project.title || "Project image")}" loading="lazy" decoding="async">` : ""}
          <div class="project-photo-shade" aria-hidden="true"></div>
          <span class="art-overline">${escapeHTML(project.overline || "PROJECT / " + number)}</span>
          <span class="art-bottomline">${escapeHTML(project.bottomline || "DESIGN · BUILD · IMPROVE")}</span>
        </div>
        <p class="project-type">${escapeHTML(project.type || "PROJECT")}</p>
        <h3>${escapeHTML(project.title || "Untitled project")}</h3>
        <p>${escapeHTML(project.description || "Add a short description in portfolio-data.js.")}</p>
        <div class="project-bottom"><span>${escapeHTML(project.date || "In progress")}</span>${link}</div>
      </article>`;
    }).join("");
    if (position) position.innerHTML = `01 <i>/</i> ${String(items.length).padStart(2, "0")}`;
    const projectSection = document.getElementById("projects");
    if (projectSection && items.length > 0) {
      projectSection.style.setProperty("--project-count", String(items.length));
      // Give the scroll-driven project rail enough vertical travel for every card.
      // Six cards use about 420svh; adding projects grows the journey automatically.
      projectSection.style.minHeight = `${Math.max(270, items.length * 70)}svh`;
    }
  }

  function renderCredentials() {
    const grid = document.getElementById("certificateGrid");
    const items = Array.isArray(window.PORTFOLIO_DATA?.credentials) ? window.PORTFOLIO_DATA.credentials : [];
    if (!grid) return;
    grid.innerHTML = items.map((credential, index) => {
      const number = String(index + 1).padStart(2, "0");
      const id = String(credential.id || number).replace(/[^a-zA-Z0-9_-]/g, "");
      const isPublication = Boolean(credential.publication);
      const artClass = `certificate-art${isPublication ? " publication-art" : ""}`;
      const preview = safeHref(credential.preview);
      const image = safeHref(credential.image);
      const documentHref = safeHref(credential.document);
      const externalHref = safeHref(credential.externalUrl);
      const artBackground = safeHref(credential.artImage) || (isPublication ? image : "");
      const backgroundMarkup = artBackground
        ? `<img class="certificate-photo" src="${escapeHTML(artBackground)}" alt="" loading="lazy" decoding="async"><div class="certificate-art-shade"></div>`
        : "";
      const previewMarkup = preview
        ? `<img class="certificate-preview-image" data-certificate-preview src="${escapeHTML(preview)}" alt="" loading="lazy" decoding="async" hidden>`
        : "";
      const artImage = backgroundMarkup + previewMarkup;
      const links = [];
      if (externalHref) links.push(`<a class="certificate-view publication-link" href="${escapeHTML(externalHref)}" target="_blank" rel="noreferrer">${escapeHTML(credential.externalLabel || "Verify online")} ↗</a>`);
      if (documentHref) links.push(`<a class="certificate-view" href="${escapeHTML(documentHref)}" target="_blank" rel="noreferrer">${escapeHTML(credential.documentLabel || "Open document")} ↗</a>`);
      return `<article class="certificate-card${isPublication ? " publication-card" : ""}" data-certificate-card="${escapeHTML(id)}">
        <div class="${artClass}" data-certificate-art="${escapeHTML(id)}" aria-hidden="true">
          ${artImage}
          <div class="certificate-art-fallback">
            <span class="certificate-index">${escapeHTML(credential.indexLabel || number + " / CREDENTIAL")}</span>
            <div class="certificate-seal">${escapeHTML(credential.mark || "✦")}</div>
            <p>${escapeHTML(credential.artLine || credential.kicker || "ACHIEVEMENT")}</p>
            <strong>${escapeHTML(credential.artHeadline || "Recognition")}</strong>
            <span class="certificate-art-rule"></span>
            <small>${escapeHTML(credential.artFooter || "LEARNING · BUILDING · GROWING")}</small>
          </div>
        </div>
        <div class="certificate-card-content">
          <p class="certificate-kicker">${escapeHTML(credential.kicker || "CERTIFICATE")}</p>
          <h3>${escapeHTML(credential.title || "New achievement")}</h3>
          <p>${escapeHTML(credential.description || "Add a short description in portfolio-data.js.")}</p>
          <div class="certificate-actions">${links.join("")}</div>
        </div>
      </article>`;
    }).join("");
  }

  renderProjects();
  renderCredentials();

  const welcomeScreen = document.getElementById("welcomeScreen");
  const portfolio = document.getElementById("portfolio");
  const chooseAgain = document.getElementById("chooseAgain");
  const modeButtons = document.querySelectorAll("[data-open-mode]");
  const personaContents = document.querySelectorAll("[data-persona]");

  const heroEyebrow = document.getElementById("heroEyebrow");
  const heroName = document.getElementById("heroName");
  const heroRole = document.getElementById("heroRole");
  const heroIntro = document.getElementById("heroIntro");
  const heroActions = document.getElementById("heroActions");
  const heroMeta = document.getElementById("heroMeta");
  const contactEyebrow = document.getElementById("contactEyebrow");
  const contactTitle = document.getElementById("contactTitle");
  const contactDescription = document.getElementById("contactDescription");

  const portraitImage = document.getElementById("portraitImage");
  const portraitPlaceholder = document.getElementById("portraitPlaceholder");
  const portraitPlaceholderCaption = document.getElementById("portraitPlaceholderCaption");
  const portraitSources = {
    recruiter: { image: "assets/profile-professional.jpg", alt: "Professional portrait of Dharshan T", fallbackCaption: "ADD PROFESSIONAL PHOTO\nassets/profile-professional.jpg" },
    curious: { image: "assets/profile-casual.jpg", alt: "Casual portrait of Dharshan T", fallbackCaption: "ADD CASUAL PHOTO\nassets/profile-casual.jpg" }
  };

  const copyByMode = {
    recruiter: {
      eyebrow: "SOFTWARE ENGINEER · PLACEMENT PROFILE",
      name: "Dharshan",
      role: "Aspiring Software Engineer | ECE Undergraduate<br>Graduating in 2027 · Open to placement opportunities",
      intro: "I build practical applications, work through problems carefully, and keep learning across Java, data structures, and web technologies. I’m looking for a team where I can contribute, grow, and build reliable software.",
      actions: '<a class="button button-light" href="assets/resume.pdf" target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a><a class="button button-outline" href="#projects">Projects</a><a class="button button-outline" href="#contact">Contact</a>',
      meta: '<span><i aria-hidden="true"></i> Karur, Tamil Nadu, India</span><span>Graduating 2027</span>',
      contactEyebrow: "LET’S BUILD SOMETHING USEFUL",
      contactTitle: "Open to learning and opportunities.",
      contactDescription: "Looking for graduate and entry-level opportunities in software engineering, Java, application development, or related roles."
    },
    curious: {
      eyebrow: "A LITTLE ABOUT ME · BEYOND THE CODE",
      name: "Dharshan",
      role: "Software learner · Teammate · Curious by nature",
      intro: "I like discovering how things work, asking “what if?”, and turning an idea into something I can try. I’m here for thoughtful conversations, shared ideas, small wins, and the happy moment when a stubborn bug finally gives up.",
      actions: '<a class="button button-light" href="#my-side">My side of the story <span aria-hidden="true">↗</span></a><a class="button button-outline" href="#places">My place</a><a class="button button-outline" href="#contact">Say hello</a>',
      meta: '<span><i aria-hidden="true"></i> Karur, Tamil Nadu, India</span><span>Always learning something new</span>',
      contactEyebrow: "GOOD CONVERSATIONS START SOMEWHERE",
      contactTitle: "Say hello. Let’s exchange ideas.",
      contactDescription: "Happy to connect over projects, technology, things we’re learning, and the little lessons that come with trying something new."
    }
  };

  function clearNavigationHash() {
    // Static file previews may have an opaque origin, so leave their URL alone.
    if (window.location.protocol === "file:" || window.location.protocol === "about:") return;
    try {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    } catch (_) {
      // Navigation remains usable even if the host blocks History API changes.
    }
  }

  function openMode(mode) {
    const content = copyByMode[mode];
    if (!content) return;

    document.body.dataset.mode = mode;
    setPortraitForMode(mode);
    heroEyebrow.textContent = content.eyebrow;
    heroName.textContent = content.name;
    heroRole.innerHTML = content.role;
    heroIntro.textContent = content.intro;
    heroActions.innerHTML = content.actions;
    heroMeta.innerHTML = content.meta;
    contactEyebrow.textContent = content.contactEyebrow;
    contactTitle.textContent = content.contactTitle;
    contactDescription.textContent = content.contactDescription;

    personaContents.forEach((section) => {
      section.hidden = section.dataset.persona !== mode;
    });
    welcomeScreen.hidden = true;
    portfolio.hidden = false;
    document.body.classList.add("portfolio-active");
    clearNavigationHash();
    window.scrollTo({ top: 0, behavior: "auto" });
    setupScrollExperience(mode);
    if (chooseAgain) chooseAgain.focus({ preventScroll: true });
  }


  modeButtons.forEach((button) => {
    button.addEventListener("click", () => openMode(button.dataset.openMode));
  });

  chooseAgain.addEventListener("click", () => {
    teardownScrollExperience();
    document.body.classList.remove("portfolio-active");
    portfolio.hidden = true;
    welcomeScreen.hidden = false;
    clearNavigationHash();
    window.scrollTo({ top: 0, behavior: "auto" });
    const firstChoice = document.querySelector("[data-open-mode='recruiter']");
    if (firstChoice) firstChoice.focus({ preventScroll: true });
  });

  // Personal photos and certificate documents are files maintained in the project folder.
  // There are intentionally no browser upload controls on the public page.
  function setPortraitAvailable(available) {
    if (portraitImage) portraitImage.hidden = !available;
    if (portraitPlaceholder) portraitPlaceholder.hidden = available;
  }

  function setPortraitForMode(mode) {
    if (!portraitImage) return;
    const setting = portraitSources[mode] || portraitSources.recruiter;
    const fallbackCaption = setting.fallbackCaption;
    if (portraitPlaceholderCaption) portraitPlaceholderCaption.textContent = fallbackCaption;
    portraitImage.alt = setting.alt;
    portraitImage.dataset.fallbackTried = "false";
    setPortraitAvailable(false);
    portraitImage.src = setting.image;
  }

  if (portraitImage) {
    portraitImage.addEventListener("load", () => setPortraitAvailable(portraitImage.naturalWidth > 0));
    portraitImage.addEventListener("error", () => {
      // Keep compatibility with an existing assets/profile.jpg portrait while the
      // owner is adding the new professional and casual images in VS Code.
      const genericProfile = "assets/profile.jpg";
      if (portraitImage.dataset.fallbackTried !== "true" && !portraitImage.src.endsWith("/profile.jpg")) {
        portraitImage.dataset.fallbackTried = "true";
        portraitImage.src = genericProfile;
        return;
      }
      setPortraitAvailable(false);
    });
    if (portraitImage.complete) setPortraitAvailable(portraitImage.naturalWidth > 0);
  }
  document.querySelectorAll("[data-certificate-preview]").forEach((image) => {
    const showPreview = () => {
      if (image.naturalWidth > 0) {
        image.hidden = false;
        const fallback = image.parentElement.querySelector(".certificate-art-fallback");
        if (fallback) fallback.hidden = true;
        image.parentElement.classList.add("has-preview");
      }
    };
    const hidePreview = () => { image.hidden = true; };
    image.addEventListener("load", showPreview);
    image.addEventListener("error", hidePreview);
    if (image.complete) showPreview();
  });
  document.querySelectorAll(".project-photo, .place-coordinate-photo, .certificate-photo").forEach((image) => {
    image.addEventListener("error", () => image.classList.add("asset-load-failed"));
  });

  // Restrained 3D tilt on a few decorative surfaces; only runs while the pointer is over them.
  const tiltQuery = ".depth-surface, .project-art, .certificate-art";
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(tiltQuery).forEach((surface) => {
      surface.addEventListener("pointermove", (event) => {
        const rect = surface.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const nx = (event.clientX - rect.left) / rect.width - 0.5;
        const ny = (event.clientY - rect.top) / rect.height - 0.5;
        surface.style.setProperty("--tilt-x", `${(-ny * 3.2).toFixed(2)}deg`);
        surface.style.setProperty("--tilt-y", `${(nx * 4.2).toFixed(2)}deg`);
      }, { passive: true });
      surface.addEventListener("pointerleave", () => {
        surface.style.removeProperty("--tilt-x");
        surface.style.removeProperty("--tilt-y");
      }, { passive: true });
    });
  }

  // Scroll choreography: reveal content as it enters view and let the page's
  // native scroll position drive the projects rail. No wheel events are captured.
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const projectSection = document.getElementById("projects");
  const projectTrack = document.getElementById("projectTrack");
  const projectViewport = projectSection ? projectSection.querySelector(".project-viewport") : null;
  const projectPosition = document.getElementById("projectPosition");
  let revealObserver = null;
  let scrollFrame = 0;
  let scrollExperienceMode = null;
  let scrollListenerReady = false;

  const revealSelectors = [
    "#top .hero-copy > *",
    "#top .portrait-column > *",
    ".persona-content:not([hidden]) > section > .eyebrow",
    ".persona-content:not([hidden]) > section > h2",
    ".persona-content:not([hidden]) > section > .section-lede",
    "#approach .roadmap-item",
    "#approach .approach-reflection > *",
    "#skills .skill-group",
    "#skills .toolkit-reflection > *",
    "#projects .section-heading > *",
    "#projects .project-card",
    "#project-reflection .project-principle > *",
    "#credentials .timeline-entry",
    "#credentials .snapshot-item",
    "#certificates .certificate-card",
    "#certificates .credential-note-panel > *",
    "#my-side > *",
    "#my-side .curious-intro-gallery > *",
    "#my-side .personal-chapter > *",
    "#little-things .personal-story-intro > *",
    "#little-things .personality-card",
    "#little-things .personal-photo-strip > *",
    "#little-things .personality-afterword > *",
    "#places > *",
    "#conversation .conversation-list p",
    ".inline-photo",
    "#contact .contact-main > *",
    "#contact .contact-links a"
  ];

  function teardownScrollExperience() {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = null;
    document.querySelectorAll(".scroll-reveal").forEach((element) => {
      element.classList.remove("scroll-reveal", "is-revealed");
      element.style.removeProperty("--reveal-delay");
    });
    if (projectTrack) {
      projectTrack.style.removeProperty("transform");
      projectTrack.querySelectorAll(".is-story-active").forEach((card) => card.classList.remove("is-story-active"));
    }
    scrollExperienceMode = null;
  }

  function setupScrollExperience(mode) {
    teardownScrollExperience();
    scrollExperienceMode = mode;
    const selector = revealSelectors.join(",");
    const targets = Array.from(document.querySelectorAll(selector)).filter((element) => !element.closest("[hidden]"));
    const siblingCounters = new Map();
    targets.forEach((element) => {
      const parent = element.parentElement;
      const position = siblingCounters.get(parent) || 0;
      siblingCounters.set(parent, position + 1);
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(position, 5) * 75}ms`);
    });

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      targets.forEach((element) => element.classList.add("is-revealed"));
    } else {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      }, { root: null, rootMargin: "0px 0px -9% 0px", threshold: 0.08 });
      targets.forEach((element) => revealObserver.observe(element));
    }

    if (!scrollListenerReady) {
      window.addEventListener("scroll", requestScrollFrame, { passive: true });
      window.addEventListener("resize", requestScrollFrame, { passive: true });
      scrollListenerReady = true;
    }
    requestScrollFrame();
  }

  function requestScrollFrame() {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      scrollFrame = 0;
      updateScrollExperience();
    });
  }

  function clamp01(value) { return Math.max(0, Math.min(1, value)); }

  function updateScrollExperience() {
    if (!portfolio || portfolio.hidden || !scrollExperienceMode) return;
    const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const pageProgress = clamp01(window.scrollY / scrollable);
    const progressBar = document.getElementById("readingProgressBar");
    if (progressBar) progressBar.style.transform = `scaleX(${pageProgress.toFixed(4)})`;
    const contact = document.getElementById("contact");
    if (contact) {
      const contactProgress = clamp01((window.innerHeight - contact.getBoundingClientRect().top) / Math.max(1, window.innerHeight + contact.offsetHeight));
      contact.style.setProperty("--contact-progress", contactProgress.toFixed(4));
    }
    document.querySelectorAll(".persona-content:not([hidden]) > section").forEach((section) => {
      const rect = section.getBoundingClientRect();
      const travel = clamp01((window.innerHeight - rect.top) / Math.max(1, window.innerHeight + rect.height));
      section.style.setProperty("--chapter-parallax", `${(travel - .5) * -24}px`);
    });
    const hero = document.getElementById("top");
    if (hero) {
      const heroProgress = clamp01(-hero.getBoundingClientRect().top / Math.max(1, window.innerHeight));
      hero.style.setProperty("--hero-progress", heroProgress.toFixed(4));
      hero.style.setProperty("--hero-copy-shift", `${-heroProgress * 46}px`);
      hero.style.setProperty("--hero-copy-opacity", `${1 - heroProgress * 0.34}`);
      hero.style.setProperty("--portrait-shift", `${heroProgress * 29}px`);
      hero.style.setProperty("--portrait-scale", `${1 - heroProgress * 0.035}`);
    }

    if (!projectSection || !projectTrack || !projectViewport) return;
    const isProjectRailEnabled = scrollExperienceMode === "recruiter" && !reducedMotion.matches && window.innerWidth > 900 && window.innerHeight >= 700 && !projectSection.closest("[hidden]");
    if (isProjectRailEnabled && projectTrack.children.length > 1) {
      // Scale the pinned story duration when the owner adds more project cards.
      projectSection.style.minHeight = `${94 + (projectTrack.children.length - 1) * 88}svh`;
    } else {
      projectSection.style.removeProperty("min-height");
    }
    if (!isProjectRailEnabled) {
      projectTrack.style.removeProperty("transform");
      projectTrack.querySelectorAll(".is-story-active").forEach((card) => card.classList.remove("is-story-active"));
      if (projectPosition) projectPosition.textContent = `01 / ${String(projectTrack.children.length).padStart(2,"0")}`;
      return;
    }

    const sectionTop = window.scrollY + projectSection.getBoundingClientRect().top;
    const scrollRange = Math.max(1, projectSection.offsetHeight - window.innerHeight);
    const progress = clamp01((window.scrollY - sectionTop) / scrollRange);
    const cards = Array.from(projectTrack.querySelectorAll(".project-card"));
    if (!cards.length) return;
    const viewportWidth = projectViewport.clientWidth;
    const viewportCenter = viewportWidth / 2;
    const first = cards[0];
    const last = cards[cards.length - 1];
    const startX = viewportCenter - (first.offsetLeft + first.offsetWidth / 2);
    const endX = viewportCenter - (last.offsetLeft + last.offsetWidth / 2);
    const x = startX + (endX - startX) * progress;
    projectTrack.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;

    let closestIndex = 0;
    let closestDistance = Infinity;
    cards.forEach((card, index) => {
      const center = card.offsetLeft + card.offsetWidth / 2 + x;
      const distance = Math.abs(center - viewportCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    cards.forEach((card, index) => card.classList.toggle("is-story-active", index === closestIndex));
    if (projectPosition) projectPosition.textContent = `${String(closestIndex + 1).padStart(2,"0")} / ${String(cards.length).padStart(2,"0")}`;
  }

})();
