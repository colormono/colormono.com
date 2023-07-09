"use client"

import React, { useMemo } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type MealName = "breakfast" | "mid-morning" | "lunch" | "snack" | "dinner"

type DailyPlanType = {
  name: MealName
  meals: string[]
}

type MealPlannerType = {
  weekday: number
  day: string
  activities: string[]
  todos: string[]
  plan: DailyPlanType[]
}

const weekday = [
  "Today is Sunday, relax.",
  "Today is Monday, the week is starting!",
  "Today is Tuesday, keep going!",
  "Today is Wednesday, hump day!",
  "Today is Thursday, almost there!",
  "Today is Happy, Friday!",
  "Today is Saturday, yay!",
]

function getCurrentMeal(hour: number): MealName {
  if (hour >= 4 && hour < 10) {
    return "breakfast"
  } else if (hour >= 10 && hour < 12) {
    return "mid-morning"
  } else if (hour >= 12 && hour < 15) {
    return "lunch"
  } else if (hour >= 15 && hour < 20) {
    return "snack"
  } else {
    return "dinner"
  }
}

const mealPlan: MealPlannerType[] = [
  {
    weekday: 1,
    day: "Monday",
    activities: ["🏫", "⚽️", "🎾", "📖"],
    todos: ["Verdulería (refuerzo?)"],
    plan: [
      {
        name: "breakfast",
        meals: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
      },
      { name: "mid-morning", meals: ["Snacks cole", "Frutos secos"] },
      { name: "lunch", meals: ["Pasta", "Ensalada con atún"] },
      { name: "snack", meals: ["Infusión", "Fruta"] },
      { name: "dinner", meals: ["Pescado", "Papitas", "Espinaca"] },
    ],
  },
  {
    weekday: 2,
    day: "Tuesday",
    activities: ["🏫", "🏊‍♀️", "⚽️", "📺"],
    todos: ["Carnicería"],
    plan: [
      {
        name: "breakfast",
        meals: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
      },
      { name: "mid-morning", meals: ["Snacks cole", "Frutos secos"] },
      { name: "lunch", meals: ["Mila con papas", "Zoodles"] },
      { name: "snack", meals: ["Infusión", "Huevo", "Fruta"] },
      { name: "dinner", meals: ["Pollo", "Arroz", "Ensalada"] },
    ],
  },
  {
    weekday: 3,
    day: "Wednesday",
    activities: ["🏫", "⚽️", "🎾", "🍿"],
    todos: [],
    plan: [
      {
        name: "breakfast",
        meals: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
      },
      { name: "mid-morning", meals: ["Snacks cole", "Frutos secos"] },
      { name: "lunch", meals: ["Pollito con brócoli", "Ensalada césar"] },
      { name: "snack", meals: ["Infusión", "Fruta"] },
      { name: "dinner", meals: ["Carne roja", "Papitas", "Verduras"] },
    ],
  },
  {
    weekday: 4,
    day: "Thursday",
    activities: ["🏫", "🏊‍♀️", "⚽️", "📖"],
    todos: ["Fiambrería", "Dietética"],
    plan: [
      {
        name: "breakfast",
        meals: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
      },
      { name: "mid-morning", meals: ["Snacks cole", "Frutos secos"] },
      { name: "lunch", meals: ["Carne con papitas", "Omelette de hiervas"] },
      { name: "snack", meals: ["Infusión", "Tostado"] },
      { name: "dinner", meals: ["Milanesas", "Verduras"] },
    ],
  },
  {
    weekday: 5,
    day: "Friday",
    activities: ["🏫", "🎾", "⚽️", "🎲"],
    todos: ["Verdulería", "Hipermercado", "Carnicería (refuerzo?)"],
    plan: [
      {
        name: "breakfast",
        meals: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
      },
      { name: "mid-morning", meals: ["Snacks cole", "Frutos secos"] },
      { name: "lunch", meals: ["Tarteleta", "Wrap"] },
      { name: "snack", meals: ["Infusión", "Rollito"] },
      { name: "dinner", meals: ["Picada", "Mi sandwich tiene..."] },
    ],
  },
  {
    weekday: 6,
    day: "Saturday",
    activities: ["😎", "🔥", "🏓"],
    todos: [],
    plan: [
      {
        name: "breakfast",
        meals: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
      },
      { name: "mid-morning", meals: ["Snacks"] },
      { name: "lunch", meals: ["Parrilla"] },
      { name: "snack", meals: ["Mate", "Bizcochuelo"] },
      { name: "dinner", meals: ["Pizza", "Empanadas"] },
    ],
  },
  {
    weekday: 0,
    day: "Sunday",
    activities: ["🛋", "🍿"],
    todos: [],
    plan: [
      {
        name: "breakfast",
        meals: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
      },
      { name: "mid-morning", meals: ["Bizcochuelo"] },
      { name: "lunch", meals: ["Pasta"] },
      { name: "snack", meals: ["Mate", "Pochoclos"] },
      { name: "dinner", meals: ["Burguer", "Tacos"] },
    ],
  },
]

