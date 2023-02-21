function sockMerchant(n, ar) {
    let newAr = ar.sort((x, y) => x - y)
    let count = 0;
    for(let i = 0; i < n; i++){
        if(newAr[i] === newAr[i+1]){
            count++
            i++
        }
    }
    return count
}