// append an svg to the body
var svg = d3.select('.container').append('svg')
  .append('g');

var common = ['the', 'that', 'in', 'it', 'is', 'we', 'all', 'a', 'an', 'by', 'to', 'you', 'me', 'he', 'she', 'they', 'we', 'how', 'it', 'i', 'are', 'to', 'for', 'of'];

// trying to add occurence of word to an author's usecount -- proving to be very difficult
function parseMessages(messages) {
  console.log('messages', messages)
  console.log(messages.to)
  var people = {};
  for(var person in messages.to.data) {
    people[person.name] = { words: {} };
  }
  for(var message in messages.comments.data) {
    var author = message.from.name;
    var split = message.message.split(' ');
    for(var word in split) {
      if(people[author].words[word]) {
        people[author].words[word]++;
      } else {
        people[author].words[word] = 1;
      }
    }
  }
  console.log(people)
  return people;
}

// countWords: count words in an array of strings and return an object
// with the counts of each word
function countWords(messages) {
  var words = {};
  for(var i = 0; i < messages.length; i++) {
    var split = messages[i].message.split(' ');
    for(var j = 0; j < split.length; j++) {
      if(!words[split[j]] && common.indexOf(split[j]) === -1) {
        words[split[j]] = 1;
      } else if(words[split[j]]){
        words[split[j]]++;
      }
    }
  }

  var result = {
    columns: ['total'],
    axis: ['count']
  };
  for(var word in words) {
    if(words[word] > 1) { // leaving out words that only happen once
      result.columns.push(words[word]);
      result.axis.push(word);
    }
  }
  return result;
}



















