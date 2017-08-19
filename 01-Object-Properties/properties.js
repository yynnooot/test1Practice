function setPropsOnObj(obj){
    obj.x = 7;
    obj.y = 8;
    obj.onePlus = function(num){
        return num+1;
    }
}

function setPropsOnArr(arrObj){
    arrObj.hello = function(){
        return "Hello!";
    }
    arrObj.full = "stack";
    arrObj[0] = 5;
    arrObj.twoTimes = function(arg){
        return arg*2;
    }
}

function setPropsOnFunc(funcObj){
    funcObj();
    funcObj.year = '20??';
    funcObj.divideByTwo = function(num){
        return num/2;
    }
    funcObj.prototype. helloWorld = function(){
        return 'Hello World';
    }
}

