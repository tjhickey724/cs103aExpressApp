

const courses = require('../data/courses20-21.json');
//console.dir(courses[2000])
function byInstructorEmail(inst){
    let cs = courses.filter(course=>(course.instructor[2].includes(inst)))
    return cs    
}

//console.dir(byInstructorEmail("tjhickey"))

module.exports = {courses,byInstructorEmail};
