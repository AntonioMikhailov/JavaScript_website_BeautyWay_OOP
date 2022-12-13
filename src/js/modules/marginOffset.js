   //компенсация сдвига вправо 
   export default class OffsetMargin {
    constructor() {
      this.marginOffset = window.innerWidth - document.body.clientWidth;
    }
    
  addOffsetMargin(dataButtonS7 = true) {
  if (dataButtonS7 == false) {
    // console.log(dataButtonS7);
    document.body.style.marginRight = 0 + 'px';
  } else {
    document.body.style.marginRight = this.marginOffset + 'px';
    //для якоря
    document.querySelector('.arrow-anchor').style.display = 'none';
    document.body.classList.add('lock');
  }
}
    removeOffsetMargin() {
         setTimeout(() => {
           document.body.style.marginRight = 0 + 'px';
           document.body.classList.remove('lock');
           //для якоря
           document.querySelector('.arrow-anchor').style.display = '';
         }, 300);
       }

   }
 