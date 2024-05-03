import {useEffect, useMemo, useState} from 'react';

import {cn} from '@/utils';
// import {useMediaQuery} from '@/hooks/use-media-query';
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

type MealName = 'breakfast' | 'mid-morning' | 'lunch' | 'snack' | 'dinner';

type MealType = {
  name: string;
  description: string;
};

type DailyPlanType = {
  name: MealName;
  meals: MealType[];
};

type MealPlannerType = {
  weekday: number;
  day: string;
  activities: string[];
  todos: string[];
  plan: DailyPlanType[];
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

const snacksCole = 'Botellita de agua o Juguito, Galletitas o Alfajor, Barra de cereal o Fruta.';

const mealPlan: MealPlannerType[] = [
  {
    weekday: 1,
    day: 'Monday',
    activities: ['🏫', '⚽️', '🎾', '📖'],
    todos: ['Verdulería?'],
    plan: [
      {
        name: 'breakfast',
        meals: [
          {name: 'Yogur', description: 'Frutilla o Vainilla'},
          {name: 'Café con Leche', description: 'con azúcar'},
          {name: 'Mate cocido', description: 'con azúcar'},
          {name: 'Mate', description: 'amargo'},
        ],
      },
      {
        name: 'mid-morning',
        meals: [
          {name: 'Snacks cole', description: snacksCole},
          {name: 'Huevo revuelto', description: ''},
        ],
      },
      {
        name: 'lunch',
        meals: [
          {
            name: 'Fideitos',
            description: 'Fideos tirabuzón con aceite, brócoli y queso rallado.',
          },
          {
            name: 'Ensalada con atún',
            description:
              'Atún en aceite, lechugas, palta, tomates cherry, repollo colorado, mix de semillas, aceite de oliva, pimienta y sal.',
          },
        ],
      },
      {
        name: 'snack',
        meals: [
          {name: 'Fruta', description: ''},
          {name: 'Tostada', description: ''},
          {
            name: 'Frutos secos',
            description: 'Almendras y nueces',
          },
        ],
      },
      {
        name: 'dinner',
        meals: [
          {
            name: 'Merluza con espinaca',
            description: 'Merluza con crema de espinacas al curry.',
          },
          {
            name: 'Papitas al horno',
            description: 'Cortadas en cubitos, para la vianda de la semana.',
          },
        ],
      },
    ],
  },
  {
    weekday: 2,
    day: 'Tuesday',
    activities: ['🏫', '🏊‍♀️', '⚽️', '📺'],
    todos: [],
    plan: [
      {
        name: 'breakfast',
        meals: [
          {name: 'Yogur', description: 'Frutilla o Vainilla'},
          {name: 'Café con Leche', description: 'con azúcar'},
          {name: 'Mate cocido', description: 'con azúcar'},
          {name: 'Mate', description: 'amargo'},
        ],
      },
      {
        name: 'mid-morning',
        meals: [
          {name: 'Snacks cole', description: snacksCole},
          {name: 'Huevo revuelto', description: ''},
        ],
      },
      {
        name: 'lunch',
        meals: [
          {
            name: 'Mila con papitas',
            description: 'Milanesa de peceto con papas al horno en cubos.',
          },
          {
            name: 'Berenjenas con ensalada',
            description:
              'A la plancha, rellenas, con ensalada verde, repollo colorado, palta, mix de semillas, aceite de oliva, pimienta y sal.',
          },
        ],
      },
      {
        name: 'snack',
        meals: [
          {name: 'Fruta', description: ''},
          {name: 'Tostada', description: ''},
          {
            name: 'Frutos secos',
            description: 'Almendras y nueces',
          },
        ],
      },
      {
        name: 'dinner',
        meals: [
          {
            name: 'Wok de verduras',
            description: 'morron, champignones, berenjenas, coliflor, nueces... chauchas',
          },
        ],
      },
    ],
  },
  {
    weekday: 3,
    day: 'Wednesday',
    activities: ['🏫', '⚽️', '📖'],
    todos: [],
    plan: [
      {
        name: 'breakfast',
        meals: [
          {name: 'Yogur', description: 'Frutilla o Vainilla'},
          {name: 'Café con Leche', description: 'con azúcar'},
          {name: 'Mate cocido', description: 'con azúcar'},
          {name: 'Mate', description: 'amargo'},
        ],
      },
      {
        name: 'mid-morning',
        meals: [
          {name: 'Snacks cole', description: snacksCole},
          {name: 'Huevo revuelto', description: ''},
        ],
      },
      {
        name: 'lunch',
        meals: [
          {
            name: 'Tartaleta',
            description: 'De espinaca, puerro o jamón y queso.',
          },
          {
            name: 'Zoodles',
            description: 'Fideos de zuquini con gambas o caprese.',
          },
        ],
      },
      {
        name: 'snack',
        meals: [
          {name: 'Fruta', description: ''},
          {name: 'Tostada', description: ''},
          {
            name: 'Frutos secos',
            description: 'Almendras y nueces',
          },
        ],
      },
      {
        name: 'dinner',
        meals: [
          {
            name: 'Carne roja',
            description: 'Ojo de bife a la plancha o colita de cuadril al horno.',
          },
          {
            name: 'Verduras al horno',
            description: 'Morron, repollo blanco y colorado',
          },
        ],
      },
    ],
  },
  {
    weekday: 4,
    day: 'Thursday',
    activities: ['🏫', '🏊‍♀️', '⚽️', '🍿'],
    todos: ['Carnicería', 'Fiambrería', 'Dietética'],
    plan: [
      {
        name: 'breakfast',
        meals: [
          {name: 'Yogur', description: 'Frutilla o Vainilla'},
          {name: 'Café con Leche', description: 'con azúcar'},
          {name: 'Mate cocido', description: 'con azúcar'},
          {name: 'Mate', description: 'amargo'},
        ],
      },
      {
        name: 'mid-morning',
        meals: [
          {name: 'Snacks cole', description: snacksCole},
          {name: 'Huevo revuelto', description: ''},
        ],
      },
      {
        name: 'lunch',
        meals: [
          {
            name: 'Carne con papitas',
            description: 'Carne al horno con papitas',
          },
          {name: 'Omelette', description: ''},
        ],
      },
      {
        name: 'snack',
        meals: [
          {name: 'Fruta', description: ''},
          {
            name: 'Frutos secos',
            description: 'Almendras y nueces',
          },
          {name: 'Tostado', description: 'Pan lactal, jamón y queso'},
        ],
      },
      {
        name: 'dinner',
        meals: [
          {
            name: 'Pollo',
            description: 'Suprema o patamuslo a la plancha o Planchetta si son muchos (yo hago de a 7).',
          },
          {name: 'Arroz', description: ''},
          {name: 'Ensalada', description: ''},
        ],
      },
    ],
  },
  {
    weekday: 5,
    day: 'Friday',
    activities: ['🏫', '🎾', '⚽️', '🎲'],
    todos: ['Verdulería', 'Hipermercado'],
    plan: [
      {
        name: 'breakfast',
        meals: [
          {name: 'Yogur', description: 'Frutilla o Vainilla'},
          {name: 'Café con Leche', description: 'con azúcar'},
          {name: 'Mate cocido', description: 'con azúcar'},
          {name: 'Mate', description: 'amargo'},
        ],
      },
      {
        name: 'mid-morning',
        meals: [
          {name: 'Snacks cole', description: snacksCole},
          {name: 'Huevo revuelto', description: ''},
        ],
      },
      {
        name: 'lunch',
        meals: [
          {
            name: 'Croquetas o Nuggets',
            description: 'Croquetas de arroz, queso cremoso y pollo.',
          },
          {name: 'Ensalada césar', description: ''},
        ],
      },
      {
        name: 'snack',
        meals: [
          {name: 'Fruta', description: ''},
          {
            name: 'Frutos secos',
            description: 'Almendras y nueces',
          },
          {
            name: 'Rollito',
            description: 'Rollito de lomito y queso de máquina.',
          },
        ],
      },
      {
        name: 'dinner',
        meals: [
          {
            name: 'Burguer',
            description: "Roast beef picado doble, Pan de papa, queso cheddar, salsa Lucho's. Sale con fritas.",
          },
          {
            name: 'Tacos',
            description: 'Rapiditas con Roast beef desmenuzado con cebolla caramelizada. Sale con nachos.',
          },
          {
            name: 'Mi sandwich tiene...',
            description: 'Juego de acumulación.',
          },
        ],
      },
    ],
  },
  {
    weekday: 6,
    day: 'Saturday',
    activities: ['😎', '🔥', '🏓'],
    todos: [],
    plan: [
      {
        name: 'breakfast',
        meals: [
          {name: 'Yogur', description: 'Frutilla o Vainilla'},
          {name: 'Café con Leche', description: 'con azúcar'},
          {name: 'Mate cocido', description: 'con azúcar'},
          {name: 'Mate', description: 'amargo'},
        ],
      },
      {
        name: 'mid-morning',
        meals: [{name: 'Huevo revuelto', description: ''}],
      },
      {
        name: 'lunch',
        meals: [
          {
            name: 'Parrilla',
            description: 'Todo bicho que camina... y verdura también.',
          },
        ],
      },
      {
        name: 'snack',
        meals: [
          {name: 'Mate', description: ''},
          {
            name: 'Bizcochuelo',
            description: 'De limón, naranja o chocolate. Que quede para el día siguiente.',
          },
        ],
      },
      {
        name: 'dinner',
        meals: [
          {
            name: 'Pizza',
            description: 'Napoletana. Pizzeta de berenjena también vale.',
          },
          {name: 'Empanadas', description: 'Hacer para congelar'},
          {name: 'Tartaleta', description: 'Hacer para congelar'},
        ],
      },
    ],
  },
  {
    weekday: 0,
    day: 'Sunday',
    activities: ['🛋', '🍿', '📖'],
    todos: [],
    plan: [
      {
        name: 'breakfast',
        meals: [
          {name: 'Yogur', description: 'Frutilla o Vainilla'},
          {name: 'Café con Leche', description: 'con azúcar'},
          {name: 'Mate cocido', description: 'con azúcar'},
          {name: 'Mate', description: 'amargo'},
        ],
      },
      {
        name: 'mid-morning',
        meals: [{name: 'Bizcochuelo', description: ''}],
      },
      {
        name: 'lunch',
        meals: [
          {
            name: 'Pasta',
            description: 'Fideos caseros, Sorrentinos, Lasagna de berenjena, Estofado...',
          },
        ],
      },
      {
        name: 'snack',
        meals: [
          {name: 'Mate', description: 'Siempre.'},
          {name: 'Pochoclos', description: 'Vamos que arranca la peli.'},
        ],
      },
      {
        name: 'dinner',
        meals: [
          {
            name: 'Picadita',
            description: 'Salame, queso artesanal, tomates cherry, Falsa Criolla, Babaganush, Hummus, Burrata...',
          },
          {
            name: 'Sushi',
            description: 'Tengo que encontrar un lugar bueno.',
          },
          {name: 'Trapos viejos', description: 'No cocino, comemos sobras.'},
        ],
      },
    ],
  },
];

export default function MealPlanner({...props}) {
  // const isMobile = useMediaQuery('(max-width: 1024px)');

  const [gridMode, setGridMode] = useState(true);
  const [position, setPosition] = useState('primero');

  const today = useMemo(() => new Date(), []);
  const currentMeal = useMemo(() => {
    const hour = today.getHours();
    return getCurrentMeal(hour);
  }, [today]);

  const rowStyles = 'grid gap-1';
  const cellStyles = 'col-span-2 bg-muted px-2 py-2 flex flex-wrap gap-1 items-baseline content-start';
  const tagStyles = 'inline-block rounded bg-background px-1 text-sm cursor-pointer';
  const coleStyles = 'border border-border';

  const [hideOnMobile, setHideOnMobile] = useState(false);

  // useEffect(() => {
  //   setHideOnMobile(isMobile);
  // }, [isMobile]);

  return (
    <section className="my-6 grid rounded-md border p-6 lg:-mx-24 lg:my-20 xl:-mx-60" {...props}>
      <header className="mb-5 grid grid-cols-12 items-center gap-y-2">
        <div className="col-span-12 lg:col-span-2">
          <span className="text-xl font-bold">Meal Planner</span>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <span className="text-muted-foreground">
            {weekday[today.getDay()]} Enjoy your {currentMeal}.
          </span>
        </div>

        <div className="col-span-12 hidden gap-5 lg:col-span-4 lg:flex lg:justify-end">
          <div className="items-center space-x-2">
            <Switch id="grud-mode" checked={gridMode} onCheckedChange={(prevState) => setGridMode(!gridMode)} />
            <Label htmlFor="grud-mode">Grid</Label>
          </div>

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">🤤 Omnivore</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Alimentation plan</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="primero">
                  Omnivore
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="segundo">
                  Vegetarian
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="2022">
                  Vegan
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu> */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">🇦🇷 Cuisine</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Cuisine</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="primero">
                  🇦🇷 Argentine
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="segundo">
                  🇫🇷 French
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="segundo">
                  🇪🇸 Spanish
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="2022">
                  ⚽️ Others
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">❄️ Winter</Button>
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
        </div>
      </header>

      {gridMode && !hideOnMobile && (
        <aside className="grid grid-cols-12 gap-x-1">
          <div className="col-span-2" />
          <div className="col-span-2 py-5">
            <div className="text-xs uppercase text-muted-foreground">Desayuno</div>
          </div>
          <div className="col-span-2 py-5">
            <div className="text-xs uppercase text-muted-foreground">Media mañana</div>
          </div>
          <div className="col-span-2 py-5">
            <div className="text-xs uppercase text-muted-foreground">Almuerzo</div>
          </div>
          <div className="col-span-2 py-5">
            <div className="text-xs uppercase text-muted-foreground">Merienda /Snack</div>
          </div>
          <div className="col-span-2 py-5">
            <div className="text-xs uppercase text-muted-foreground">Cena</div>
          </div>
        </aside>
      )}

      <main className="grid gap-y-1">
        {mealPlan.map((plan) => (
          <div
            className={cn(
              rowStyles,
              gridMode && !hideOnMobile && 'grid-cols-12',
              today.getDay() === plan.weekday && 'border-y border-dashed border-border',
            )}
            key={plan.day}
          >
            <div className="col-span-2 py-2">
              <div className="text-sm font-semibold">{plan.day}</div>
              <div className="flex gap-x-1">
                {plan.activities.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>
              <ul className="mt-2 text-xs text-muted-foreground">
                {plan.todos.map((i) => (
                  <li key={i}>- [ ] {i}</li>
                ))}
              </ul>
            </div>

            {plan.plan.map((m, mealIndex) => (
              <div
                key={`${plan.day}-${m.name}`}
                className={cn(
                  cellStyles,
                  today.getDay() === plan.weekday && currentMeal === m.name && 'border-l-4 border-primary',
                )}
              >
                <span
                  className={cn('mr-2 text-xs uppercase text-muted-foreground', gridMode && !hideOnMobile && 'hidden')}
                >
                  {m.name}
                </span>
                {m.meals.map((meal, index) => (
                  <Popover key={`${meal.name}-${index}`}>
                    <PopoverTrigger asChild>
                      <span
                        className={cn(
                          tagStyles,
                          plan.weekday > 0 &&
                            plan.weekday <= 5 &&
                            mealIndex > 0 &&
                            mealIndex < 3 &&
                            index === 0 &&
                            coleStyles,
                        )}
                      >
                        {meal.name}
                      </span>
                    </PopoverTrigger>
                    <PopoverContent className="w-60">
                      <div className="font-semibold">{meal.name}</div>
                      <div className="mt-1 text-sm">{meal.description}</div>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            ))}
          </div>
        ))}
      </main>

      <aside className="my-10">
        <div className={cn(cellStyles)}>
          <span className="mr-2 text-xs uppercase text-muted-foreground">Meal Bench</span>
          {/* Bench meals */}
          <Popover>
            <PopoverTrigger asChild>
              <span className={cn(tagStyles)}>Pastel de papa</span>
            </PopoverTrigger>
            <PopoverContent className="w-60">
              <div className="font-semibold">Pastel de papa</div>
              <div className="mt-1 text-sm">Pastel de papas</div>
            </PopoverContent>
          </Popover>
        </div>
      </aside>

      <footer className="grid grid-cols-12 items-center">
        <div className="col-span-2">
          <span className="text-2xl font-bold">🍽️</span>
        </div>

        <div className="col-span-4 flex flex-wrap gap-2">
          <Button variant="outline">Create meal</Button>
        </div>

        <div className="col-span-6 flex justify-end gap-2">
          <Button variant="default">Print</Button>
        </div>
      </footer>
    </section>
  );
}
