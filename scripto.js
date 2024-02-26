var count = 0
function removeshow(clickedDiv) {
    var panels = document.querySelectorAll('.panel');
    panels.forEach(function(panel) {
        panel.classList.remove('active');
    });

    clickedDiv.classList.add('active');
    
    var divs = document.querySelectorAll('.panel:not(.active) .show');
    divs.forEach(function(div) {
        div.classList.remove('show');
    });

    var buttons = document.querySelectorAll('.panel:not(.active) button');
    buttons.forEach(function(button) {
       button.textContent = 'Show Info +'
    });
}

function showinfo(nbr){
    count++
    let infodiv = document.querySelector("#info" + nbr);
    let button = document.querySelector(".btn" + nbr);
    if (count%2 != 0) {
        infodiv.classList.add('show')
        button.textContent = 'Hide Info -'

    }else{
        infodiv.classList.remove('show')
        button.textContent = 'Show Info +'
    }
}


