const messageArr = [{
    _character: 'Jedi Knight',
    _ability: ['energy abosorption', 'mind control', 'moving objects with the force'],
    _quote: ["'Try not. Do. Or do not. There is no try.'", "'It takes strength to resist the dark side. Only the weak embrace it.'", "'Confronting fear is the destiny of a Jedi.'"]
}, {
    _character: 'Hobbit',
    _ability: ['walking great distances', 'eating vast amounts of food', 'cooking fantastic meals'],
    _quote: ["'Go back...Go sideways? Impossible! Go forward? Only thing to do! On we go!'", "'Please don't cook me, kind sirs! I am a good cook myself, and cook better than I cook, if you see what I mean.'", "'Sorry! I don't want any adventures, thank you. Not today. Good morning! But please come to tea - any time you like! Why not tomorrow? Good bye!'"]
}, {
    _character: 'Sith Lord',
    _ability: ['choking people with the force', 'throwing objects with the force', 'shooting lighting from your hands'],
    _quote: ["'Peace is a lie. There is only passion.'", "'The galaxy writhes in chaos and disorder.'", "'Fear attracts the fearful...the strong...the weak...the innocent...the corrupt. Fear. Fear is my ally.'"]
}]

// Randomly generate a number
const randomNum = () => {
    return Math.floor(Math.random()*3);
}

//Creates a random message
const createMessage = (arr) => {
    const characterNum = randomNum();
    console.log(`You are a ${arr[characterNum]._character} with the ability of ${arr[characterNum]._ability[randomNum()]}, while being known for saying ${arr[characterNum]._quote[randomNum()]}`)
}

createMessage(messageArr);