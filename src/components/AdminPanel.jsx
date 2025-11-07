import { useSelector } from "react-redux";
import AddFoodForm from "./AddFoodForm";
import LogoutButton from "./LogoutButton";

const AdminPanel = () => {
  const foods = useSelector((state) => state.foods.items);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <LogoutButton />
      <AddFoodForm />
      <h3>Available Foods</h3>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            {food.name} - ${food.price} ({food.stock} left)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
