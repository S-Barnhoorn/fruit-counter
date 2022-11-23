import React, {useState} from 'react';
import './App.css';
import Counter from "./Component/Counter";
import {useForm} from 'react-hook-form'

function App() {

    const { register, handleSubmit } = useForm();

    const initial = {
        aardbeien: 0,
        bananen: 0,
        appels: 0,
        kiwis: 0,
    }

    const [state, setState] = useState(initial)

    function reset(){
        setState(initial)
    }

    function buttonClick(data){
        console.log(data, data.message)
    }

    function test (fruit, val) {
        if(state[fruit] >= 0) {
            setState(state => ({...state, [fruit]: state[fruit] + val}))
        }
    }

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <Counter
            type="button"
            clickDecrement={() => test('aardbeien', - 1)}
            clickIncrement={() => test('aardbeien', + 1)}
            counter={state.aardbeien}
            fruitName="Aardbeien"
            disabled={state.aardbeien <= 0}
        />
        <Counter
            type="button"
            clickDecrement={() => test('bananen', - 1)}
            clickIncrement={() => test('bananen', + 1)}
            counter={state.bananen}
            fruitName="Bananen"
        />
        <Counter
            type="button"
            clickDecrement={() => test('appels', + 1)}
            clickIncrement={() => test('appels', + 1)}
            counter={state.appels}
            fruitName="Appels"
        />
        <Counter
            type="button"
            clickDecrement={() => test('kiwi', + 1)}
            clickIncrement={() => test('kiwi', + 1)}
            counter={state.kiwis}
            fruitName="Kiwis"
        />
        <button
        type="button"
        onClick={reset}
        >Reset</button>

        <form onSubmit={handleSubmit(buttonClick)}>
            <input
                type="text"
                {...register("name", {
                    required: "Email mag niet leeg zijn",
                    validate: (value) => value.includes('@'),
                    message: "naam mag geen @ bevatten"
                })}
            />
            <button type='submit'>klik</button>
        </form>
    </>
  );
}

export default App;
