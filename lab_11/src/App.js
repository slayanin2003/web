import Pizza from "./components/Pizza";
import pizzaImage from "./images/pizza.jpg";

function App() {
  return (
    <Pizza title="Пепперони" text="Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла" price="550 ₽" image={pizzaImage}/>
  );
}

export default App;