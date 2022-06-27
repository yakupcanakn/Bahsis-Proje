function error(){
    document.getElementById("errormsg").style.visibility='visible';
    document.getElementById("errormsg").style.color="#F45E3E";
    document.getElementById("reset").disabled=false;
    document.getElementById("reset").style.backgroundColor="#71BEC6";
    document.getElementById("reset").style.color="#00494D";
    document.getElementById("reset").style.border="none";
}
function resetbutton(){
    document.getElementById("reset").disabled=false;
    document.getElementById("reset").style.backgroundColor="#71BEC6";
    document.getElementById("reset").style.color="#00494D";
    document.getElementById("reset").style.border="none";""
}
function five(){
  if(document.getElementById("kisisayisi").value<=0)
  {   
    error();
    document.getElementById("lbl1").style.backgroundColor='#c5e4e7';
    document.getElementById("lbl1").style.color='hsl(183, 100%, 15%)';
  }else{
    resetbutton();
    document.getElementById("lbl1").style.backgroundColor='#c5e4e7';
    document.getElementById("lbl1").style.color='hsl(183, 100%, 15%)';
   var price = parseInt(document.getElementById("hesap").value|0);
   var clc = price*5/100;
   var sum = price+clc;
   var perPrice = sum/parseInt(document.getElementById("kisisayisi").value|0);
   var perClc = clc/parseInt(document.getElementById("kisisayisi").value|0);
   document.getElementById("price1").value=perClc;
   document.getElementById("price2").value=perPrice;
  }

}
function fifteen(){
    if(document.getElementById("kisisayisi").value<=0)
    {
     error();
      document.getElementById("lbl2").style.backgroundColor='#c5e4e7';
    document.getElementById("lbl2").style.color='hsl(183, 100%, 15%)';
    }else{
        resetbutton();
       document.getElementById("lbl2").style.backgroundColor='#c5e4e7';
    document.getElementById("lbl2").style.color='hsl(183, 100%, 15%)';
    var price = parseInt(document.getElementById("hesap").value|0);
    var clc = price*15/100;
    var sum = price+clc;
    var perPrice = sum/parseInt(document.getElementById("kisisayisi").value|0);
    var perClc = clc/parseInt(document.getElementById("kisisayisi").value|0);
    document.getElementById("price1").value=perClc;
    document.getElementById("price2").value=perPrice;
    }
    
}
function twenty(){
    if(document.getElementById("kisisayisi").value<=0)
    {
      error();     
      document.getElementById("lbl3").style.backgroundColor='#c5e4e7';
    document.getElementById("lbl3").style.color='hsl(183, 100%, 15%)';
    }else{
        resetbutton();
        document.getElementById("lbl3").style.backgroundColor='#c5e4e7';
    document.getElementById("lbl3").style.color='hsl(183, 100%, 15%)';
        
    var price = parseInt(document.getElementById("hesap").value|0);
    var clc = price*20/100;
    var sum = price+clc;
    var perPrice = sum/parseInt(document.getElementById("kisisayisi").value|0);
    var perClc = clc/parseInt(document.getElementById("kisisayisi").value|0);
    document.getElementById("price1").value=perClc;
    document.getElementById("price2").value=perPrice;
    }
    
}
function twentyfive(){
    if(document.getElementById("kisisayisi").value<=0)
    {
     error();
      document.getElementById("lbl4").style.backgroundColor='#c5e4e7';
    document.getElementById("lbl4").style.color='hsl(183, 100%, 15%)';
    }else{
        resetbutton();
        document.getElementById("lbl4").style.backgroundColor='#c5e4e7';
    document.getElementById("lbl4").style.color='hsl(183, 100%, 15%)';
       
    var price = parseInt(document.getElementById("hesap").value|0);
    var clc = price*25/100;
    var sum = price+clc;
    var perPrice = sum/parseInt(document.getElementById("kisisayisi").value|0);
    var perClc = clc/parseInt(document.getElementById("kisisayisi").value|0);
    document.getElementById("price1").value=perClc;
    document.getElementById("price2").value=perPrice;
    }
   
}
function fifty(){
    if(document.getElementById("kisisayisi").value<=0)
    {
     error();
      document.getElementById("lbl5").style.backgroundColor='#c5e4e7';
    document.getElementById("lbl5").style.color='hsl(183, 100%, 15%)';
    }else{
        resetbutton();
        document.getElementById("lbl5").style.backgroundColor='#c5e4e7';
    document.getElementById("lbl5").style.color='hsl(183, 100%, 15%)';
        
    var price = parseInt(document.getElementById("hesap").value|0);
    var clc = price*50/100;
    var sum = price+clc;
    var perPrice = sum/parseInt(document.getElementById("kisisayisi").value|0);
    var perClc = clc/parseInt(document.getElementById("kisisayisi").value|0);
    document.getElementById("price1").value=perClc;
    document.getElementById("price2").value=perPrice;
    }
    
}
function random(){
    if(document.getElementById("kisisayisi").value<=0)
    {
      error();
      document.getElementById("custom").style.borderStyle="groove";
      document.getElementById("custom").style.borderColor="#c5e4e7";
      document.getElementById("custom").style.backgroundColor="#fff";
    }else{
        resetbutton();
    var price = parseInt(document.getElementById("hesap").value|0);
    var clc = price*parseInt(document.getElementById("custom").value|0)/100;
    var sum = price+clc;
    var perPrice = sum/parseInt(document.getElementById("kisisayisi").value|0);
    var perClc = clc/parseInt(document.getElementById("kisisayisi").value|0);
    document.getElementById("price1").value=perClc;
    document.getElementById("price2").value=perPrice;
    }
}
function kisi(){
    document.getElementById("kisisayisi").style.borderStyle="groove";
    document.getElementById("errormsg").style.color="#F45E3E";
    document.getElementById("kisisayisi").style.borderColor="#F45E3E";
    const input = document.getElementById("kisisayisi");
    const kisisayi = document.getElementById("custom");
    if (document.getElementById("5").checked == true)
     input.addEventListener("keyup",five());
     if (document.getElementById("15").checked == true)
     input.addEventListener("keyup",fifteen());
     if (document.getElementById("20").checked == true)
     input.addEventListener("keyup",twenty());
     if (document.getElementById("25").checked == true)
     input.addEventListener("keyup",twentyfive());
     if (document.getElementById("50").checked == true)
     input.addEventListener("keyup",fifty());
    
}
function hesap(){
    document.getElementById("hesap").style.borderStyle="groove";
    document.getElementById("hesap").style.borderColor="#71BEC6";
}

