const PizzaList = () => {
    const pizzas = [
      { id: 1, name: 'Margherita', topping: 'Tomato, Mozzarella, Basil' },
      { id: 2, name: 'Pepperoni', topping: 'Pepperoni, Cheese' },
      { id: 3, name: 'Vegetarian', topping: 'Tomato, Mushroom, Bell Pepper' },
      { id: 4, name: 'Hawaiian', topping: 'Ham, Pineapple' },
    ];
  
    return (
      <div>
        <h2>Pizza List</h2>
        <ul>
          {pizzas.map(pizza => (
            <li key={pizza.id}>
              <strong>{pizza.name}</strong>: {pizza.topping}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PizzaList;