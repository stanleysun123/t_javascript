
1. javascript **this**  keyword
 
**this** keyword refers to an object, that **object** which is executing the current bit of javascript code.

In a **method**, this refers to the owner object.
Alone, this refers to the global object.
In a **function**, this refers to the global object. In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.

```javascript
var obj = {
  foo: function () { console.log(this.bar) },
  bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo() // 1
foo() // 2

```

first line, this point to who call this function as foo.  foo.bar =1,  so output 1 
second line , window call the foo function,  window.var =2 , so output 2 

ps: In the browser, the global object is the window:


Also, this definition may not technically be true in JavaScript — and I’ll show you why — but it’s probably the easiest way to think of it. If you are unaware of what a “receiver” is, look at the code snippet below:
someObject.someMethod()
In this context, the someObject is the receiver, while the someMethod is the method. Compare that with a function invocation:
someFunction(arg)
Notice how there is no receiver. In JavaScript, functions are invoked without a receiver using the parens syntax (). The receiver is what separates a function from a method.


