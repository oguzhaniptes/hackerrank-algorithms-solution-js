function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let downApple = 0;
    let downOrange = 0;
    let apple = apples.map((down) => {
        s <= a + down && a + down <= t ? downApple++ : downApple;
    })
    let orange = oranges.map((down) => {
        s <= b + down && b + down <= t ? downOrange++ : downOrange;
    })
    console.log(downApple)
    console.log(downOrange)
    return;
}