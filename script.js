// ========== 移动端导航菜单开合 ==========
(function initNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");

  toggle.addEventListener("click", function () {
    const open = navList.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // 点击菜单项后自动收起（移动端）
  navList.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-link")) {
      navList.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

// ========== 项目分类筛选 ==========
(function initFilters() {
  const filterGroup = document.getElementById("filters");
  const projects = document.querySelectorAll("#project-list .project");

  filterGroup.addEventListener("click", function (e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterGroup.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.remove("is-active");
    });
    btn.classList.add("is-active");

    const filter = btn.dataset.filter;
    projects.forEach(function (p) {
      const show = filter === "all" || p.dataset.category === filter;
      p.classList.toggle("hidden", !show);
    });
  });
})();

// ========== 滚动时高亮当前区块对应的导航项 ==========
(function initScrollSpy() {
  const links = document.querySelectorAll(".nav-link");
  const sections = Array.from(links).map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  });

  function onScroll() {
    const pos = window.scrollY + window.innerHeight * 0.35;
    let current = 0;

    sections.forEach(function (sec, i) {
      if (sec && sec.offsetTop <= pos) current = i;
    });

    links.forEach(function (link, i) {
      link.classList.toggle("is-active", i === current);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
