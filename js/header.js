var search = document.querySelector('#search'),
    searchZone = document.querySelector('#search-zone')

search.onfocus = function() {
    searchZone.style.borderColor = 'rgb(37, 195, 235)'
}

search.onblur = function(){
    searchZone.style.borderColor = 'rgb(209, 209, 209)'
}