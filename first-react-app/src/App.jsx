import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import ComplexComment from './components/ComplexComment'
import Greetings from './components/Greetings'
import MoviesList from './components/MoviesList'
import BigCats from './components/BigCats'
import AddCatForm from './components/AddCatForm'
import './App.css'
import MoodChanger from './components/MoodChanger'
import Emoji from './components/Emoji'
import BirthdayTranslator from './components/BirthdayTranslator'
import LoginForm from './components/LoginForm'
import City from './components/City'
import Calculator from './components/Calculator'



function App() {
  const [count, setCount] = useState(0)

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: { // author is also an object
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };


  return (
    <>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <br></br>
      <Greetings name="momo">
        <p>welcome to gotham</p>
      </Greetings>

      <ComplexComment

        author={comment.author}
        date={comment.date}
        text={comment.text}
      />


      <City name="Sydney" />
      <BigCats></BigCats>
      
      <br />
      <MoviesList></MoviesList>
      <br></br>
      <Emoji></Emoji>
      <br />
      <MoodChanger></MoodChanger>

      <br></br>
      <BirthdayTranslator></BirthdayTranslator>
      <br></br>
      <LoginForm></LoginForm>

      <Calculator />
    </>
  )
}

export default App
