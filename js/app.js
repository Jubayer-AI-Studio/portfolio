/**
 * ==============================================================================
 * ⚡ PORTFOLIO CORE APPLICATION ENGINE (app.js)
 * ==============================================================================
 * Handles dynamic rendering, interactive animations, project filtering,
 * modal dialogs, clipboard toasts, command palette, and WhatsApp hooks.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.PORTFOLIO_CONFIG;
  if (!config) {
    console.error('PORTFOLIO_CONFIG is not defined! Check js/portfolio-config.js.');
    return;
  }

  // 1. Initialize Personal & Hero Elements
  initHero(config);

  // 2. Initialize Bento Highlights
  initBento(config);

  // 3. Initialize Skills Arsenal
  renderSkills(config);

  // 4. Initialize Projects & Filtering
  renderProjects(config, 'all');
  initProjectFilters(config);

  // 5. Initialize Experience Timeline
  renderTimeline(config);

  // 6. Initialize YouTube Showcase
  renderYouTubeShowcase(config);

  // 7. Initialize Interactive Utilities (Toast, WhatsApp, Modal, Palette)
  initInteractiveFeatures(config);

  // 8. Refresh Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }
});

/**
 * -----------------------------------------------------------------------------
 * 1. HERO SECTION & TYPEWRITER INITIALIZER
 * -----------------------------------------------------------------------------
 */
function initHero(config) {
  const { personal, stats } = config;

  // Name & Headings
  setElementText('#hero-name', personal.name);
  setElementText('#nav-name', personal.name);
  setElementText('#footer-name', personal.name);
  setElementText('#hero-status', personal.statusBadge);
  setElementText('#hero-location', personal.location);
  setElementText('#hero-bio', personal.shortBio);

  // Avatars & Banners
  setElementSrc('#hero-avatar', personal.avatar);
  setElementSrc('#nav-avatar', personal.avatar);
  setElementSrc('#about-avatar', personal.developerCard || personal.avatarOriginal || personal.avatar);

  // Social Links
  setupSocialLinks(personal.socials);

  // Typewriter Effect
  initTypewriter(personal.roles || [personal.headline]);

  // Live Stats Counter
  renderStats(stats);
}

