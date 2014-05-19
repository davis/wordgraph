var messages = [];
var messageId = 456365477738664;
var token = 'CAACEdEose0cBAD7XznF2KNDoOoXYzVwhpaelL4czpe0V6b5hvfzPRy7bEFzbwNm0mH7IEZBKsP1Go1f5eKkeLRIGWfO8toaxIehg1WwQfY49aEpPetHMUUg1HriPkIYtwRe5SjWVT4LzrYSHM4rOjg7NxIIVI19D9xsUju25UBaZAhUwN71upl8BEKBAMZD';

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
).then(process).then(function() {
    var blob = new Blob([JSON.stringify(messages)], {type: 'text/json'});
    location.href = URL.createObjectURL(blob);
});
