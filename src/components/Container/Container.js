// import { Hero } from '../Comholder';
import './Container.css'
const Container = (props) => {
    return (
        <div className='container main-container'>
        {props.children}
        </div>
    )
}
export default Container;
