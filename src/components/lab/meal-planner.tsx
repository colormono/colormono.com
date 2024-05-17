import {useEffect, useMemo, useState} from 'react';
import {cn} from '@/utils';
import {Button} from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Label} from '@/components/ui/label';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {Switch} from '@/components/ui/switch';
import {twMerge} from 'tailwind-merge';

type MealName = 'breakfast' | 'mid-morning' | 'lunch' | 'snack' | 'dinner';

type RecipeType = {
  id: string;
  name: string;
  description: string;
  photos?: string[];
};

type DailyPlanType = {
  name: MealName;
  recipes: RecipeType['id'][];
};

type MealPlannerType = {
  weekday: number;
  day: string;
  activities: string[];
  tasks: string[];
  meals: DailyPlanType[];
};

const weekday = [
  'Today is Sunday, relax.',
  'Today is Monday, the week is starting!',
  'Today is Tuesday, keep going!',
  'Today is Wednesday, hump day!',
  'Today is Thursday, almost there!',
  "Thanks God it's Friday!",
  'Today is Saturday, yay!',
];

//  move recipes to a ts/json file
const recipes: RecipeType[] = [
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

const mealPlan: MealPlannerType[] = [
  {
    weekday: 1,
    day: 'Monday',
    activities: ['🏫', '🎾', '⚽️'],
    tasks: [],
    meals: [
      {
        name: 'breakfast',
        recipes: ['cafe-con-leche', 'mate-cocido', 'mate', 'tostada'],
      },
      {
        name: 'mid-morning',
        recipes: ['snacks-cole', 'fruta'],
      },
      {
        name: 'lunch',
        recipes: ['nuggets', 'cherries', 'omelette'],
      },
      {
        name: 'snack',
        recipes: ['fruta', 'frutos-secos', 'pinche-caprese'],
      },
      {
        name: 'dinner',
        recipes: ['merluza', 'papitas'],
      },
    ],
  },
  {
    weekday: 2,
    day: 'Tuesday',
    activities: ['🏫', '🚴', '⚽️'],
    tasks: [],
    meals: [
      {
        name: 'breakfast',
        recipes: ['cafe-con-leche', 'mate-cocido', 'mate', 'tostada'],
      },
      {
        name: 'mid-morning',
        recipes: ['snacks-cole', 'fruta'],
      },
      {
        name: 'lunch',
        recipes: ['bastones', 'papitas', 'cesar'],
      },
      {
        name: 'snack',
        recipes: ['fruta', 'frutos-secos', 'hummus'],
      },
      {
        name: 'dinner',
        recipes: ['arroz', 'wok-verduras', 'tacos', 'sushi'],
      },
    ],
  },
  {
    weekday: 3,
    day: 'Wednesday',
    activities: ['🏫', '🎾', '⚽️'],
    tasks: ['Ir a la fiambrería', 'Ir a la dietética'],
    meals: [
      {
        name: 'breakfast',
        recipes: ['cafe-con-leche', 'mate-cocido', 'mate', 'tostada'],
      },
      {
        name: 'mid-morning',
        recipes: ['snacks-cole', 'fruta'],
      },
      {
        name: 'lunch',
        recipes: ['nuggets', 'arroz', 'ensalada-atun'],
      },
      {
        name: 'snack',
        recipes: ['fruta', 'frutos-secos', 'tostado'],
      },
      {
        name: 'dinner',
        recipes: ['milanesas', 'pure', 'ensalada'],
      },
    ],
  },
  {
    weekday: 4,
    day: 'Thursday',
    activities: ['🏫', '🕹️', '⚽️'],
    tasks: ['Pedido carnicería', 'Pedido hipermercado', 'Entrega pescadería'],
    meals: [
      {
        name: 'breakfast',
        recipes: ['cafe-con-leche', 'mate-cocido', 'mate', 'tostada'],
      },
      {
        name: 'mid-morning',
        recipes: ['snacks-cole', 'fruta'],
      },
      {
        name: 'lunch',
        recipes: ['milanesas', 'pure', 'tartaleta', 'zoodles'],
      },
      {
        name: 'snack',
        recipes: ['fruta', 'frutos-secos', 'rollito'],
      },
      {
        name: 'dinner',
        recipes: ['pescado', 'souffle-zapallitos', 'ensalada'],
      },
    ],
  },
  {
    weekday: 5,
    day: 'Friday',
    activities: ['🏫', '🎲'],
    tasks: ['Pedido verdulería', 'Entrega verdulería', 'Entrega carnicería'],
    meals: [
      {
        name: 'breakfast',
        recipes: ['cafe-con-leche', 'mate-cocido', 'mate', 'tostada'],
      },
      {
        name: 'mid-morning',
        recipes: ['snacks-cole', 'fruta'],
      },
      {
        name: 'lunch',
        recipes: ['bastones', 'souffle-zapallitos', 'milanesas', 'ensalada'],
      },
      {
        name: 'snack',
        recipes: ['fruta', 'frutos-secos', 'picadita'],
      },
      {
        name: 'dinner',
        recipes: ['pizza', 'empanadas', 'tartaleta'],
      },
    ],
  },
  {
    weekday: 6,
    day: 'Saturday',
    activities: ['⚽️', '😎', '🔥', '🏓'],
    tasks: [],
    meals: [
      {
        name: 'breakfast',
        recipes: ['mate', 'tostada', 'cafe-con-leche'],
      },
      {
        name: 'mid-morning',
        recipes: ['huevos', 'fruta'],
      },
      {
        name: 'lunch',
        recipes: ['parrilla'],
      },
      {
        name: 'snack',
        recipes: ['bizcochuelo'],
      },
      {
        name: 'dinner',
        recipes: ['burguer', 'sandwich'],
      },
    ],
  },
  {
    weekday: 0,
    day: 'Sunday',
    activities: ['⚽️', '🍝', '🛋', '🍿'],
    tasks: [],
    meals: [
      {
        name: 'breakfast',
        recipes: ['mate', 'tostada', 'cafe-con-leche'],
      },
      {
        name: 'mid-morning',
        recipes: ['huevos', 'fruta'],
      },
      {
        name: 'lunch',
        recipes: ['pasta'],
      },
      {
        name: 'snack',
        recipes: ['pochoclos'],
      },
      {
        name: 'dinner',
        recipes: ['trapos'],
      },
    ],
  },
];

function getCurrentMeal(hour: number): MealName {
  if (hour >= 4 && hour < 10) {
    return 'breakfast';
  } else if (hour >= 10 && hour < 12) {
    return 'mid-morning';
  } else if (hour >= 12 && hour < 15) {
    return 'lunch';
  } else if (hour >= 15 && hour < 20) {
    return 'snack';
  } else {
    return 'dinner';
  }
}

function getRecipesInUse(mealPlan: MealPlannerType[]): RecipeType['id'][] {
  const recipesInUse: RecipeType['id'][] = [];

  mealPlan.forEach((day) => {
    day.meals.forEach((meal) => {
      meal.recipes.forEach((recipe) => recipesInUse.push(recipe));
    });
  });

  return recipesInUse;
}

export default function MealPlanner({className = '', ...props}) {
  const [gridMode, setGridMode] = useState(true);
  const [position, setPosition] = useState('primero');
  const [bench, setBench] = useState<RecipeType['id'][]>([]);

  const today = useMemo(() => new Date(), []);
  const currentMeal = useMemo(() => {
    const hour = today.getHours();
    return getCurrentMeal(hour);
  }, [today]);

  const rowStyles = 'grid gap-1';
  const cellStyles = 'col-span-2 bg-muted px-2 py-2 flex flex-wrap gap-1 items-baseline content-start';
  const tagStyles = 'inline-block rounded bg-background px-1 text-sm cursor-pointer border';

  const coleStyles = 'bg-muted';

  useEffect(() => {
    const recipesInUse = getRecipesInUse(mealPlan);
    const otherRecipes = recipes.filter((r) => !recipesInUse.includes(r.id)).map((r) => r.id);
    setBench(otherRecipes);
  }, []);

  const Recipe = ({recipe}: {recipe: RecipeType}) => (
    <Popover key={recipe.id}>
      <PopoverTrigger asChild>
        <span
          className={cn(
            tagStyles,
            // plan.weekday > 0 && plan.weekday <= 5 && mealIndex > 0 && mealIndex < 3 && index === 0 && coleStyles,
          )}
        >
          {recipe.name}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <div className="font-semibold">{recipe.name}</div>
        <div className="mt-1 text-sm">{recipe.description}</div>
      </PopoverContent>
    </Popover>
  );

  return (
    <section
      className={twMerge('flex flex-col rounded-md border bg-white p-6 text-base dark:bg-black', className)}
      {...props}
    >
      <header className="mb-5 grid grid-cols-12 items-center gap-y-2">
        <div className="col-span-12 flex items-center lg:col-span-2">
          <span className="mr-2 text-2xl font-bold">🍽️</span>
          <span className="text-xl font-bold">Meal Planner</span>
        </div>

        <div className="col-span-12 flex items-center lg:col-span-6">
          <span className="text-muted-foreground">
            {weekday[today.getDay()]} Enjoy your {currentMeal}.
          </span>
        </div>

        <div className="col-span-12 hidden gap-5 lg:col-span-4 lg:flex lg:justify-end">
          <div className="flex items-center space-x-4">
            <Label htmlFor="grud-mode">🗓️</Label>
            <Switch id="grud-mode" checked={gridMode} onCheckedChange={(prevState) => setGridMode(!gridMode)} />
          </div>
        </div>
      </header>

      {gridMode && (
        <aside className="grid grid-cols-12 gap-x-1">
          <div className="col-span-2" />
          <div className="col-span-2 py-5">
            <div className="text-xs uppercase text-muted-foreground">Breakfast</div>
          </div>
          <div className="col-span-2 py-5">
            <div className="text-xs uppercase text-muted-foreground">Mid morning</div>
          </div>
          <div className="col-span-2 py-5">
            <div className="text-xs uppercase text-muted-foreground">Lunch</div>
          </div>
          <div className="col-span-2 py-5">
            <div className="text-xs uppercase text-muted-foreground">Snack</div>
          </div>
          <div className="col-span-2 py-5">
            <div className="text-xs uppercase text-muted-foreground">Dinner</div>
          </div>
        </aside>
      )}

      <main className="grid flex-1 gap-y-1">
        {mealPlan.map((plan) => (
          <div
            key={plan.day}
            className={cn(
              rowStyles,
              gridMode && 'grid-cols-12',
              today.getDay() === plan.weekday && 'border-y border-dashed border-primary',
            )}
          >
            {/* Day */}
            <div className="col-span-2 py-2 pr-4">
              {/* Name */}
              <div className="text-sm font-semibold">{plan.day}</div>

              {/* Daily Activities */}
              <div className="flex gap-x-1">
                {plan.activities.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>

              {/* Daily To-do list */}
              <div className="group mt-4">
                <ul className="m-0 list-none p-0 text-xs text-muted-foreground">
                  {plan.tasks.map((i) => (
                    <li key={i} className="ml-0 flex items-center p-0">
                      <span className="mr-2 leading-none">
                        <input type="checkbox" className="accent-primary" />
                      </span>{' '}
                      {i}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  size="xs"
                  className="hidden w-full bg-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Add Task
                </Button>
              </div>
            </div>

            {/* Daily plan */}
            {plan.meals.map((m, mealIndex) => (
              <div
                key={`${plan.day}-${m.name}`}
                className={cn(
                  cellStyles,
                  today.getDay() === plan.weekday && currentMeal === m.name && 'border-l-4 border-primary',
                )}
              >
                {/* List View: Meal name */}
                <span className={cn('mr-2 text-xs uppercase text-muted-foreground', gridMode && 'hidden')}>
                  {m.name}
                </span>

                {/* Recipes */}
                {m.recipes.map((recipe) => {
                  const r = typeof recipe === 'string' ? recipes.find((r) => r.id === recipe) : recipe;
                  if (r === undefined) return null;
                  return <Recipe key={r.id} recipe={r} />;
                })}
              </div>
            ))}
          </div>
        ))}
      </main>

      {/* Bench */}
      <aside className="mt-10">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="mr-2 text-xs uppercase text-muted-foreground">Recipes Bench</span>
          <nav className="filters">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">🤤 Omnivore</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Alimentation plan</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="primero">Omnivore</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="segundo">Vegetarian</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="2022">Vegan</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">🇦🇷 Argentine</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Cuisine</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="primero">🇦🇷 Argentine</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="segundo">🇫🇷 French</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="segundo">🇪🇸 Spanish</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="2022">⚽️ Others</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">🍁 Autumn</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Season</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="spring">🌿 Primavera</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="summer">☀️ Verano</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="autumn">🍁 Otoño</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="primero">❄️ Invierno</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="sm" className="ml-4">
              New Recipe
            </Button>
          </nav>
        </div>

        {/* Bench Recipes */}
        <div className={cn(cellStyles)}>
          {bench.map((meal) => {
            const recipe = typeof meal === 'string' ? recipes.find((r) => r.id === meal) : meal;
            if (recipe === undefined) return null;
            return <Recipe key={recipe.id} recipe={recipe} />;
          })}
        </div>
      </aside>
    </section>
  );
}
