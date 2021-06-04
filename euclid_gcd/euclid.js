
const intOne = 649;
const intTwo = 143;

function oneBigger(par1, par2) {
    console.log('function1')
    let numerator = par1;
    let denominator = par2;
    const numeratorPrint = par1;
    const denominatorPrint = par2;

    let division = numerator % denominator;
    

    if(numerator % denominator === 0) {
        console.log(`The GCD of ${numeratorPrint} and ${denominatorPrint} is ${denominatorPrint}`);
    } else if(numerator % denominator !== 0) {
        while (division > 0){
            division = numerator % denominator;
            numerator = denominator;
            denominator = division;
            
            if(numerator % denominator === 0) {
                console.log(`The GCD of ${numeratorPrint} and ${denominatorPrint} is ${denominator}`);
            } 
        }    
    }
        
};

function twoBigger(par1, par2) {
    console.log("function two")
    let numerator = par2;
    let denominator = par1;
    const numeratorPrint = par2;
    const denominatorPrint = par1;

    let division = numerator % denominator;
    

    if(numerator % denominator === 0) {
        console.log(`The GCD of ${numeratorPrint} and ${denominatorPrint} is ${denominatorPrint}`);
    } else if(numerator % denominator !== 0) {
        while (division > 0){
            division = numerator % denominator;
            numerator = denominator;
            denominator = division;
            
            if(numerator % denominator === 0) {
                console.log(`The GCD of ${denominatorPrint} and ${numeratorPrint} is ${denominator}`);
            } 
        }    
    }
};

function euclid(par1, par2) {
    let parameter1 = par1;
    let parameter2 = par2;

    if(par1 > par2) {
        oneBigger(parameter1, parameter2);
    } else if(par2 > par1) {
        twoBigger(par2, par1);
    } else if(par1 === par2) {
        console.log("Please enter two different numbers");
    }
};

euclid(intOne, intTwo)