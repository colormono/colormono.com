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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {Switch} from '@/components/ui/switch';
import {recipes, type RecipeType} from './recipes';
import {mealPlan as mealPlanDb, type MealName, type MealPlannerType} from './plan';
import {XIcon} from 'lucide-react';

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

function reorderWeekdays(weekdays: MealPlannerType[], currentDay: number): MealPlannerType[] {
  // Ensure the currentDay is within the range 0-7
  if (currentDay < 0 || currentDay > 7) {
    throw new Error('Current day must be between 0 and 7');
  }
  // Find the index of the current day in the weekdays array
  const currentIndex = weekdays.findIndex((day) => day.weekday === currentDay);
  // If current day is not found in the array, throw an error
  if (currentIndex === -1) {
    throw new Error('Current day not found in the weekdays list');
  }
  // Slice the array into two parts: from the current day to the end, and from the start to the current day
  const reorderedWeekdays = weekdays.slice(currentIndex).concat(weekdays.slice(0, currentIndex));
  return reorderedWeekdays;
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

const weekday = [
  'Today is Sunday, relax.',
  'Today is Monday, the week is starting!',
  'Today is Tuesday, keep going!',
  'Today is Wednesday, hump day!',
  'Today is Thursday, almost there!',
  "Thanks God it's Friday!",
  'Today is Saturday, yay!',
];

export default function MealPlanner({className = '', ...props}) {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState('primero');
  const [bench, setBench] = useState<RecipeType['id'][]>([]);
  const [mealPlan, setMealPlan] = useState<MealPlannerType[]>(mealPlanDb);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeType | undefined>();

  const today = useMemo(() => new Date(), []);
  const currentMeal = useMemo(() => {
    const hour = today.getHours();
    return getCurrentMeal(hour);
  }, [today]);

  const rowStyles = 'grid gap-1';
  const cellStyles = 'col-span-2 bg-muted px-2 py-2 flex flex-wrap gap-1 items-baseline content-start';

  const coleStyles = 'bg-muted';

  const Recipe = ({recipe}: {recipe: RecipeType}) => {
    return (
      <DrawerTrigger key={recipe.id} onClick={() => setSelectedRecipe(recipe)}>
        <span
          className={cn(
            'inline-block cursor-pointer whitespace-nowrap rounded border bg-white px-1 text-sm dark:bg-black',
            // plan.weekday > 0 && plan.weekday <= 5 && mealIndex > 0 && mealIndex < 3 && index === 0 && coleStyles,
          )}
        >
          {recipe.name}
        </span>
      </DrawerTrigger>
    );
  };

  useEffect(() => {
    const recipesInUse = getRecipesInUse(mealPlan);
    const otherRecipes = recipes.filter((r) => !recipesInUse.includes(r.id)).map((r) => r.id);
    setBench(otherRecipes);

    const currentDay = today.getDay();
    const reordered = reorderWeekdays(mealPlan, currentDay);
    setMealPlan(reordered);

    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-white text-sm font-semibold tracking-wider text-muted dark:bg-black">
        LOADING
      </div>
    );

  return (
    <div className={cn('@container', className, isMobile && '!mx-auto w-80')} {...props}>
      <Drawer>
        {selectedRecipe && (
          <DrawerContent>
            <DrawerHeader>
              <div className="flex gap-8">
                <figure className="w-56 overflow-hidden rounded-md">
                  <img
                    src={selectedRecipe.photos?.[0] || '/static/not-found.png'}
                    alt={selectedRecipe.name}
                    className={`h-full w-full object-cover`}
                  />
                </figure>
                <div>
                  <DrawerTitle>{selectedRecipe.name}</DrawerTitle>
                  <DrawerDescription>{selectedRecipe.description}</DrawerDescription>
                </div>
              </div>
            </DrawerHeader>
            <DrawerFooter>
              {/* <Button>Submit</Button> */}
              <DrawerClose>
                <XIcon />
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        )}

        <section className="flex min-h-screen flex-col bg-white p-4 text-base @4xl:p-6 dark:bg-black">
          <header className="mb-5 grid items-center gap-y-2 @5xl:grid-cols-12">
            <div className="flex items-center @4xl:col-span-2">
              <span className="mr-2 text-2xl font-bold">🍽️</span>
              <span className="text-xl font-bold">Meal Planner</span>
            </div>

            <div className="flex items-center @4xl:col-span-6">
              <span className="text-balance text-lg text-muted-foreground">
                {weekday[today.getDay()]} Enjoy your {currentMeal}.
              </span>
            </div>

            <div className="order-first hidden justify-end gap-5 @4xl:order-last @4xl:col-span-4 xl:flex">
              <div className="flex items-center space-x-4">
                {/* <Label htmlFor="grud-mode">🗓️</Label> */}
                <Switch id="grud-mode" checked={isMobile} onCheckedChange={(prevState) => setIsMobile(!isMobile)} />
              </div>
            </div>
          </header>

          <aside className="hidden grid-cols-12 gap-x-1 @5xl:grid">
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

          <main className="grid flex-1 gap-y-8 @container @4xl:gap-y-1">
            {mealPlan.map((plan) => (
              <div
                key={plan.day}
                className={cn(
                  rowStyles,
                  '@4xl:grid-cols-12',
                  today.getDay() === plan.weekday && 'border-dashed border-primary @4xl:border-y',
                )}
              >
                {/* Day */}
                <div className="col-span-2 py-2 pr-4">
                  {/* Name */}
                  <div className="text-base font-semibold">{plan.day}</div>

                  {/* Daily Activities */}
                  <div className="mt-2 flex gap-x-2">
                    {plan.activities.map((i) => (
                      <span key={i}>{i}</span>
                    ))}
                  </div>

                  {/* Daily To-do list */}
                  <div className="group mt-4">
                    {plan.tasks.length > 0 ? (
                      <ul className="mx-0 mb-1 mt-3 list-none p-0 text-base text-muted-foreground @4xl:text-xs">
                        {plan.tasks.map((i) => (
                          <div key={i} className="relative flex items-start py-1">
                            <div className="mr-3 flex h-6 items-center">
                              <input
                                id={`person-${i}`}
                                name={`person-${i}`}
                                type="checkbox"
                                className="h-5 w-5 rounded border-border text-primary focus:ring-muted"
                              />
                            </div>
                            <div className="min-w-0 flex-1 text-sm leading-6">
                              <label htmlFor={`person-${i}`} className="select-none text-foreground">
                                {i}
                              </label>
                            </div>
                          </div>
                        ))}
                      </ul>
                    ) : null}

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
                      today.getDay() === plan.weekday &&
                        currentMeal === m.name &&
                        'border-l-4 border-primary @4xl:border-r-4',
                    )}
                  >
                    {/* List View: Meal name */}
                    <span className="mb-0.5 w-full text-xs uppercase text-muted-foreground @4xl:hidden">{m.name}</span>

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
      </Drawer>
    </div>
  );
}
