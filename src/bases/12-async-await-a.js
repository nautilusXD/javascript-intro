const miPromesa = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tenemos un valor en la promesa");
        }, 1000);
    });
};

const medirTiempoAsync = async() => {
    console.log("Inicio");

    await miPromesa().then(console.log);

    console.log("Fin");

    return "fin de medir tiempo async";
};

medirTiempoAsync().then(console.log);