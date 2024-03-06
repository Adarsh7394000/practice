let id=0;
function myFunction() {
const StudentName=document.getElementById("Name").value;
const mathMark=document.getElementById("MathMarks").value
const Scince_Mark=document.getElementById("Science_Marks").value
const English_Mark=document.getElementById("English_Marks").value
const Hindi_Mark=document.getElementById("Hindi_Marks").value
const ComputerMark=document.getElementById("computer_science_marks").value
const Gender=document.getElementById("gender").value
let students =[];
function create(StudentName,mathMark,Scince_Mark,English_Mark,Hindi_Mark,ComputerMark,Gender){
    id++;
    var status=true;
    var a={StudentId:id,name:StudentName,maths_marks:mathMark,science_marks:Scince_Mark,english_marks:English_Mark,hindi_marks:Hindi_Mark,computer_science_marks:ComputerMark,gender:Gender,status:status};
    students.push(a);
}
function Read(){
    for(let i=0;i<students.length;i++){
        if(students[i].status==true){
            console.log(JSON.stringify(students[i]));
        }
       
    }
}
function update(id,StudentName,mathMark,Scince_Mark,English_Mark,Hindi_Mark,ComputerMark,Gender){
    for(let i=0;i<students.length;i++){
        if(students[i].StudentId==id){
            students[i].name=StudentName;
            students[i].maths_marks=mathMark;
            students[i].science_marks=Scince_Mark;
            students[i].english_marks=English_Mark;
            students[i].hindi_marks=Hindi_Mark;
            students[i].computer_science_marks=ComputerMark;
            students[i].gender=Gender;
        }
    }
}
function del(id){
    for(let i=0;i<students.length;i++){
        if(students[i].StudentId==id){
            students[i].status=false;
            // students.splice(i,1);
        }
    }
}
create(StudentName,mathMark,Scince_Mark,English_Mark,Hindi_Mark,ComputerMark,Gender);
// Read();
// del(1);
// Read(); 
  let tbl = document.createElement("table");
  console.log(tbl);
 
  const tblBody = document.createElement("tbody");
  for (let i = 0; i < students.length; i++) {
    const row = document.createElement("tr");
    const exampleObj=students[i];
for (let key in exampleObj) {
    if (exampleObj.hasOwnProperty(key)) {
        const cell = document.createElement("td");
        value = exampleObj[key];
        const cellText = document.createTextNode(`${value}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
}
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
  tbl.setAttribute("border", "2");
    
//    var x=document.getElementById("Name").value;
//    document.getElementById("ab").innerHTML=x
//    console.log(x);
  }