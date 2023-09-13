function greet(name) {
	if (name === "Fabio") {
		var msg = "Welcome " + name;
		var a = 200;
	} else {
		var msg = "Hello Guest";
	}
	console.log(msg);
	console.log(a);
}

greet("Fabio");

function hoist() {
	var a = 100;
	b = 500;
	console.log("Hoist function");
	console.log("Value of variable a is : " + a);
	console.log("Value of variable b is : " + b);
}

hoist();

console.log(b);
console.log(a);
