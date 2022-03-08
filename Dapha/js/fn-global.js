var daphaHTML = $('html');
const btnToggle = $('.js-toggle');

const buttonJs = $('.js-scroll-top');

buttonJs.click(function(){
    $('html,body').animate({scrollTop: 0 }, '300');
});

const navMobile = () => {
    btnToggle.click(function(){
        $(this).toggleClass('close');
        $('.header-mobile').toggleClass('expanded');
    });
}

var init = () => {
    daphaHTML.addClass('daphaHTML');
    navMobile();
}
init();