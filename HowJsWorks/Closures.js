// Closure:::
// A closure is created when an inner function has access to the variables of its
// outer function, even after the outer function has finished executing.


function outerFunction()
{
    var outerVariable ="I'm from outer";
    function innerFunction()
    {
        console.log(outerVariable)
    }

    return innerFunction;
}
var closureFunction = outerFunction();
closureFunction();