(function () {
    "use strict";
    function _(x) {
        return document.getElementById(x);
    }
    function showMe() {
        var activity = _("activity");
        var getActivity = activity.options[activity.selectedIndex].innerHTML;
        var evalActivity = 0;
        if (getActivity === "Brak aktywności/leżący tryb życia") {
            evalActivity = 1;
        } else if (getActivity === "Praca siedząca/aktywność fizyczna znikoma") {
            evalActivity = 1.2;
        } else if (getActivity === "Praca siedząca/trening 1-2 razy w tygodniu") {
            evalActivity = 1.4;
        } else if (getActivity === "Lekka praca fizyczna/trening 2-3 razy w tygodniu") {
            evalActivity = 1.6;
        } else if (getActivity === "Praca fizyczna/trening 4-5 razy w tygodniu") {
            evalActivity = 1.8;
        } else if (getActivity === "Praca fizyczna/trening codziennie") {
            evalActivity = 2;
        
        
        }
        var weight = _("weight").value;
        var age = _("age").value;
        var height = _("height").value;
        var bmr = 0;

        if (_("sexF").checked) {
            bmr = evalActivity * ((9.60 * weight) + (1.80 * height) - (4.7 * age) + 665);
        } else if (_("sexM").checked) {
            bmr = evalActivity * ((13.7 * weight) + (5 * height) - (6.8 * age) + 66);
        }
        var resultWrite = _("result");
        resultWrite.innerHTML = "<p class='text-center'>" + bmr.toFixed(2) + "</p>";
    }
    var button = _("submit");
    button.addEventListener("click", showMe);
}());