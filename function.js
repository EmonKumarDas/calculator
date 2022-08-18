function getNum(numId) {
    let num1 = document.getElementById(numId);
    let num1_value = parseFloat(num1.innerText);
    return num1_value;
}
function Sum(passbtn) {
    document.getElementById(passbtn).addEventListener("click", function () {
        let get_sum = document.getElementById("sum");
        let get_sum_value = parseFloat(get_sum.innerText);
        get_sum.innerText = parseFloat(getvalue) + get_sum_value;
        getvalue = "0";
        document.getElementById("total").innerText = parseFloat(getvalue);
    });
}
function minus(passbtn) {
    document.getElementById(passbtn).addEventListener("click", function () {
        let get_sum = document.getElementById("sum");
        let get_sum_value = parseFloat(get_sum.innerText);
        get_sum.innerText = get_sum_value - parseFloat(getvalue);
        getvalue = "0";
        document.getElementById("total").innerText = parseFloat(getvalue);
    });
}
function multiply(passbtn) {
    document.getElementById(passbtn).addEventListener("click", function () {
        let get_sum = document.getElementById("sum");
        let get_sum_value = parseFloat(get_sum.innerText);
        if (get_sum_value == 0) {
            get_sum_value = 1;
            console.log(get_sum_value);
            get_sum.innerText = (get_sum_value) * parseFloat(getvalue);
            getvalue = "0";
            document.getElementById("total").innerText = parseFloat(getvalue);
        }

        else{
            get_sum.innerText = (get_sum_value) * parseFloat(getvalue);
            getvalue = "0";
            document.getElementById("total").innerText = parseFloat(getvalue);
        }
    });
}

function divided(passbtn) {
    document.getElementById(passbtn).addEventListener("click", function () {
        let get_sum = document.getElementById("sum");
        let get_sum_value = parseFloat(get_sum.innerText);
        if (get_sum_value == 0) {
            get_sum_value = 1;
            console.log(get_sum_value);
            get_sum.innerText = parseFloat(getvalue) / (get_sum_value) ;
            getvalue = "0";
            document.getElementById("total").innerText = parseFloat(getvalue);
        }

        else{
            get_sum.innerText = (get_sum_value) / parseFloat(getvalue);
            getvalue = "0";
            document.getElementById("total").innerText = parseFloat(getvalue);
        }
    });
}
