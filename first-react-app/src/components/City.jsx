function City({ name, state = 'WA', country = 'Australia' }) {

    return (
        <div className="City componentBox">
            <strong>{name}</strong> is in {state}, {country}
        </div>
    )
}

export default City;