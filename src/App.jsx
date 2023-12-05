import './App.css'
import React, {useState, useEffect} from "react";


function App() {

    const [bananas, setbananas] = useState(0)
    const [strawberries, setstrawberries] = useState(0)
    const [apples, setapples] = useState(0)
    const [kiwis, setkiwis] = useState(0)

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [age, setAge] = useState(0)
    const [zipcode, setZipcode] = useState("")
    const [deliveryFrequency, toggleDeliveryFrequency] = useState("")
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState("")
    const [remark, setRemark] = useState("")
    const [agreeTerms, setAgreeTerms] = useState("false")


    function resetFruits() {
        setbananas(0)
        setstrawberries(0)
        setapples(0)
        setkiwis(0)
    }

    const [totalFruitCount, setTotalFruitCount] = useState(0);

    useEffect(() => {
        setTotalFruitCount(
            bananas + strawberries + apples + kiwis
        );
    }, [bananas, strawberries, apples, kiwis]);


    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
        Voornaam:${firstname},
        Achternaam:${lastname},
        Leeftijd:${age},
        Postcode:${zipcode},
        Bezorgfrequentie:${deliveryFrequency},
        Opmerkingen:${remark},
        Algemene voorwaarden:${agreeTerms}`);
        console.log(`Fruitmand bestelling - aardbeien: ${strawberries}, bananen:${bananas}, appels:${apples}, kiwi's:${kiwis} `);
    }

    //
    // const fruitWaarden = {
    //     bananen: this.state.bananenCount,
    //     aardbeien: this.state.aardbeienCount,
    //     appels: this.state.appelsCount,
    //     kiwis: this.state.kiwisCount,
    // };


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section>
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
                <div>
                    <h3>Totaal</h3>
                    <p>{totalFruitCount}</p>
                </div>
                <button type="button" onClick={() => resetFruits()}>Reset</button>
            </section>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="firstname-field">Voornaam</label>
                    <input type="text"
                           id="name"
                           name="name"
                           value={firstname}
                           onChange={e => setFirstName(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="lastname-field">Achternaam</label>
                    <input type="text"
                           id="achtername"
                           name="achtername"
                           value={lastname}
                           onChange={e => setLastName(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="age-field">Leeftijd</label>
                    <input type="number"
                           id="age"
                           name="age"
                           value={age > 0 ? age : 0}
                           onChange={e => setAge(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="zipcode-field">Postcode</label>
                    <input type="text"
                           id="postcode"
                           name="postcode"
                           value={zipcode}
                           onChange={e => setZipcode(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="delivery-field">Bezorgfrequentie</label>
                </section>
                <section>
                    <select name="delivery" id="delivery-field"
                        value={deliveryFrequency}
                        onChange={(e) => toggleDeliveryFrequency(e.target.value)}>

                        <option value="wekelijks">Wekelijks</option>
                        <option value="om de week">Om de week</option>
                        <option value="maandelijks">maandelijks</option>
                    </select>
                </section>
                <section>
                    <input
                        type="radio"
                        name="bezorgtijd"
                        value="daytime"
                        id="timeslot-field-daytime"
                        checked={deliveryTimeslot === 'daytime'}
                        onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                        />

                        <label htmlFor="bezorgtijd-overdag"> Overdag </label>
                        <input
                            type="radio"
                            name="bezorgtijd"
                            value='evening'
                            id="timeslot-field-evening"
                            checked={deliveryTimeslot === 'evening'}
                            onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                        />
                        <label htmlFor="bezorgtijd-avond">'s Avonds</label>
                    </section>
                <section>
                    <label htmlFor="remark-field">Opmerking</label>
                    <textarea
                        name="opmerking:"
                        id="remark-field"
                        value={remark}
                        onChange={e => setRemark(e.target.value)}
                        rows={6}
                        cols={40}
                    />
                </section>
                <section>
                    <input
                        type="checkbox"
                        name="akkoord"
                        id="akkoord"
                        value={agreeTerms}
                        onChange={e => setAgreeTerms(e.target.value)}
                    />
                    <label htmlFor="agree-feeld"> Ik ga akkoord met de voorwaarden</label>
                </section>
                <button type="submit">Verzend</button>
            </form>

        </>

);

}


export default App;
