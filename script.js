const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const navLinks = nav.querySelectorAll("a");
const year = document.getElementById("year");

// 手机菜单展开/收起
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// 点击导航链接后自动收起菜单
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// 点击页面空白处时，收起菜单
document.addEventListener("click", (e) => {
  const isClickInsideNav = nav.contains(e.target);
  const isClickToggle = menuToggle.contains(e.target);

  if (!isClickInsideNav && !isClickToggle) {
    nav.classList.remove("show");
  }
});

// 页脚年份
year.textContent = new Date().getFullYear();