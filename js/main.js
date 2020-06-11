var FA;
class FpTest {
  constructor() {
  }
}

$(document).ready(function(){

  FA = new FpTest()
  FA.login = function (authData, signature, method) {
    document.getElementById('authData').value = authData;
    document.getElementById('signature').value = signature;
    document.getElementById('authAttempted').value = 'true';
        
    __doPostBack('authData', 'login', method);
    return '';
  }

  $("#submitBtn").click(function(){
    document.getElementById('authData').value = authData;
    document.getElementById('signature').value = signature;
    document.getElementById('authAttempted').value = 'true';
          
    __doPostBack('authData', 'login');
  });

  document.getElementById("lastmod").innerHTML = "This page was updated on " + document.lastModified;
});