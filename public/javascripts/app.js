//TODO remove
var $ = $;

console.log('Welcome to wordgraph! Hope you can find what words you and your friends like to use!');
console.log('You\'ll also find logs here that may be useful for tinkering around with the app as you wish');
console.log('You can find the repo over at https://github.com/davis/wordgraph');
console.log('Happy hacking!');

$('.submit-id').click(function() {
  console.log('if nothing happens, try clicking "log in" again, then hitting go');
  var $threadId = $('.thread-id').val();
  FB.getLoginStatus(function(response) {
    if(response.status === 'connected') {
      fetchUsers($threadId, function(u) {
        fetchMessages($threadId, u, function(m, u) {
          parseMessages(m, u, function(users, allWords) {
            visualize(users, allWords, getParams());
          });
        });
      });
    }
  });
});

$('.filter-common').click(function() {
  visualize(users, allWords, getParams());
});

$('body').on('keydown', function(e) {
  var set;
  if(e.keyCode === 38) {
    e.preventDefault();
    set = parseFloat($('.threshold').val()) + 1;
    $('.threshold').val(set);
  } else if (e.keyCode === 40 && $('.threshold').val() > 1) {
    e.preventDefault();
    set = $('.threshold').val() - 1;
    $('.threshold').val(set);
  }
  visualize(users, allWords, getParams());
});

function getParams() {
  var params = {};
  params.filterCommon = $('.filter-common').is(':checked');
  params.threshold = $('.threshold').val();
  return params;
}
