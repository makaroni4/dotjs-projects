(function() {
  function drawLessonsCount(count) {
    if($(".dot-js-lessons-count").length) {
      $(".dot-js-lessons-count").text(count);
    } else {
      $(".topbar-nav-main").append("<li style='display: block; color: #fff; padding: 8px 15px;'>Осталось уроков: <span class='dot-js-lessons-count'>" + count + "</span></li>");
    }
  }

  function countLessons() {
    var count = 0;

    $(".skill-tree .lessons-left:visible").each(function(index, element) {
      var text = $(element).text();

      if(text) {
        count += text.split("/")[1] - text.split("/")[0];
      }
    })

    return count;
  }

  var MutationObserver = window.MutationObserver;
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      var newNodes = mutation.addedNodes;
      var $nodes = $(newNodes);

      $nodes.each(function() {
        if($(this).find(".skill-tree .lessons-left:visible").length) {
          drawLessonsCount(countLessons());
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true
  });
})();