function initTypewriter(roles) {
  const el = document.getElementById('typewriter-text');
  if (!el || !roles.length) return;

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseEnd = 2000;

  function type() {
    const currentRole = roles[roleIdx];
    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

function renderStats(stats) {
  const container = document.getElementById('hero-stats-container');
  if (!container || !stats) return;

  container.innerHTML = stats.map(stat => `
    <div class="glass-panel p-4 rounded-xl border border-cyan-500/20 text-center hover:border-cyan-400/50 transition-all">
      <div class="flex items-center justify-center gap-1.5 text-cyan-400 mb-1">
        <i data-lucide="${stat.icon || 'star'}" class="w-4 h-4"></i>
        <span class="text-xl sm:text-2xl font-bold font-heading text-white">${escapeHtml(stat.value)}</span>
      </div>
      <p class="text-xs text-slate-400 font-medium">${escapeHtml(stat.label)}</p>
    </div>
  `).join('');
}

/**
 * -----------------------------------------------------------------------------
 * 2. BENTO GRID INITIALIZER
 * -----------------------------------------------------------------------------
 */
function initBento(config) {
  const { bento, personal } = config;
  if (!bento) return;

  setElementText('#bento-philosophy-title', bento.philosophy.title);
  setElementText('#bento-philosophy-desc', bento.philosophy.desc);
  setElementText('#bento-focus-desc', bento.currentFocus.desc);
  setElementText('#bento-badge-text', bento.metricsBadge.badge);
  setElementText('#bento-timezone-text', personal.timezone || 'UTC+6 (Dhaka)');
}

/**
 * -----------------------------------------------------------------------------
 * 3. TECHNICAL ARSENAL / SKILLS RENDERING
 * -----------------------------------------------------------------------------
 */
function renderSkills(config) {
  const container = document.getElementById('skills-container');
  if (!container || !config.skills) return;

  container.innerHTML = config.skills.map(group => `
    <div class="glass-panel p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all flex flex-col">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <i data-lucide="${group.icon || 'code'}" class="w-5 h-5"></i>
        </div>
        <h3 class="text-lg font-bold text-white font-heading">${escapeHtml(group.category)}</h3>
      </div>
      <div class="flex flex-wrap gap-2.5 mt-auto">
        ${group.items.map(item => `
          <div class="flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-xs text-slate-200 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors">
            <span>${escapeHtml(item.name)}</span>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">${escapeHtml(item.level)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * -----------------------------------------------------------------------------
 * 4. PROJECTS RENDERING, FILTERING & MODAL
 * -----------------------------------------------------------------------------
 */
function renderProjects(config, filterCategory = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container || !config.projects) return;

  const filtered = filterCategory === 'all'
    ? config.projects
    : config.projects.filter(p => p.category === filterCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <p class="text-base">এই ক্যাটাগরিতে কোনো প্রজেক্ট পাওয়া যায়নি।</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(project => `
    <div class="glass-panel rounded-2xl overflow-hidden border border-cyan-500/20 flex flex-col interactive-card">
      <!-- Project Cover -->
      <div class="relative h-48 sm:h-52 overflow-hidden bg-slate-950 group">
        <img 
          src="${escapeHtml(project.image || 'assets/jubayer_developer_card.png')}" 
          alt="${escapeHtml(project.title)}" 
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B1628] via-transparent to-transparent opacity-90"></div>
        <div class="absolute top-3 left-3 flex gap-2">
          <span class="px-2.5 py-1 text-[11px] font-mono font-semibold tracking-wider rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
            ${escapeHtml(project.badge || project.categoryLabel || 'PROJECT')}
          </span>
        </div>
      </div>

      <!-- Project Content -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-white font-heading mb-2.5 hover:text-cyan-400 transition-colors">
            ${escapeHtml(project.title)}
          </h3>
          <p class="text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
            ${escapeHtml(project.desc)}
          </p>

          <!-- Problem / Solution Highlights -->
          <div class="mb-5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-1.5">
            <div class="flex items-start gap-1.5">
              <span class="text-emerald-400 font-semibold flex-shrink-0">✓ Solution:</span>
              <span class="line-clamp-2">${escapeHtml(project.solution || 'Engineered production solution.')}</span>
            </div>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${project.tags.map(tag => `
              <span class="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/80 text-cyan-400/90 border border-slate-700/50">
                ${escapeHtml(tag)}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <button 
            type="button" 
            onclick="openProjectModal('${escapeHtml(project.id)}')"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <i data-lucide="info" class="w-3.5 h-3.5"></i>
            বিস্তারিত কেস স্টাডি
          </button>

          <div class="flex items-center gap-2">
            ${project.githubUrl ? `
              <a 
                href="${escapeHtml(project.githubUrl)}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
                title="View GitHub Code"
                aria-label="GitHub Repository"
              >
                <i data-lucide="github" class="w-4 h-4"></i>
              </a>
            ` : ''}
            ${project.liveUrl ? `
              <a 
                href="${escapeHtml(project.liveUrl)}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500 hover:text-slate-950 text-xs font-semibold transition-all cursor-pointer"
                title="Open Live Application"
              >
                <span>Live</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function initProjectFilters(config) {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'font-bold');
        b.classList.add('bg-slate-900/80', 'text-slate-300');
      });
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'font-bold');
      btn.classList.remove('bg-slate-900/80', 'text-slate-300');

      const category = btn.getAttribute('data-category') || 'all';
      renderProjects(config, category);
    });
  });
}

window.openProjectModal = function(projectId) {
  const config = window.PORTFOLIO_CONFIG;
  const project = config.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('project-modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="relative h-64 sm:h-72 overflow-hidden bg-slate-950 rounded-t-2xl">
      <img src="${escapeHtml(project.image || 'assets/jubayer_developer_card.png')}" alt="${escapeHtml(project.title)}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-[#0B1628] via-[#0B1628]/40 to-transparent"></div>
      <div class="absolute bottom-4 left-6 right-6">
        <span class="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-cyan-500/30 text-cyan-300 border border-cyan-500/40">
          ${escapeHtml(project.badge || project.categoryLabel)}
        </span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white font-heading mt-2">${escapeHtml(project.title)}</h2>
      </div>
    </div>

    <div class="p-6 sm:p-8 space-y-6">
      <div>
        <h4 class="text-xs uppercase font-mono text-cyan-400 tracking-wider mb-1.5">Overview</h4>
        <p class="text-slate-200 text-sm sm:text-base leading-relaxed">${escapeHtml(project.desc)}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-slate-900/70 border border-red-500/20">
          <h5 class="text-xs uppercase font-mono text-red-400 font-bold mb-2 flex items-center gap-1.5">
            <i data-lucide="alert-circle" class="w-4 h-4"></i> Problem Statement
          </h5>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(project.problem || 'N/A')}</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900/70 border border-emerald-500/20">
          <h5 class="text-xs uppercase font-mono text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
            <i data-lucide="check-circle-2" class="w-4 h-4"></i> Engineered Solution
          </h5>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(project.solution || 'N/A')}</p>
        </div>
      </div>

      <div>
        <h4 class="text-xs uppercase font-mono text-cyan-400 tracking-wider mb-2.5">Tech Stack & Tools</h4>
        <div class="flex flex-wrap gap-2">
          ${project.tags.map(tag => `
            <span class="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-cyan-300 border border-slate-700">
              ${escapeHtml(tag)}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
        ${project.githubUrl ? `
          <a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm flex items-center gap-2 transition-all">
            <i data-lucide="github" class="w-4 h-4"></i> View Source Code
          </a>
        ` : ''}
        ${project.liveUrl ? `
          <a href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer" class="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25">
            <span>Open Application</span>
            <i data-lucide="external-link" class="w-4 h-4"></i>
          </a>
        ` : ''}
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.lucide) lucide.createIcons();
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/**
 * -----------------------------------------------------------------------------
 * 5. EXPERIENCE & MILESTONES TIMELINE
 * -----------------------------------------------------------------------------
 */
function renderTimeline(config) {
  const container = document.getElementById('timeline-container');
  if (!container || !config.timeline) return;

  container.innerHTML = config.timeline.map((item, index) => `
    <div class="relative pl-8 sm:pl-10 pb-10 group last:pb-0">
      <!-- Glow Dot & Line -->
      <div class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:border-white transition-all shadow-[0_0_12px_rgba(0,229,255,0.8)]"></div>
      ${index !== config.timeline.length - 1 ? `
        <div class="absolute left-[7px] top-5 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/40 via-cyan-500/20 to-slate-800"></div>
      ` : ''}

      <!-- Item Card -->
      <div class="glass-panel p-5 rounded-2xl border border-cyan-500/15 hover:border-cyan-400/40 transition-all">
        <span class="inline-block px-2.5 py-0.5 text-xs font-mono font-semibold rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
          ${escapeHtml(item.period)}
        </span>
        <h4 class="text-lg font-bold text-white font-heading">${escapeHtml(item.role)}</h4>
        <p class="text-xs text-cyan-300/80 font-medium mb-2">${escapeHtml(item.company)}</p>
        <p class="text-sm text-slate-300 leading-relaxed">${escapeHtml(item.desc)}</p>
      </div>
    </div>
  `).join('');
}

/**
 * -----------------------------------------------------------------------------
 * 6. YOUTUBE SHOWCASE
 * -----------------------------------------------------------------------------
 */
function renderYouTubeShowcase(config) {
  const { youtubeShowcase } = config;
  const container = document.getElementById('youtube-categories-container');
  if (!container || !youtubeShowcase) return;

  setElementText('#yt-channel-name', youtubeShowcase.channelName);
  setElementText('#yt-channel-handle', youtubeShowcase.channelHandle);
  setElementText('#yt-channel-desc', youtubeShowcase.description);
  setElementHref('#yt-channel-btn', youtubeShowcase.channelUrl);

  container.innerHTML = youtubeShowcase.categories.map(cat => `
    <div class="glass-panel p-5 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all flex items-start gap-4">
      <div class="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex-shrink-0">
        <i data-lucide="${cat.icon || 'video'}" class="w-5 h-5"></i>
      </div>
      <div>
        <h4 class="text-base font-bold text-white font-heading mb-1">${escapeHtml(cat.title)}</h4>
        <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(cat.desc)}</p>
      </div>
    </div>
  `).join('');
}

/**
 * -----------------------------------------------------------------------------
 * 7. INTERACTIVE UTILITIES (TOAST, WHATSAPP, PALETTE, MOBILE MENU)
 * -----------------------------------------------------------------------------
 */
function initInteractiveFeatures(config) {
  // Direct WhatsApp Button
  const waBtn = document.getElementById('whatsapp-direct-btn');
  if (waBtn) {
    const rawNumber = config.personal.whatsappNumber || '8801354840991';
    const message = encodeURIComponent(config.contact.whatsappMessage || 'Hello Jubayer!');
    waBtn.href = `https://wa.me/${rawNumber}?text=${message}`;
  }

  // Copy Email Buttons
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = config.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast(`ইমেইল ক্লিপবোর্ডে কপি হয়েছে: ${email}`);
      }).catch(() => {
        showToast(`ইমেইল: ${email}`);
      });
    });
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Keyboard Shortcuts (Cmd+K / Ctrl+K)
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      toggleCommandPalette();
    }
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCommandPalette();
    }
  });

  // Modal Backdrop Click
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }
}

