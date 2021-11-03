const wordSearch = (letters, word) => {

	const horizontalJoin = letters.map((ls) => ls.join(""));
  let wordPresent = false;

	for (l of horizontalJoin) {
		if (l.includes(word)) {
			wordPresent = true;
		} else {
			}
		}

    if (wordPresent === false) {
    let vertical = verticalJoin(letters);

			for (item of vertical) {

				if (vertical.includes(word)) {
					wordPresent = true;
				} else {
					wordPresent = false;
				}
      }
	}
    console.log(wordPresent);
  return wordPresent

};

const verticalJoin = (nestedArr) => {
	let newArray = [];
	let arraysLength = nestedArr[0].length;

	for (let a = 0; a < arraysLength; a++) {
		newArray.push([]);
	}
	for (let outer = 0; outer < nestedArr.length; outer++) {
		for (let inner = 0; inner < nestedArr[outer].length; inner++) {
			newArray[inner][outer] = nestedArr[outer][inner];
		}
	}
	return newArray;
};

module.exports = wordSearch;

//Pair programmed with @Satya Sindhu

//JoshuaHaughton