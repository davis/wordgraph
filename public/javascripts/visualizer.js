// append an svg to the body
var svg = d3.select('.container').append('svg')
  .append('g');

var common = ['the', 'that', 'in', 'it', 'is', 'we', 'all', 'a', 'an', 'by', 'to', 'you', 'me', 'he', 'she', 'they', 'we', 'how', 'it', 'i', 'are', 'to', 'for', 'of', 'and', 'I', 'was'];

function visualize(users, allWords, params) {
  var xAxis = ['x'];
  var userInfo = [];
  var userList = [];

  for(var user in users) {
    userInfo.push([user]);
    userList.push(user);
  }
  console.log(userInfo);

  for(var word in allWords) {
    if( !params.filterCommon || (params.filterCommon && common.indexOf(word) === -1) ) {
      if( allWords[word] > params.threshold && word !== '' ) {
        xAxis.push(word);
        for (var i = 0; i < userInfo.length; i++) {
          var count = users[userInfo[i][0]].words[word] || 0;
          userInfo[i].push(count);
        }
      }
    }
  }

  userInfo.unshift(xAxis);

  console.log(userInfo);
  console.log('visualizer.js - allWords', xAxis);

  var chart = c3.generate({
    bindto: '.container',
    data: {
        x : 'x',
        columns: userInfo,
        groups: [
          userList
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'categorized' // this needed to load string x value
        }
    }
});
}



















