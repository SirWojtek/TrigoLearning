
var EXERCISE = (function() {
    var currentEquationIndex = 0;
    var currentEquation = undefined;
    var currentStep = 0;
    var dockId = "#equation";

    function clearHighlight() {
        EQUATIONS.Formulas.clear();
        $(dockId).find("*").css("background-color", "transparent");

    };

    function clearEquation() {
        clearHighlight();
        $(dockId).html(currentEquation.eqString);
    }

    function getNewEquationIndex() {
        var eqIndex = currentEquationIndex;
        while (eqIndex == currentEquationIndex) {
            eqIndex = Math.floor(EQUATIONS.equations.length * Math.random())
        }
        return eqIndex
    }

    function play(stepsNo) {
        clearEquation();
        for (i = 0; i <= stepsNo; i++)
        {
            clearHighlight();
            currentEquation.steps[i]();
        }
    }

    return {
        fillEquation : function() {
            currentEquationIndex = getNewEquationIndex();
            currentEquation = EQUATIONS.equations[currentEquationIndex];
            currentStep = 0;
            clearEquation();
        },
        step : function() {
            if (currentStep + 1 < currentEquation.steps.length) {
                play(++currentStep);
            }
        },
        stepBack : function() {
            if (currentStep > 0) {
                play(--currentStep);
            }
        },
        reset : function() {
            clearEquation();
            currentStep = 0;
        }
    };
})();