// Toast Functionality
window.showToast = function(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
};

// Command Palette Controls
window.toggleCommandPalette = function() {
  const palette = document.getElementById('command-palette');
  if (!palette) return;
  palette.classList.toggle('active');
  const input = document.getElementById('palette-input');
  if (palette.classList.contains('active') && input) {
    input.focus();
    input.value = '';
    filterPalette('');
  }
};

window.closeCommandPalette = function() {
  const palette = document.getElementById('command-palette');
  if (palette) palette.classList.remove('active');
};

window.filterPalette = function(query) {
  const list = document.getElementById('palette-list');
  if (!list) return;

  const items = [
    { title: 'Featured Projects', desc: 'Jump to portfolio projects', hash: '#projects', icon: 'folder-git-2' },
    { title: 'Technical Arsenal & Skills', desc: 'View skills & tools', hash: '#skills', icon: 'cpu' },
    { title: 'About & Journey', desc: 'Read background & bio', hash: '#about', icon: 'user' },
    { title: 'YouTube & Tutorials', desc: 'Watch AI content', hash: '#youtube', icon: 'video' },
    { title: 'Direct Contact & WhatsApp', desc: 'Get in touch directly', hash: '#contact', icon: 'message-square' },
    { title: 'Copy Email Address', desc: 'Copy to clipboard', action: 'copy-email', icon: 'mail' },
    { title: 'GitHub Profile', desc: 'Visit GitHub repository ecosystem', url: window.PORTFOLIO_CONFIG.personal.socials.github, icon: 'github' }
  ];

  const q = query.toLowerCase().trim();
  const matched = items.filter(i => i.title.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q));

  list.innerHTML = matched.map(item => `
    <li 
      onclick="handlePaletteAction('${escapeHtml(item.hash || '')}', '${escapeHtml(item.action || '')}', '${escapeHtml(item.url || '')}')" 
      class="px-4 py-3 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent flex items-center justify-between cursor-pointer transition-colors"
    >
      <div class="flex items-center gap-3">
        <div class="text-cyan-400"><i data-lucide="${item.icon}" class="w-4 h-4"></i></div>
        <div>
          <p class="text-sm font-semibold text-white">${escapeHtml(item.title)}</p>
          <p class="text-xs text-slate-400">${escapeHtml(item.desc)}</p>
        </div>
      </div>
      <span class="text-xs font-mono text-slate-500">Jump ↵</span>
    </li>
  `).join('');

  if (window.lucide) lucide.createIcons();
};

window.handlePaletteAction = function(hash, action, url) {
  closeCommandPalette();
  if (hash) {
    const target = document.querySelector(hash);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  } else if (action === 'copy-email') {
    navigator.clipboard.writeText(window.PORTFOLIO_CONFIG.personal.email);
    showToast('ইমেইল ক্লিপবোর্ডে কপি হয়েছে!');
  } else if (url) {
    window.open(url, '_blank');
  }
};

/**
 * -----------------------------------------------------------------------------
 * HELPER UTILITIES
 * -----------------------------------------------------------------------------
 */
function setElementText(selector, text) {
  const el = document.querySelector(selector);
  if (el && text !== undefined) el.textContent = text;
}

function setElementSrc(selector, src) {
  const el = document.querySelector(selector);
  if (el && src) el.src = src;
}

function setElementHref(selector, href) {
  const el = document.querySelector(selector);
  if (el && href) el.href = href;
}

function setupSocialLinks(socials) {
  if (!socials) return;
  setElementHref('.link-github', socials.github);
  setElementHref('.link-youtube', socials.youtube);
  setElementHref('.link-linkedin', socials.linkedin);
  setElementHref('.link-facebook', socials.facebook);
  setElementHref('.link-instagram', socials.instagram);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
