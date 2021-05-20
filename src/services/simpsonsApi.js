export const getQuote = async () => {
    const rawData = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const jsonData = await rawData.json()

    return jsonData[0]
}