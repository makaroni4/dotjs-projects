(function() {
  var levelStat = function(level) {
    var distr = {
      total: 0,
      solved: 0
    }

    var questions = $("table").find("tbody tr").map(function(i, tr) {
      var $tr = $(tr);

      if($tr.find("td:nth-child(3) .fa-lock").length) {
        return;
      }

      if($tr.find("td:nth-child(6)").text() == level) {
        distr.total += 1;

        if($tr.find("td:nth-child(1) .fa-check").length > 0) {
          distr.solved += 1;
        }
      }
    });

    var $table = $(".table-responsive");
    var levelInfo = level + ": " + distr.solved + "/" + distr.total;
    var $levelBlock = $("." + level);

    if($levelBlock.length > 0) {
      $levelBlock.text(levelInfo);
    } else {
      $levelBlock = $("<div />", {
        class: level,
        html: levelInfo
      });

      $table.prepend($levelBlock);
    }
  }

  var MutationObserver = window.MutationObserver;
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      var newNodes = mutation.addedNodes;
      var $nodes = $(newNodes);

      $nodes.each(function() {
        var $this = $(this);

        if($this.is("table")) {
          setTimeout(function() {
            levelStat("Hard");
            levelStat("Medium");
            levelStat("Easy");
          }, 2000);
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
