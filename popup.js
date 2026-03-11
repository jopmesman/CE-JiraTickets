document.addEventListener('DOMContentLoaded', function(){
     let jiraTicketText = document.getElementById('jiraticket');

     jiraTicketText.focus();
     jiraTicketText.addEventListener("keyup", (event) => {
          var keycode = (event.keyCode ? event.keyCode : event.which);

          if(keycode == '13'){
               chrome.storage.sync.get({
                    url: ''
               }, function(items) {
                    var newURL = items.url + jiraTicketText.value;
                    chrome.tabs.create({ url: newURL });
               });

          }
     });
});