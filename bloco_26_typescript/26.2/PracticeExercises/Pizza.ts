import { Common, Sugar, Vegetarian } from './PIzzaFlavours';

type Slices = 4 | 6 | 8;

interface Pizza {
  flavour: string;
  slices: Slices;
}

interface PizzaCommon extends Pizza {
  flavour: Common;
}

interface PizzaSugar extends Pizza {
  flavour: Sugar;
}

interface PizzaVegetarian extends Pizza {
  flavour: Vegetarian;
}
