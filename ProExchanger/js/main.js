/* Begin Modal Close*/
function ModalClose() {
  var Modal = document.getElementById('Modal');
  Modal.style.display = 'none';
  //Modal.remove();
}
/* End Modal Close */

/* Begin Modal Close*/
function ModalOpen() {
  var Modal = document.getElementById('Modal');
  //ModalClose.style.display = 'none';
  Modal.style.display = 'flex';
}
/* End Modal Close */

/* Begin Select System */
var SelectSystem;

function SelectChange() {
  if (SelectSystem)
    SelectSystem.classList.remove('Select');
  this.classList.add('Select');
  SelectSystem = this;
}
/* End Select System*/

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/* Begin Calc */

var Curency, Minimal, SetMoney;

setTimeout(function () {
  Calc();
}, 100);

function Calc() {
  SetMoney = document.getElementById("SetMoney").value;
  Curency = document.getElementById("Curency").innerText;
  Minimal = document.getElementById("GetMinimal").innerText;
  document.getElementById("SetMoney").min = Minimal;
  document.getElementById("GetMoney").value = SetMoney * Curency;
}

/* End Calc*/
var isOpenedMenu = false;
$(document).ready(function () {
  $('.burger_trigger').click(function(){
    if(isOpenedMenu){
      $('body').removeAttr('style');
      $('header').removeAttr('style');
    }
    else {
      $('body').attr('style', 'overflow: hidden;');
      $('header').attr('style', 'display: flex !important;');
    }
    isOpenedMenu = !isOpenedMenu;
  })
})

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 40,
    dots: true,
    nav: true,
    navText: ['<','>'],
    stagePadding: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    mergeFit: false,
    responsive: {
      190: {
        items: 1
      },
      1276: {
        items: 2
      }
    }
  });
});