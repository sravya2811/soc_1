function compoundInterest(principal, rate, time,n) {
    const amount = principal * Math.pow((1 + rate / n), n * time);
    const interest = amount - principal;
    return interest;
}
const principal=1000;
const rate=0.05;
const time=10;
const n=4; 
console.log("Compound Interest is: " + compoundInterest(principal, rate, time,n).toFixed(2));