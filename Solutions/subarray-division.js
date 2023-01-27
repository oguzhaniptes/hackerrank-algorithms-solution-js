function birthday(s, d, m) {
    let count = 0, sum;
    for (let i = 0; i < s.length; i++) {
        sum = s.slice(i, i + m).reduce((a, b) => a + b)
        if (sum == d) count++
    }
    return count
}