import { useState } from "react"

const quotes = [
    {
        author:`Nelson Mandela`,
        quote:`The greatest glory in living lies not in never falling, but in rising every time we fall.`
    },
    {
        author:'Walt Disney',
        quote: `The way to get started is to quit talking and begin doing.` 
    },
    {
        author:'Seteve Jobs',
        quote:`Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`
    },
    {
        author:'Eleanor Roosevelt',
        quote:`If life were predictable it would cease to be life, and be without flavor.`
    },
    {
        author:'Oprah Winfrey',
        quote:`If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough`
    },
    {
        author:'James Cameron',
        quote:`If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`
    },
    {
        author:'John Lennon',
        quote:`Life is what happens when you're busy making other plans.`
    }
]
const colors = ['red','yellow','green','blue','orange','violet'];
const Box = ()=>{

    const [frase,setFrase] = useState(quotes[Math.floor(Math.random()*7)]);
    const [color,setColor] = useState(colors[Math.floor(Math.random()*5)]);
    
    const style = {
        width:'100%',
        minHeight:'100vh',
        backgroundColor:`${color}`,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        transition:'0.5s all'
    }
    const newQuote =()=>{
        let indx = Math.floor((Math.random()*7));
        setFrase(quotes[indx]);
        setColor(colors[Math.floor(Math.random()*5)])
    }
    return(
        <div style={style}>
            <div className='quote_box'>
                <p>"{frase.quote}"</p>
                <cite>-{frase.author}</cite><br/>
                <button onClick={newQuote} className='btn'>New Quote</button>
            </div>
        </div>
    )
}


export default Box;