import './Buttons.css'

const PrimariyButton = (props) => {
  return (
    <div className='main-button'>
    <a href='/#'>{props.children}</a>
    </div>
  )
}
export default PrimariyButton