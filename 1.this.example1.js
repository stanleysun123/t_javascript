// you need run this in console

// Example1
var obj = {
    foo: function () { console.log(this.bar) },
    bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo() // =>1
foo() // =>2

//Example2

function a(){
    var user = "testuser";
    console.log(this.user); //undefined
    console.log(this);　　//Window
}
window.a();



// --> out put will same with below

function a(){
    var user = "testuser";
    console.log(this.user); //undefined
    console.log(this);　　//Window
}
window.a();

// if your define global var for windows

function a(){
    var user = "testuser";
    console.log(this.user); //gobal user
    console.log(this);　　//Window
}
var user = 'gobal user'
window.a();


// guess what output ?

var o = {
    user:"testuser",
    fn:function(){
        console.log(this.user); //testuser
    }
}
window.o.fn();

//Because object o call this fn(), this point to o, o.user = 'testuser'


