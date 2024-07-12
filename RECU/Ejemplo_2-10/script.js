function calcSalario() {
    let nombre = document.querySelector("[name='nombreInput']").value.trim();
    let horasTrabajadas = document.querySelector("[name='horasInput']").value.trim();    
    let texto = document.querySelector("#texto");

    if (nombre === '' || horasTrabajadas === '') {
        alert("No se ingresaron datos correctos");
    } else {
        horasTrabajadas = Number(horasTrabajadas);
        
        let tarifaHoraria = 800;
        let horasNormales = 35;
        let tarifaExtra = tarifaHoraria * 1.5;

        // Calcular salario bruto
        let salarioBruto;
        if (horasTrabajadas <= horasNormales) {
            salarioBruto = horasTrabajadas * tarifaHoraria;
        } else {
            salarioBruto = (horasNormales * tarifaHoraria) + ((horasTrabajadas - horasNormales) * tarifaExtra);
        }

        // Calcular tasas
        let tasa1 = 0;
        let tasa2 = 0;
        let tasa3 = 0;

        if (salarioBruto <= 60000) {
            tasa1 = 0;
        } else if (salarioBruto <= 100000) {
            tasa1 = 0;
            tasa2 = (salarioBruto - 60000) * 0.25;
        } else {
            tasa1 = 0;
            tasa2 = 40000 * 0.25;
            tasa3 = (salarioBruto - 100000) * 0.45;
        }

        let totalTasas = tasa1 + tasa2 + tasa3;
        let salarioNeto = salarioBruto - totalTasas;

        // Imprimir resultados
        let mensaje = () => {
            let msg = `<p>Nombre: ${nombre}</p>`;
            msg += `<p>Salario Bruto: ${salarioBruto} en pesetas</p>`;
            msg += `<p>Total Tasas: ${totalTasas} en pesetas</p>`;        
            msg += `<p>Salario Neto: ${salarioNeto} en pesetas</p>`;
            return msg;
        }
        texto.innerHTML = mensaje();
        
        document.querySelector('#formSalario').reset();
    }
}
