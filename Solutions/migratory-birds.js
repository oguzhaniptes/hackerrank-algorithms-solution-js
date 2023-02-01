function migratoryBirds(arr) {
    let birdType = [0, 0, 0, 0, 0]
    let answer = 0;
    arr.map(type => {
        switch (true) {
            case (type == 1):
                birdType[0]++
                break;
            case (type == 2):
                birdType[1]++
                break;
            case (type == 3):
                birdType[2]++
                break;
            case (type == 4):
                birdType[3]++
                break;
            case (type == 5):
                birdType[4]++
                break;
            default:
        }
    })

    let moreType = Math.max(...birdType);

    for (let i = 0; i < birdType.length; i++) {
        if (moreType == birdType[i]) {
            answer = i + 1
            break
        }
    }
    return answer
}