const fs = require('fs');
const data = require('./data.json');

exports.post = function(req, res) {
    const keys = Object.keys(req.body);

    for(key of keys) {
        if(req.body[key] == "")
            return res.send("Please, fill all fields.")
    }

    let {avatar_url, name, birth, education_level, class_type, subjects} = req.body;

    birth = Date.parse(birth);
    const created_at = Date.now();
    const id = Number(data.teachers.length + 1);

    data.teachers.push({
        id,
        name,
        avatar_url,
        birth,
        education_level,
        class_type,
        subjects,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write error.");

        return res.redirect('/teachers');
    });
}