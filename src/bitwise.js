var nQueens = (n) => {
	var solution = [];
	var isAttacked = (square, visited) => {
		var place = square - n;
		var bitmask = 0;
		while (place >= 0) {
			bitmask += Math.pow(2, place);
			place -= n;
		}
		place = square - n + 1;
		while (place >= 0 && place % n !== 0) {
			bitmask += Math.pow(2, place);
			place -= n - 1;
		}
		place = square - n - 1;
		while (place >= 0 && place % n !== n - 1) {
			bitmask += Math.pow(2, place);
			place -= n + 1;
		}
		return (visited & bitmask) !== 0;
	};

	var recurse = (row, visited) => {
		if (row >= n) {
			solution.push(visited);
		} else {
			var start = row * n;
			var end = start + n;
			while (start < end) {
				if (!isAttacked(start, visited)) {
					var bitmask = Math.pow(2, start);
					var nextVisited = (bitmask | visited);
					recurse(row + 1, nextVisited);
				}
				start++;
			} 
		}
	};

	var parse = () => {
		var textSolution = [];
		for (var i = 0; i < solution.length; i++) {
			var result = (solution[i] >>> 0).toString(2);
			var length = Math.pow(n, 2);
			while (result.length < length) result = '0' + result;
			var re = new RegExp('.{1,' + n + '}', 'g');
			textSolution.push(result.match(re));
		}
		return textSolution;
	};

	recurse(0, 0);
	return parse();
};