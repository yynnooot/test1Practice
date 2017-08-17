function gridGenerator(num){
    let str = '';
    let hashTime = true;
    for(let i = 0; i < num; i++){
        if(i % 2) hashTime = false;
        for(let j = 0; j < num; j++){
            str += hashTime ? '#' : ' '; 
            hashTime = !hashTime; 
        }
        str += '\n';
    }
    console.log('CHECK OUT OUR STRING', str);
    return str;
}