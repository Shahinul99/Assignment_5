

document.getElementById('btn-donate')
    .addEventListener('click', function(event){
        event.preventDefault();
        

        const newAmount = document.getElementById('Amount').value ;
        console.log('newAmount');


        if (NewAmount === '100'){
            console.log ('you added Amount');
            window.location.href = '/home.html';
        }
        else {
            alert('plz only Amount');
        }

})

