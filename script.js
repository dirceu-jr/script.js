var App = (function() {

  function private() {
    console.log("=:)");
  }

  function init() {
    private();
  }

  return {
    init: init
  }

})();

App.init();