let $wrap = document.querySelector('#wrap');
let $header = document.querySelector('#wrap header');
let $button = document.querySelector('#wrap header button.same');

window.addEventListener('scroll', () => {
    let maxScrollY = $wrap.offsetHeight;
    let minScrollY = $header.offsetHeight;
    let currentScrollY = document.documentElement.scrollTop;
    let scrollRate = maxScrollY-minScrollY;
 
 if(scrollRate >= minScrollY) {
   //alert('왜안나와?');
   $button.style.display = "block";
 };
});