import s from './Button.module.css'

export const Button = ({type, children, onClick, additionalClass}) => {
  return (
	  <button type={type} className={`${s.button} ${additionalClass}`} onClick={onClick}>{children}</button>
  )
}