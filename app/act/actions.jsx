export var chngsearch= (searchtxt)=>{
    return {
        type: "CHNG_SEARCH",
        searchtxt
    }
}

export var addTD = (txt)=>{
    return {
        type: "ADDTD",
        txt
    }
}

//togle show comp + test

export var chngshocomp = () => {
    return {
        type: "CHNG_SHOCOMP"
    }
}

//toggle todo take id + test

export var doneTD = (id) => {
    return {
        type: "CHNG_DONE",
        id
    }
}

export var addTDs = (todos) => {
    return {
        type: "ADDTDS",
        todos
    }
}


//togle show comp + test


//toggle todo take id + test