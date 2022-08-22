
//document.write('<style>#init,#schedule,.ritz { margin-left: 15%;}</style>');

$(document).ready(
    function () {
        createNavBar();
        createFooter();
    }
);

function addHeadTags() {
    var head = '';
    head += '<link type="text/css" rel="stylesheet" href="resources/customStyle.css">';
    head += '<link rel="icon" type="image/png" href="resources/favicon.png"></link>';
    head += '<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />'
    head += '<meta http-equiv="Pragma" content="no-cache" />'
    head += '<meta http-equiv="Expires" content="0" />'
    $("head").prepend(head);
}

function createNavBar() {
    var navbar = '';
    navbar += '<ul id="ur2d-navbar">'
    navbar += createListElementLink("index");
    //navbar += createListElementLink("schedule");
    //navbar += createListElementLink("videos");
    navbar += '<li class="ur2d-navbar-li"><a href="https://discord.gg/6Jg4v6zdYj" target="_blank">Open Discord</a></li>';
    navbar += addHr();
    navbar += createListElementTitle("Monday League");
    navbar += createListElementLink("monday-league-stats-drivers");
    navbar += createListElementLink("monday-league-hall-of-fame");
    navbar += createListElementLink("monday-league-videos");
    navbar += addHr();
    navbar += createListElementTitle("Formula Career");
    navbar += createListElementLink("formula-career-stats-drivers");
    navbar += createListElementLink("formula-career-hall-of-fame");
    navbar += createListElementLink("formula-career-videos");
    navbar += addHr();
    navbar += createListElementTitle("Wednesday League");
    navbar += createListElementLink("wednesday-league-stats-drivers");
    navbar += createListElementLink("wednesday-league-hall-of-fame");
    navbar += addHr();
    navbar += createListElementTitle("Thursday League");
    navbar += createListElementLink("thursday-league-stats-drivers");
    navbar += createListElementLink("thursday-league-hall-of-fame");
    navbar += createListElementLink("thursday-league-videos");
    navbar += addHr();
    navbar += createListElementTitle("Feeder Series");
    navbar += createListElementLink("feeder-series-stats-drivers");
    navbar += createListElementLink("feeder-series-hall-of-fame");
    navbar += createListElementLink("feeder-series-videos");
    navbar += addHr();
    navbar += createListElementTitle("Friday League");
    navbar += createListElementLink("friday-league-stats-drivers");
    navbar += createListElementLink("friday-league-hall-of-fame");
    navbar += addHr();
    navbar += createListElementTitle("Friday Championship");
    navbar += createListElementLink("friday-champ-stats-drivers");
    navbar += createListElementLink("friday-champ-hall-of-fame");
    navbar += createListElementLink("friday-champ-videos");
    navbar += addHr();
    navbar += createListElementTitle("Sunday League");
    navbar += createListElementLink("sunday-league-stats-drivers");
    navbar += createListElementLink("sunday-league-stats-teams");
    navbar += createListElementLink("sunday-league-hall-of-fame");
    navbar += createListElementLink("sunday-league-videos");
    navbar += addHr();
    navbar += createListElementTitle("Super Cup");
    navbar += createListElementLink("supercup-stats-drivers");
    navbar += createListElementLink("supercup-hall-of-fame");
    navbar += '</ul>'
    $("body").prepend(navbar);
}

function createFooter() {
    $("body").append('<footer><a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" width="70"/></a><div id="footerText"><div>The webmaster is Zekisverse, a member of UR2D eSports community</div><div>Unfortunately, the webpage is discontinued and it won\'t receive more updates. Join the official <a href="https://discord.gg/6Jg4v6zdYj" target="_blank">Discord</a> to check all the related information.</div><div>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International License</a></div><div>(2020-2021)</div></div></footer>');
}

function addHr() {
    return '<hr>';
}

function createListElementLink(pathToCheck) {
    if (window.location.href.indexOf(pathToCheck) > -1 || (window.location.href.indexOf("html") == -1 && "index".indexOf(pathToCheck) > -1)) {
        return '<li class="ur2d-navbar-li"><a class="active" href="' + pathToCheck + '.html">' + getNavBarTitle(pathToCheck) + '</a></li>';
    } else {
        return '<li class="ur2d-navbar-li"><a href="' + pathToCheck + '.html">' + getNavBarTitle(pathToCheck) + '</a></li>';
    }
}

function createListElementTitle(title) {
    return '<li class="ur2d-navbar-li"><span>' + title + '</span></li>';
}

function getNavBarTitle(pathToCheck) {
    return linkTitle[linkTitle.indexOf(pathToCheck) + 1];
}

var linkTitle = [
    "index", "UR2D eSports",
    "schedule", "Events Schedule",
    "videos", "Videos",
    "formula-career-stats-drivers", "Driver Stats",
    "formula-career-hall-of-fame", "Hall of Fame",
    "formula-career-videos", "Videos",
    "monday-league-stats-drivers", "Driver Stats",
    "monday-league-hall-of-fame", "Hall of Fame",
    "monday-league-videos", "Videos",
    "wednesday-league-stats-drivers", "Driver Stats",
    "wednesday-league-hall-of-fame", "Hall of Fame",
    "thursday-league-stats-drivers", "Driver Stats",
    "thursday-league-hall-of-fame", "Hall of Fame",
    "thursday-league-videos", "Videos",
    "feeder-series-stats-drivers", "Driver Stats",
    "feeder-series-hall-of-fame", "Hall of Fame",
    "feeder-series-videos", "Videos",
    "friday-league-stats-drivers", "Driver Stats",
    "friday-league-hall-of-fame", "Hall of Fame",
    "friday-champ-stats-drivers", "Driver Stats",
    "friday-champ-hall-of-fame", "Hall of Fame",
    "friday-champ-videos", "Videos",
    "sunday-league-stats-drivers", "Driver Stats",
    "sunday-league-stats-teams", "Team Stats",
    "sunday-league-hall-of-fame", "Hall of Fame",
    "sunday-league-videos", "Videos",
    "supercup-stats-drivers", "Driver Stats",
    "supercup-hall-of-fame", "Hall of Fame",
];
