"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface MealPlannerProps {
  icon?: string
  title?: string
  children?: React.ReactNode
}

const mealPlan = [
  {
    day: "Lunes / Monday",
    activities: ["🏫", "⚽️", "🎾", "📖"],
    todos: ["Verdulería (refuerzo?)"],
    breakfast: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
    midMorning: ["Snacks cole", "Frutos secos"],
    lunch: ["Pasta", "Ensalada con atún"],
    snack: ["Infusión", "Fruta"],
    dinner: ["Pescado", "Papitas", "Espinaca"],
  },
  {
    day: "Martes / Tuesday",
    activities: ["🏫", "🏊‍♀️", "⚽️", "📺"],
    todos: ["Carnicería"],
    breakfast: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
    midMorning: ["Snacks cole", "Frutos secos"],
    lunch: ["Mila con papas", "Zoodles"],
    snack: ["Infusión", "Huevo", "Fruta"],
    dinner: ["Pollo", "Arroz", "Ensalada"],
  },
  {
    day: "Miércoles / Wednesday",
    activities: ["🏫", "⚽️", "🎾", "🍿"],
    todos: [],
    breakfast: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
    midMorning: ["Snacks cole", "Frutos secos"],
    lunch: ["Pollito con brócoli", "Ensalada césar"],
    snack: ["Infusión", "Fruta"],
    dinner: ["Carne roja", "Papitas", "Verduras"],
  },
  {
    day: "Jueves / Thursday",
    activities: ["🏫", "🏊‍♀️", "⚽️", "📖"],
    todos: ["Fiambrería", "Dietética"],
    breakfast: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
    midMorning: ["Snacks cole", "Frutos secos"],
    lunch: ["Carne con papitas", "Omelette de hiervas"],
    snack: ["Infusión", "Tostado"],
    dinner: ["Milanesas", "Verduras"],
  },
  {
    day: "Viernes / Friday",
    activities: ["🏫", "🎾", "⚽️", "🎲"],
    todos: ["Verdulería", "Hipermercado", "Carnicería (refuerzo?)"],
    breakfast: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
    midMorning: ["Snacks cole", "Frutos secos"],
    lunch: ["Tarteleta", "Wrap"],
    snack: ["Infusión", "Rollito"],
    dinner: ["Picada", "Mi sandwich tiene..."],
  },
  {
    day: "Sábado / Saturday",
    activities: ["😎", "🔥", "🏓"],
    todos: [],
    breakfast: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
    midMorning: ["Snacks"],
    lunch: ["Parrilla"],
    snack: ["Mate", "Bizcochuelo"],
    dinner: ["Pizza", "Empanadas"],
  },
  {
    day: "Domingo / Sunday",
    activities: ["🛋", "🍿"],
    todos: [],
    breakfast: ["Yogur", "Café con Leche", "Mate cocido", "Mate"],
    midMorning: ["Bizcochuelo"],
    lunch: ["Pasta"],
    snack: ["Mate", "Pochoclos"],
    dinner: ["Burguer", "Tacos"],
  },
]

export function MealPlanner({
  title,
  children,
  icon,
  ...props
}: MealPlannerProps) {
  const [position, setPosition] = React.useState("primero")

  const cellStyles =
    "col-span-2 rounded bg-muted px-2 py-2 flex flex-wrap gap-1 items-start content-start mb-1"
  const tagStyles = "inline-block rounded bg-background px-1"
  const coleStyles = "border border-muted-foreground"

  return (
    <div
      className="-mx-56 my-16 grid gap-y-4 rounded-lg border px-8 pb-16 pt-8"
      {...props}
    >
      <div className="mb-6 grid grid-cols-12 items-center border-b pb-6">
        <div className="col-span-2">
          <span className="text-xl font-bold">Meal Planner</span>
        </div>
        <div className="col-span-4">Happy, Friday! Enjoy your dinner.</div>
        <div className="col-span-6 flex justify-end gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">🤤 Omnivore</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                Filter meals by alimentation plan
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="primero">
                  Omnivore
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="segundo">
                  Keto
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="2022">
                  Vegan
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">🇦🇷 Argentina</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter meals by country</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="primero">
                  🇦🇷 Argentina
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="segundo">
                  🇫🇷 France
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="2022">
                  ⚽️ Others
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">❄️ Winter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Select season plan</DropdownMenuLabel>
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
      </div>

      <div className="grid grid-cols-12 gap-x-1 gap-y-6 text-sm">
        <div className="col-span-2" />
        <div className="col-span-2 py-1">
          <div className="text-xs uppercase text-muted-foreground">
            Desayuno
          </div>
        </div>
        <div className="col-span-2 py-1">
          <div className="text-xs uppercase text-muted-foreground">
            Media mañana
          </div>
        </div>
        <div className="col-span-2 py-1">
          <div className="text-xs uppercase text-muted-foreground">
            Almuerzo
          </div>
        </div>
        <div className="col-span-2 py-1">
          <div className="text-xs uppercase text-muted-foreground">
            Merienda / Snack
          </div>
        </div>
        <div className="col-span-2 py-1">
          <div className="text-xs uppercase text-muted-foreground">Cena</div>
        </div>
      </div>

      {mealPlan.map((item, index) => (
        <div className="grid grid-cols-12 gap-x-1 text-sm" key={item.day}>
          <div className="col-span-2 my-2">
            {index === 4 ? (
              <div className="mb-4 font-bold text-teal-500">TODAY</div>
            ) : null}
            <div className="mb-2 flex gap-x-1">
              {item.activities.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
            <div className="mb-2 font-semibold">{item.day}</div>
            <div className="text-xs text-muted-foreground">
              {item.todos.map((i) => (
                <div key={i}>- [ ] {i}</div>
              ))}
            </div>
          </div>
          <div className={cellStyles}>
            {item.breakfast.map((i) => (
              <span key={i} className={cn(tagStyles)}>
                {i}
              </span>
            ))}
          </div>
          <div className={cellStyles}>
            {item.midMorning.map((i) => (
              <span key={i} className={cn(tagStyles)}>
                {i}
              </span>
            ))}
          </div>
          <div className={cellStyles}>
            {item.lunch.map((i) => (
              <span key={i} className={cn(tagStyles)}>
                {i}
              </span>
            ))}
          </div>
          <div className={cellStyles}>
            {item.snack.map((i) => (
              <span key={i} className={cn(tagStyles)}>
                {i}
              </span>
            ))}
          </div>
          <div
            className={cn(cellStyles, index === 4 && "border border-teal-500")}
          >
            {item.dinner.map((i) => (
              <span key={i} className={cn(tagStyles)}>
                {i}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
