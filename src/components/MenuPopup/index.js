import Popup from 'reactjs-popup';
import { HiMenuAlt2 } from 'react-icons/hi';
import {MdClose} from 'react-icons/md'
import {BsInstagram, BsTwitter, BsSpotify} from 'react-icons/bs'
import './index.css'

const overlayStyle = {background: '#1D1D1D', color: '#ffffff'};

const menuContainer = {
    height: '100vh',
    width: '100vw',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const closeButton = {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
    border: 'none',
    color: '#ffffff'
}

const navLinks = {
    padding: 0,
    listStyleType: 'none',
    display:'flex',
    flexDirection:'column',
    gap: '25px 0',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '28px'
}

const MenuPopup = () => (
    <Popup trigger={
        <button type='button' className='nav-mobile-link'>
            <HiMenuAlt2 className='sm-link sm-icon' />
        </button>
    }
    modal
    nested
    {...{overlayStyle}}>
        {close => (
        <div style={menuContainer}>
            <button type='button' style={closeButton} onClick={close}>
                <MdClose style={{height: 36, width: 36}} />
            </button>
            <ul style={navLinks}>
                <li onClick={close}><a href='#info' style={{color: '#ffffff', textDecoration: 'none'}}>Info</a></li>
                <li onClick={close}><a href='#schedule' style={{color: '#ffffff', textDecoration: 'none'}}>Schedule</a></li>
                <li onClick={close}><a href='#contact' style={{color: '#ffffff', textDecoration: 'none'}}>Contact</a></li>
            </ul>
            <ul style={{padding: 0, listStyleType: 'none', display: 'flex', gap: '0 22px'}}>
                <li onClick={close}>
                    <BsInstagram style={{height: 24, width: 24}} />
                </li>
                <li onClick={close}>
                    <BsTwitter style={{height: 24, width: 24}} />
                </li>
                <li onClick={close}>
                    <BsSpotify style={{height: 24, width: 24}} />
                </li>
            </ul>
        </div>
        )}
    </Popup>
)

export default MenuPopup