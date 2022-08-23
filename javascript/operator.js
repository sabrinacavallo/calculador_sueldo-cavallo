alert("Bienvenido a tu calculador de sueldo en NZ")

let nombreIngresado = prompt("Ingresa tu nombre")

/* Selecciona una opcion */
let periodo = prompt("Ingresa el período que deseas calcular: 1.Semanal  2.Quincenal")

/* Ingresando mi sueldo por hora */
let sueldo = parseFloat(prompt("Ingresa el valor de tu sueldo por hora (Ej: 21.25)"))

/* Ingresando la cantidad de horas trabajadas */
let horas = parseFloat(prompt("Ingresa tu cantidad de horas trabajadas (restando el tiempo de almuerzo. Ej: 85.5)"))


/* --------------------------------------------------------- */


/* Calculando el sueldo bruto */
let salarioBruto = sueldo * horas
console.log(`Tu salario bruto es: ${salarioBruto}`)

let impuestos = 0
let condicion = true

do {
    if (salarioBruto <= 1500 && periodo == 1) {
        impuestos = 16.61
        periodo = "semanal"
        break
    }
    else if (salarioBruto >= 1501 && periodo == 1) {
        impuestos = 22.33
        periodo = "semanal"
        break
    }
    else if (salarioBruto <= 3000 && periodo == 2) {
        impuestos = 16.61
        periodo = "quincenal"
        break
    }
    else if (salarioBruto >= 3000 && periodo == 2) {
        impuestos = 22.33
        periodo = "quincenal"
        break
    }
    else {
        alert("Ingrese datos válidos")
        condicion = false
        break
    }
} while (condicion) {
    /* calculando sueldo */
    let impuestosCalc = (salarioBruto * impuestos) / 100
    console.log(`Los impuestos que se deduciran seran: ${impuestosCalc}`)
    let salarioNeto = salarioBruto - impuestosCalc
    salarioNeto = salarioNeto.toFixed(2)
    console.log(`Tu salario neto es: ${salarioNeto}`)

    /* Dando a conocer la informacion */
    alert(`Gracias ${nombreIngresado} por la información, tu salario ${periodo} neto es de NZD ${salarioNeto}`)
}