$(".projects").on("mouseover", function(){
    $(this).find('.project-description').show();
    $(this).find('.projects-img').css('filter','blur(5px)');

}).on("mouseleave", function(){
    $(this).find('.project-description').hide();
     $(this).find('.projects-img').css('filter','blur(0px)');
})
