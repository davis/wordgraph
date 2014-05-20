// TODO: clean this up to be DRY
function fetchUsers (threadId, callback) {
  var token = FB.getAccessToken();
  var users = {};
  FB.api('/' + threadId, { access_token: token }, function(response) {
    for(var user in response.to.data) {
      users[response.to.data[user].name] = {words: {}};
    }
    console.log('fetchUsers.js - users', users);
    callback(users);
  });
}
