// Program Input Angka
var inputAngka = prompt("masukkan angka!" );

if(inputAngka % 2 === 0) {
	alert('angka ' + inputAngka + ' adalah bilangan Genap');
} else if(inputAngka % 2 === 1) {
	alert('angka ' + inputAngka + ' adalah bilangan Ganjil');
} else {
	alert(inputAngka + " ini yang anda masukkan bukan angka!")
}

// Declare Function
function ramaDhan(r,d) {
	return r + d;
}
rd = ramaDhan('rama', 'dhan');
console.log(rd);

// Function Expression
var ramaDhann = function() {
}