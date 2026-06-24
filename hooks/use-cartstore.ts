import { Dish } from "@/data/restaurant_menu";

export interface CartItem {
  id:number;
  dish:Dish;
  quantity:number;

}