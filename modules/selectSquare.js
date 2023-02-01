function createSelectSquare(input){
    let selectSquare = document.createElement('div')
    selectSquare.setAttribute('class', 'selectSquare')
    selectSquare.innerHTML = input
    return selectSquare
}


export{createSelectSquare}