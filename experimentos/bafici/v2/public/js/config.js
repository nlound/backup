var width = 1280, // ancho del grafico
    height = 720, // alto del grafico
    padding = 45, // separacion entre nodos del mismo cluster
    clusterPadding = 45, // separacion entre nodos de distinto cluster
    minRadius = 6, // Radio minimo de los circulos
    maxRadius = 45, // Radio máximo de los circulos 
    m = 6, // Total de clusters
    n = m, // nodos creados al inicializar 

    color = d3.scale // Colores de los clusters
        .ordinal()
        .domain(m)
        .range( [ "#D4CD7B","#EA6153", "#588790", "#B88FAA", "#91C46E","#90836D" ] ),
	tiempoDeEspera = 30, // Segundos de espera de inactividad para mostrar video y extras
    muestroWidgets = false, // muestra los widgets de estadística y benchmanking
	duration = 300;
	radioAcumulado = 0,
	supCirculos = 0,
	limiteNodos = 150, // 200
	limitePorcentaje = 25; // 30
