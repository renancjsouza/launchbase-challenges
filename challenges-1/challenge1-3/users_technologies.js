const users = [
    {
        name: 'Renan',
        technologies: ['JavaScript', 'Clojure', 'Progress 4GL', 'HTML', 'CSS']
    },
    {
        name: 'Jasmine',
        technologies: ['JavaScript', 'CSS']
    },
    {
        name: 'Tuane',
        technologies: ['HTML', 'Node.js']
    }
];

for (let x = 0; x < users.length; x++) {
    console.log(`${users[x].name} works with ${users[x].technologies}`);
}