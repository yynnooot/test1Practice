function RPNCalculator(){
    this.arr = [];
}
RPNCalculator.prototype.push = function(num){
    this.arr.push(num);
};

   RPNCalculator.prototype.plus = function(){
        if(this.arr.length<2){
            throw 'rpnCalculatorInstance is empty'
        }
        var second = this.arr.pop();
        var first = this.arr.pop();
        this.arr.push(first + second);
    };
    RPNCalculator.prototype.minus = function(){
        if(this.arr.length<2){
            throw 'rpnCalculatorInstance is empty'
        }
        var second = this.arr.pop();
        var first = this.arr.pop();
        this.arr.push(first - second);
    };
    RPNCalculator.prototype.times = function(){
        if(this.arr.length<2){
            throw 'rpnCalculatorInstance is empty'
        }
        var second = this.arr.pop();
        var first = this.arr.pop();
        this.arr.push(first * second);
    };
    RPNCalculator.prototype.divide = function(){
        if(this.arr.length<2){
            throw 'rpnCalculatorInstance is empty'
        }
        var second = this.arr.pop();
        var first = this.arr.pop();
        this.arr.push(first / second);
    };
    RPNCalculator.prototype.value = function(){
        return this.arr[this.arr.length-1];
    };
    
