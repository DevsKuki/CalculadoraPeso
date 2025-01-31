const imcDatos = [
    {
        categoria: "Bajo peso",
        rango: "Menor a 18.5",
        descripcion: "Indica un peso corporal insuficiente en relación con la estatura."
    },
    {
        categoria: "Peso normal",
        rango: "18.5 - 24.9",
        descripcion: "Rango considerado saludable para la mayoría de los adultos."
    },
    {
        categoria: "Sobrepeso",
        rango: "25.0 - 29.9",
        descripcion: "Exceso de peso corporal que puede aumentar el riesgo de enfermedades."
    },
    {
        categoria: "Obesidad grado 1",
        rango: "30.0 - 34.9",
        descripcion: "Obesidad moderada con mayor riesgo de problemas de salud."
    },
    {
        categoria: "Obesidad grado 2",
        rango: "35.0 - 39.9",
        descripcion: "Obesidad severa que incrementa significativamente el riesgo de enfermedades."
    },
    {
        categoria: "Obesidad grado 3 (mórbida)",
        rango: "40.0 a más",
        descripcion: "Obesidad extrema con alto riesgo de complicaciones graves para la salud."
    }
];

window.onload = function () {
    const tabla = document.getElementById("imcTabla").getElementsByTagName('tbody')[0];

    imcDatos.forEach(dato => {
        const fila = tabla.insertRow();
       
        const celdaCategoria = fila.insertCell(0);
        celdaCategoria.textContent = dato.categoria;
        celdaCategoria.classList.add("px-6", "py-4", "text-left", "text-sm", "font-bold", "text-gray-700");

        const celdaRango = fila.insertCell(1);
        celdaRango.textContent = dato.rango;
        celdaRango.classList.add("px-6", "py-4", "text-left", "text-sm", "font-medium", "text-gray-700");

        const celdaDescripcion = fila.insertCell(2);
        celdaDescripcion.textContent = dato.descripcion;
        celdaDescripcion.classList.add("px-6", "py-4", "text-left", "text-sm", "font-medium", "text-gray-700");

        fila.classList.add("border-t", "border-gray-200", "hover:bg-gray-50");
        fila.classList.add("bg-white", "border-b", "dark:bg-gray-800", "dark:border-gray-700", "border-gray-200");
    });
};

//funcion
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; 

    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(2);
        let classification = "";

        if (bmi < 18.5) {
            classification = "Bajo peso";
            document.getElementById("result").style.color = 'blue';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            classification = "Peso normal";
            document.getElementById("result").style.color = 'green';
        } else if (bmi >= 25 && bmi <= 29.9) {
            classification = "Sobrepeso";
            document.getElementById("result").style.color = 'orange';
        } else if (bmi >= 30 && bmi <= 34.9) {
            classification = "Obesidad grado 1";
            document.getElementById("result").style.color = 'red';
        } else if (bmi >= 35 && bmi <= 39.9) {
            classification = "Obesidad grado 2";
            document.getElementById("result").style.color = 'darkred';
        } else {
            classification = "Obesidad grado 3 (mórbida)";
            document.getElementById("result").style.color = 'darkviolet';
        }


        document.getElementById("result").style.color = 'green';
        document.getElementById("result").textContent = `Tu BMI es ${bmi} (${classification}).`;
    } else {

        document.getElementById("result").style.color = 'red';
        document.getElementById("result").textContent = "Por favor introduce valores válidos.";
    }
}