export function MealPlanner({ ...props }) {
  const [position, setPosition] = React.useState("primero")

  const today = useMemo(() => new Date(), [])
  const currentMeal = useMemo(() => {
    const hour = today.getHours()
    return getCurrentMeal(hour)
  }, [today])

  const rowStyles = "grid grid-cols-12 gap-1"
  const cellStyles =
    "col-span-2 bg-muted px-2 py-2 flex flex-wrap gap-1 items-start content-start"
  const tagStyles = "inline-block rounded bg-background px-1 text-sm"
  const coleStyles = "border border-muted-foreground"

  return (
    <section className="-mx-60 my-20 grid border-y py-5" {...props}>
      <header className="mb-5 grid grid-cols-12 items-center">
        <div className="col-span-2">
          <span className="text-xl font-bold">Meal Planner</span>
        </div>

        <div className="col-span-4">
          <span className="text-muted-foreground">
            {weekday[today.getDay()]} Enjoy your {currentMeal}.
          </span>
        </div>

        <div className="col-span-6 flex justify-end gap-2">
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
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="spring">
                  🌿 Primavera
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="summer">
                  ☀️ Verano
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="autumn">
                  🍁 Otoño
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="primero">
                  ❄️ Invierno
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <aside className="grid grid-cols-12 gap-x-1">
        <div className="col-span-2" />
        <div className="col-span-2 py-5">
          <div className="text-xs uppercase text-muted-foreground">
            Desayuno
          </div>
        </div>
        <div className="col-span-2 py-5">
          <div className="text-xs uppercase text-muted-foreground">
            Media mañana
          </div>
        </div>
        <div className="col-span-2 py-5">
          <div className="text-xs uppercase text-muted-foreground">
            Almuerzo
          </div>
        </div>
        <div className="col-span-2 py-5">
          <div className="text-xs uppercase text-muted-foreground">
            Merienda /Snack
          </div>
        </div>
        <div className="col-span-2 py-5">
          <div className="text-xs uppercase text-muted-foreground">Cena</div>
        </div>
      </aside>

      <main className="grid gap-y-1">
        {mealPlan.map((item, index) => (
          <div
            className={cn(
              rowStyles,
              today.getDay() === item.weekday &&
                "border-y border-dashed border-muted-foreground/50"
            )}
            key={item.day}
          >
            <div className="col-span-2 py-2">
              <div className="text-sm font-semibold">{item.day}</div>
              <div className="flex gap-x-1">
                {item.activities.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>
              <ul className="mt-2 text-xs text-muted-foreground">
                {item.todos.map((i) => (
                  <li key={i}>- [ ] {i}</li>
                ))}
              </ul>
            </div>

            {item.plan.map((m) => (
              <div
                key={`${item.day}-${m.name}`}
                className={cn(
                  cellStyles,
                  today.getDay() === item.weekday &&
                    currentMeal === m.name &&
                    "border-l-4 border-primary"
                )}
              >
                {m.meals.map((i: string) => (
                  <span key={i} className={cn(tagStyles)}>
                    {i}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </main>

      <footer className="my-10 grid grid-cols-12 items-center">
        <div className="col-span-2">
          <span className="text-2xl font-bold">🍽️</span>
        </div>

        <div className="col-span-4">
          <Button variant="secondary">Add meal</Button>
        </div>

        <div className="col-span-6 flex justify-end gap-2">
          <Button variant="default">Print</Button>
        </div>
      </footer>
    </section>
  )
}
