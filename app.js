const sayingArr = [{
    Start: 'When nine hundred years old you reach ',
    Middle: 'look as good ',
    End: 'you will not.'
}, {
    Start: 'Truly wonderful ',
    Middle: 'the mind of a child ',
    End: 'is.'
}, {
    Start: 'That is ',
    Middle: 'why ',
    End: 'you fail.'
}, {
    Start: 'A Jedi uses the Force ',
    Middle: 'for knowledge and defense ',
    End: 'never for attack.'
}, {
    Start: 'A Jedi ',
    Middle: 'craves not ',
    End: 'these things.'
}, {
    Start: 'Judge me ',
    Middle: 'by my size ',
    End: 'do you?'
}, {
    Start: 'Wars ',
    Middle: 'not make ',
    End: 'one great.'
}, {
    Start: 'Do ',
    Middle: 'or do not ',
    End: 'there is no try.'
}]

//console.log(sayingArr);

const randomNum = () => {
    return Math.floor(Math.random()*8);
}

//console.log(randomNum());

const createMessage = (arr) => {
    console.log(`Yoda says: ${arr[randomNum()].Start}${arr[randomNum()].Middle}${arr[randomNum()].End}`);
}

createMessage(sayingArr);