$(document).ready(function () {
var main = 0;
var first = 0;
var second = 0;
var result = 0;

    $("#1").click(function () {
        $("#mainInput").val(main + "1");
        main = parseInt($("#mainInput").val());
    });

    $("#2").click(function () {
        $("#mainInput").val(main + "2");
        main = $("#mainInput").val();
    });

    $("#3").click(function () {
        $("#mainInput").val(main + "3");
        main = $("#mainInput").val();
    });

    $("#4").click(function () {
        $("#mainInput").val(main + "4");
        main = $("#mainInput").val();
    });

    $("#5").click(function () {
        $("#mainInput").val(main + "5");
        main = $("#mainInput").val();
    });

    $("#6").click(function () {
        $("#mainInput").val(main + "6");
        main = $("#mainInput").val();
    });

    $("#7").click(function () {
        $("#mainInput").val(main + "7");
        main = $("#mainInput").val();
    });

    $("#8").click(function () {
        $("#mainInput").val(main + "8");
        main = $("#mainInput").val();
    });

    $("#9").click(function () {
        $("#mainInput").val(main + "9");
        main = $("#mainInput").val();
    });

    $("#plus").click(function () {
        main = $("#mainInput").val();
        first = main;
        main = 0;
       $("#mainInput").val("");
       $("#values").append(first + "+");
    });

    $("#calc").click(function () {
       second = $("#mainInput").val();
       result = parseInt(first) + parseInt(second);
       main = result;
       $("#mainInput").val(parseInt(result));
       $("#values").append(second + "=" + result);
       console.log("first:" + first + " second: " + second);
    });

    $(".clickitem").click(function () {
        $("#mainInput").val(parseInt(main, 10));
    });

    $("#clear").click(function () {
        main = 0
        first = 0;
        second = 0;
        $("#mainInput").val(0);
        $("#values").empty();
    });


});