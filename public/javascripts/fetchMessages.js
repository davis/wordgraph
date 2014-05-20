// TODO: clean this up to be DRY
function fetchMessages (threadId, users, callback) {
  var token = FB.getAccessToken();
  var messages = [] || messages;
  FB.api('/' + threadId, { access_token: token }, function(response) {
    messages = messages.concat(response.comments.data);

    // get subsequent pages
    if(response.comments.paging && response.comments.paging.next) {
      (function fetchNext (url) {
        $.get(url, function(res) {
          messages = messages.concat(res.data);
          if(res.paging && res.paging.next) {
            fetchNext(res.paging.next);
          } else {
            console.log('fetchMessages.js - messages', messages);
            callback(messages, users);
          }
        });
      })(response.comments.paging.next); // immediate invocation
    }

  });
}
