import React, {useState} from "react";
const Fruitcart = () => {
    const [bananas, setbananas] = useState(0)
    const [strawberries, setstrawberries] = useState(0)
    const [apples, setapples] = useState(0)
    const [kiwis, setkiwis] = useState(0)


    return (
        <div>
            <div>
                <h2>bananen</h2>
                <button onClick={() => setbananas(bananas + 1)}>+</button>
                <span>{bananas}</span>
                <button onClick={() => setbananas(bananas - 1)}>+</button>
            </div>
            <div>
                <h2>Aardbeien</h2>
                <button onClick={() => setstrawberries(strawberries + 1)}>+</button>
                <span>{strawberries}</span>
                <button onClick={() => setstrawberries(strawberries - 1)}>+</button>
            </div>
            <div>
                <h2>Appels</h2>
                <button onClick={() => setapples(apples + 1)}>+</button>
                <span>{apples}</span>
                <button onClick={() => setapples(apples - 1)}>+</button>
            </div>
            <div>
                <h2>Kiwi's</h2>
                <button onClick={() => setkiwis(kiwis + 1)}>+</button>
                <span>{kiwis}</span>
                <button onClick={() => setkiwis(kiwis - 1)}>+</button>
            </div>

        </div>

    )
}
export default Fruitcart