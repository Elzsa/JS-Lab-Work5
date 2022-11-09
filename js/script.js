const firstName = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const city = document.getElementById("city");
const province = document.getElementById("province");
const membership = document.querySelectorAll("input[name='membership']");


///////// Create HTML elements with JS
// the div as already been created in the HTML with id = output
let div = document.getElementById("output");

// function that is triggered when we click on submit
function userForm(){

    // TEST
    /*
    console.log("Hello");
    console.log("First name : "+ firstName.value);
    console.log("last name : "+ lastName.value);
    console.log("email : "+ email.value);
    console.log("city : "+ city.value);
    console.log("province : "+ province.value);
    */

    let fullName = "Full Name : "+ firstName.value + " "+ lastName.value;
    let texte1 = document.createTextNode(fullName);
    let mail = "Email : " + email.value;
    let texte2 = document.createTextNode(mail);
    let address = "Address : "+ city.value+" "+ province.value;
    let texte3 = document.createTextNode(address);
    let mem = "Membership: ";
    

    switch(true){
        case membership[0].checked :
            //console.log(membership[0].value);
            mem += membership[0].value;
            break;
        case membership[1].checked :
            //console.log(membership[1].value);
            mem += membership[1].value;
            break;
        case membership[2].checked :
            //console.log(membership[2].value);
            mem += membership[2].value;
            break;
    }

    let texte4 = document.createTextNode(mem);

    div.appendChild(texte1);
    let br1 = document.createElement("BR");
    div.appendChild(br1);
    div.appendChild(texte2);
    let br2 = document.createElement("BR");
    div.appendChild(br2);
    div.appendChild(texte3);
    let br3 = document.createElement("BR");
    div.appendChild(br3);
    div.appendChild(texte4);


    




}

//-------------------------------------------------------------------

let autoSum = document.getElementById("autoSum");
let avg = document.getElementById("average");
let max = document.getElementById("max");
let min = document.getElementById("min");

let result; 
let output = document.getElementById("output2"); // <= output of the result

function myExcelFuns() {
    console.log("hello myExcelFUns");
    let numberStr = document.getElementById("numbers").value;
    if(numberStr == ""){
       alert("You have to insert a number!");
        
    }else{
        console.log(numberStr.value);
        console.log(numberStr);
        console.log(typeof numberStr);
        numberStr = (numberStr).trim();
        console.log("After trim, in numberStr : "+numberStr);
        let numberArr = numberStr.split(" "); // <= le délimiteur en parametre, ici c'est l'espace
        console.log("After splitting, in numberArr : "+ numberArr);

        let finalNumericArray = numberArr;
        console.log("Length of numberArr " + numberArr.length );
        for(i=0; i < numberArr.length; i++){
            console.log("Hello again");
            finalNumericArray[i] = Number(finalNumericArray[i]);
        }

        let a = finalNumericArray.indexOf(0);
        console.log("before : "+ finalNumericArray)
        while(a !== -1){
            finalNumericArray.splice(a,1);
            console.log("new : "+ finalNumericArray);
            a = finalNumericArray.indexOf(0);
        }
        console.log("Final : "+ finalNumericArray);



        if(autoSum.checked){

            console.log("AutoCheck choosed")
            let sum = 0 ;
            for(i = 0 ; i < finalNumericArray.length ; i++ ){
                sum += finalNumericArray[i];
            }
            console.log("somme : "+ sum);
            result = sum;
            output.value = result;
            return result;

        }else if(avg.checked){

            console.log("avg choosed")
            let sum = 0 ;
            for(i = 0 ; i < finalNumericArray.length ; i++ ){
                sum += finalNumericArray[i];
            }
            let avg = sum / finalNumericArray.length ;
            console.log("moyenne : "+ avg);
            result = avg;
            output.value = result;
            return result;

        }else if(max.checked){

            console.log("max choosed")
            let j = 1;
            let i = 0;
            let valueI = finalNumericArray[i];
            console.log("first time valueI : "+valueI)
            let valueJ = finalNumericArray[j];
            console.log("first time valueJ : "+valueJ)
            console.log("tab length : "+finalNumericArray.length)
            while(j < finalNumericArray.length ){
                if(valueJ > valueI){
                    valueI = valueJ;
                    console.log("valueI : "+valueI)
                    i = j;
                }
                j++;
                valueJ = finalNumericArray[j];
            }
            console.log("max is : " + valueI)
            result = valueI;
            output.value = result;
            return result;

        }else{

            console.log("min choosed")
            let j = 1;
            let i = 0;
            let valueI = finalNumericArray[i];
            console.log("first time valueI : "+valueI)
            let valueJ = finalNumericArray[j];
            console.log("first time valueJ : "+valueJ)
            console.log("tab length : "+finalNumericArray.length)
            while(j < finalNumericArray.length ){
                if(valueJ < valueI){
                    valueI = valueJ;
                    console.log("valueI : "+valueI)
                    i = j;
                }
                j++;
                valueJ = finalNumericArray[j];
            }
            console.log("min is : " + valueI)
            result = valueI;
            output.value = result;
            return result;
        }

    

    }
}




    



