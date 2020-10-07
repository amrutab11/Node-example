var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l= "+l+" and b= "+b);

    if(l<=0 || b<=0){
        console.log("dimenssions should be grater than zero");
    }
    else{
        console.log("The area of rectangle is: "+rect.area(l,b));
        console.log("The perimeter of rectangle is: "+rect.perimeter(l,b));
    }
}

solveRect(5,7);
solveRect(2,3);
solveRect(0,2);
solveRect(-1,6);