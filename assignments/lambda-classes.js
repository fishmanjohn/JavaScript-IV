// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        `Hello, my name is ${this.name}, I am from ${this.location}`
    }
}
class Instructor extends Person{
    constructor(attributes){
    super(attributes);
    this.specialty = attributes.specialty,
    this.favLanguage = attributes.favLanguage,
    this.catchPhrase =  attributes.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    };
    grade(Student,subject){
        return `${Student.name} recieves a perfect score on ${subject}.`
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.peviousBackground = attributes.peviousBackground,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects
    }
    listsSubjects(){
        return `${this.favSubjects.toString()} are my favorite subjects.`
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallange(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
};

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel its stand up time.`
    }
    debugsCode(Student,subject){
        `${this.name} debugs code ${Student.name}'s code on ${subject}.`
    }
}


///Code Here for test objects.

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const brit = new Instructor({
    name: 'Brit',
    location: 'Canada',
    age: "it impolite to ask a woman her age",
    favLanguage: 'Less',
    specialty: 'Front-end',
    catchPhrase: `All dressed chips and my bali dog are all I need.`
  });



const tommy = new  ProjectManager(
  {name: "Tommy", 
  location: "somewhere",
  age: "guess",
 specialty: "Node.Js",
 favLanguage: "C#" ,
catchPhrase: "What's sleep?",
gradClassName: "Web21",
faveInstructor: "Luis" });

const chris = new ProjectManager(
    {name: "Chris", 
    location: "Sarasoda",
    age: "guess",
   specialty: "React",
   favLanguage: "JavaScript" ,
  catchPhrase: "Come on in.",
  gradClassName: "web22",
  faveInstructor: "Dan"
})

const john = new Student({
    name: "John",
    location: "In my van in the woods.",
    age: 27,
    peviousBackground: "Mountain-bike Technician",
    className: "web25",
    favSubjects: ["HTML","CSS","Color therory","Surfboard Design"]
});

const bob = new Student({
    name: "Bob",
    location: "Namibia",
    age: "as old as time itself",
    peviousBackground: "sand bottom point sweeper",
    className: "",
    favSubjects: ["HTML","CSS","Color therory","Surfboard Design"]

});


console.log(john.location);
console.log (bob.listsSubjects())
console.log(chris.debugsCode(john,"JS"))
console.log(brit.grade(bob,"dopenes"))
console.log(fred.catchPhrase)
console.log(bob.location)
console.log(john.listsSubjects())