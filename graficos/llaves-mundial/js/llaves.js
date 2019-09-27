// Version 0.1
// 20.12: F: animar llaves en forma encadenada (R) Agregados con setTimeout
// 20.12: B: reseteoLlaves() no vacia #TV12 (R) Agrego #TV12 a array de IDs
// 19.12: B: Alemania y Portugal no caen en #TV08 si son segundas de equipo. (R) Etiqueta SVG mal referenciada

var browser = get_browser();
var browser_version = get_browser_version();
var bb = browser_version.substr(0, 2);
var argentina = "#5dc3fd";
var rival = "#000000";
var gris = "#F2F2F2";
var nodos = [["L01", "L09", "L13", "L15"], ["V01", "L09", "L13", "L15"], ["L03", "V09", "L13", "L15"], ["V03", "V09", "L13", "L15"], ["L05", "L11", "V13", "L15"], ["V05", "L11", "V13", "V15"], ["L07", "V11", "V13", "L15"], ["V07", "V11", "V13", "L15"], ["L02", "L10", "L14", "L15"], ["V02", "L10", "L14", "L15"], ["L04", "V10", "L14", "L15"], ["V04", "V10", "L14", "L15"], ["L06", "L12", "V14", "V15"], ["V06", "L12", "V14", "L15"], ["L08", "V12", "V14", "L15"], ["V08", "V12", "V14", "L15"]];

function get_browser() {
	var N = navigator.appName, ua = navigator.userAgent, tem;
	var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
	if (M && ( tem = ua.match(/version\/([\.\d]+)/i)) != null)
		M[2] = tem[1];
	M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
	return M[0];
}

function get_browser_version() {
	var N = navigator.appName, ua = navigator.userAgent, tem;
	var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
	if (M && ( tem = ua.match(/version\/([\.\d]+)/i)) != null)
		M[2] = tem[1];
	M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
	return M[1];
}

function recorro() {
	var val1 = document.getElementById("selArgPos");
	var val2 = document.getElementById("selRivPos");
	var rivNom = document.getElementById("selRivNom");
	var desdeArg = (val1.options[val1.selectedIndex].value === "0") ? "12" : "05";
	var desdeRiv = (val2.options[val2.selectedIndex].value === "0") ? rivNom.options[rivNom.selectedIndex].value.substring(0, 2) : rivNom.options[rivNom.selectedIndex].value.substring(2);
	var i = 0;
	var t = 250;
	do {
		var idNodoArg = "#" + nodos[parseInt(desdeArg)][i]; //los necesito para el final.
		var idNodoRiv = "#" + nodos[parseInt(desdeRiv)][i];
		var idCurvaRiv = "#C" + nodos[parseInt(desdeRiv)][i];
		var idCurvaArg = "#C" + nodos[parseInt(desdeArg)][i];
		var idTextoArg = "#T" + nodos[parseInt(desdeArg)][i];
		var idTextoRiv = "#T" + nodos[parseInt(desdeRiv)][i];
		if (idNodoArg.substr(2) != idNodoRiv.substr(2)) {
			( 
				function(i, idNodoArg, idNodoRiv, idCurvaArg, idCurvaRiv, idTextoArg, idTextoRiv) { //para no modificar en TdE
					idNodoArg = "#" + nodos[parseInt(desdeArg)][i];
					idCurvaArg = "#C" + nodos[parseInt(desdeArg)][i];
					idTextoArg = "#T" + nodos[parseInt(desdeArg)][i];
					idNodoRiv = "#" + nodos[parseInt(desdeRiv)][i];
					idCurvaRiv = "#C" + nodos[parseInt(desdeRiv)][i];
					idTextoRiv = "#T" + nodos[parseInt(desdeRiv)][i];
					window.setTimeout(function() {
						var curvaOculta = swapLV(idCurvaArg);
						pinto(idNodoArg, idCurvaArg, curvaOculta, argentina, false, idTextoArg, idTextoRiv, rivNom);
						curvaOculta = swapLV(idCurvaRiv);
						pinto(idNodoRiv, idCurvaRiv, curvaOculta, rival, false, idTextoArg, idTextoRiv, rivNom);
						d3.select(idTextoArg).text("Argentina").attr("class", "blanco");
						d3.select(idTextoRiv).text(rivNom.options[rivNom.selectedIndex].innerHTML).attr("class", "blanco");
					}, i * t);
				}(i)
			);
		};
		i++;
		if (idNodoArg.substr(2) != idNodoRiv.substr(2))
			continue;
		window.setTimeout(
			function() {
				curvaOculta = idCurvaArg;
				pinto(idNodoArg, idCurvaArg, curvaOculta, argentina, true, idTextoArg, idTextoRiv, rivNom);
				curvaOculta = swapLV(idCurvaArg);
				pinto(idNodoRiv, idCurvaRiv, curvaOculta, rival, true, idTextoArg, idTextoRiv, rivNom);
				d3.select(idTextoArg).text("Argentina").attr("class", "blanco");
				d3.select(idTextoRiv).text(rivNom.options[rivNom.selectedIndex].innerHTML).attr("class", "blanco");
			}, i * (t / 1.3)
		);
	} while ( idCurvaArg != swapLV(idCurvaRiv));
}

