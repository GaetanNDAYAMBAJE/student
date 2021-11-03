/* <li class="listitem">
          <div>
               <h2>Ndayambaje Gaetan</h2>
               <p>gaetandeo@gmail.com</p>
               <p>0783878328</p>
           </div>
         <div class="actions">
              <button>Remove student</button>

        </div>
     </li> */

     const students=[
    {
     name:"Ndayambaje Gaetan",
     email:"gaetandeo@gmail.com",
     phone:"0783878328",
    },
    {name:"innocent Byiringiro",
     email:"ibyiringiro19@gmail.com",
     phone:"0783209088",
    },
    {name:"Mbonigaba Alexis",
     email:"mbonigabaalexis12@gmail.com",
     phone:"07808973658",
    }
];
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