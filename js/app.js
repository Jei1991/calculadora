var operandoa
var operandob
var operacion
var calculadora = {
	botonOn: document.getElementById('on'),
	sign: document.getElementById('sign'),
	dividido: document.getElementById('dividido'),
	numeroSiete: document.getElementById('7'),
	numeroOcho: document.getElementById('8'),
	numeroNueve: document.getElementById('9'),
	por: document.getElementById('por'),
	numeroCuatro: document.getElementById('4'),
	numeroCinco: document.getElementById('5'),
	numeroSeis: document.getElementById('6'),
	menos: document.getElementById('menos'),
	numeroUno: document.getElementById('1'),
	numeroDos: document.getElementById('2'),
	numeroTres: document.getElementById('3'),
	numeroCero: document.getElementById('0'),
	botonPunto: document.getElementById('punto'),
	btnIgual: document.getElementById('igual'),
	mas: document.getElementById('mas'),
	display: document.getElementById('display'),

	init: function(){
		this.reducirTamano('tecla')
		this.numeroUno.onclick = this.uno
		this.numeroDos.onclick = this.dos
		this.numeroTres.onclick = this.tres
		this.numeroCuatro.onclick = this.cuatro
		this.numeroCinco.onclick = this.cinco
		this.numeroSeis.onclick = this.seis
		this.numeroSiete.onclick = this.siete
		this.numeroOcho.onclick = this.ocho
		this.numeroNueve.onclick = this.nueve
		this.numeroCero.onclick = this.cero
		this.botonOn.onclick = this.limpiar
		this.botonPunto.onclick = this.punto
		this.sign.onclick = this.signo
		this.btnIgual.onclick = this.igual
		this.mas.onclick = this.suma
		this.menos.onclick = this.resta
		this.por.onclick = this.multiplicacion
		this.dividido.onclick = this.division

	},
	
	
	reducirTamano: function(tecla){
		var botones = document.getElementsByClassName("tecla");
		for (var i = 0; i < botones.length; i++) {
			botones[i].addEventListener("mousedown",function() {
				this.style.transform = "scale(0.95, 0.95)"
			});
			botones[i].addEventListener("mouseup",function() {
				this.setAttribute("style", "transform:scale(1, 1)")
			});
		}
	},

	uno: function (e){
		var boton = document.getElementById('1')
			if (display.textContent.length < 8){
				if(display.textContent == '0' ){
					display.textContent = '1'
				}else{
					display.textContent += '1'
				}
			}
	},

	dos: function (e){
		var boton = document.getElementById('2')
			if (display.textContent.length < 8){
				if(display.textContent == '0' ){
					display.textContent = '2'
				}else{
					display.textContent += '2'
				}
			}
	},

	tres: function (e){
		var boton = document.getElementById('3')
			if (display.textContent.length < 8){
				if(display.textContent == '0' ){
					display.textContent = '3'
				}else{
					display.textContent += '3'
				}
			}
	},

	cuatro: function (e){
		var boton = document.getElementById('4')
		if (display.textContent.length < 8){
				if(display.textContent == '0' ){
					display.textContent = '4'
				}else{
					display.textContent += '4'
				}
			}
	},

	cinco: function (e){
		var boton = document.getElementById('5')
			if (display.textContent.length < 8){
				if(display.textContent == '0' ){
					display.textContent = '5'
				}else{
					display.textContent += '5'
				}
			}
	},

	seis: function (e){
		var boton = document.getElementById('6')
			if (display.textContent.length < 8){
				if(display.textContent == '0' ){
					display.textContent = '6'
				}else{
					display.textContent += '6'
				}
			}
	},

	siete: function (e){
		var boton = document.getElementById('7')
			if (display.textContent.length < 8){
				if(display.textContent == '0' ){
					display.textContent = '7'
				}else{
					display.textContent += '7'
				}
			}
	},

	ocho: function (e){
		var boton = document.getElementById('8')
			if (display.textContent.length < 8){
				if(display.textContent == '0' ){
					display.textContent = '8'
				}else{
					display.textContent += '8'
				}
			}
	},

	nueve: function (e){
		var boton = document.getElementById('9')
			if (display.textContent.length < 8){
				if(display.textContent == '0' ){
					display.textContent = '9'
				}else{
					display.textContent += '9'
				}
			}
	},

	cero: function (e){
		var boton = document.getElementById('1')
			if (display.textContent.length < 8){
				if(display.textContent == '0' ){
					display.textContent = '0'
				}else{
					display.textContent += '0'
				}
			}
	},

	limpiar: function (e){
		var boton = document.getElementById('on')
			display.textContent='0'
	},

	punto: function (e) {
		var boton = document.getElementById('punto')
			if(display.textContent.indexOf(".") == -1){
				display.textContent += '.'
			}	
	},

	signo: function (e) {
		var boton = document.getElementById('sign')
			display.innerHTML = parseFloat(display.innerHTML)*-1
	},

	suma: function (e) {
		operandoa = display.textContent
		operacion="+";
		calculadora.guardar();
	},

	resta: function (e) {
		operandoa = display.textContent
		operacion="-";
		calculadora.guardar();
	},

	multiplicacion: function (e) {
		operandoa = display.textContent
		operacion="*";
		calculadora.guardar();
	},

	division: function (e) {
		operandoa = display.textContent
		operacion="/";
		calculadora.guardar();
	},

	igual:function (e) {	
		operandob = display.textContent
		calculadora.solucionar()
	},

	guardar:function(){
		display.textContent = ""
	},	

	reiniciar:function () {
		display.textContent = ""
		operandoa = 0
		operandob = 0
		operacion = ""
	},

	solucionar:function(){
		var res = 0;
		switch(operacion){
			case "+":
				res = parseFloat(operandoa) + parseFloat(operandob)
				break

			case "-":
				res = parseFloat(operandoa) - parseFloat(operandob)
				break	

			case "*":
				res = parseFloat(operandoa) * parseFloat(operandob)
				break	

			case "/":
				res = parseFloat(operandoa) / parseFloat(operandob)
				break	
		}
		this.reiniciar();
		display.textContent = res
		display.textContent = display.textContent.slice(0,9)
	}

}

calculadora.init();