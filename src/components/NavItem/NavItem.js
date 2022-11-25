import './NavItem.css'
const NavItem = (props) => {
    return (
    <li nav-item>
        {props.childern}</li>
    )
}
const NavItemDrpoDown = (props) => {
    return (
    <li nav-item dropdown>
        {props.childern}</li>
    )
}
export default NavItem;
export {NavItemDrpoDown}

