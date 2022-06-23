function change(){

    var clc = 0;
    var check =0;
    
    
    if (document.getElementById("custom").checked == true) {
        document.getElementById("sb").disabled = true;
        clc = (document.getElementById("price").value*document.getElementById("bahsis").value)/100;
        console.log("clc : " + clc)
        check = parseInt(document.getElementById("price").value);

        console.log("clc : " + check)
        var toplam = check + parseInt(clc);
        console.log("New Check : ----- "+ toplam + "----- per check :----- "+ (toplam/10));
        console.log("Per tip : ---- " + (clc/10));
    }
    else
    {
        clc = document.getElementById("price").value*document.getElementById("sb").value/100;
        check += clc;
        console.log("New Check : "+ check + " per check : "+ (check/10));
        console.log("Per tip " + (clc/10));
    }  
    
}
