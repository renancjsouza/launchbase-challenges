module.exports = {
    age: function(timestamp) {
        const today = new Date();
        const birth = new Date(timestamp);

        let age = today.getFullYear() - birth.getFullYear();
        const month = today.getMonth - birth.getMonth();

        if ( month < 0 || month == 0 && today.getDate() < birth.getDate() ) {
            age = age - 1;
        }

        return age;
    },
    date: function(timestamp) {
        const date = new Date(timestamp);

        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        return `${year}-${month}-${day}`;
    },
    graduation: function(education_level) {

        if ( education_level = "HSchool" ) {
            return "High School Diploma";
        }

        if ( education_level = "BDegree" ) {
            return "Bachelor's Degree";
        }

        if ( education_level = "MDegree" ) {
            return "Master's Degree";
        }

        if ( education_level = "Ph.D." ) {
            return "Ph.D. or Advanced Professional Degree";
        }

    }
}