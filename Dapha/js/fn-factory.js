const ReadMore = (params) => {
    const btnReadmore = $('.js--view-more');

    btnReadmore.click(function(){
        const that = $(this);
        that.parent().addClass('full');
    });
}

var init = (params) => {
    ReadMore();
}
init();