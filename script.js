$(document).ready(function () {
    $("#github").click(function () {
        window.open("https://github.com/rowanailbhe");
    });
});

$(document).ready(function () {
    $("#linkdin").click(function () {
        window.open("https://www.linkedin.com/in/rowan-george-156723221/");
    });
});

$(document).ready(function () {
    $("#twitter").click(function () {
        window.open("https://twitter.com");
    });
});

$(document).ready(function () {
    $("#insta").click(function () {
        window.open("https://www.instagram.com");
    });
});

$(document).ready(function () {
    $("#fb").click(function () {
        window.open("https://www.facebook.com");
    });
});

$('#github').hover(function () {
    $('#github').addClass('hovered-icon');
}, function () {
    $('#github').removeClass('hovered-icon');
});

$('#linkedin').hover(function () {
    $('#linkedin').addClass('hovered-icon');
}, function () {
    $('#linkedin').removeClass('hovered-icon');
});

$('#twitter').hover(function () {
    $('#twitter').addClass('hovered-icon');
}, function () {
    $('#twitter').removeClass('hovered-icon');
});

$('#insta').hover(function () {
    $('#insta').addClass('hovered-icon');
}, function () {
    $('#insta').removeClass('hovered-icon');
});

$('#fb').hover(function () {
    $('#fb').addClass('hovered-icon');
}, function () {
    $('#fb').removeClass('hovered-icon');
});


let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        for (var i = 0; i < myObj.length; i++) {
            addRepo(myObj[i].name);
        }
    }
};
gitHubRequest.open("GET", "https://api.github.com/users/rowanailbhe/repos", true);
gitHubRequest.send();

function addRepo(name) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(name);
    node.appendChild(textNode);
    document.getElementById("repoList").appendChild(node);
}