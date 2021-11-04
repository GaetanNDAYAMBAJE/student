const students=JSON.parse(localStorage.getItem("students"))||[];
//1. 
//save
//hide or show
document
.getElementById("btn-add-student")
.addEventListener("click", function (e){
  document.getElementById("formcontainer")
  .classList.remove("hideorshow");
});
//close tab
document.getElementById('btnclose')
.addEventListener('click', function (e){
    e.preventDefault();
    document.getElementById("formcontainer")
    .classList.add("hideorshow");
});

document
.getElementById('submitdata')
.addEventListener('click', function (e){
  let name=document.getElementById('name').value;
  let email=document.getElementById('email').value;
  let phone=document.getElementById('phone').value;
  let student={name,email,phone};
  students.push(student);
  //JSON.stringify:help to store everything in javascript.
  localStorage.setItem("students",JSON.stringify(students));
  location.reload();
});
let studentsList=document.getElementById("studentid");
for(let i=0;i<students.length;i++){
    let listItem=document.createElement('li');
    listItem.classList.add("listitem");
    let personalInfo=document.createElement('div');
    let actions=document.createElement('div');
    actions.classList.add("actions");

    let studentName=document.createElement('h2');
    let studentEmail=document.createElement('p');
    let studentPhone=document.createElement('p');
    let removeStudent=document.createElement('button');
     //<button>Remove student</button>
    //set data to tags
    removeStudent.innerHTML="Remove student";
    studentName.innerHTML=students[i].name;
    studentEmail.innerHTML=students[i].email;
    studentPhone.innerHTML=students[i].phone;

    //append tags to their parents
    personalInfo.appendChild(studentName);
    personalInfo.appendChild(studentEmail);
    personalInfo.appendChild(studentPhone);
    actions.appendChild(removeStudent);

    listItem.appendChild(personalInfo);
    listItem.appendChild(actions);
    studentsList.appendChild(listItem);
}