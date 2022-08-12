module.exports = function towelSort(matrix = []) {
	let result = [];
	for (let i = 0; i < matrix.length; i++) {
		if (matrix.length === 0 || i % 2 === 0) {
			result.push(matrix[i]);
      // length возвращает число элементов массива
		} else if (i % 2 != 0) {
			result.push(matrix[i].reverse());
		}
    //reverse обращает порядок следования элементов массива
    //push добавляет один или более элементов в конец массива и возвращает новую длину массива
	}
	return result.flat();
}
//flat возвращает новый массив с объединёнными в него подмассивами.