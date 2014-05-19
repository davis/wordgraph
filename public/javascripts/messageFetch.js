$(function(){

  var messages = [];
  var token = 'CAACEdEose0cBAPsc5EojEPsnGCVpG05fBKSV1N2WrZAJJ8ngZB55cAkWQA82ZBSaGbiOUOcI9rpRxMxT5kAjGmhhSSieTjtXFEuMYYOEtVIrFYC9ZCkuSSdT5P45ZBBvuniyPGZCZCFPDxkZBFhiRr0BRKje0ZBG7ylmeiJ10ImU8k3mpY5DdoPNT5yZCc6qZBF5jUZD';

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
  var messageId = $('.thread-id').val();
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
