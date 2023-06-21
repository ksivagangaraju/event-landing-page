import Ticket from '../Ticket'
import './index.css'

const ticketsList = [
    {
        id: 1,
        date: '04 May',
        address: 'The 02, London'
    },
    {
        id: 2,
        date: '06 May',
        address: 'The 02, London'
    },
    {
        id: 3,
        date: '07 May',
        address: 'The 02, London'
    },
    {
        id: 4,
        date: '13 May',
        address: 'Ovo Hydro, Glasgow'
    },
    {
        id: 5,
        date: '14 May',
        address: 'Resorts World, Birmingham'
    },
    {
        id: 6,
        date: '16 May',
        address: 'Ao Arena, Manchester'
    },
    {
        id: 7,
        date: '17 May',
        address: 'Ao Arena, Manchester'
    }
]

const Schedule = () => (
    <div id="schedule" className='info-container'>
        <h1 className='info schedule'>Schedule</h1>
        <ul className='tickets-container'>
            {ticketsList.map(ticket => 
                <Ticket key={ticket.id} ticket={ticket} />
            )}
        </ul>
    </div>
)

export default Schedule