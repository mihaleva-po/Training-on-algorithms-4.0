const sortMerge = (arr) => {
    if (arr.length === 1) {
        return arr;
    }

    let mid = parseInt(arr.length / 2);

    let left = sortMerge(arr.slice(0, mid));

    let right = sortMerge(arr.slice(mid));

    let sortedArray = [];

    let l = 0;
    let r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            sortedArray.push(left[l]);
            l++;
        } else {
            sortedArray.push(right[r]);
            r++;
        }
    }

    if (l < left.length) {
        sortedArray.push(...left.slice(l));
    }

    if (r < right.length) {
        sortedArray.push(...right.slice(r));
    }

    return sortedArray;

}

console.log(sortMerge([5, 7, 2, 5, 1]));