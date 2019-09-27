exports.validar = function(va) {

    with_equipos = []
    with_jugador = []
    with_goleador = []

    var n = va.length

    for (var i = 0; i < n; i++) {
        if (va[i][0].checked === true) {
            with_equipos.push(va[i][0].checked)
        }
        if (va[i][1].checked == true) {
            with_jugador.push(va[i][1].checked)
        }
        if (va[i][2].checked == true) {
            with_goleador.push(va[i][2].checked)
        }
    }

    if (with_equipos.length === 0 && with_goleador.length === 0 && with_jugador.length === 0) {
        return {
            'vali': true,
            'msg': 'Votaste en blanco en las tres categorías'
        }
    } else if (with_equipos.length === 0 && with_goleador.length === 0 && with_jugador.length === 1) {
        return {
            'vali': true,
            'msg': 'Tu voto es válido. Votaste en blanco en Selección Campeona y Máximo Goleador'
        }
    } else if (with_equipos.length === 1 && with_goleador.length === 0 && with_jugador.length === 0) {
        return {
            'vali': true,
            'msg': 'Tu voto es válido. Votaste en la categoría Selección Campeona. Votaste en blanco en Máximo Goleador y Mejor Jugador'
        }
    } else if (with_equipos.length === 0 && with_goleador.length === 1 && with_jugador.length === 0) {
        return {
            'vali': true,
            'msg': 'Tu voto es válido. Votaste en la categoría Máximo Goleador. Votaste en blanco en Selección Campeona y Mejor Jugador'
        }
    } else if (with_equipos.length === 1 && with_goleador.length === 1 && with_jugador.length === 0) {
        return {
            'vali': true,
            'msg': 'Tu voto es válido. Votaste en las categorías Selección Campeona y Máximo Goleador. Votaste en blanco en Mejor Jugador'
        }
    } else if (with_equipos.length === 0 && with_goleador.length === 1 && with_jugador.length === 1) {
        return {
            'vali': true,
            'msg': 'Tu voto es válido. Votaste en las categorías Máximo Goleador y Mejor Jugador. Votaste en blanco en Selección Campeona'
        }
    } else if (with_equipos.length === 1 && with_goleador.length === 0 && with_jugador.length === 1) {
        return {
            'vali': true,
            'msg': 'Tu voto es válido. Votaste en las categorías Selección Campeona y Mejor Jugador. Votaste en blanco en Máximo Goleador'
        }
    } else if (with_equipos.length > 1 && with_goleador.length === 0 && with_jugador.length === 0) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Selección Campeona.'
        }
    } else if (with_equipos.length === 0 && with_goleador.length === 0 && with_jugador.length > 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Mejor Jugador.'
        }
    } else if (with_equipos.length === 0 && with_goleador.length > 1 && with_jugador.length === 0) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Máximo Goleador.'
        }
    } else if (with_equipos.length === 1 && with_goleador.length === 1 && with_jugador.length > 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Mejor Jugador.'
        }
    } else if (with_equipos.length > 1 && with_goleador.length === 1 && with_jugador.length === 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Selección Campeona.'
        }
    } else if (with_equipos.length === 1 && with_goleador.length > 1 && with_jugador.length === 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Máximo Goleador.'
        }
    } else if (with_equipos.length > 1 && with_goleador.length === 1 && with_jugador.length === 0) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Selección Campeona.'
        }
    } else if (with_equipos.length > 1 && with_goleador.length > 1 && with_jugador.length === 0) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Selección Campeona y en Máximo Goleador.'
        }
    } else if (with_equipos.length === 1 && with_goleador.length > 1 && with_jugador.length === 0) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Máximo Goleador.'
        }
    } else if (with_equipos.length > 1 && with_goleador.length === 1 && with_jugador.length > 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Selección Campeona y en Mejor Jugador.'
        }
    } else if (with_equipos.length == 1 && with_goleador.length === 0 && with_jugador.length > 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Mejor Jugador.'
        }
    } else if (with_equipos.length > 1 && with_goleador.length > 1 && with_jugador.length === 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Selección Campeona y en Máximo Goleador.'
        }
    } else if (with_equipos.length > 1 && with_goleador.length === 0 && with_jugador.length > 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Selección Campeona y en Mejor Jugador.'
        }
    } else if (with_equipos.length > 1 && with_goleador.length === 0 && with_jugador.length == 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Selección Campeona.'
        }
    } else if (with_equipos.length === 0 && with_goleador.length > 1 && with_jugador.length > 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Mejor Jugador y Máximo Goleador.'
        }
    } else if (with_equipos.length === 0 && with_goleador.length > 1 && with_jugador.length === 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Máximo Goleador.'
        }
    } else if (with_equipos.length === 1 && with_goleador.length > 1 && with_jugador.length > 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Máximo Goleador y en Máximo Goleador.'
        }
    } else if (with_equipos.length === 0 && with_goleador.length === 1 && with_jugador.length > 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Máximo Goleador.'
        }
    } else if (with_equipos.length > 1 && with_goleador.length > 1 && with_jugador.length > 1) {
        return {
            'vali': false,
            'msg': 'Tu voto no es válido. Votaste más de una opción en Selección Campeona, Máximo Goleador y Mejor Jugador'
        }
    } else if (with_equipos.length === 1 && with_goleador.length === 1 && with_jugador.length === 1) {
        return {
            'vali': true,
            'msg': 'Tu voto es válido.'
        }
    } else {
        return {
            'vali': false,
            'msg': ''
        }
    }
}
