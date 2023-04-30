var boton1 = document.querySelector("#btnencriptar");
var boton2 = document.querySelector("#btndesencriptar");
var boton3 = document.querySelector("#btncopiar");
var txtSalida = document.querySelector("#salida");

var encriptado = '';
var letras = 'ABCDEFGHIJKLMNOÑPQRSTUVWXYZáéíóúÁÉÍÓÚ|!"#$%&/()=?¡¿´¨*+]}{[,;.:-><°\_@^`';
letras += "'";

var validador = 0;

boton1.addEventListener('click', function () {
    var texto = document.getElementById('entrada').value;
    validador = 0;
    for (var i = 0; i < texto.length; i++) {
        for (var j = 0; j < letras.length; j++) {
            if (texto[i] === letras[j]) {
                validador += 1;
                document.getElementById('mensaje_alert').style.color = "red";
            }
        }
    }
    if (validador == 0) {
        if (texto == '') {
            retroceder_diseño();
        } else {
            document.getElementById('mensaje_alert').style.color = "black";

            for (var i = 0; i < texto.length; i++) {
                if (texto[i] === 'a') {
                    encriptado += "ai";
                } else if (texto[i] === 'e') {
                    encriptado += "enter";
                }
                else if (texto[i] === 'i') {
                    encriptado += "imes";
                }
                else if (texto[i] === 'o') {
                    encriptado += "ober";
                }
                else if (texto[i] === 'u') {
                    encriptado += "ufat";
                } else {
                    encriptado += texto[i];
                }
            }
            modificar();
        }
        document.getElementById('salida').innerHTML = "";
        document.getElementById('salida').innerHTML = encriptado;
        encriptado = "";
    }

});

boton2.addEventListener('click', function () {
    var texto = document.getElementById('entrada').value;
    document.getElementById('salida').innerHTML = encriptado;
    validador = 0;
    for (var i = 0; i < texto.length; i++) {
        for (var j = 0; j < letras.length; j++) {
            if (texto[i] === letras[j]) {
                validador += 1;
                document.getElementById('mensaje_alert').style.color = "red";
            }
        }
    }

    if (validador == 0) {
        if (texto == '') {
            retroceder_diseño();
        } else {
            document.getElementById('mensaje_alert').style.color = "black";
            for (var i = 0; i < texto.length; i++) {

                if (texto[i] === 'a') {
                    var opereacion = '';
                    for (var j = i; j < i + 2; j++) {
                        opereacion += texto[j];
                    }
                    if (opereacion == 'ai') {
                        encriptado += "a";
                        i += 1;
                    }

                } else if (texto[i] == 'e') {
                    var opereacion = '';
                    for (var j = i; j < i + 5; j++) {
                        opereacion += texto[j];
                    }
                    if (opereacion === 'enter') {
                        encriptado += "e";
                        i += 4;
                    }

                }
                else if (texto[i] == 'i') {
                    var opereacion = '';
                    for (var j = i; j < i + 4; j++) {
                        opereacion += texto[j];
                    }
                    if (opereacion === 'imes') {
                        encriptado += "i";
                        i += 3;
                    }

                }
                else if (texto[i] == 'o') {
                    var opereacion = '';
                    for (var j = i; j < i + 4; j++) {
                        opereacion += texto[j];
                    }
                    if (opereacion === 'ober') {
                        encriptado += "o";
                        i += 3;
                    }
                }
                else if (texto[i] == 'u') {
                    var opereacion = '';
                    for (var j = i; j < i + 4; j++) {
                        opereacion += texto[j];
                    }
                    if (opereacion == 'ufat') {
                        encriptado += "u";
                        i += 3;
                    }

                } else {
                    encriptado += texto[i];
                }
            }
            modificar();
        }
        document.getElementById('salida').innerHTML = "";
        document.getElementById('salida').innerHTML = encriptado;
        encriptado = "";
    }
});

boton3.addEventListener('click', function () {
    const textarea_salida = document.querySelector('#salida');
    textarea_salida.select();
    document.execCommand('copy');
})

function modificar() {
    document.getElementById('muñeco').style.display = 'none';
    document.getElementById('parrafo').style.display = 'none';
    document.getElementById('subTitulo').style.display = 'none';
    var contend = document.getElementById('contenedor_secundario');
    contend.style.display = 'block';
    document.getElementById('section_salida').style.height = '80%';
    document.getElementById('section_salida').style.width = '50%';

    document.getElementById('entrada').value = '';
}

function retroceder_diseño() {
    document.getElementById('muñeco').style.display = 'inline-block';
    document.getElementById('parrafo').style.display = 'block';
    document.getElementById('subTitulo').style.display = 'block';
    $contend = document.getElementById('contenedor_secundario');
    $contend.style.display = 'none';
}

// para que me asepte los nuevos cammbios.