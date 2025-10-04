import React, { useState } from 'react'
import './App.css'
import MarqueeTxt from './components/MarqueeTxt'
import rock from '/fist.png'
import paper from '/paper.png'
import scissors from '/scissors.png'
import HandBtn from './components/HandBtn'
import ShowBtn from './components/ShowBtn'

const App = () => {
  const [userValue, setUserValue] = useState(null)
  const [compValue, setCompValue] = useState(null)
  const [startNow, setStartNow] = useState(false)
  const [centerTxt, setCenterTxt] = useState('')
  const [score, setScore] = useState(0)

  const hands = [
    { img: rock, rotate: '0deg', height: '100px', width: '100px', imgWidth: 70, type: 'rock' },
    { img: paper, rotate: '0deg', height: '100px', width: '100px', imgWidth: 70, type: 'paper' },
    { img: scissors, rotate: '-90deg', height: '100px', width: '100px', imgWidth: 70, type: 'scissors' },
  ]

  const getRandomHand = () => {
    const options = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * 3)
    return options[randomIndex]
  }

  const decideWinner = (userVal, compVal) => {
    if (userVal === compVal) {
      return 'Tie'
    }
    if (
      (userVal === 'rock' && compVal === 'scissors') ||
      (userVal === 'paper' && compVal === 'rock') ||
      (userVal === 'scissors' && compVal === 'paper')
    ) {
      setScore(prev => prev + 1)
      return 'You Win'
    }
    return 'You Lose'
  }

  const handleBtnClick = (val) => {
    if (!startNow) {
      return
    }

    const compVal = getRandomHand()
    setUserValue(val)
    setCompValue(compVal)

    const result = decideWinner(val, compVal)
    setCenterTxt(result)
  }

  const startGame = () => {
    if (startNow) return

    setStartNow(true)
    setCenterTxt("Computer's Turn")

    setTimeout(() => {
      const compVal = getRandomHand()
      setCompValue(compVal)
      setCenterTxt("Your Turn")
    }, 2000)
  }

  return (
    <div className='main'>
      {!startNow && (
        <p
          onClick={startGame}
          className="start absolute text-[1.2rem] bg-white cursor-pointer"
        >
          START
        </p>
      )}
      {startNow && <p className="showtext">{centerTxt}</p>}
      <p className="score">{score < 10 ? `0${score}` : score}</p>
      <MarqueeTxt />
      <div className="hands flex gap-[20px] absolute bottom-[40px] left-[50%] translate-x-[-50%]">
        {hands.map((item, idx) => (
          <HandBtn
            key={idx}
            onClick={() => handleBtnClick(item.type)}
            img={item.img}
            rotate={item.rotate}
            height={item.height}
            width={item.width}
            imgWidth={item.imgWidth}
          />
        ))}
      </div>
    </div>
  )
}

export default App
