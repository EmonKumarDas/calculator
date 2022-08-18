let getvalue = '';
document.getElementById("btn-1").addEventListener("click", function () {
    // store value of btn-1 
    let num1 = getNum("btn-1");
    let gettotal = document.getElementById("total");
    getvalue += (num1);
    let get_Total = parseFloat(getvalue);
    gettotal.innerText = get_Total;
});

document.getElementById("btn-2").addEventListener("click", function () {
    // store value of btn-1 
    let num2 = getNum("btn-2");
    let gettotal = document.getElementById("total");
    getvalue += (num2);
    let get_Total = parseFloat(getvalue);
    gettotal.innerText = get_Total;


});
document.getElementById("btn-3").addEventListener("click", function () {
    // store value of btn-1 
    let num2 = getNum("btn-3");
    let gettotal = document.getElementById("total");
    getvalue += (num2);
    let get_Total = parseFloat(getvalue);
    gettotal.innerText = get_Total;


});
document.getElementById("btn-4").addEventListener("click", function () {
    // store value of btn-1 
    let num2 = getNum("btn-4");
    let gettotal = document.getElementById("total");
    getvalue += (num2);
    let get_Total = parseFloat(getvalue);
    gettotal.innerText = get_Total;


});
document.getElementById("btn-5").addEventListener("click", function () {
    // store value of btn-1 
    let num2 = getNum("btn-5");
    let gettotal = document.getElementById("total");
    getvalue += (num2);
    let get_Total = parseFloat(getvalue);
    gettotal.innerText = get_Total;


});
document.getElementById("btn-6").addEventListener("click", function () {
    // store value of btn-1 
    let num2 = getNum("btn-6");
    let gettotal = document.getElementById("total");
    getvalue += (num2);
    let get_Total = parseFloat(getvalue);
    gettotal.innerText = get_Total;



});
document.getElementById("btn-7").addEventListener("click", function () {
    // store value of btn-1 
    let num2 = getNum("btn-7");
    let gettotal = document.getElementById("total");
    getvalue += (num2);
    let get_Total = parseFloat(getvalue);
    gettotal.innerText = get_Total;



});
document.getElementById("btn-8").addEventListener("click", function () {
    // store value of btn-1 
    let num2 = getNum("btn-8");
    let gettotal = document.getElementById("total");
    getvalue += (num2);
    let get_Total = parseFloat(getvalue);
    gettotal.innerText = get_Total;



});
document.getElementById("btn-9").addEventListener("click", function () {
    // store value of btn-1 
    let num2 = getNum("btn-9");
    let gettotal = document.getElementById("total");
    getvalue += (num2);
    let get_Total = parseFloat(getvalue);
    gettotal.innerText = get_Total;
   


});
document.getElementById("btn-10").addEventListener("click", function () {
    // store value of btn-1 
    let num2 = getNum("btn-10");
    let gettotal = document.getElementById("total");
    getvalue += (num2);
    let get_Total = parseFloat(getvalue);
    gettotal.innerText = get_Total;


});

document.getElementById("clear").addEventListener("click",()=>{
    document.getElementById("sum").innerText = 0;
    document.getElementById("total").innerText = 0;

});



Sum('btn-11');
minus('btn-12');
multiply('btn-13');
divided('btn-14');

