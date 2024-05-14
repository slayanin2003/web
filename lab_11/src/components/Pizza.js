import {React, useState} from "react";

function Pizza(props) {
    const [counter, setCounter] = useState(0);

    function countSum() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function countSub() {
        setCounter(prevCounter => prevCounter - 1 >= 0 ? prevCounter - 1 : 0);
    }

    function GetOrder(event) {
        const diameter = document.getElementById("diametr").value;
        const quantity = document.getElementById("quantity").value;

        if (diameter === "Диаметр") {
            alert("Выберите диаметр пиццы!");
            event.preventDefault();
        }
        else if (quantity === "0") {
            alert("Укажите количество пиццы!");
            event.preventDefault();
        }
        else {
            alert(`Количество заказанного товара: ${counter}`);
        }
    }

    return (
        <div className="wrapper">

            <div className="label">Хит сезона</div>
            <img src={props.image} alt="Пицца" className="image"/>
            <h2 className="title">{props.title}</h2>
            <p className="text">{props.text}</p>

            <select id="diametr" className="pizza_diameter" defaultValue="Диаметр" form="form">
                <option>30 см</option>
                <option>60 см</option>
            </select>
    
            <p className="pizza_price">от {props.price}</p>

            <form id="form" action="#" method="post" className="input_wrapper">
                <input type="button" value="-" className="sub" onClick={countSub}/>
                <input id="quantity" type="text" value={counter} className="quantity" readOnly/>
                <input type="button" value="+" className="sum" onClick={countSum}/>
                <input type="submit" className="button" value=" " onClick={GetOrder}/>
            </form>

        </div>
    )
}

export default Pizza;