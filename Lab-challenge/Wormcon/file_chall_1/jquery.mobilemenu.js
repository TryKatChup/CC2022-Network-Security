/*
Template Name: Xanpon
Author: <a href="https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Mobile Menu JS

Thanks to:
"Convert a Menu to a Dropdown for Small Screens" from Chris Collier - http://css-tricks.com/convert-menu-to-dropdown/
"Submenu's with a dash" Daryn St. Pierre - http://jsfiddle.net/bloqhead/Kq43X/
*/

$('<form action="#"><select /></form>').appendTo("#mainav");
$("<option />", {
    selected: "selected",
    value: "",
    text: "MENU"
}).appendTo("#mainav select");
$("#mainav a").each(function() {
    var e = $(this);
    if ($(e).parents("ul ul ul").length >= 1) {
        $("<option />", {
            value: e.attr("href"),
            text: "- - - " + e.text()
        }).appendTo("#mainav select")
    } else if ($(e).parents("ul ul").length >= 1) {
        $("<option />", {
            value: e.attr("href"),
            text: "- - " + e.text()
        }).appendTo("#mainav select")
    } else if ($(e).parents("ul").length >= 1) {
        $("<option />", {
            value: e.attr("href"),
            text: "" + e.text()
        }).appendTo("#mainav select")
    } else {
        $("<option />", {
            value: e.attr("href"),
            text: e.text()
        }).appendTo("#mainav select")
    }
});
$("#mainav select").change(function() {
    if ($(this).find("option:selected").val() !== "#") {
        window.location = $(this).find("option:selected").val()
    }
})

   function Xt(e, t, n) {
        var r, i, o, a, s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

 

          
   function Xt(e, t, n) {
        var r, i, o, a, s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }