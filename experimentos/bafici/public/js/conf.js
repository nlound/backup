// Variables globales de configuracion
var width = 1280, // ancho del grafico
    height = 720, // alto del grafico
    padding = 30, // separacion entre nodos del mismo cluster
    clusterPadding = 30, // separacion entre nodos de distinto cluster
    minRadius = 12, // Radio minimo de los circulos
    maxRadius = 40, // Radio máximo de los circulos 
    m = 6, // Total de clusters
    n = m, // nodos creados al inicializar 
    color = d3.scale // Colores de los clusters
        .ordinal()
        .domain(m)
        .range( [ "#D4CD7B","#EA6153", "#588790", "#B88FAA", "#91C46E","#90836D" ] ),
	duration = 300; 
	radioAcumulado = 0, // variable donde guardo el radio de todos los nodos en pantalla
	supCirculos = 0, // variable donde guardo la superficie ocupada de los nodos en pantalla
	limiteNodos = 200, // Threshold de display de nodos en pantalla
	limitePorcentaje = 30; // Threshold de display de porcentaje de nodos en pantalla


// variables globales especificas
var socket = io.connect('http://localhost:3000'),
	mensajes = [0,0,0,0,0,0], // valores de los mensajes 
	sensores = [0,0,0,0,0,0], // estado de los sensores
	pointers = [0,0,0,0,0,0], // pointers a los sensores
    position = [0,0,0,0,0,0], // ultimos nodos agregados
	clusters = new Array(m),
	offset = 100, // x de entrada de los nodos
	entrada = [offset,(width/m)*1+offset,(width/m)*2+offset,(width/m)*3+offset,(width/m)*4+offset,(width/m)*5+offset]; 
