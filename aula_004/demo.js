function greet(name) {
	let msg3;
	let msg5;

	const d = 100;

	if (name === "Fabio") {
		var msg = "Welcome " + name;
		let msg2 = "Welcome " + name;
		msg3 = "Welcome " + name;
		msg4 = "Welcome " + name;
		let msg5 = "Welcome " + name;

		const d = 200;
		console.log("Dentro do if Fabio: " + d);
	} else {
		var msg = "Hello Guest";
		let msg2 = "Hello Guest";
		msg3 = "Hello Guest";
		msg4 = "Hello Guest";
		let msg5 = "Hello Guest";

		const d = 300;
		console.log("Dentro do else: " + d);
	}

	console.log("Fora do if: " + d);

	console.log(msg);
	console.log(msg3);
	console.log(msg5);
	//console.log(msg4);
	//console.log(msg2);

	//let msg4;
}

//greet("Fabio");

/*
var a = 10;
console.log(a);
var a = 100;
console.log(a);

let b = 10;
console.log(b);
let b = 100;
console.log(b);
*/

function objetos() {
	const employee = {
		eid: 1,
		ename: "Fabio",
	};

	console.log(employee);

	var employee2 = {
		eid: 2,
		ename: "Fabio",
	};

	console.log(employee2);

	employee2 = {};

	console.log(employee2);

	let employee3 = {
		eid: 3,
		ename: "Fabio",
	};

	console.log(employee3);

	employee3 = {};

	console.log(employee3);

	const employee4 = {
		eid: 4,
		ename: "Fabio",
	};

	console.log(employee4);

	employee4.eid = 5;
	employee4.ename = "Fabio 2";

	console.log(employee4);

	employee4 = {}; //erro não pode em const

	console.log(employee4);
}

objetos();
