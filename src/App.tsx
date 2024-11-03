import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CourseGoal from './components/CourseGoal'
import goalsImg from './assets/react.svg';
import Header from './components/Header';
import styles from './App.module.css'

function App() {
  const [goal, setGoals] = useState([]);

  function handleAddGoal() {

  }

  return (
    <figure className={styles.modal}>
      <Header image={{src: goalsImg, alt: 'A list of goals'}} >
         <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal title="Learn React">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </figure>
  )
}

export default App
