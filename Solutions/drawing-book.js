function pageCount(n, p) {
    let result1 = 0, result2 = 0;

    p % 2 == 0 ? p = p + 1 : p = p;

    for (let i = 1; i < n; i = i + 2) {
        if (i != p) { result1++; }
        else { break }
    }

    for (let j = (n % 2 == 0 ? n + 1 : n); 0 < j; j = j - 2) {
        if (j != p) { result2++ }
        else { break }
    }

    return (result1 < result2 ? result1 : result2)
}