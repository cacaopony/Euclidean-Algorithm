const euclid =  (a,b) => {
    let r = a%b;
    if (r === 0){
        return b
    }
    else{
        return euclid(b,r)
    }
}