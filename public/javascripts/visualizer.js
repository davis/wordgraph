var width = 960,
    height = 500;

// append an svg to the body
var svg = d3.select('.container').append('svg')
    .attr('width', width)
    .attr('height', height)
  .append('g');

var messages = ['hello hi hi davis', 'hi davis', 'hello', 'hello'];


// countWords: count words in an array of strings and return an object
// with the counts of each word
function countWords(messages) {
  var words = {};
  for(var i = 0; i < messages.length; i++) {
    var split = messages[i].split(' ');
    for(var j = 0; j < split.length; j++) {
      if(!words[split[j]]) {
        words[split[j]] = 1;
      } else {
        words[split[j]]++;
      }
    }
  }

  var result = {
    columns: ['total'],
    axis: []
  };
  for(var word in words) {
    result.columns.push(words[word]);
    result.axis.push(word);
  }
  return result;
}

console.log(countWords(messages))

var chart = c3.generate({
  bindto: '.container',
    data: {
      columns: [
        countWords(messages).columns
      ],
      type: 'bar'
    },
    axis: {
      x: {
        type: 'categorized',
        categories: countWords(messages).axis
      }
  }});


















