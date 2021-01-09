var lastScrollId,
    lastSubId,
    topMenu = $("#navOptions"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length && !$(item[0].parentElement).attr("id")) { return item; }
    }),
    subItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length && $(item[0].parentElement).attr("id")) { return item; }
    });


// Bind to scroll
$(window).scroll(function() {
   // Get container scroll position
   var fromTop = $(this).scrollTop() + topMenuHeight
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastScrollId !== id) {
       // Set/remove active class
       menuItems.parent().end().filter("[href='#"+lastScrollId+"']").parent().removeClass("active");
       lastScrollId = id;
       menuItems.parent().end().filter("[href='#"+id+"']").parent().addClass("active");
   }  

  var subCur = subItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   subCur = subCur[subCur.length-1];
   var subId = subCur && subCur.length ? subCur[0].id : "";
   
   if (lastSubId !== subId) {
       // Set/remove active class
       menuItems.parent().end().filter("[href='#"+lastSubId+"']").removeClass("active");
       lastSubId = subId;
       menuItems.parent().end().filter("[href='#"+subId+"']").addClass("active");
   }  
});