import s from './Header.module.css'

export const Header = () => {
  return (
		<header className={s.box}>
			<h1 className={s.title}>Угадай число</h1>
			<p className={s.text}>Я загадал число от 1 до 100, ты должен угадать это число</p>
		</header>
  )
}