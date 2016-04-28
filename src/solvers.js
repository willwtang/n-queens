/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = n => {
  var solution = [];
  var arr = [];
  var answer;

  for (var j = 0; j < n; j++) {
    arr.push(0);
  }

  for (var i = 0; i < n; i++) {
    answer = arr.slice(0);
    answer[i] = 1;
    solution.push(answer);
  }

  console.log(`Single solution for ${n} rooks:`, JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = n => {

  var factorial = (n) => {
    if (n <= 1) return 1;

    return n * factorial(n - 1);
  }
  var solutionCount = factorial(n); //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var visited = [];
  var solution = [];
  var arr = [];

  for (var j = 0; j < n; j++) {
    arr.push(0);
  }

  function isAttacked(r, c) {
    for (var i = 0; i < visited.length; i++) {
      var visitedRow = i;
      var visitedCol = visited[i];
      if (r === visitedRow || c === visitedCol || (Math.abs(r - visitedRow) - Math.abs(c - visitedCol) === 0)) return true;
    }
    return false;
  }

  function recurse(row) {
    if (row >= n) {
      solution.push(visited.slice());
    } else {
      for (var i = 0; i < n; i++) {
        if (!isAttacked(row, i)) {
          visited.push(i);
          recurse(row + 1);
          visited.pop();
        }
      }
    }
  } 

  recurse(0);
  solution = solution.length ? solution[0] : solution; //fixme

  function parse() {
    var answer = [];
    for (var i = 0; i < n; i++) {
      var row = arr.slice();
      if (solution[i] !== undefined) row[solution[i]] = 1;
      answer.push(row);
    }
    return answer;
  }

  solution = parse();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var visited = [];
  var solutionCount = 0;

  function isAttacked(r, c) {
    for (var i = 0; i < visited.length; i++) {
      var visitedRow = i;
      var visitedCol = visited[i];
      if (r === visitedRow || c === visitedCol || (Math.abs(r - visitedRow) - Math.abs(c - visitedCol) === 0)) return true;
    }
    return false;
  }

  function recurse(row) {
    if (row >= n) {
      solutionCount++;
    } else {
      for (var i = 0; i < n; i++) {
        if (!isAttacked(row, i)) {
          visited.push(i);
          recurse(row + 1);
          visited.pop();
        }
      }
    }
  }  //fixme

  recurse(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
