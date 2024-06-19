import type {RecipeType} from './recipes';

export type MealName = 'breakfast' | 'mid-morning' | 'lunch' | 'snack' | 'dinner';

export type DailyPlanType = {
  name: MealName;
  recipes: RecipeType['id'][];
};

export type TaskType = {
  id: number;
  title: string;
  description: string;
  done?: boolean;
};

export type MealPlannerType = {
  weekday: number;
  day: string;
  activities: string[];
  tasks: string[]; // to-do: Implement TaskType
  meals: DailyPlanType[];
};

export const mealPlan: MealPlannerType[] = [
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
    tasks: ['Pedido fiambrería', 'Pedido dietética'],
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
