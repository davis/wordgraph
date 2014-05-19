// var width = 960,
//     height = 500;

// append an svg to the body
var svg = d3.select('.container').append('svg')
    // .attr('width', width)
    // .attr('height', height)
  .append('g');

var testmsgs = [
  'hello hi hi davis',
  'hi davis',
  'hello',
  'hello',
  'patrick patrick patrick patrick patrick patrick patrick patrick',
  'what is up',
  'nothing much',
  'more stuff stuff stuff stuff',
  'stuff unique words words la lalala qwerty'
];

var messages2 = [
  'hello hi davis',
  'hi',
  'hello',
  'nothing',
  'patrick patrick patrick patrick patrick patrick patrick patrick',
  'patrick patrick stuff',
  'what is up',
  'nothing much',
  'more stuff stuff stuff stuff',
  'stuff unique words words la lalala qwerty'
];


// countWords: count words in an array of strings and return an object
// with the counts of each word
function countWords(messages) {
  var words = {};
  for(var i = 0; i < messages.length; i++) {
    var split = messages[i].message.split(' ');
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
    axis: ['count']
  };
  for(var word in words) {
    result.columns.push(words[word]);
    result.axis.push(word);
  }
  return result;
}

// var chart = c3.generate({
//   bindto: '.container',
//   data: {
//     x: 'count',
//     columns: [
//       countWords(testmsgs).axis,
//       countWords(testmsgs).columns,
//     ],
//     groups: [
//       ['count']
//     ],
//     type: 'bar'
//   },
//   axis: {
//     x: {
//       type: 'categorized',
//     }
//   },
//   transition: {
//     duration: 1000
//   }
// });

// setTimeout(function () {
//   chart.load({
//     columns: [
//       countWords(messages2).axis,
//       countWords(messages2).columns,
//     ],
//   });
// }, 1000);



















