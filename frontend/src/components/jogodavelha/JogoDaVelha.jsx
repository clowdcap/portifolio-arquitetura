import React, { useEffect, useState } from 'react'

import './jogodavelha.css'


const JogoDaVelha = () => {
    
    const [gameData, setGameData] = useState([0,0,0,0,0,0,0,0,0])
    const [turn, setTurn] = useState(1)
    const [winningCombo, setWinningCombo] = useState(null)
    
    const handleReset = () => {
        setGameData([0,0,0,0,0,0,0,0,0])
        setWinningCombo(null)
        setTurn(1)
    }
    
    const winningCombinations = [

        {indexes: [0,1,2], orientation: 'horizontal'},
        {indexes: [3,4,5], orientation: 'horizontal'},
        {indexes: [6,7,8], orientation: 'horizontal'},
        
        {indexes: [0,3,6], orientation: 'vertical'},
        {indexes: [1,4,7], orientation: 'vertical'},
        {indexes: [2,5,8], orientation: 'vertical'},
        
        {indexes: [0,4,8], orientation: 'diagonal'},
        {indexes: [2,4,6], orientation: 'diagonal'},
    ]

    useEffect(() => {
        checkGameEnded()
        checkWinner() 
    }, [gameData])

    useEffect(() => {
        if(winningCombo) {
            // alert(`Temos um vencedor!`)
        }
    }, [winningCombo])

    const checkGameEnded = () => {
        if (gameData.every((item) => item !== 0) && !winningCombo) {
            // alert('Fim de Jogo')
        }
    }
    
    const checkWinner = () => {
        console.log('Checking winner')
        let winner = null

        for (let combination of winningCombinations) {

            const { indexes }  = combination

            if (gameData[indexes[0]] === 1 &&
                gameData[indexes[1]] === 1 &&
                gameData[indexes[2]] === 1)
                {
                winner = "Player 1"
            }

            if (gameData[indexes[0]] === 2 &&
                gameData[indexes[1]] === 2 &&
                gameData[indexes[2]] === 2){
                winner = "Player 2"
            }
    
            if (winner) {
                setWinningCombo(combination)
                break
            }
        }

        console.log({winner})

    }    

    const handleClick = (clickedIndex) => {
        // alert(clickedIndex)

        if(gameData[clickedIndex] !== 0) {
            return
        }    

        if (winningCombo) {
            return
        }

        setGameData( (prev) => { 
            const newGameData = [...prev] 
            newGameData[clickedIndex] = turn
            return newGameData
        })    

        setTurn((prev) => (
            prev === 1 ? 2 : 1
                
        ))

        // if (turn === 1) {
        //     setTurn(2)    
        // } else if (turn === 2) {
        //     setTurn(1)    
        // }


        
    }    
    

    return (
        <>
            <div className="jogo">
                {winningCombo ? 
                    <h2>O jogo acabou</h2> :
                    <h2>Vez do Player {turn}</h2>
                } 

                <br /><br />

                <div id="game">
                {gameData.map((value, index) => (
                    <div id="box" onClick={() => {
                        handleClick(index)
                    }}
                    key={index}>
                        {value === 1 && 'X'}
                        {value === 2 && 'O'}
                    </div>
                ))}
                </div>

                <br /><br />

                <div className="btn" onClick={handleReset}>Reset </div>
            </div>
        </>
    )
}

export default JogoDaVelha