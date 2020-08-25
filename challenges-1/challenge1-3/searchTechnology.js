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

function worksCSS(user) {
    let works = false;

    for (let x = 0; x < user.technologies.length; x++) {
        if (user.technologies[x] === 'CSS') {
            works = true;
        }
    }
    
    return works;
}

for (let x = 0; x < users.length; x++) {
    let css = worksCSS(users[x]);

    if (css) {
        console.log(`The user ${users[x].name} works with CSS.`)
    }
}
