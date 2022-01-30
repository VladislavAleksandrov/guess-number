import s from './App.module.css'
import {Header} from "./Components/Header/Header"
import {Form} from "./Components/Form/Form"
import {Footer} from "./Components/Footer/Footer"
import {useEffect, useState} from "react"


function App() {

	let startValue = 0
	if (localStorage.games) startValue = JSON.parse(localStorage.games)

	const [number, setNumber] = useState('')
	const [inputValue, setInputValue] = useState('')
	const [randomNumber, setRandomNumber] = useState(null)
	const [counter, setCounter] = useState(0)
	const [games, setGames] = useState(startValue)

	useEffect(() => {
		fetch('https://number.ymatuhin.workers.dev/')
			.then(response => response.json())
			.then(data => setRandomNumber(data.number))
	}, [games])


	const submitInput = (event) => {
		event.preventDefault()
		setNumber(inputValue)
		setInputValue('')
		setCounter(counter + 1)
	}

	const changeInput = event => {
		let value = event.target.value.replace(/[^0-9]/gi, "")
		if (value > 100) setInputValue('100')
		else if (value < 1) setInputValue('')
		else setInputValue(value)
	}

	const restartGame = () => {
		setNumber('')
		setCounter(0)
		setGames(games + 1)
	}

	localStorage.games = JSON.stringify(games)

	return (
		<div className={s.box}>
			<Header/>
			<Form
				inputValue={inputValue}
				submitInput={submitInput}
				changeInput={changeInput}
				wasGuesed={!!number}
				isEqual={+number === randomNumber}
				counter={counter}
			/>
			<Footer
				wasGuesed={!!number}
				isEqual={+number === randomNumber}
				isAbove={number < randomNumber}
				games={games}
				restartGame={restartGame}
			/>
		</div>
	);
}

export default App;
