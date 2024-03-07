function bilPrime(h) {
    if (h < 2) {
        return false;
    }
    for( let j = 2; j <= Math.sqrt(h); j++){
        if(h % j === 0){
            return false;
        }
    }
    return true;
}

function displayBilPrime(p, q) {
    for(let j = p; j <= q; j++){
        if(bilPrime(j)){
            console.log(j);
        }
    }
}

displayBilPrime(1, 1000);