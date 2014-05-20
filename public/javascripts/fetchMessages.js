$(function(){
  $('.submit-id').click(function () {
    getMessages($('.thread-id').val());
  });

  function getMessages (threadId) {
    var token = FB.getAccessToken();
    var messages = [];
    FB.api('/' + threadId, { access_token: token }, function(response) {

    });
  }


});

  // var messages = [];

  // function process(data) {
  //   console.log('data',data)
  //   console.log('data.comments.data', data.comments.data)
  //   if(data.comments.data.length) {
  //     messages = messages.concat(data.comments.data);
  //   }
  //   if(data.paging && data.paging.next) {
  //     console.log('Getting next page');
  //     return $.getJSON(data.paging.next).then(process);
  //   }
  // }

  // $('.submit-id').click(function(){
  //   var messageId = $('.thread-id').val();
  //   // var token = $('.token').val();
  //   $.getJSON(
  //     'https://graph.facebook.com/' + messageId + '?format=json'
  //   )
  //   // .then(process)
  //   .then(function(messages) {
  //     console.log(messages)
  //   })
  // });

  // $('.submit-id').click(function(){
  //   messages = [];
  // var messageId = $('.thread-id').val();
  // var token = $('.token').val();
  //   $.getJSON(
  //        'https://graph.facebook.com/' + messageId +
  //        '?format=json&access_token=' + token
  //     )
  //     .then(process)
  //     .then(function() {
  //       return messages;
  //       // location.href = URL.createObjectURL(blob);
  //     })
  //     .then(function(messages) {
  //       var chart = c3.generate({
  //         bindto: '.container',
  //         data: {
  //           x: 'count',
  //           columns: [
  //             parseMessages(messages).axis,
  //             parseMessages(messages).columns,
  //           ],
  //           groups: [
  //             ['count']
  //           ],
  //           type: 'bar'
  //         },
  //         axis: {
  //           x: {
  //             type: 'categorized',
  //           }
  //         },
  //         transition: {
  //           duration: 1000
  //         }
  //       });
  //     });
  // });
