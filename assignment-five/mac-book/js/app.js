// Get All Buttons 
const memory8GB = document.getElementById('8gb-memory');
const memory16GB = document.getElementById('16gb-memory');
const storage256GB = document.getElementById('256gb-storage');
const storage512GB = document.getElementById('512gb-storage');
const storage1TB = document.getElementById('1tb-storage');
const freeDelivery = document.getElementById('free-delivery');
const expressDelivery = document.getElementById('express-delivery');
const apply = document.getElementById('apply');

// get charges field 
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-price');
const total = document.getElementById('total');
// get input field 
const promoInput = document.getElementById('promo-input');
// notify div 
const success = document.getElementById('success');
const wrong = document.getElementById('wrong');

// memory 
function memory(size) {
    if (size =='8gb') {
        const extraCost = parseInt(memoryCost.innerText = "0");
        return extraCost;
    } else if (size == '16gb') {
        const extraCost = parseInt(memoryCost.innerText = "180");
        return extraCost;
    }
    const cost = calculateExtraCost();
}
// storage 
function storage(size) {
    if (size =='256gb') {
        const extraCost = parseInt(storageCost.innerText = "0");
        return extraCost;
    } else if (size == '512gb') {
        const extraCost = parseInt(storageCost.innerText = "100");
        return extraCost;
    } else if (size == '1tb') {
        const extraCost = parseInt(storageCost.innerText = "180");
        return extraCost;
    }
}
// Delivery 
function delivery(charge) {
    if (charge == 'free') {
        const extraCost = parseInt(deliveryCost.innerText = "0");
        return extraCost;
    } else if (charge == 'express') {
        const extraCost = parseInt(deliveryCost.innerText = "20");
        return extraCost;
    }
}

// calculate extra cost 
function calculateExtraCost() {
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const extraTotal = memoryCost + storageCost + deliveryCost;
    const subTotal = extraTotal + parseInt(bestPrice.innerText);
    document.getElementById('total-price').innerText = subTotal;
    document.getElementById('total').innerText = subTotal;
    
}
// apply coupon
function coupon() {
    if (promoInput.value == 'stevekaku') {
        const lastTotal = parseInt(total.innerText);
        const appliedCoupon = lastTotal * 0.2;
        const grandTotal = lastTotal - appliedCoupon;
        total.innerText = grandTotal;
        apply.disabled = true;
        
        promoInput.value = '';
        success.style.display = 'block';
        wrong.style.display = 'none';
    }
    else {
        success.style.display = 'none';
        wrong.style.display = 'block';
        promoInput.value = '';
    }
}


memory8GB.addEventListener('click', function () {
    const memoryItem = memory('8gb');
    document.getElementById('memory-cost').innerText = memoryItem;
    const cost = calculateExtraCost();
    
})
memory16GB.addEventListener('click', function () {
    const memoryItem = memory('16gb');
    document.getElementById('memory-cost').innerText = memoryItem;
    const cost = calculateExtraCost();
    
})


storage256GB.addEventListener('click', function () {
    const storageItem = storage('256gb');
    document.getElementById('storage-cost').innerText = storageItem;
    const cost = calculateExtraCost();
})
storage512GB.addEventListener('click', function () {
    const storageItem = storage('512gb');
    document.getElementById('storage-cost').innerText = storageItem;
    const cost = calculateExtraCost();
})
storage1TB.addEventListener('click', function () {
    const storageItem = storage('1tb');
    document.getElementById('storage-cost').innerText = storageItem;
    const cost = calculateExtraCost();
})


freeDelivery.addEventListener('click', function () {
    const deliveryStatus = delivery('free');
    document.getElementById('delivery-cost').innerText = deliveryStatus;
    const cost = calculateExtraCost();
})
expressDelivery.addEventListener('click', function () {
    const deliveryStatus = delivery('express');
    document.getElementById('delivery-cost').innerText = deliveryStatus;
    const cost = calculateExtraCost();
})

apply.addEventListener('click', function () {
    
    coupon();
})