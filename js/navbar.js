var lastId,
    topMenu = $("#navOptions"),
    //topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


// Bind to scroll
$(window).scroll(function() {
   // Get container scroll position
   var fromTop = $(this).scrollTop() + 20 //+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

// $(window).scroll(function () {
//     $('section').each(function(index) {
//         var $this = $(this)
//         var oTop = $this.offset().top - window.innerHeight;
//         if(a == index && $(window).scrollTop() > oTop) {
//         }
//     })
// })