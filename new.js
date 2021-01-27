//  for iphone 
var phoneIncrease = document.getElementById("phoneIncrease")
phoneIncrease.addEventListener('click', function(){
    let PhonePrice = parseFloat( document.getElementById('phoneTotal').innerText);
    let newPrice = PhonePrice + 1219     
    document.getElementById('phoneTotal').innerText = newPrice    
    let amount =  document.getElementById('amount').value
    let amountValue = parseFloat(amount)
    amountValue = amountValue + 1;
    document.getElementById('amount').value = amountValue
})
var minusPhone = document.getElementById('minuss')
minusPhone.addEventListener('click', function(){
    price =  parseFloat( document.getElementById('phoneTotal').innerText);
    let amount = parseFloat( document.getElementById('amount').value)
    if(price>0 || amount>0){
    let PhonePrice = parseFloat( document.getElementById('phoneTotal').innerText);
    let minusPrice = PhonePrice - 1219
    document.getElementById('phoneTotal').innerText = minusPrice   
    let amount =  document.getElementById('amount').value
    let amountValue = parseFloat(amount)
    amountValue = amountValue - 1;
    document.getElementById('amount').value = amountValue
}
   else {
        alert('please put positive value')
   }
})



// for iphone case


var casePlus = document.getElementById('casePlus');
casePlus.addEventListener('click', function(){  
    let casePrice = parseFloat(document.getElementById('casePrice').innerText)
    let newPrice = casePrice + 59
    document.getElementById('casePrice').innerText = newPrice  
    let amount =  document.getElementById('caseCount').value
    let amountValue = parseFloat(amount)
    amountValue = amountValue + 1;
    document.getElementById('caseCount').value = amountValue

})

var minusCase = document.getElementById('caseMinus')
minusCase.addEventListener('click', function(){
    let price =  parseFloat( document.getElementById('casePrice').innerText);
    let amount = parseFloat( document.getElementById('caseCount').value)
    if(price>0 || amount>0){
        let casePrice =  parseFloat( document.getElementById('casePrice').innerText);
        let amount = parseFloat( document.getElementById('caseCount').value)
    let minusPrice = casePrice - 59
    document.getElementById('casePrice').innerText = minusPrice   
    let amountValue = parseFloat(amount)
    amountValue = amountValue - 1;
    document.getElementById('caseCount').value = amountValue
}
   else {
        alert('please put positive value')
   }
})








