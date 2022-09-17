function initListeners() {
  $("#submit").click((e) => {
    e.preventDefault();
    let allMyStudents = JSON.parse(localStorage.getItem("Student"));

    let studentName = $("#name").val();
    let studentAge = $("#age").val();
    let studentPhone = $("#phone").val();
    let studentEmail = $("#email").val();
    let studentClasses = $("#classes").val();

    //Make sure no input fields are empty
    if (
      studentName != "" &&
      studentAge != "" &&
      studentPhone != "" &&
      studentEmail != "" &&
      studentClasses != ""
    ) {
      //If all input fields are complete, create student object
      let studentObj = {
        name: studentName,
        age: studentAge,
        phone: studentPhone,
        email: studentEmail,
        classes: studentClasses,
      };

      //Push student object to local storage
      allMyStudents.push(studentObj);

      //Stringify the object: turn it into a string
      localStorage.setItem("Student", JSON.stringify(allMyStudents));

      //Empty input fields once button is clicked
      $("#name").val("");
      $("#age").val("");
      $("#phone").val("");
      $("#email").val("");
      $("#classes").val("");
    } else {
      alert("Please fill out all input fields.");
    }
  });

  $("#getStudents").click((e) => {
    e.preventDefault();
    //Add students to div, get the data from local storage with parse
    $("#displayStudents").html("");
    let allMyStudents = JSON.parse(localStorage.getItem("Student"));

    //Loop through each student
    $.each(allMyStudents, function (idx, student) {
      $("#displayStudents").append(
        `<div style="
        height: 475px; 
        width: 320px; 
        background-image: url(./images/background.jpeg); 
        background-size: cover; 
        background-repeat: no-repeat; 
        margin-right: 20px; 
        padding: 15px; color: #fff; 
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
        margin-bottom: 20px;">
        <p> Name: ${student.name}</p><p>Age: ${student.age}</p><p>Phone Number: ${student.phone}</p><p>Email: ${student.email}</p><p>Classes: ${student.classes}</p>
        </div><br><br>`
      );
    });
  });
}

function initSite() {
  if (localStorage) {
    let allStudents = localStorage.getItem("Student");
    if (allStudents) {
      let students = JSON.parse(localStorage.getItem("Student"));
    } else {
      localStorage.setItem("Student", "[]");
      alert("No students added yet.");
    }
  } else {
    console.log("No local storage available.");
  }
}

//Activate
$(document).ready(function () {
  initListeners();
  initSite();
});
