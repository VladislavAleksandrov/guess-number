import s from './Form.module.css'
import {Button} from "../Button/Button";

export const Form = ({
	                     inputValue,
	                     submitInput,
	                     changeInput,
	                     isEqual,
	                     counter,
	                     wasGuesed,
                     }) => {
	return (
		<>
			{
				(isEqual && wasGuesed) ? <p className={s.alert}>Угадал за {counter} ходов</p> :
					<form
						className={s.box}
						onSubmit={(event) => submitInput(event)}
					>
						<input
							inputMode='numeric'
							pattern="[0-9]*"
							value={inputValue}
							onChange={(event) => changeInput(event)}
							type='text'
							className={s.input}
						/>
						<Button additionalClass={s.submit} type="submit">Угадать</Button>
					</form>}
		</>
	)
}