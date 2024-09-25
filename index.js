

document.getElementById('add-money-button', ).addEventListener('click', function( event) {

    event.preventDefault();

    const donationInput = document.getElementById('donation-amount').value;
    


    const donationAmount = parseFloat(donationInput);


    const balanceElement = document.getElementById('account-balance');
    const currentBalance = parseFloat(balanceElement.innerText);


    if (donationAmount > 0) {

        const newBalance = currentBalance + donationAmount;
        balanceElement.innerText = newBalance;
        alert ("you have donate successfully, thank you ")
    } else {
        alert("Please enter a valid amount.");
    }

    document.getElementById('homeBtn').onclick = function() {
        window.location.href = 'index.html'; 
    };
    
    document.getElementById('blogBtn').onclick = function() {
        window.location.href = 'blog.html'; 
    };
});

