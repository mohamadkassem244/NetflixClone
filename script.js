window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add("netflix_nav_scrolled");
      } else {
        document.getElementById("navbar").classList.remove("netflix_nav_scrolled");
      }
    }


function xScrolling(containerId) {
        var container = document.getElementById(containerId);
        var isMouseDown = false;
        var startX;
        var scrollLeft;
        container.addEventListener("mousedown", function (e) {
          isMouseDown = true;
          startX = e.pageX - container.offsetLeft;
          scrollLeft = container.scrollLeft;
        });
        container.addEventListener("mouseleave", function () {
          isMouseDown = false;
        });
        container.addEventListener("mouseup", function () {
          isMouseDown = false;
        });
        container.addEventListener("mousemove", function (e) {
          if (!isMouseDown) return;
          e.preventDefault();
          var x = e.pageX - container.offsetLeft;
          var walk = (x - startX) * 1;
          container.scrollLeft = scrollLeft - walk;
        });
}

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if(!isMobile){
  xScrolling("scrollContainer1");
  xScrolling("scrollContainer2");
}


