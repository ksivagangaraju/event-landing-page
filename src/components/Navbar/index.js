import MenuPopup from '../MenuPopup'
import {BsInstagram, BsTwitter, BsSpotify} from 'react-icons/bs'
import './index.css'

const Navbar = () => (
    <nav className='navbar'>
        <ul className='nav-links'>
            <li><a href='#info' className='link'>Info</a></li>
            <li><a href='#schedule' className='link'>Schedule</a></li>
            <li><a href='#contact' className='link'>Contact</a></li>
        </ul>
        <ul className='nav-links'>
            <li className='sm-link'>
                <BsInstagram className='sm-icon' />
            </li>
            <li className='sm-link'>
                <BsTwitter className='sm-icon' />
            </li>
            <li className='sm-link'>
                <BsSpotify className='sm-icon' />
            </li>
        </ul>
        <MenuPopup />
    </nav>
)

export default Navbar