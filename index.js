$(".case-item").on("mouseover", function(){
    $(this).find('.btn-more').show();
}).on("mouseleave", function(){
    $(this).find('.btn-more').hide();
})
