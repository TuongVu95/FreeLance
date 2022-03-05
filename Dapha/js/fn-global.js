var daphaHTML = $('html');

const buttonJs = $('.js-scroll-top');

buttonJs.click(function(){
    $('html,body').animate({scrollTop: 0 }, '300');
});

var init = () => {
    daphaHTML.addClass('daphaHTML');
}
init();