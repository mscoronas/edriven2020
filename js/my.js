function Form(){
    var subtotal, tax, total, amountpaid, change, percent, pay;
    percent = 12;
    pay = document.getElementById("pay")
    subtotal = document.getElementById("subtotal").value;
    tax = Number((percent/100) * subtotal);
    total = Number(subtotal)+ Number(tax);
    amountpaid = Number(total);
    change = Number(amountpaid-total);

    if(subtotal > 99){
        document.getElementById("tax").value = tax.toFixed(2);
        document.getElementById("total").value = total.toFixed(2);
        document.getElementById("amountpaid").value = amountpaid.toFixed(2);
        document.getElementById("amountpaid").disabled = false;
        document.getElementById("amountpaid").min = total.toFixed(2);
        document.getElementById("change").value = change.toFixed(2);
        pay.style.backgroundColor = "red";
        pay.disabled = false;
    }
    else{
        document.getElementById("tax").value = "";
        document.getElementById("total").value = "";
        document.getElementById("amountpaid").value = "";
        document.getElementById("amountpaid").disabled = true;
        document.getElementById("amountpaid").min = "";
        document.getElementById("change").value = "";
        pay.style.backgroundColor = "red";
        pay.disabled = true;
    }
};
function changevalue(){
    var subtotal, tax, total, amountpaid, change;
    subtotal = document.getElementById("subtotal").value;
    tax = document.getElementById("tax").value;
    total =  document.getElementById("total").value;
    amountpaid = document.getElementById("amountpaid").value;
    change = Number(amountpaid-total);

    document.getElementById("change").value = change.toFixed(2);

        if(change > "-1"){
            pay.style.backgroundColor = "#5de95d";
            pay.disabled = false;
        }
        else{
            pay.style.backgroundColor = "#ff0000";
            pay.disabled = true;
        }
};
