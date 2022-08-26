$(".hiring_items>div").on("click", function(){
    $(this).children(".hiring_ikon"). toggleClass("hiring-rotate_icon");
    $(this).parent(".hiring_items"). toggleClass("cheng_color");
   $(this).next(".hiring_text").slideToggle(300);
})