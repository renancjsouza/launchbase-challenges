const developer = {
    name: 'Renan',
    age: '29',
    technologies: [
        {
            name: 'C++',
            expertise: 'Desktop'
        },
        {
            name: 'Python',
            expertise: 'Data Science'
        },
        {
            name: 'JavaSCript',
            expertise: 'Web/Mobile'
        }
    ]
};

console.log(`The user ${developer.name} is ${developer.age} years old and uses ${developer.technologies[0].name} technology with expertise in ${developer.technologies[0].expertise}.`);