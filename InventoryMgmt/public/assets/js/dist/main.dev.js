"use strict";

/*=============== SHOW MENU ===============*/
var showMenu = function showMenu(toggleId, navId) {
  var toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  toggle.addEventListener('click', function () {
    // Add show-menu class to nav menu
    nav.classList.toggle('show-menu'); // Add show-icon to show and hide the menu icon

    toggle.classList.toggle('show-icon');
  });
};

showMenu('nav-toggle', 'nav-menu');