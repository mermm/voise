$('.card__fav-btn').click(function() {
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
});
