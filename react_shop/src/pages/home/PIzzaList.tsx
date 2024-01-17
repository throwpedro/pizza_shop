import { useAtom } from 'jotai';
import './pizzalist.css';
import { cartContentsAtom } from '../../store';

export type Pizza = {
  id: number;
  name: string;
  topping: string;
  price: number;
};

export type PizzaCardProps = {
  pizza: Pizza;
};

export const PizzaCard = ({ pizza }: PizzaCardProps) => {
  const [cart, setCart] = useAtom(cartContentsAtom);

  const updateCart = () => {
    const pizzaExists = cart.find((p: Pizza) => p.id === pizza.id);
    if (!pizzaExists) {
      setCart([...cart, pizza]);
    }
  }

  return (
    <div className="pizza-card" onClick={updateCart}>
      <h3>{pizza.name}</h3>
      <h4>${pizza.price}</h4>
      <p><strong>Topping:</strong> {pizza.topping}</p>
    </div>
  );
};

const PizzaList = () => {
  const pizzas = [
    { id: 1, name: 'Pepperoni', topping: 'Pepperoni', price: 10 },
    { id: 2, name: 'Cheese', topping: 'Cheese', price: 10 },
    { id: 3, name: 'Sausage', topping: 'Sausage', price: 12 },
    { id: 4, name: 'Veggie', topping: 'Veggie', price: 15 },
    { id: 5, name: 'Meat Lovers', topping: 'Meat Lovers', price: 20 },
  ];

  return (
    <div className="pizza-list-container">
      <h2>Pizza List</h2>
      <div className="pizza-list">
        {pizzas.map(pizza => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};
  
  export default PizzaList;