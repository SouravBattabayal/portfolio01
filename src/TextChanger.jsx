import React from 'react'
import {useState, useEffect} from 'react'

function TextChanger() {

    const text = ["Hi, I am Sourav", "Aspiring Software Developer", "Aspiring Data Scientist"]
    const [currentText, setCurrentText] = useState("")
    const [endValue, setEndValue] = useState(true)
    const [isForward, setIsForward] = useState(true)
    const [index, setIndex] = useState(0)

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentText(text[index].substring(0,endValue))
        if(isForward){
            setEndValue((prev) => prev + 1)
        }else {
            setEndValue((prev) => prev - 1)
        }
        if(endValue > text[index].length + 10){
            setIsForward(false)
        }
        if(endValue < 2.1){
            setIsForward(true)
            setIndex((prev) => prev&text.length)
        }
      }, 55);
    
      return () => clearInterval(intervalId)
      
    }, [endValue, isForward, index, text])
    
    return (
        <>
            <div className='transition ease duration-300'>{currentText}</div>
        </>
    )
}

export default TextChanger
