var interval = setInterval(function(){
	//mostrar obstáculos na ordem do vetor vector_obstaculos
	if(next == 0){
		$("#"+vector_obstaculos[i]).addClass('danger');
		i++;
		if(i==vector_obstaculos.length){
			next = 1;
		}
	//mostrar objetivo
	}else if(next == 1){
		$("#"+objetivo).addClass('success');
		next = 2;
		i = 0;
	//mostrar caminho na ordem do vetor vector_percorridos
	}else if(next == 2){
		if(vector_percorridos[i] == objetivo){
			$("#"+objetivo).removeClass('success');
		}
		$("#"+vector_percorridos[i]).addClass('path');
		i++;
		if(i == vector_percorridos.length){
			next = 3;
			i = 0;
		}
	//apagar caminho de trás pra frente
	}else if(next == 3){
		$("#"+vector_percorridos[i]).removeClass('path');
		i++;
		if(i == vector_percorridos.length-1){
			next = 4;
		}
	//fim da animação
	}else if(next == 4){
		clearInterval(interval);//parar o setInterval
	}

	console.log(i);
},500);

var i = 0;
var intervalo = 500;// 0.5s
var next = 0;
//next = 0 - dispor obstaculos 
//next = 1 - dispor objetivo 
//next = 2 - dispor caminho
//next = 3 - parar atualização
var vector_percorridos = [1,2,12,13,23,33];
var vector_obstaculos = [3,4,10,14,15];
var objetivo = 33;