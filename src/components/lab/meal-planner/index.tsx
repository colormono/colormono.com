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
import {recipes, type RecipeType} from './recipes';
import {mealPlan, type MealName, type MealPlannerType} from './plan';

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

const weekday = [
  'Today is Sunday, relax.',
  'Today is Monday, the week is starting!',
  'Today is Tuesday, keep going!',
  'Today is Wednesday, hump day!',
  'Today is Thursday, almost there!',
  "Thanks God it's Friday!",
  'Today is Saturday, yay!',
];

const Recipe = ({recipe}: {recipe: RecipeType}) => {
  return (
    <Popover key={recipe.id}>
      <PopoverTrigger asChild>
        <span
          className={cn(
            'inline-block cursor-pointer rounded border bg-background px-1 text-sm',
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
};

export default function MealPlanner({className = '', ...props}) {
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState('primero');
  const [bench, setBench] = useState<RecipeType['id'][]>([]);

  const today = useMemo(() => new Date(), []);
  const currentMeal = useMemo(() => {
    const hour = today.getHours();
    return getCurrentMeal(hour);
  }, [today]);

  const rowStyles = 'grid gap-1';
  const cellStyles = 'col-span-2 bg-muted px-2 py-2 flex flex-wrap gap-1 items-baseline content-start';

  const coleStyles = 'bg-muted';

  useEffect(() => {
    const recipesInUse = getRecipesInUse(mealPlan);
    const otherRecipes = recipes.filter((r) => !recipesInUse.includes(r.id)).map((r) => r.id);
    setBench(otherRecipes);
  }, []);

  return (
    <div className={cn('@container', className, isMobile && '!mx-auto w-80')} {...props}>
      <section className="@lg:p-6 flex min-h-screen flex-col bg-white p-4 text-base dark:bg-black">
        <header className="@lg:grid-cols-12 mb-5 grid items-center gap-y-2">
          <div className="@lg:col-span-2 flex items-center">
            <span className="mr-2 text-2xl font-bold">🍽️</span>
            <span className="text-xl font-bold">Meal Planner</span>
          </div>

          <div className="@lg:col-span-6 flex items-center">
            <span className="text-balance text-muted-foreground">
              {weekday[today.getDay()]} Enjoy your {currentMeal}.
            </span>
          </div>

          <div className="@lg:col-span-4 @lg:order-last order-first hidden justify-end gap-5 lg:flex">
            <div className="flex items-center space-x-4">
              {/* <Label htmlFor="grud-mode">🗓️</Label> */}
              <Switch id="grud-mode" checked={isMobile} onCheckedChange={(prevState) => setIsMobile(!isMobile)} />
            </div>
          </div>
        </header>

        <aside className="@lg:grid hidden grid-cols-12 gap-x-1">
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

        <main className="@container @lg:gap-y-1 grid flex-1 gap-y-8">
          {mealPlan.map((plan) => (
            <div
              key={plan.day}
              className={cn(
                rowStyles,
                '@lg:grid-cols-12',
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
                <div className="group">
                  {plan.tasks.length > 0 ? (
                    <ul className="@lg:text-xs mx-0 mb-1 mt-3 list-none p-0 text-sm text-muted-foreground">
                      {plan.tasks.map((i) => (
                        <li key={i} className="ml-0 flex items-center p-0">
                          <span className="mr-2 leading-none">
                            <input type="checkbox" className="accent-primary" />
                          </span>{' '}
                          {i}
                        </li>
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
                      '@lg:border-r-4 border-l-4 border-primary',
                  )}
                >
                  {/* List View: Meal name */}
                  <span className="@lg:hidden mb-0.5 w-full text-xs uppercase text-muted-foreground">{m.name}</span>

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
    </div>
  );
}
