const students=JSON.parse(localStorage.getItem("students"))||[];
let updateIndex=null;
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
  let id=students.length+1;
  let student={id,name,email,phone};

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
    removeStudent.innerHTML="<i class=\"fas fa-user-minus\"></i>Remove student";
    let update = document.createElement("button");
    update.innerHTML="<i class=\"fas fa-user-edit\"></i>Update";
    studentName.innerHTML=students[i].name;
    studentEmail.innerHTML=students[i].email;
    studentPhone.innerHTML=students[i].phone;

    //append tags to their parents
    personalInfo.appendChild(studentName);
    personalInfo.appendChild(studentEmail);
    personalInfo.appendChild(studentPhone);
    actions.appendChild(update)
    actions.appendChild(removeStudent);

    listItem.appendChild(personalInfo);
    listItem.appendChild(actions);
    studentsList.appendChild(listItem);

    removeStudent.addEventListener('click',function(e){
     let newStudents=students.filter(function (student) {
       return student.id !=students[i].id;
     });
     localStorage.setItem("students",JSON.stringify(newStudents));
     location.reload();
    });
    update.addEventListener("click", function (e) {
      document.getElementById("nameupdate").value=students[i].name;
      document.getElementById("emailupdate").value=students[i].email;
      document.getElementById("phoneupdate").value=students[i].phone;
      updateIndex=i;
      document.getElementById("formcontainerupdate").classList.remove("hideorshow");
    });
}
document.getElementById("submitdataupdate").addEventListener('click', function (e) {
  e.preventDefault();
  let name=document.getElementById("nameupdate").value;
  let email=document.getElementById("emailupdate").value;
  let phone=document.getElementById("phoneupdate").value;
  let student={name, email, phone};
  if(updateIndex !=null){
    console.log(updateIndex)
    students[updateIndex]=student;
    console.log(students[updateIndex])
    localStorage.setItem("students", JSON.stringify(students));
   location.reload();
  }
});