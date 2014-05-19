var messages = [];
var messageId = 300559876768618; //etc
var token = 'CAACEdEose0cBAGlgEm88Yox64NgZBgcytY0pMbE0PFrNQ3F5NDEZB0UqD5YbGhStkwdIkUDvPh0LJM4RuM1ZCr3pNFbyrHhDWpqRCS5YJl4hj8ZAGswvn0B7zKAag63eEyn5urtBQZC8hFZBiPxswmc64tTZA5gkg28WzePRgQaw3LFlZAZAYUjM5MCZBJw9nQkQQZD';

function process(data) {
    if(data.data.length) {
        messages = messages.concat(data.data);
    }
    if(data.paging && data.paging.next) {
        console.log('Getting next page');
        return $.getJSON(data.paging.next).then(process);
    }
}

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
