import './index.css'

const Ticket = props => {
    const {ticket} = props
    const {date, address} = ticket
    return (
        <li className='ticket-container'>
            <p className='date-address'><span className='date-address date-address-bold'>{date}</span> - {address}</p>
            <button type='button' className='ticket-button'>Ticket</button>
        </li>
    )
}

export default Ticket