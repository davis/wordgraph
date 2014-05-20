$('.submit-id').click(function() {
  var $threadId = $('.thread-id').val();
  fetchUsers($threadId, function(u) {
    fetchMessages($threadId, u, function(m, u) {
      parseMessages(m, u, function(users, allWords) {
        visualize(users, allWords);
      });
    });
  })
});
