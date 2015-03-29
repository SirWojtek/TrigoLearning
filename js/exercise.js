
var EXERCISE = (function() {
    var currentEquationIndex = 0;
    var currentEquation = undefined;
    var currentStep = 0;
    var dockId = "#equation";

    return {
        fillEquation : function() {
            var eqIndex = currentEquationIndex;
            while (eqIndex == currentEquationIndex) {
                eqIndex = Math.floor(EQUATIONS.equations.length * Math.random())    
            }

            currentEquationIndex = eqIndex;
            currentEquation = EQUATIONS.equations[currentEquationIndex];
            $(dockId).html(currentEquation.eqString);
        },
        step : function() {
            var steps = currentEquation.steps;

            if (currentStep < steps.length) {
                steps[currentStep]();
                currentStep++;
            }
        },
        stepBack : function() {
            var steps = currentEquation.steps;

            if (currentStep > 0) {
                currentStep--;
                steps[currentStep]();
            }
        },
        reset : function() {
            currentStep = 0;
        }
    };
})();


