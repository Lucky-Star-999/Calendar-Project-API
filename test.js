let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isDuplicated(arr, x) {
    for (let i =0; i<arr.length; i++) {
        if (x == arr[i]) {
            return true;
        }
    }
    return false;
}

function generate(arr) {

    let id = Math.floor(Math.random() * 12);

    while (isDuplicated(arr, id)) {
        id = Math.floor(Math.random() * 12);
    }

    return id;
}


console.log(generate(arr1));
console.log(generate(arr1));
console.log(generate(arr1));
console.log(generate(arr1));
console.log(generate(arr1));