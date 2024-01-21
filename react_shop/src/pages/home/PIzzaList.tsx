import { useAtom } from 'jotai';
import './pizzalist.css';
import { Product, incrementPizzaCountAtom as incrementPizzaCountAtom } from '../../store';

export type PizzaCardProps = {
  pizza: Product;
  showAddIcon?: boolean;
};

export const PizzaCard = ({ pizza, showAddIcon }: PizzaCardProps) => {
  const [, incrementPizzaCount] = useAtom(incrementPizzaCountAtom);

  return (
    <div className="pizza-card">
      <div className='pizza-card-top-row'>
        <h3 className='pizza-card-name'>{pizza.name}</h3>
        {showAddIcon && <span onClick={() => incrementPizzaCount(pizza)} className='pizza-card-add'>+</span>}
      </div>
      <h4>${pizza.unitPrice}</h4>
      <p><strong>Topping:</strong> {pizza.topping}</p>
    </div>
  );
};

const PizzaList = () => {
  const pizzas: Product[] = [
    { id: 1, name: 'Pepperoni', topping: 'Pepperoni', count: 0, unitPrice: 10 },
    { id: 2, name: 'Cheese', topping: 'Cheese', count: 0, unitPrice: 10 },
    { id: 3, name: 'Sausage', topping: 'Sausage', count: 0, unitPrice: 12 },
    { id: 4, name: 'Veggie', topping: 'Veggie', count: 0, unitPrice: 15 },
    { id: 5, name: 'Meat Lovers', topping: 'Meat Lovers', count: 0, unitPrice: 20 },
  ];

  return (
    <div className="pizza-list-container">
      <h2>Pizza List</h2>
      <div className="pizza-list">
        {pizzas.map(pizza => (
          <PizzaCard key={pizza.id} pizza={pizza} showAddIcon />
        ))}
      </div>
    </div>
  );
};
  
  export default PizzaList;