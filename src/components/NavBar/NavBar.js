import './NavBar.css';
import pearshadow from '../../assets/pearshadow.png'

const NavBar = () => {
return (
    <div className="navbar">
        
        <img className="pear-logo" src={pearshadow}/>
        <div className='title'>
            <h1>(PUTRID_PEARS)</h1>
        </div>
        
    </div>
)
}

export default NavBar