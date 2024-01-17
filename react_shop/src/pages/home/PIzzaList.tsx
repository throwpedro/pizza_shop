import { useAtom } from 'jotai';
import './pizzalist.css';
import { cartContentsAtom } from '../../store';

export type Pizza = {
  id: number;
  name: string;
  topping: string;
};

export type PizzaCardProps = {
  pizza: Pizza;
};

const PizzaCard = ({ pizza }: PizzaCardProps) => {
  const [cart, setCart] = useAtom(cartContentsAtom);

  console.log(cart);

  const updateCart = () => {
    const pizzaExists = cart.find((p: Pizza) => p.id === pizza.id);
    if (!pizzaExists) {
      setCart([...cart, pizza]);
    }
  }

  return (
    <div className="pizza-card" onClick={updateCart}>
      <h3>{pizza.name}</h3>
      <p><strong>Topping:</strong> {pizza.topping}</p>
    </div>
  );
};

const PizzaList = () => {
  const pizzas = [
    { id: 1, name: 'Margherita', topping: 'Tomato, Mozzarella, Basil' },
    { id: 2, name: 'Pepperoni', topping: 'Pepperoni, Cheese' },
    { id: 3, name: 'Vegetarian', topping: 'Tomato, Mushroom, Bell Pepper' },
    { id: 4, name: 'Hawaiian', topping: 'Ham, Pineapple' },
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