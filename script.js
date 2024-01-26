let button=document.addEventListener("submit",function(e){
   e.preventDefault();
   const height=parseInt(document.querySelector("#height").value)
   const weight=parseInt(document.querySelector("#weight").value)
   const result=document.querySelector("#result")

   if(isNaN(height)||height<0||height===" "){
   result.textContent="Invalid Height"}

   else if(isNaN(weight)||weight<0||weight===" "){
   result.textContent="Invalid Weight"}
else{
   let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
   if (bmi < 18.5) {
    result.textContent = ` your BMI is ${bmi} you are Underweight`;
} else if (bmi >= 18.5 && bmi < 24.9) {
    result.textContent = ` your BMI is ${bmi} you are normal weight`;
} else if (bmi >= 25 && bmi < 29.9) {
    result.textContent = ` your BMI is ${bmi} you are over weight`;
} else {
    result.textContent = ` your BMI is ${bmi} you are obese`;
}
}



})