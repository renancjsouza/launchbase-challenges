const fs = require('fs');
const intl = require('intl');
const data = require('../data.json');
const { age, date, graduation } = require('../utils')

exports.index = function(req, res) {
    return res.render('teachers/index', { teachers: data.teachers });
}

exports.create = function(req, res) {
    return res.render('teachers/create');
}

exports.post = function(req, res) {
    const keys = Object.keys(req.body);
    
    for(key of keys) {
        if(req.body[key] == "")
        return res.send("Please, fill all fields.")
    }
    
    birth = Date.parse(req.body.birth);
    const created_at = Date.now();

    let id = 1;
    const lastTeacher = data.teachers[data.teachers.length - 1];

    if ( lastTeacher ) {
        id = Number(lastTeacher.id + 1);
    }
    
    data.teachers.push({
        id,
        ...req.body,
        birth,
        created_at
    })
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write error.");
        
        return res.redirect('/teachers');
    });
}

exports.show = function(req, res) {
    const { id } = req.params;

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id;
    });

    if(!foundTeacher) return res.send('Teacher not found!');

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        education_level: graduation(foundTeacher.education_level),
        subjects: foundTeacher.subjects.split(','),
        created_at: intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
    };

    return res.render('teachers/show', { teacher });
}

exports.edit = function(req, res) {
    const { id } = req.params;
    
    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id;
    });

    if(!foundTeacher) return res.send('Teacher not found!');

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth).iso
    };

    return res.render('teachers/edit', { teacher });   
}

exports.update = function(req, res) {
    const { id } = req.body;
    let index = 0;

    const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
        if ( teacher.id == id ) {
            index = foundIndex;
            return true;
        }
    })

    const teachers = {
        ...foundTeacher,
        ...req.body,
        id: Number(id),
        birth: Date.parse(req.body.birth)
    }

    data.teachers[index] = teachers;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write error!");

        return res.redirect(`/teachers/${id}`);
    })

}

exports.delete = function(req, res) {
    const { id } = req.body;

    const filteredTeacher = data.teachers.filter(function(teacher) {
        return teacher.id != id;
    })

    data.teachers = filteredTeacher;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if ( err ) return res.send("Write error!");

        return res.redirect("/teachers");
    })
}