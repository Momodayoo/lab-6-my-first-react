import { useState } from 'react'

function Emoji() {
    const [mood, setMood] = useState('nil');
    // Calls setMood with a fixed value of 'ecstatic'
    // begin with 'handle' prefix by convention
    const happy = () => {
        setMood('😊')
    }
    // Calls setMood with a conditional state value
    const sad = () => {
        let newMood = '😟';
        if (mood === '😟') newMood = '😥'
        else if (mood === '😥') newMood = '😭';
        setMood(newMood)
    }
    
    return (
        <div className="Emoji">
            <div className='emoji-box'>
            Current Mood: {mood}
            </div>
            <div className='button-container'>
            {/* Using arrow functions */}
            <button onClick={() => setMood('😐')}>Neutral</button>
            {/* Using custom event handler functions */}
            <button onClick={sad}>Feeling Blue</button>
            <button onClick={happy}> Happy Chappy!</button>
            </div>
        </div>
    )
}
// ++ add your own buttons to handle different moods!

export default Emoji;