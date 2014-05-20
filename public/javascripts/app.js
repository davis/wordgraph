//TODO remove
var $ = $;

$('.submit-id').click(function() {
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

$('.threshold').on('keydown', function(e) {
  var set;
  if(e.keyCode === 38) {
    set = parseFloat($('.threshold').val()) + 1;
    $('.threshold').val(set);
  } else if (e.keyCode === 40 && $('.threshold').val() > 1) {
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
