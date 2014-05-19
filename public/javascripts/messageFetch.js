$(function(){

  var messages = [];

  function process(data) {
    if(data.data.length) {
      messages = messages.concat(data.data);
    }
    if(data.paging && data.paging.next) {
      console.log('Getting next page');
      return $.getJSON(data.paging.next).then(process);
    }
  }

  $('.submit-id').click(function(){
    messages = [];
  var messageId = $('.thread-id').val();
  var token = $('.token').val();
    $.getJSON(
         'https://graph.facebook.com/' + messageId + '/comments' +
         '?format=json&access_token=' + token
      )
      .then(process)
      .then(function() {
        return messages;
        // location.href = URL.createObjectURL(blob);
      })
      .then(function(messages) {
        var chart = c3.generate({
          bindto: '.container',
          data: {
            x: 'count',
            columns: [
              countWords(messages).axis,
              countWords(messages).columns,
            ],
            groups: [
              ['count']
            ],
            type: 'bar'
          },
          axis: {
            x: {
              type: 'categorized',
            }
          },
          transition: {
            duration: 1000
          }
        });
      });
  });
})
;
