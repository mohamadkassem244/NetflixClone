function enableHorizontalScrolling(containerId) {
  
    var container = document.getElementById(containerId);
    var isMouseDown = false;
    var startX;
    var scrollLeft;
  
    function handleMouseDown(e) {
      isMouseDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    }
  
    function handleMouseLeave() {
      isMouseDown = false;
    }
  
    function handleMouseUp() {
      isMouseDown = false;
    }
  
    function handleMouseMove(e) {
      if (!isMouseDown) return;
      e.preventDefault();
      var x = e.pageX - container.offsetLeft;
      var walk = (x - startX) * 1;
      container.scrollLeft = scrollLeft - walk;
    }
  
    function handleTouchStart(e) {
      isMouseDown = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    }
  
    function handleTouchMove(e) {
      if (!isMouseDown) return;
      e.preventDefault();
      var x = e.touches[0].pageX - container.offsetLeft;
      var walk = (x - startX) * 1;
      container.scrollLeft = scrollLeft - walk;
    }
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);
  
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
  }


enableHorizontalScrolling("scrollContainer1");
enableHorizontalScrolling("scrollContainer2");
