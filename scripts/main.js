function generateAkanname(){

    // let akanForm = document.getElementById("akanForm");
    // akanForm.addEventListener("submit", (e) => {
    //     e.preventDefault();
        
        femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"];
        maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi","Kwame"];

       var gender = document.getElementsByName("gender")
        var dateOfBirth = document.getElementById("date").value
        
        days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
       
        var date = new Date(dateOfBirth);
       var dayOfTheWeek = date.getDay();
       
       
       for (var i = 0; i < gender.length; i++) {
           if (gender[i].checked) {
              if (gender[i].value === "male") {
                  document.getElementById("reveal-result").innerHTML="born on a" + days[dayOfTheWeek] + "Your Akan Name" +maleAkanNames[dayOfTheWeek] 
              }
              else {
                  document.getElementById("reveal-result").innerHTML= "born on a" + days[dayOfTheWeek] + "Your Akan Name" + femaleAkanNames[dayOfTheWeek] 
              }
           }
           
           
           
       }
        
        
//         let akanName;
//         
//         let bornDay;
//         if (dayOfTheWeek == 0 && gender == "female") {
//             bornDay = "Sunday";
//             akanName = femaleAkanNames[0];
//         } else if (dayOfTheWeek == 0 && gender == "male") {
//             bornDay = "Sunday";
//             akanName = maleAkanNames[0];
//         } else if (dayOfTheWeek == 1 && gender == "female") {
//             bornDay = "Monday";
//             akanName = femaleAkanNames[1];
//         } else if (dayOfTheWeek == 1 && gender == "male") {
//             bornDay = "Monday";
//             akanName = maleAkanNames[1];
//         } else if (dayOfTheWeek == 2 && gender == "female") {
//             bornDay = "Tuesday";
//             akanName = femaleAkanNames[2];
//         } else if (dayOfTheWeek == 2 && gender == "male") {
//             bornDay = "Tuesday";
//             akanName = maleAkanNames[2];
//         } else if (dayOfTheWeek == 3 && gender == "female") {
//             bornDay = "Wednesday";
//             akanName = femaleAkanNames[3];
//         } else if (dayOfTheWeek == 3 && gender == "male") {
//             bornDay = "Wednesday";
//             akanName = maleAkanNames[3];
//         } else if (dayOfTheWeek == 4 && gender == "female") {
//             bornDay = "Thursday";
//             akanName = femaleAkanNames[4];
//         } else if (dayOfTheWeek == 4 && gender == "male") {
//             bornDay = "Thursday";
//             akanName = maleAkanNames[4];
//         } else if (dayOfTheWeek == 5 && gender == "female") {
//             bornDay = "Friday";
//             akanName = femaleAkanNames[5];
//         } else if (dayOfTheWeek == 5 && gender == "male") {
//             bornDay = "Friday";
//             akanName = maleAkanNames[5];
//         } else if (dayOfTheWeek == 6 && gender == "female") {
//             bornDay = "Saturday";
//             akanName = femaleAkanNames[6];
//         } else if (dayOfTheWeek == 6 && gender == "male") {
//             bornDay = "Saturday";
//             akanName = maleAkanNames[6];
//         }
    
//         let result = document.getElementById("reveal-result").innerHTML = "You were born on a " + bornDay + " so your akan name is " + akanName + "!"
//         document.getElementById("akanForm").reset();
  
    
var form = document.getElementById("akanForm")
function handleForm(event) {
 event.preventDefault();   
}
form.addEventListener("submit", handleForm);
};

