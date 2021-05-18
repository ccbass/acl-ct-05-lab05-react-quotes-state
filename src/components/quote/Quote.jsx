import React from 'react'
import PropTypes from 'prop-types'

export function QuoteDisplay({quote, character, image}) {
    if(character){
        return (
            <div>
                <div>
                    <img 
                    style={{width: '100px', objectFit: 'contain'}}
                    src={image} 
                    alt="simpsons character image" 
                    />
                </div>
                <div>
                    {quote}
                    <br />
                    {character}
                </div>
            </div>
        )
    }
    else{
        return null
    }
}

QuoteDisplay.propTypes = {
    quote: PropTypes.string,
    character: PropTypes.string,
    image: PropTypes.string,
}

