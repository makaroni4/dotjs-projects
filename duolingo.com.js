(function() {
  function drawLessonsCount(count) {
    if($(".dot-js-lessons-count").length) {
      $(".dot-js-lessons-count").text(count);
    } else {
      $(".topbar-nav-main").append("<li style='display: block; color: #fff; padding: 8px 15px;'>Осталось уроков: <span class='dot-js-lessons-count'>" + count + "</span></li>");
    }
  }

  var MutationObserver = window.MutationObserver;
  var lessonsLeft = 0;

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      var newNodes = mutation.addedNodes;
      var $nodes = $(newNodes);

      $nodes.each(function() {
        $(this).find(".lessons-left:visible").each(function() {
          var rawCounts = $(this).text();

          if(rawCounts) {
            var lessonsInChapter = rawCounts.split("/")[1];
            var tookLessonsInChapter = rawCounts.split("/")[0];

            lessonsLeft += lessonsInChapter - tookLessonsInChapter;
          }
        });

        drawLessonsCount(lessonsLeft);
      });
    });
  });

  observer.observe(document.body, {
    childList: true
  });
})();
