export type RecipeType = {
  id: string;
  name: string;
  description: string;
  photos?: string[];
};

export const recipes: RecipeType[] = [
  {
    id: 'mate',
    name: 'Mate',
    description: 'Playadito, Mañanita o similar. Amargo, siempre.',
  },
  {
    id: 'mate-cocido',
    name: 'Mate cocido',
    description: 'con azúcar',
  },
  {
    id: 'cafe-con-leche',
    name: 'Café con leche',
    description: 'con azúcar',
  },
  {
    id: 'snacks-cole',
    name: 'Snacks cole',
    description: 'Botellita con agua o Juguito, Galletitas o Alfajor, Barra de cereal o Fruta de estación.',
  },
  {
    id: 'huevos',
    name: 'Huevo revuelto',
    description: '',
  },
  {
    id: 'fideitos',
    name: 'Fideitos',
    description: 'Fideos tirabuzón con aceite, brócoli y queso rallado.',
  },
  {
    id: 'ensalada-atun',
    name: 'Ensalada con atún',
    description:
      'Atún en aceite, lechugas, palta, tomates cherry, repollo colorado, mix de semillas, aceite de oliva, pimienta y sal.',
  },
  {
    id: 'fruta',
    name: 'Fruta',
    description: 'Banana y alguna otra fruta de estación.',
  },
  {
    id: 'tostada',
    name: 'Tostada',
    description: '',
  },
  {
    id: 'frutos-secos',
    name: 'Frutos secos',
    description: 'Almendras y nueces',
  },
  {
    id: 'merluza',
    name: 'Merluza con espinaca',
    description: 'Merluza con crema de espinacas al curry.',
  },
  {
    id: 'papitas',
    name: 'Papitas al horno',
    description: 'Cortadas en cubitos, para la vianda de la semana.',
  },
  {
    id: 'milanesas',
    name: 'Milanesas',
    description: 'Milanesa de cerdo, pollo o peceto.',
  },
  {
    id: 'berenjenas-aburridas',
    name: 'Berenjenas con ensalada',
    description:
      'A la plancha, rellenas, con ensalada verde, repollo colorado, palta, mix de semillas, aceite de oliva, pimienta y sal.',
  },
  {
    id: 'wok-verduras',
    name: 'Wok',
    description: 'morron, champignones, berenjenas, coliflor, nueces... chauchas',
  },
  {
    id: 'tartaleta',
    name: 'Tartaleta',
    description: 'De espinaca, puerro o jamón y queso.',
  },
  {
    id: 'zoodles',
    name: 'Zoodles',
    description: 'Fideos de zuquini con gambas o caprese.',
  },
  {
    id: 'carne-roja',
    name: 'Carne roja',
    description: 'Ojo de bife a la plancha o colita de cuadril al horno.',
  },
  {
    id: 'verduras-horno',
    name: 'Verduras al horno',
    description: 'Morron, repollo blanco y colorado',
  },
  {
    id: 'tostado',
    name: 'Tostado',
    description: 'Pan lactal, jamón y queso',
  },
  {
    id: 'carne-papitas',
    name: 'Carne con papitas',
    description: 'Carne al horno con papitas',
  },
  {
    id: 'omelette',
    name: 'Omelette',
    description: '',
  },
  {
    id: 'pollo',
    name: 'Pollo',
    description: 'Suprema o patamuslo a la plancha o Planchetta si son muchos (yo hago de a 7).',
  },
  {
    id: 'arroz',
    name: 'Arroz',
    description: 'Arroz blanco o risotto',
  },
  {
    id: 'ensalada',
    name: 'Ensalada',
    description: '',
  },
  {
    id: 'nuggets',
    name: 'Nuggets de pollo',
    description: 'Patitas o Nuggets de pollo.',
  },
  {
    id: 'bastones',
    name: 'Bastón de merluza',
    description: 'Bastones de Merluza.',
  },
  {
    id: 'cesar',
    name: 'Ensalada césar',
    description: '',
  },
  {
    id: 'rollito',
    name: 'Rollito',
    description: 'Rollito de lomito y queso de máquina.',
  },
  {
    id: 'burguer',
    name: 'Burguer',
    description: "Roast beef picado doble, Pan de papa, queso cheddar, salsa Lucho's. Sale con fritas.",
  },
  {
    id: 'tacos',
    name: 'Tacos',
    description: 'Rapiditas con Roast beef desmenuzado con cebolla caramelizada. Sale con nachos.',
  },
  {
    id: 'sandwich',
    name: 'Mi sandwich tiene...',
    description: 'Juego de acumulación.',
  },
  {
    id: 'parrilla',
    name: 'Parrilla',
    description: 'Todo bicho que camina... y verdura también.',
  },
  {
    id: 'bizcochuelo',
    name: 'Bizcochuelo',
    description: 'De limón, naranja o chocolate. Que quede para el día siguiente.',
  },
  {
    id: 'pizza',
    name: 'Pizza',
    description: 'Napoletana. Pizzeta de berenjena también vale.',
  },
  {
    id: 'empanadas',
    name: 'Empanadas',
    description: 'Hacer para congelar',
  },
  {
    id: 'tartaleta',
    name: 'Tartaleta',
    description: 'Hacer para congelar',
  },
  {
    id: 'pasta',
    name: 'Pasta',
    description: 'Fideos caseros, Sorrentinos, Lasagna de berenjena, Estofado...',
  },
  {
    id: 'pochoclos',
    name: 'Pochoclos',
    description: 'Vamos que arranca la peli.',
  },
  {
    id: 'picadita',
    name: 'Picadita',
    description: 'Salame, queso artesanal, tomates cherry, Falsa Criolla, Babaganush, Hummus, Burrata...',
  },
  {
    id: 'sushi',
    name: 'Sushi',
    description: 'Tengo que encontrar un lugar bueno.',
  },
  {
    id: 'trapos',
    name: 'Trapos viejos',
    description: 'No cocino, comemos sobras.',
  },
  {
    id: 'souffle-zapallitos',
    name: 'Soufflé de zapallitos',
    description: '',
  },
  {
    id: 'pastel-papas',
    name: 'Pastel de papas',
    description: '',
  },
  {
    id: 'cherries',
    name: 'Tomate cherry',
    description: '',
  },
  {
    id: 'pure',
    name: 'Puré',
    description: 'Papa y boniato',
  },
  {
    id: 'pescado',
    name: 'Trucha o Salmón',
    description: 'Trucha o salmón al horno',
  },
  {
    id: 'hummus',
    name: 'Hummus',
    description: 'Hummus de garbanzo, berenjena o zanahoria',
  },
  {
    id: 'pinche-caprese',
    name: 'Pinche caprese',
    description: 'Pinche de muzzarella, tomate y albahaca',
  },
  {
    id: 'guiso-lentejas',
    name: 'Guiso de lentejas',
    description: 'Con panceta, chorizo colorado o parrillero, y al disco...',
  },
  {
    id: 'crepes',
    name: 'Crépes',
    description: 'De jamón y queso, de espinaca, de dulce de leche y todo tipo de creativas combinaciones.',
  },
];
