var menu_open_btn = document.querySelector(".main-navigation__btn");

menu_open_btn.addEventListener("click", function (evt) {
	if (!menu_open_btn.classList.contains("main-navigation__btn--open-menu")) {
		evt.preventDefault();
		menu_open_btn.classList.add("main-navigation__btn--open-menu");
	} else if (menu_open_btn.classList.contains("main-navigation__btn--open-menu")) {
		menu_open_btn.classList.remove("main-navigation__btn--open-menu");
	}
}); 