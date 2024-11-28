const biciclette = [
    {
      name: 'Bici rossa',
      peso: 33,
    },
    {
      name: 'Bici nera',
      peso: 25,
    },
    {
      name: 'Bici viola',
      peso: 20,
    },
    {
      name: 'Bici verde',
      peso: 17,
    },
    {
      name: 'Bici bianca',
      peso: 23,
    },
];

let biciclettaPiuLeggera = biciclette[0];
for (let i = 1; i < biciclette.length; i++) {
     if (biciclette[i].peso < biciclettaPiuLeggera.peso) {
        biciclettaPiuLeggera = biciclette[i];

    }   
}

console.log(`La bicicletta più leggera è ${biciclettaPiuLeggera.name} con un peso di ${biciclettaPiuLeggera.peso} kg.`);