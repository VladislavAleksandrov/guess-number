import s from './Footer.module.css'
import {Button} from "../Button/Button";

export const Footer = ({
	                       games,
	                       wasGuesed,
	                       isEqual,
	                       isAbove,
	                       restartGame,
                       }) => {
	return (
		<footer className={s.box}>
			{!isEqual && <p className={s.message}>
				{!wasGuesed && '—'}
				{wasGuesed && isAbove && "Больше"}
				{wasGuesed && !isAbove && "Меньше"}
			</p>}
			{isEqual && <Button type='button' additionalClass={s.restart} onClick={restartGame}>Начать сначала</Button>}
			<p className={s.counter}>Сыграно игр: {games + isEqual}</p>
		</footer>
	)
}