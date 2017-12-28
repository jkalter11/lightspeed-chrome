function validateAuth(){
  // TODO: fix problem with this func not getting called on submit
  var pass = document.login["pass"];
  window.alert("Submitted");
  chrome.storage.sync.get("adminKey", function(recv){
    if (recv === undefined){
      window.alert("No Pass was set");
      if (pass == "admin"){
        window.alert("Setting password");
        //set admin password
      }
    }else {
      //a password was set
      if (pass == recv) {
        // entered password was correct
        window.alert("Password Correct");
      }else{
        window.alert("Wrong Password (Pass set)");
      }
    }
  });
}
