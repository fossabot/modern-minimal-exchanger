$(document).ready(function() {
    $('#overlay').css({opacity: 0.5}); // Делаем затемняющий фон кроссбраузерным
   // positionCenter($('#popup')); // Позиционируем всплывающее окно по центру
	
    $('.SignIn').click(function() { // При клике по ссылке, показываем всплывающее окно
        $('#popup, #overlay').fadeIn(300);
        $('body').attr('style', 'overflow: hidden;');
    });
	
    $('#close_popup, #overlay').click(function() { // Скрываем всплывающее окно при клике по кнопке закрыть
        $('#popup, #overlay').fadeOut(300);
        $('body').removeAttr('style');
    });
    var elem = $('#popup')
    var win = $(window);
    var xy = (win.width() - elem.width()) / 2; 
    var xx = (win.height() - elem.height()) / 2;
    $('#popup').css({top: xx + 'px'});
    $('#popup').css({left: xy + 'px'});

});