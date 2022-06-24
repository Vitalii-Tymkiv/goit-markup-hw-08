(() => {
  const MenuBtnRef = document.querySelector("[data-menu-button]");
  const MobileMenuRef = document.querySelector("[data-menu]");
  const BodyRef = document.querySelector("body");
  MenuBtnRef.addEventListener("click", () => {
    const expanded =
      MenuBtnRef.getAttribute("aria-expanded") === "true" || false;
    MenuBtnRef.classList.toggle("is-open");
    MenuBtnRef.setAttribute("aria-expanded", !expanded);
    MobileMenuRef.classList.toggle("is-open");
    BodyRef.classList.toggle("is-open");
  });
})();
