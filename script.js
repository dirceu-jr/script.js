// OOP JS

var App = (function() {

  // XMLHttpRequest for JSON responses
  var jsonXHR = function(url, method, data, successHandler, errorHandler) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    // mind file uploads
    if (!(data instanceof FormData)) {
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    }
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        var status = xhr.status;
        if (status == 200) {
          var data = JSON.parse(xhr.responseText);
          successHandler && successHandler(data);
        } else {
          errorHandler && errorHandler(status);
        }
      }
    }
    xhr.send(data);
  }

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
