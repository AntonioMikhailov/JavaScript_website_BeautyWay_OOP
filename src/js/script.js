// import navScroll from "./modules/navScroll.js";
import s0_header from "./modules/s0_header.js";
import s1_sec_Modal from "./modules/s1_sec_modal.js";
import navScrollThis from "./modules/navScroll-this.js";
 import s4_portfolio from "./modules/s4_portfolio.js";
import s5_team from "./modules/s5_team_accord.js";
import s8_tabsPrice from "./modules/s8_tabs-price.js";
import s9_comments from "./modules/s9_comments.js";
 
window.addEventListener('DOMContentLoaded', () => {
  //вызываем
  new s0_header('.mobile-wrapper', '.header', '.header-burgerButon', '.mobile-row ').init();
  new s1_sec_Modal('.modal-wrapper ', '.show-form ', '.modal-cancelButton', '.modal-button ', '.modal-textarea ', '.modal-input ').init(); 
  new navScrollThis('.arrow-anchor').init(1000); // меняем время
  new s4_portfolio().init();
  new s5_team('.s5-accord__title', '.s5-right__image').init();
  new s8_tabsPrice('.s8-tab__title', '.s8-tab__column', 's8-tab__active').init();
  new s9_comments().init();
 
});