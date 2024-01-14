const binaryFind = (arr, x, left, right) => {

    if (left === right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (x === arr[mid]) {
        return mid;
    } else if (x > arr[mid]) {
        return binaryFind(arr, x, mid + 1, right);
    } else {
        return binaryFind(arr, x, left, mid);
    }
}


console.log(binaryFind([0, 1, 2, 3, 4, 5, 6], 6, 0, 7));