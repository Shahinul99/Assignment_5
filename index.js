

document.getElementById('add-money-button', ).addEventListener('click', function(event) {
    event.preventDefault()

    const donationInput = document.getElementById('donation-amount').value;
    const donationAmount = parseFloat(donationInput)

    const cashOut = document.getElementById('donation-amount').value;
    const cashOutAmount = parseFloat('cash-out')

    const balanceElement = document.getElementById('account-balance') 
    const currentBalance = parseFloat(balanceElement.innerText)

    if (donationAmount > 0) {
        const newBalance = currentBalance + donationAmount
        balanceElement.innerText = newBalance.toFixed(2);

        alert ("you have donate successfully, thank you ");
    } else {
        alert("Please enter a valid amount.");
    }

    function showSectionById (id){
        document.getElementById('show-add-money-form').classList.add('hidden')
        document.getElementById('history-form').classList.add('hidden')
    }
    document.getElementById(id).classList.remove('hidden');

    const p = document.createElement('p');
    p.innerText= `Added : ${ donationAmount } Tk.new balance: ${ newBalance }` ;

    document.getElementById('t-container').appendChild('p');
});

