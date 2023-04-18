
var btnBuscar = document.getElementById('btnBuscar')
var myDiv = document.getElementById('myDiv')
var modalContent = document.getElementById('modal-content')
btnBuscar.onclick = function (){
    var nombreApi = document.getElementById('gif_name')
    var url = 'https://api.giphy.com/v1/gifs/search?api_key=WcRo37oyvToFJUZOlaWr11yFv3LDww7a&q='+nombreApi.value+'&limit=25&offset=0&rating=pg&lang=en'
    fetch(url)
        .then(res => res.json())
        .then(json => {
            myDiv.innerHTML = '';
            for (let i = 0; i < json.data.length; i++) {
            const myImg = document.createElement('img');
            myImg.src = `${json.data[i].images.original.url}`
            console.log(myImg);
            myDiv.appendChild(myImg);
            
           
        }
        
    })
    
}

