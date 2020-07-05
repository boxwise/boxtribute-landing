var a = 0;
$(window).scroll(function () {
  $('.counter-value').each(function(index) {
    var $this = $(this)
    var oTop = $this.offset().top - window.innerHeight;
    if(a == index && $(window).scrollTop() > oTop) {
      countTo = $this.attr('data-count');
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 3000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
            console.log(this.countNum)
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
      a +=1;
    }
  })
});