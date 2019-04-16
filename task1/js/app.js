function Calc (a, b) {
	this.num1 = a;
	this.num2 = b;
	return true;
}

Calc.prototype.NaNChecker = function () {
	if (isNaN(this.num1) || isNaN(this.num2)) {
		return false;
	}
	return true;
}

Calc.prototype.setNum1 = function (num1) {
	this.num1 = +num1;
	return true;
}

Calc.prototype.getNum1 = function () {
	return this.num1;
}

Calc.prototype.setNum2 = function (num2) {
	this.num2 = +num2;
	return true;
}

Calc.prototype.getNum2 = function () {
	return this.num2;
}

Calc.prototype.sum = function() {
	if (this.NaNChecker()) {
		this.result = this.num1 + this.num2;
		return true;
	}
	return false;
}

Calc.prototype.sub = function() {
	if (this.NaNChecker()) {
		this.result = this.num1 - this.num2;
		return true;
	}
	return false;
}

Calc.prototype.multi = function() {
	if (this.NaNChecker()) {
		this.result = this.num1 * this.num2;
		return true;
	}
	return false;
}

Calc.prototype.division = function () {
	if (this.NaNChecker()) {
		this.result = this.num1 / this.num2
		return true;
	}
	return false;
}

Calc.prototype.getResult = function (){
	return this.result;
}

var calc = new Calc (12, 34);
console.log('Number 1: ' + calc.getNum1());
console.log('Number 2: ' + calc.getNum2());
console.log('Summa: ' + calc.sum());
console.log('Result is: ' + calc.getResult());
console.log('Substraction: ' + calc.sub());
console.log('Result is: ' + calc.getResult());
console.log('Multiply: ' + calc.multi());
console.log('Result is: ' + calc.getResult());
console.log('Division: ' + calc.division());
console.log('Result is: ' + calc.getResult());
console.log("Now let's set new params for calc");
console.log('Changing num1: ' + calc.setNum1(44));
console.log('Now number 1 is ' + calc.getNum1());
console.log('Changing num2: ' + calc.setNum1(235));
console.log('Now number 2 is ' + calc.getNum2());