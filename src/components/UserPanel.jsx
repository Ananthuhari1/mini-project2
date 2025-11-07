import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import LogoutButton from "./LogoutButton";

const UserPanel = () => {
  const foods = useSelector((state) => state.foods.items);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div>
      <h2>Food Menu</h2>
      <LogoutButton />
      <div>
        {foods.map((food) => (
          <div key={food.id}>
            {food.name} - ${food.price} ({food.stock} left)
            <button onClick={() => dispatch(addToCart(food))}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h3>Cart</h3>
      {cart.map((item) => (
        <p key={item.id}>
          {item.name} x {item.qty} = ${item.qty * item.price}
        </p>
      ))}
      <h4>Total: ${total}</h4>
    </div>
  );
};

export default UserPanel;
