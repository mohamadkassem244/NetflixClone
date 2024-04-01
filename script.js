function enableHorizontalScrolling(containerId) {
  var container = document.getElementById(containerId);
  var isDragging = false;
  var startX;
  var scrollLeft;

  // Function to handle mouse down event
  function handleMouseDown(e) {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  }

  // Function to handle mouse move event
  function handleMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    var x = e.pageX - container.offsetLeft;
    var walk = (x - startX) * 1;
    container.scrollLeft = scrollLeft - walk;
  }

  // Function to handle mouse up event
  function handleMouseUp() {
    isDragging = false;
  }

  // Function to handle touch start event
  function handleTouchStart(e) {
    if (e.touches.length > 1) {
      return; // Ignore multitouch gestures
    }
    isDragging = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  }

  // Function to handle touch move event
  function handleTouchMove(e) {
    if (!isDragging || e.touches.length > 1) return;
    e.preventDefault();
    var x = e.touches[0].pageX - container.offsetLeft;
    var walk = (x - startX) * 1;
    container.scrollLeft = scrollLeft - walk;
  }

  // Function to handle touch end event
  function handleTouchEnd() {
    isDragging = false;
  }

  // Add event listeners for mouse events
  container.addEventListener("mousedown", handleMouseDown);
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseup", handleMouseUp);

  // Add event listeners for touch events
  container.addEventListener("touchstart", handleTouchStart);
  container.addEventListener("touchmove", handleTouchMove);
  container.addEventListener("touchend", handleTouchEnd);
}

enableHorizontalScrolling("scrollContainer1");
enableHorizontalScrolling("scrollContainer2");
