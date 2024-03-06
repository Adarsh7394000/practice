
let students =[];
function create(id,StudentName,mathMark,Scince_Mark,English_Mark,Hindi_Mark,ComputerMark,Gender){
    var a={StudentId:id,name:StudentName,maths_marks:mathMark,science_marks:Scince_Mark,english_marks:English_Mark,hindi_marks:Hindi_Mark,computer_science_marks:ComputerMark,gender:Gender};
    students.push(a);
}
function Read(){
    for(let i=0;i<students.length;i++){
        console.log(students[i]);
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
            students.splice(i,1);
        }
    }
}
create(1,"Ajay",90,90,90,100,89,"male")
create(4,"Abhinav",90,90,90,100,89,"male")
update(4,"Adarsh",90,90,90,100,89,"male")
Read();
console.log(students);