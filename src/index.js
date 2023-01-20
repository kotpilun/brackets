module.exports = function check(str, bracketsConfig) {
	const stackArr = [];

    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        let lastStackElem = stackArr[stackArr.length - 1];

        for (let j of bracketsConfig) {
			if ((j.indexOf(currChar) == 0) && (j[0] == j[1])) {
				lastStackElem == j[0] ? stackArr.pop() : stackArr.push(j[0]);
				break;
			}
			if (j.indexOf(currChar) == 0) {
				stackArr.push(currChar);
				break;
			} else if (j.indexOf(currChar) == 1) {
				if (stackArr.length == 0) return false;
				if (lastStackElem == j[0]) {
					stackArr.pop();
					break;
				} else return false;
			}
        }
    }
    return (stackArr.length == 0) ? true : false;
}