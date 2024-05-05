import MainBlock from "./components/mainBlock";
import image_1 from "./images/f3.png";
import image_2 from "./images/f4.png";
import image_3 from "./images/f5.png"

function App() {
  return (
    <div className="necessities">
      <h2 className="necessities__title">Что вам необходимо?</h2>
      <div className="wrapper">
        <MainBlock title="Первый блок" image={image_1} />
        <MainBlock title="Второй блок" image={image_2} />
        <MainBlock title="Третий блок" image={image_3} />
      </div>
    </div>
  );
}

export default App;