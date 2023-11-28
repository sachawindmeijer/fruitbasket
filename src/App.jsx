import './App.css'
import React, {useState} from "react";


function App() {

    const [bananas, setbananas] = useState(0)
    const [strawberries, setstrawberries] = useState(0)
    const [apples, setapples] = useState(0)
    const [kiwis, setkiwis] = useState(0)


    return (
        <div>
            <h1>Fruitmand bezorgservice</h1>
            <div>
                <h2>🍌Bananen</h2>
                <button type="button" disabled={bananas === 0} onClick={() => setbananas(bananas - 1)}>-</button>
                <p>{bananas}</p>
                <button type="button" onClick={() => setbananas(bananas + 1)}>+</button>
            </div>
            <div>
                <h2>🍓Aardbeien</h2>
                <button type="button" disabled={strawberries === 0}
                        onClick={() => setstrawberries(strawberries - 1)}>-
                </button>
                <p>{strawberries}</p>
                <button type="button" onClick={() => setstrawberries(strawberries
                    + 1)}>+
                </button>
            </div>
            <div>
                <h2> 🍏Appels</h2>
                <button type="button" disabled={apples === 0} onClick={() => setapples(apples - 1)}>-</button>
                <p>{apples}</p>
                <button type="button" onClick={() => setapples(apples + 1)}>+</button>
            </div>
            <div>
                <h2>🥝 Kiwi's</h2>
                <button type="button" disabled={kiwis === 0} onClick={() => setkiwis(kiwis - 1)}>-</button>
                <p>{kiwis}</p>
                <button type="button" onClick={() => setkiwis(kiwis + 1)}>+</button>
            </div>

        </div>
    )
}


export default App;
