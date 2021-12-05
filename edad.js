function calcularEdad(fecha_nac) {
            fecha_nac=fecha_nac.toString()
            edad = 0
            fecha_now = moment().format('DD/MM/YYYY')
            anioNow = Number(fecha_now.split('/')[2])
            mesNow = Number(fecha_now.split('/')[1])
            diaNow = Number(fecha_now.split('/')[0])

            anioNac = Number(fecha_nac.split('/')[2])
            mesNac = Number(fecha_nac.split('/')[1])
            diaNac = Number(fecha_nac.split('/')[0])
            if (mesNow >= mesNac) {
                if (mesNow == mesNac) {
                    if (diaNow >= diaNac) {
                        edad = anioNow-anioNac
                    } else {
                        edad = (anioNow-anioNac) - 1
                    }
                } else {
                    edad = anioNow-anioNac
                }
            } else {
                edad = (anioNow-anioNac) - 1
            }
            return edad
        }
