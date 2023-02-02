function bonAppetit(bill, k, b) {
    let Anna = new Array()
    bill.splice(k, 1, ...Anna)
    let totalBill = bill.reduce((acc, cur) => acc + cur)
    let costPerPerson = totalBill / 2
    if (costPerPerson == b) {
        console.log("Bon Appetit")
    }
    else {
        console.log(b - costPerPerson)
    }
}