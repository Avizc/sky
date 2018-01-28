$(function() {
    $('.nav-text-only').on('click',function(event){
        event.preventDefault();
        $('.page-text-only').toggleClass('hidden');
    });
    $('.nav-full-story').on('click',function(event){
        event.preventDefault();
        $('.page-full-story').toggleClass('hidden');
    });
    $('.nav-page-gifs').on('click',function(event){
        event.preventDefault();
        $('.page-gifs').toggleClass('hidden');
    });
});