function parseMessages(messages, users, callback) {
  var allWords = {};
  console.log('parseMessages.js - messages', messages);
  console.log('parseMessages.js (start) - users', users);

  for(var i = 0; i < messages.length; i++) {
    var author = users[messages[i].from.name];
    var split = messages[i].message.split(' ');
    for(var j = 0; j < split.length; j++) {
      var word = split[j];
      if(!author.words[word]) {
        author.words[word] = 1;
      } else {
        author.words[word]++;
      }
      if(!allWords[word]) {
        allWords[word] = 1; // populate allWords obj
      } else {
        allWords[word]++;
      }
    }
  }
  console.log('parseMessages.js (end) - users', users);
  console.log('parseMessages.js (end) - allWords', allWords);
  callback(users, allWords);
}
