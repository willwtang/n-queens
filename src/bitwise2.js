
var nQueens = (n) => {
  var count = 0;
  var aBunchOfOnes = Math.pow(2, n) - 1;

  var addQ = (leftDiagonal, column, rightDiagonal) => {
  	if (column === aBunchOfOnes) {
  		count++;
  	} else {
  		var possible = ~(leftDiagonal | column | rightDiagonal);
  		while (possible & aBunchOfOnes) {
  			var bit = (possible & -possible); // gets the first bit that's a 1
  			possible -= bit; // gets rid of the 1;
  			addQ((leftDiagonal|bit) >> 1, (column | bit), (rightDiagonal|bit) << 1);
  		}
  	}
  }
  addQ(0, 0, 0);
  return count;
};