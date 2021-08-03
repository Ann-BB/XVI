// #1 ციკლის დახმარებით, ეკრანზე გამოიტანეთ ყველა ელემენტი, დაწყებული მეორე ელემენტისგან მე-5ის ჩათვლით;
let cars=["audi", "bmw", "lexus", "volkswagen", "porsche", "audi"]; 
// პასუხი
for (let i=1; i < cars.length; i++) {
    console.log(cars[i]);
};
// #2 შექმენით სახელების მასივი და დაბეჭდეთ ის სახელები რომლისს სიმბოლების რაოდენობა 3 ზე მეტია;
let names=["giorgi", "ani", "sandro", "lasha", "ni",  "aleqsi", "liza", "nia", "ia"];
// პასუხი
for(let i=0; i<names.length; i++){
    if (names[i].length>3){
        console.log(names[i]);
    }
}
//  #3 შექმენით ციფრების მასივი და გამოიტანეთ მარტო ლუწი რიცხვები და მარტო კენტი რიცხვები;
let numbers3=[2, 3, 8, 9, 7, 10, 12, 15];
// პასუხი
for (let i=0; i<numbers3.length; i++){
    if (numbers3[i]%2==0){
        console.log("Even- " + numbers3[i])
    }  else {
        console.log("Odd- " + numbers3[i])
    };
}
// მეორე გზით პასუხი (ლუწი)
for(let item of numbers3){
    if(item % 2 ==0){
        console.log(item);
    }
}
// @4 ჩადგმული მასივიდან ამოიღეთ მეორე ელემენტი; ანუ 500;
let numbers4= [15, 67, 100, 5, 7, [80, 500]];
// პასუხი
console.log(numbers4[5][1]);
// #5 ამოიღეთ person ცვლადის თვალის ფერი;
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50, 
    eyecolor: "blue"
  };
//   პასუხი
console.log(person.eyecolor)
// ამოხსნის მეორე ვარიანტი
console.log(person['eyecolor']);
//   #6 შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი;
var numbers6=[29, 21, 15, 89, 78, 87, 102, 246, 65, 784, 23];
// პასუხი
for(var i=0; i<numbers6.length; i++){ 
    console.log(numbers6[i]);
};
// მეორე გზით
for( var item of numbers6){
    console.log(item);
};
//   #7 შექმენით სახელების მასივი....
let persons=["Sandro", "Ann", "Giorgi", "Mariami", "Nika"];
// (1)პასუხი
if (persons.length=== 5 && persons[persons.length - 1] === 'Nika'){
    console.log(persons.length, (persons[4]));
};
// (1)პასუხი
if(persons.length === 7 || persons[0] === 'Sandro'){
    console.log(persons.length, persons[0]);
};
    // #8: რას დააუბრუნებს 6 === “6”? ახსენით რატო?
    // პასუხი
// ასეთ შემთხვევაში 6 === "6" დააბრუნებს "FALSE"_ს, რადგან ორი  "="-ის შემთხვევაში ხდება ტიპეის კონვერტაცია, ხოლო სამი "="-ის შედარებისას კონვერტაცია არ ხდება.