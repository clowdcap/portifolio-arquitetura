import React, {useState} from 'react'

import './dot.css'

const Dot = () => {


    // const page = document.querySelector('#page')

    const [list, setList] = useState([])
    const [undId, setUndId] = useState([])


    const handleClick = (event) => {
        
        const newDot =  {
            clientX: event.clientX,
            clientY: event.clientY,
        }
        
        // console.log("X:", event.clientX, "\nY:", event.clientY)
        // console.log("Funcion:", newDot)

        setList((prev) => [...prev, newDot])
        // console.log('List:', list)
    }

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    const clearDots = () => {
        setList([])
        setUndId([])
    }

    const undoDots = () => {
        if (list.length === 0) {
            return
        }
        const last = list[list.length - 1]
        setUndId((prev) => [...prev, last])

        setList((prev) => {
            const newArray = [...prev].slice(0, -1)
            return newArray
        })

        console.log("Desfazer")
    }

    const redoDots = () => {
        
        if (undId.length === 0) {
            return
        }

        const recoveredDot = undId[undId.length - 1]


        setUndId((prev) => {
            const newArray = [...prev].slice(0, -1)
            return newArray
        })

        setList((prev) => [...prev, recoveredDot])

        console.log("Refazer")
    }
    
    return (

            <div id='page' onClick={handleClick}>
                {/* {JSON.stringify(list)} */}

                {list.map( dot => (
                    <div 
                    key={list.id} 
                    className="dot" 
                    style={{top: dot.clientY - 90, left: dot.clientX } }/>
                ))}

                <div className="btns" onClick={stopPropagation}>
                    <button className='btn' onClick={clearDots}>Limpar</button>
                    <button className='btn' onClick={undoDots}>Desfazer <span className="number_count">({list.length}x)</span></button>
                    <button className='btn' onClick={redoDots}>Refazer <span className="number_count">({undId.length}x)</span></button>
                </div>

                <div className="count" onClick={stopPropagation}>
                    Contagem <br />
                    {list.length}
                </div>
            </div>

    ) 
}
export default Dot