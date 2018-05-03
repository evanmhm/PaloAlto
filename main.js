$.getJSON("http://www.reddit.com/r/business.json?jsonp=?", function(data) {
    $.each(data.data.children, function(i, post) {
        var ul = document.getElementById("post-list");
        var li = document.createElement("li");
        var card = document.createElement("div");
        var title = document.createElement("h3");
        var comments = document.createElement("a");
        var username = document.createElement("p");

        card.setAttribute("class", "card");
        title.setAttribute("class", "post-title");
        title.appendChild(document.createTextNode(post.data.title));
        console.log()
        comments.setAttribute("class", "comments");
        comments.setAttribute("href", "https://reddit.com" + post.data.permalink);
        comments.appendChild(document.createTextNode(post.data.num_comments + " comments"));

        username.setAttribute("class", "username");
        username.appendChild(document.createTextNode("Submitted by " + post.data.author))

        card.appendChild(title);
        card.appendChild(document.createElement("hr"));
        card.appendChild(comments);
        card.appendChild(username);

        li.appendChild(card);
        ul.appendChild(li);
        $('ul li').hide();
        $('ul li').slice(0, 4).show();

    })
})

var index = 0;

function scrollUp() {
    if (index > 0) {
        $('ul li').hide();
        index -= 4;
        $('ul li').slice(index, index + 4).show();
    }

}

function scrollDown() {
    $('ul li').hide();
    index += 4;
    $('ul li').slice(index, index + 4).show();

}
