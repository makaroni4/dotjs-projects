(function() {
  var MutationObserver = window.MutationObserver;
  var observer = new MutationObserver(function(mutations) {
    var stickyFooter = document.getElementsByClassName("js-stickyFooter")[0];

    if(stickyFooter) {
      stickyFooter.remove();
    }
  });

  observer.observe(document.body);
})();
