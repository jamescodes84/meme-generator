import React, { useState, useEffect } from 'react'

export default function Main() {

    const [clicked , setClicked] = useState(false)
    const [arrayOfMemes, setArrayOfMemes] = useState([])
    const [meme, setMeme ] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl:"http://i.imgflip.com/1bij.jpg"
        
    })

    
    useEffect(() => {
            
            fetch( "https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setArrayOfMemes(data.data.memes))
            
            console.log(arrayOfMemes)
            
        },[clicked])


    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme ,
            [name]: value
        }))
    }

    function handleClick() {
        setClicked(prevClicked => !prevClicked)
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}