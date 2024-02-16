// code your solution here
const record = [{year: '2015', result: 'W' }, {year: '2014', result: 'N/A'}, {year: '2013', result: 'L'}]

// function superbowlWin(array) {
//     let win = array.find(function(object) {
//       return object.result === "W";
//     });
// }

function superbowlWin(array)  {
    let win = array.find(function(object) {
    return object.result === "W" ;
     });
     
     if (win) {
        return win.year;
      } else {
        return undefined;
      }
}


console.log(superbowlWin(record));
