import './index.css'

const Event = () => (
    <div className='event-container'>
        <div className='event-card-container'>
            <p className='event-card'>Velvet</p>
            <p className='event-card event-direction-card'>clouds</p>
        </div>
        <p className='event-night-drive'>Night Drive</p>
        <h1 className='event-uk-tour'>UK Tour</h1>
        <p className='event-date'>
            <span style={{fontWeight: 700}}>04 MAY - 17 MAY</span><br/>
            London, Glasgow, Birmingham & Manchester
        </p>
        <div style={{display: 'flex', gap: '0 19px', marginTop: 38}}>
            <a href='#schedule' className='tickets-button'>Tickets</a>
            <a href="#info" className='more-info-button'>More Info</a>
        </div>
    </div>
)

export default Event