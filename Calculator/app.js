const $buttons = document.querySelectorAll(".calculator button");
let $displayField = document.querySelector(".displayField");


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
            return;
        }
        if(value == "="){
            let result = eval( $displayField.innerText.trim() ) 
            $displayField.innerText = Math.round(result *100000000000000)/100000000000000 ;
            return;
        }
        if(value == "C" || value == "Error" || value == "NaN"){
            $displayField.innerText = "0";
            return;
        }
        if(value == "<"){
            let d = "s";
            d = $displayField.innerText; 
            $displayField.innerText = d.slice(0, -1);
            return;
        }


        $displayField.append(value);
        if($displayField.innerText == "."){
            $displayField.innerText = "0."
        }
    }catch(e){
        console.log(e);
        $displayField.innerText = "Error"
    }
    })
})

