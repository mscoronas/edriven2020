
let student = {
    ID: "ID: " + "1101",
    Firstname: "Firstname: " + "Inday",
    Lastname: "Lastname: " + "Doding",
    Course: "Course: " + "Bachelor of Science",
    Age: "Age: " + "20",
    Birthdate: "Birthdate: " + "July 26, 1998",
    Address: "Address: " + "Davao City"

};
for(prop in student){
    console.log(student[prop]);
}
