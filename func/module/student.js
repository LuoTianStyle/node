var User = require('./user.js');
function Student(id,name){
    User.apply(this,[id,name])
    this.study = function(res){
        res.write(this.name + '学习')
    }
}
module.exports = Student;