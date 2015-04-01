
var EQUATIONS = (function() {
    var formulasDock = "#formulas";
    var equationDock = "#equation";

    var Symbols = {
        sin : "<span id=\"sin\">sin(x)</span>",
        cos : "<span id=\"cos\">cos(x)</span>",
        sin2 : "<span id=\"sin2\">sin^2(x)</span>",
        cos2 : "<span id=\"cos2\">cos^2(x)</span>",
        tg : "<span id=\"tg\">tg(x)</span>",
        ctg : "<span id=\"ctg\">ctg(x)</span>",
        a : "<span id=\"a\"> + </span>",
        s : "<span id=\"s\"> - </span>",
        m : "<span id=\"m\"> * </span>",
        d : "<span id=\"d\"> / </span>"
    };

    var Formulas = {
        formulas : [
            "{0}{1}{2} = {3}".format(Symbols.sin2, Symbols.a, Symbols.cos2, "1"),
            "{0} = {1}{2}{3}".format(Symbols.tg, Symbols.sin, Symbols.d, Symbols.cos),
            "{0} = {1}{2}{3}".format(Symbols.ctg, Symbols.cos, Symbols.d, Symbols.sin)
        ],
        fillFormulas : function() {
            var form_text = "";
            for (i in this.formulas) {
                form_text += "<li id=\"{0}\">{1}</li>".format(i, this.formulas[i]);
            }
            $(formulasDock).html(form_text);
        },
        clear : function() {
            $(formulasDock).find("*").css("background-color", "transparent");
        }
    };

    function Equation(equationString, steps) {
        this.eqString = equationString;
        this.steps = steps;
    };

    function highlight(element) {
        $(element).css("background-color", "yellow");
    };

    function changeText(element, text) {
        $(element).html(text);
    }

    equations = [
        new Equation(
            "{0}{1}{2} = {3}".format(Symbols.cos, Symbols.m, Symbols.tg, Symbols.sin), [
                function() {},
                function() {
                    highlight(formulasDock + ">#1>#tg");
                    highlight(equationDock + ">#tg");
                },
                function() {
                    changeText(equationDock + ">#tg",
                        "{0}{1}{2}".format(Symbols.sin, Symbols.d, Symbols.cos));
                    highlight(equationDock + ">#tg");
                    highlight(formulasDock, + ">#1>#sin");
                    highlight(formulasDock, + ">#1>#m");
                    highlight(formulasDock, + ">#1>#cos");
                },
                function() {
                    highlight(equationDock + ">#tg>#cos");
                    highlight(equationDock + ">#cos");
                },
                function() {
                    changeText(equationDock + ">#tg>#cos", "");
                    changeText(equationDock + ">#tg>#d", "");
                    changeText(equationDock + ">#cos", "");
                    changeText(equationDock + ">#m", "");
                },
                function() {
                    changeText(equationDock + ">#tg", "L");
                    changeText(equationDock + ">#sin", "P");
                }
            ]),
        new Equation(
            "{0}{1}{2} = {3}".format(Symbols.sin, Symbols.m, Symbols.ctg, Symbols.cos), [
                function() {},
                function() {
                    highlight(formulasDock + ">#2>#ctg");
                    highlight(equationDock + ">#ctg");
                },
                function() {
                    changeText(equationDock + ">#ctg",
                        "{0}{1}{2}".format(Symbols.cos, Symbols.d, Symbols.sin));
                    highlight(equationDock + ">#ctg");
                },
                function() {
                    highlight(equationDock + ">#ctg>#sin");
                    highlight(equationDock + ">#sin");
                },
                function() {
                    changeText(equationDock + ">#ctg>#sin", "");
                    changeText(equationDock + ">#ctg>#d", "");
                    changeText(equationDock + ">#sin", "");
                    changeText(equationDock + ">#m", "");
                },
                function() {
                    changeText(equationDock + ">#ctg", "L");
                    changeText(equationDock + ">#cos", "P");
                }
            ])
    ];

    return {
        Formulas : Formulas,
        equations : equations
    };
})();
