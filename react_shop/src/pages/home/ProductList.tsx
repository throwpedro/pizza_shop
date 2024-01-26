import { useAtom } from 'jotai';
import './productlist.css';
import { Product, incrementProductCountAtom as incrementProductCountAtom } from '../../store';
import CenterContent from '../../components/CenterContent';
import React from 'react';

export type ProductCardProps = {
  product: Product;
  showAddIcon?: boolean;
};

export const ProductCard = ({ product, showAddIcon }: ProductCardProps) => {
  const [, incrementProductCount] = useAtom(incrementProductCountAtom);

  return (
    <div className="product-card">
      <div className='product-card-top-row'>
        <h3 className='product-card-name'>{product.name}</h3>
        {showAddIcon && <span onClick={() => incrementProductCount(product)} className='product-card-add'>+</span>}
      </div>
      <h4>${product.unitPrice}</h4>
      <p><strong>Topping:</strong> {product.topping}</p>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
    React.useEffect(() => {
      let cancelled = false;
        //https://github.com/throwpedro/pizza_shop_api
        fetch("http://localhost:8080/json/products")
            .then((response) => response.json())
            .then((data: Product[]) => {
              if (!cancelled) {
                setProducts(data);
              }
            })
            .catch((error) => console.log(error));
      return () => {
        cancelled = true;
      }
    }, []);

  // Can be used for local testing without the API
  // const products: Product[] = [
  //   { id: '1', name: 'Pepperoni', topping: 'Pepperoni', count: 0, unitPrice: 10 },
  //   { id: '2', name: 'Cheese', topping: 'Cheese', count: 0, unitPrice: 10 },
  //   { id: '3', name: 'Sausage', topping: 'Sausage', count: 0, unitPrice: 12 },
  //   { id: '4', name: 'Veggie', topping: 'Veggie', count: 0, unitPrice: 15 },
  //   { id: '5', name: 'Meat Lovers', topping: 'Meat Lovers', count: 0, unitPrice: 20 },
  // ];

  return (
    <CenterContent>
        <div className="product-list-container">
          <h2>Product List</h2>
          <div className="product-list">
            {products.map(p => (
              <ProductCard key={p.id} product={p} showAddIcon />
            ))}
          </div>
        </div>
    </CenterContent>
  );
};

export default ProductList;