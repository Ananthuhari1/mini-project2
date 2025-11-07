import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../redux/foodSlice";
import { toast } from "react-toastify";

const AddFoodForm = () => {
  const [food, setFood] = useState({ name: "", price: "", stock: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!food.name || !food.price || !food.stock)
      return toast.error("All fields required");
    dispatch(addFood({ ...food, id: Date.now() }));
    toast.success("Food added!");
    setFood({ name: "", price: "", stock: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={food.name} onChange={(e) => setFood({ ...food, name: e.target.value })} />
      <input type="number" placeholder="Price" value={food.price} onChange={(e) => setFood({ ...food, price: +e.target.value })} />
      <input type="number" placeholder="Stock" value={food.stock} onChange={(e) => setFood({ ...food, stock: +e.target.value })} />
      <button type="submit">Add Food</button>
    </form>
  );
};

export default AddFoodForm;
