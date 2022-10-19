const $buttons = document.querySelectorAll(".calculator button");
let $displayField = document.querySelector(".displayField");
let $historyField = document.querySelector(".history");


$buttons.forEach((button) => {
    button.addEventListener('click', function(){
        const value = button.innerText.trim();
        const result = $displayField.innerText.trim();
        
    try{
        if(result == "Error" ||
        result == "NaN" ||
        result == "Infinity" ||
        result == "0"){
            $displayField.innerText = "";
        }
        if(value == "%"){
            let result = parseFloat($displayField.innerText)/100;
            $displayField.innerText = result;
            $historyField.append(" % = " + result + " || ")
            return;
        }
        if(value == "="){
            let result = eval( $displayField.innerText.trim() ) 
            $displayField.innerText = Math.round(result *100000000000000)/100000000000000 ;
            $historyField.append(" = " +result + " || ");
            return;
        }
        if(value == "C"){
            $displayField.innerText = "0";
            
            return;
        }
        if(value == "<"){
            let d = "s";
            let h = "h"
            d = $displayField.innerText; 
            h = $historyField.innerText;
            $displayField.innerText = d.slice(0, -1);
            $historyField.innerText = h.slice(0, -1);
            return;
        }


        $displayField.append(value);
        $historyField.append(value);
        if($displayField.innerText == "."){
            $displayField.innerText = "0."
        }
    }catch(e){
        console.log(e);
        $displayField.innerText = "Error"
    }
    })
})

//Styling the header letters
var headerClass = document.querySelector(".header");
var headerArray = headerClass.innerText.split("");
var headerHTML = "";
headerArray.forEach((letter) =>{
    if (letter != " ")
     headerHTML += "<span class = 'effekt' >" + letter + "</span>"
    else
    headerHTML += " "

    console.log(letter)
})
headerClass.innerHTML = headerHTML

