import './NavBar.css';
import pear from '../../assets/pear2.png'
import pearshadow from '../../assets/pearshadow.png'

const NavBar = () => {
return (
    <div className="navbar">
        <img className="pear" src={pear}/>
        <h1>(PUTRID_PEARS)</h1>
        <img src={pearshadow}/>
    </div>
)
}

export default NavBar