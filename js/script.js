var menu_open_btn = document.querySelector(".main-navigation__btn");
var main_navigation = document.querySelector(".main-navigation");
var main_navigation__list_item = document.querySelectorAll(".main-navigation__list-item");
var main_navigation__list_item_logo = document.querySelector(".main-navigation__list-item--logo");


main_navigation__list_item.forEach(n => n.classList.remove("nojs"))

menu_open_btn.addEventListener("click", function (evt) {
	if (!menu_open_btn.classList.contains("main-navigation__btn--open-menu")) {
		evt.preventDefault();
		menu_open_btn.classList.add("main-navigation__btn--open-menu");
		main_navigation__list_item.forEach(n => n.classList.add("open-menu"));
		main_navigation__list_item_logo.classList.remove("open-menu");
	} else if (menu_open_btn.classList.contains("main-navigation__btn--open-menu")
		 ) {
			menu_open_btn.classList.remove("main-navigation__btn--open-menu");
			main_navigation__list_item.forEach(n => n.classList.remove("open-menu"));
			main_navigation__list_item.forEach(n => n.classList.add("close-menu"));
			main_navigation__list_item_logo.classList.remove("close-menu");
			setTimeout(function(){
    			main_navigation__list_item.forEach(n => n.classList.remove("close-menu"));
			}, 500);
	}
}); 