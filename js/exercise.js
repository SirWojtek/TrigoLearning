
var Symbols =
{
    sin : "sin(x)",
    cos : "cos(x)",
    sin2 : "sin^2(x)",
    cos2 : "cos^2(x)",
    tg : "tg(x)",
    ctg : "ctg(x)"
};

var Formulas =
{
    formulas :
    [
        "{0} + {1} = {2}".format(Symbols.sin2, Symbols.cos2, "1"),
        "{0} = {1} / {2}".format(Symbols.tg, Symbols.sin, Symbols.cos),
        "{0} = {1} / {2}".format(Symbols.ctg, Symbols.cos, Symbols.sin)
    ],
    fillFormulas : function()
    {
        var form_text = "";
        for (i in this.formulas)
        {
            form_text += "<li>" + this.formulas[i] + "</li></br>";
        }
        $("#formulas").html(form_text);
    }
};
var Equations =
{
    currentEquation : 0,
    equations : 
    [
        "{0} * {1} = {2}".format(Symbols.cos, Symbols.tg, Symbols.sin),
        "{0} * {1} = {2}".format(Symbols.sin, Symbols.ctg, Symbols.cos)
    ],
    fillEquation : function()
    {
        var equationIndex = this.currentEquation;

        while (equationIndex == this.currentEquation)
        {
            equationIndex = Math.floor(this.equations.length * Math.random())    
        }

        $("#equation").html(this.equations[equationIndex]);
        this.currentEquation = equationIndex;
    }
};

$(document).ready(function()
{
    Formulas.fillFormulas();
    Equations.fillEquation();
});

$("#begin").click(function()
{
    console.log("aaa")
});

$("#previous").click(function()
{
    console.log("aaa")
});

$("#next").click(function()
{
    console.log("aaa")
});

$("#shuffle").click(function()
{
    Equations.fillEquation();
});