var url = "https://raw.githubusercontent.com/sojup/sojup.github.io/master/Sojupifidictionary.json";
var sojup;

function loadSojup()
{
    $("#loading").text("Loading the Sojupifidictionary...")
    $.get(url, function(data)
    {
        sojup = JSON.parse(data);
        $("#loading").text("")
    });
}

$(function()
{
    loadSojup();
    $("#Sojupify").click(function()
    {
        $("#error").text("")
        var word = $("#word").val();
        if (sojup[word] == undefined)
        {
            $("#error").text("Error - that word isn't in the Sojupifidictionary. If it should be, contact sojupinfo@gmail.com");
        }
        else
        {
            $("#Sojupified").text(word + " Sojupified is " + sojup[word].toLowerCase());
        }
        $("#word").val("");

    });

    $("#word").keydown(function (e)
    {
        if (e.which == 13)
        {
            e.preventDefault();
            $("#Sojupify").click();
        }
    });
});
