// var width = 960,
//     height = 500;

// append an svg to the body
var svg = d3.select('.container').append('svg')
    // .attr('width', width)
    // .attr('height', height)
  .append('g');

// countWords: count words in an array of strings and return an object
// with the counts of each word
function countWords(messages) {
  var common = ['the', 'that', 'in', 'it', 'is', 'we', 'all', 'a', 'an', 'by', 'to', 'you', 'me', 'he', 'she', 'they', 'we', 'how', 'it', 'i', 'are', 'to', 'for', 'of'];
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



















