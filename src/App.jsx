import './App.css'
import React, {useState, useEffect} from "react";
import Counter from "./components/Counter.jsx";
import InputField from "./components/InputField.jsx";
import Button from "./components/Button.jsx";


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
                    <Counter
                        fruitCount={bananas}
                        setFruitCount={setbananas}
                    />
                </div>
                <div>
                    <h2>🍓Aardbeien</h2>
                   <Counter
                       fruitCount={strawberries}
                       setFruitCount={setstrawberries}
                   />
                </div>
                <div>
                    <h2> 🍏Appels</h2>
                   <Counter
                       fruitCount={apples}
                       setFruitCount={setapples}
                       />
                </div>
                <div>
                    <h2>🥝 Kiwi's</h2>
                    <Counter
                        fruitCount={kiwis}
                        setFruitCount={setkiwis}
                        />
                </div>
                <div>
                    <h3>Totaal</h3>
                    <p>{totalFruitCount}</p>
                </div>
                <Button type="button" clickHandler={resetFruits}>Reset</Button>
            </section>
            <form onSubmit={handleSubmit}>
                <section>
                    <InputField
                           inputType="text"
                           name="firstname"
                           label="Voornaam"
                           value={firstname}
                           changeHandler={setFirstName}
                    />
                </section>
                <section>
                    <InputField
                        InputType="text"
                           name="firstname"
                        label="Voornaam"
                           value={lastname}
                           changeHandler={setLastName}
                    />
                </section>
                <section>
                    <InputField
                        inputType="number"
                           name="age"
                        label="Leeftijd"
                           value={age > 0 ? age : 0}
                           changeHandler={setAge}
                    />
                </section>
                <section>
                          <InputField
                              inputType="text"
                           name="zipcode"
                           value={zipcode}
                           changeHandler={setZipcode}
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
                <Button type="submit">Verzend</Button>
            </form>

        </>

);

}


export default App;
