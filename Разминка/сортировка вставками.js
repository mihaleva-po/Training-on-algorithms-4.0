const sortPaste = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let elem = arr[i];
        let index = i;
        while (arr[index - 1] > elem && index > 0) {
            arr[index] = arr[index - 1];
            index--;
        }
        arr[index] = elem;
    }
    return arr;
}

console.log(sortPaste([3, 6, 1, 2, 8, 4, 1]));