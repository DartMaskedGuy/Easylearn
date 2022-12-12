$(document).ready(function(){
    $('.slider').click(function(){
        $(".index-dropdown").toggleClass("active");
    });

    $('.settings-dropper').click(function(){
        $(".setting-dropdown").toggleClass("active");
    });
});