import Navbar from '../Navbar';
import Event from '../Event';
import {MdDoubleArrow} from 'react-icons/md'
import './index.css'

const Header = () => (
    <header className='bg-header'>
        <Navbar />
        <Event />
        <div className='buttom-arrow-container'>
            <MdDoubleArrow className='buttom-arrow' />
            <MdDoubleArrow className='buttom-arrow buttom-arrow-position' />
        </div>
    </header>
)

export default Header