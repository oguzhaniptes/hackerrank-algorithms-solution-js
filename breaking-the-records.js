function breakingRecords(scores) {
    let min = scores[0], max = scores[0];
    let minCount = 0, maxCount = 0;
    scores.map(check => {
        if (min < check) {
            min = check
            minCount++
        }
        if (max > check) {
            max = check
            maxCount++
        }
    })
    let result = [minCount, maxCount]
    return (result);
}