function reset(){
    document.getElementById("errormsg").style.visibility='hidden';
    document.getElementById("kisisayisi").value=0;
    document.getElementById("price1").value=0;
    document.getElementById("price2").value=0;
    document.getElementById("hesap").value=0;
    document.getElementById("custom").value=" ";
    document.getElementById("custom").placeholder="Custom"; 
    document.getElementById("reset").disabled=true;
    document.getElementById("kisisayisi").style.borderStyle="none";
    document.getElementById("hesap").style.borderStyle="none";   
    document.getElementById("lbl1").style.backgroundColor='hsl(183, 100%, 15%)';
    document.getElementById("lbl1").style.color='hsl(0, 0%, 100%)';
    document.getElementById("lbl2").style.backgroundColor='hsl(183, 100%, 15%)';
    document.getElementById("lbl2").style.color='hsl(0, 0%, 100%)';
    document.getElementById("lbl3").style.backgroundColor='hsl(183, 100%, 15%)';
    document.getElementById("lbl3").style.color='hsl(0, 0%, 100%)';
    document.getElementById("lbl4").style.backgroundColor='hsl(183, 100%, 15%)';
    document.getElementById("lbl4").style.color='hsl(0, 0%, 100%)';
    document.getElementById("lbl5").style.backgroundColor='hsl(183, 100%, 15%)';
    document.getElementById("lbl5").style.color='hsl(0, 0%, 100%)';
    document.getElementById("custom").style.borderStyle="none";
    document.getElementById("custom").style.color="hsl(183, 100%, 15%)";
    document.getElementById("custom").style.backgroundColor="#c5e4e7";
    document.getElementById("reset").style.backgroundColor="#00494D";
    document.getElementById("reset").style.color="#00494D";
    document.getElementById("reset").style.border="none";
    
}
