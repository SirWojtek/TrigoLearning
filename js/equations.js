
var EQUATIONS = (function() {
    var formulasDock = "#formulas";
    var equationDock = "#equation";

    var Symbols = {
        sin : "<span id=\"sin\">sin(x)</span>",
        cos : "<span id=\"cos\">cos(x)</span>",
        sin2 : "<span id=\"sin2\">sin^2(x)</span>",
        cos2 : "<span id=\"cos2\">cos^2(x)</span>",
        tg : "<span id=\"tg\">tg(x)</span>",
        ctg : "<span id=\"ctg\">ctg(x)</span>"
    };

    var Formulas = {
        formulas : [
            "{0} + {1} = {2}".format(Symbols.sin2, Symbols.cos2, "1"),
            "{0} = {1} / {2}".format(Symbols.tg, Symbols.sin, Symbols.cos),
            "{0} = {1} / {2}".format(Symbols.ctg, Symbols.cos, Symbols.sin)
        ],
        fillFormulas : function() {
            var form_text = "";
            for (i in this.formulas) {
                form_text += "<li id=\"{0}\">{1}</li>".format(i, this.formulas[i]);
            }
            $(formulasDock).html(form_text);
        }
    };

    function Equation(equationString, steps) {
        this.eqString = equationString;
        this.steps = steps;
    };

    function highlight(element) {
        $(element).css("background-color", "yellow");
    };

    equations = [
        new Equation(
            "{0} * {1} = {2}".format(Symbols.cos, Symbols.tg, Symbols.sin), [
                function() {
                    highlight(formulasDock + ">#1>#tg");
                    highlight(equationDock + ">#tg");
                }
            ]),
        new Equation(
            "{0} * {1} = {2}".format(Symbols.sin, Symbols.ctg, Symbols.cos), [
                function() {
                    highlight(formulasDock + ">#2>#ctg");
                    highlight(equationDock + ">#ctg");
                }
            ])
    ];

    return {
        Formulas : Formulas,
        equations : equations
    };
})();
