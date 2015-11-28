var gl;

function start() {
    var canvas = document.getElementById('glcanvas');

    gl = initWebGl(canvas);

    if (gl) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    }
}

function initWebGl(canvas) {
    gl = null;

    try {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    }
    catch(e) {}

    if (!gl) {
        alert('Unable to initialize WebGl. Your browser');
        gl = null;
    }

    return gl;
}

function initShaders() {
    var fragmentShader = getShader(gl, 'shader-fs');
    var vertexShader = getShader(gl, 'shader-vs');
}

function obtenerFecha() {
    var dia = new Date().getTime();
    var hoy = new Date(dia).toLocaleString();
    console.log(dia);
    console.log(hoy);
    var diaPase = new Date('November 3, 2015 00:00:00').getTime();
    var dias = new Date(diaPase).toLocaleString();
    console.log(diaPase);
    console.log(dias);
    if (diaPase > dia) {
        console.log('Texto antiguo');
    } else {
        console.log('Texto nuevo');
    }
}