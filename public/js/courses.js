

const courses = require('../data/courses20-21.json');

function byInstructorEmail(inst){
    let cs = courses.filter(course=>(course.instructor[2].includes(inst)))
    return cs    
}


module.exports = {courses,byInstructorEmail};
