// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking', 'Running'],
//     role: [2, 'author']
// };

// person.role = [0, 'admin'];

// console.log(person);

// for(const hooby of person.hobbies) {
//     console.log(hooby.toUpperCase());
// }

enum Role { ADMIN = 'ADMIN', READ_ONLY = 10, AUTHOR = 100 };

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking', 'Running'],
    role: Role.ADMIN
};

if(person.role === Role.ADMIN) {
    console.log('is Admin');
}