urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
char=urlParams.get('char')

if(char=="vedant"){
    document.getElementById("char").src="static/vedant.png"
}
else if(char=="arfa"){
    document.getElementById("char").src="static/arfa.png"
}
else if(char=="parag"){
    document.getElementById("char").src="static/parag.png"
}
else if(char=="sneha"){
    document.getElementById("char").src="static/sneha.png"
}
else if(char=="rajani"){
    document.getElementById("char").src="static/rajani.png"
}
else if(char=="chaitanya"){
    document.getElementById("char").src="static/chaitanya.png"
}
else if(char=="pallavi"){
    document.getElementById("char").src="static/pallavi.png"
}
