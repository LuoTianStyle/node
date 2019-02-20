function User(id,name){
    this.id = id,
    this.name = name,
    this.enter = function () {
        console.log(this.name + '进入图书馆')
    }
}
module.exports = User;