import React from 'react'
import PropTypes from 'prop-types'

export function QuoteButton({handleGetQuote}) {
    return(
        <div>
            <label htmlFor='quote-button'></label>
            <button 
                onClick={handleGetQuote}
                id='quote-button'
            >
                Get Quote
            </button>
        </div>
    )
}

QuoteButton.propTypes = {
    handleGetQuote: PropTypes.func.isRequired,
}



