function countingValleys(steps, path) {
    let count = 0;
    let e = 0;
    let enterPath = false;

    let arr = [...path]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "D") {
            e--
        }
        else {
            e++
        }

        if (e < 0) { enterPath = true }

        if (e == 0 && enterPath) {
            count++
            enterPath = false
        }
    }
    return count
}