function pinto(nodoEquipo, curvaEquipo, ocultarCurva, clase, esElFinal, idTextoArg, idTextoRiv, rivNom) {
	var t = 250;
	var i = 0;
	( function() {
			window.setTimeout(function() {
				d3.select(nodoEquipo).selectAll("polygon").transition().duration(t).attr("fill", clase);

				if (!esElFinal) {
					d3.select(curvaEquipo).selectAll("path").transition().duration(t).attr("fill", clase);
					d3.select(curvaEquipo).selectAll("polygon").transition().duration(t).attr("fill", clase);
					d3.select(ocultarCurva).selectAll("polygon").transition().duration(t).attr("opacity", 0);
					d3.select(ocultarCurva).selectAll("path").transition().duration(t).attr("opacity", 0);
				};
			}, i * t);
		}(i));
}

function reseteoLlaves() {
	d3.select("svg").selectAll("polygon").attr("fill", gris);
	d3.select("svg").selectAll("path").attr("fill", gris);
	d3.select("svg").selectAll("polygon").attr("opacity", 1);
	d3.select("svg").selectAll("path").attr("opacity", 1);
	
	
	var ids = [	"#TL01", "#TV01", "#TL03", "#TV03", "#TL05", "#TV05", "#TL07", "#TV07",	"#TL02", "#TV02", "#TL04", "#TV04", "#TL06", "#TV06", "#TL08", "#TV08", "#TL09", "#TV09", "#TL11", "#TV11", "#TL13", "#TV13", "#TL15", "#TV15", "#TL14", "#TV14", "#TL10", "#TV10", "#TL12", "#TV12" ];
				
	var textos = ["1ro. grupo A", "2do. grupo B", "1ro. grupo C", "2do. grupo D", "1ro. grupo E", "2do. grupo F", "1ro. grupo G", "2do. grupo H", "1ro. grupo B", "2do. grupo A", "1ro. grupo D", "2do. grupo C", "1ro. grupo F", "2do. grupo E", "1ro. grupo H", "2do. grupo G", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

	for (var i = 0; i < ids.length; i++) {
		d3.select(ids[i]).text(textos[i]).attr("class", "negro");
		
	}
}

function swapLV(cadena) {
	if (cadena.charAt(2) === "L") {
		return cadena.replace("L", "V");
	} else {
		return cadena.replace("V", "L");
	}
}


d3.selectAll(".avisoSVG").remove();
if (browser == "Chrome" && bb <= 25) {
	document.getElementById("llaves").innerHTML = "<div align='center'><a href='http://browsehappy.com/'><img src='img/alerta.png' border='0'></a></div>";
}
document.getElementById("formulario").addEventListener("change", function() {
	reseteoLlaves();
	recorro();
});
reseteoLlaves();
recorro();
