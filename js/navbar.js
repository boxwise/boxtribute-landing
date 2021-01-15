var lastScrollId,
    lastSubId,
    topMenu = $("#navOptions"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a.menu-item"),
    subMenuItems = topMenu.find("a.sub-item"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    }),
    subItems = subMenuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


// Bind to scroll
$(window).scroll(function() {
   // Get container scroll position
   var fromTop = $(this).scrollTop() + topMenuHeight
   
   // Get id of current scroll item
   var currentElem = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   currentElem = currentElem[currentElem.length-1];
   var scrollId = currentElem && currentElem.length ? currentElem[0].id : "";
   
   if (lastScrollId !== scrollId) {
       // Set/remove active class
       menuItems.parent().end().filter("[href='#"+lastScrollId+"']").parent().removeClass("active");
       lastScrollId = scrollId;
       menuItems.parent().end().filter("[href='#"+scrollId+"']").parent().addClass("active");
   }  

  var subCurrentElem = subItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   subCurrentElem = subCurrentElem[subCurrentElem.length-1];
   var subId = subCurrentElem && subCurrentElem.length ? subCurrentElem[0].id : "";
   
   if (lastSubId !== subId) {
       subMenuItems.parent().end().filter("[href='#"+lastSubId+"']").removeClass("active");
       lastSubId = subId;
       subMenuItems.parent().end().filter("[href='#"+subId+"']").addClass("active");
   }  
});