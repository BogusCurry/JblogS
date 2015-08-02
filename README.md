# JblogS
JblogS is a javascript-based blog system.

## Host requirements

* HTML
* (CSS)
* JavaScript

### Required scripts

* jQuery
* Pagedown (JavaScript Markdown converter)

## How to use JblogS

In the head of your page, link jQuery and Pagedown (jQuery first).

`<script src="<jquery>"></script>`

`<script src="<pagedown"></script>`

Add a HTML container (div, fieldset, span, ...) with the id "blog" and class "blog" where you want the posts to appear.

`<div id="blog" class="blog"></div>`

Link the scripts JblogSEntries.js and JblogS.js __at the bottom of the page__.

`<script src="<JblogSEntries>" defer></script>`

`<script src="<JblogS>" defer></script>`

It's important that you link JblogSEntries first, as JblogS can't load files from the array defined in JblogSEntries before JblogSEntries is loaded.

You know where to store your blog posts? Let's say you created a folder called 'posts'. So you've got the files _posts/post1.txt_ and _posts/post2.txt_. Add both files to JblogSEntries.js:

`var blogEntries = ["posts/post2.txt","posts/post1.txt"];`

Now you should be done.
