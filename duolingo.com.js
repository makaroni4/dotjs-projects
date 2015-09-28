$(function(){
  function drawLessonsCount(count) {
    $(".topbar-nav-main").append("<li style='display: block; color: #fff; padding: 8px 15px;'>Осталось уроков: " + count + "</li>");
  }

  function countLessons() {
    var count = 0;

    $(".lessons-left").each(function(index, element) {
      var text = $(element).text();

      if(text) {
        count += text.split("/")[1] - text.split("/")[0];
      }
    })

    return count;
  }

  function timerHandler() {
    console.log(".JS >>> Trying to find number of lessons");

    if($(".skill-tree").length) {
      var numberOfLessons = countLessons();
      drawLessonsCount(numberOfLessons);
      stopTimer();
    }
  }

  function stopTimer() {
    clearInterval(timer);
  }

  var timer = setInterval(function(){ timerHandler() }, 1000);
});
