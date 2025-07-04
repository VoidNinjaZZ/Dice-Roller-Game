function roller(){
const input = document.getElementById("in").value;
// const rollBtn = document.getElementById("rollBtn");
const diceImages = document.getElementById("diceImages");
const diceResult = document.getElementById("diceResult");
const images= [];
const values = [];


for(let i=0;i<input;i++){
    let value = Math.floor(Math.random()*6+1);
    // console.log(number);
    values.push(value);
    // console.log(values);
    images.push(`<img src="./images/${value}.png " alt="Dice:${value}">`);
}
diceResult.textContent= `Dice:${values.join(', ')}`;
diceImages.innerHTML=`${images.join(' ')}`;
}