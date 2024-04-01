function enableHorizontalScrolling(containerId) {
  var container = document.getElementById(containerId);
  var isDragging = false;
  var startX;
  var scrollLeft;

  container.addEventListener("mousedown", function (e) {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", function () {
    isDragging = false;
  });

  container.addEventListener("mouseup", function () {
    isDragging = false;
  });

  container.addEventListener("mousemove", function (e) {
    if (!isDragging) return;
    e.preventDefault();
    var x = e.pageX - container.offsetLeft;
    var walk = (x - startX) * 1;
    container.scrollLeft = scrollLeft - walk;
  });

  container.addEventListener("touchstart", function (e) {
    isDragging = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("touchmove", function (e) {
    if (!isDragging) return;
    e.preventDefault();
    var x = e.touches[0].pageX - container.offsetLeft;
    var walk = (x - startX) * 1;
    container.scrollLeft = scrollLeft - walk;
  });

  container.addEventListener("touchend", function () {
    isDragging = false;
  });
}

enableHorizontalScrolling("scrollContainer1");
enableHorizontalScrolling("scrollContainer2");