let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById("switch");

button.addEventListener("click",function (){
    if(input1.value.length > 0 && input2.value.length > 0){
        let value1 = input1.value;
        let value2 = input2.value;
        input1.value = value2;
        input2.value = value1;
    }
})