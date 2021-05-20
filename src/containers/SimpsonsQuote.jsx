import React, { useState } from 'react'
import { QuoteButton } from '../components/quote/Load'
import { QuoteDisplay } from '../components/quote/Quote'
import { getQuote } from '../services/simpsonsApi'

export function SimpsonsQuote() {
    const [ data, setData ] = useState(null)
    
    async function handleGetQuote() {
        const quoteData = await getQuote()
        setData(quoteData)
    }

    return (
        <div>
            <QuoteButton handleGetQuote={handleGetQuote}/>
            {!data && <h2>Click to get a quote!</h2>}
            <QuoteDisplay {...data}/>
        </div>
    )
}
