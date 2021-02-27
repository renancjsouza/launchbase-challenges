module.exports = {
    age: function(timestamp) {
        const today = new Date();
        const birth = new Date(timestamp);

        let age = today.getUTCFullYear() - birth.getUTCFullYear();
        const month = today.getUTCMonth() - birth.getUTCMonth();

        if ( month < 0 || month == 0 && today.getUTCDate() < birth.getUTCDate() ) {
            age = age - 1;
        }

        return age;
    },
    date: function(timestamp) {
        const date = new Date(timestamp);

        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        };
    },
    graduation: function(education_level) {
        if ( education_level == "HSchool" ) {
            return "High School Diploma";
        }

        if ( education_level == "BDegree" ) {
            return "Bachelor's Degree";
        }

        if ( education_level == "MDegree" ) {
            return "Master's Degree";
        }

        if ( education_level == "Ph.D." ) {
            return "Ph.D. or Advanced Professional Degree";
        }

    },
    grade: function(grade_school) {
        if ( grade_school == "6" ) {
            return "6th Grade - Middle School";
        }
        if ( grade_school == "7" ) {
            return "7th Grade - Middle School";
        }
        if ( grade_school == "8" ) {
            return "8th Grade - Middle School";
        }
        if ( grade_school == "9" ) {
            return "Freshman";
        }
        if ( grade_school == "10" ) {
            return "Sophomore";
        }
        if ( grade_school == "11" ) {
            return "Junior";
        }
        if ( grade_school == "12" ) {
            return "Senior";
        }
    }
}