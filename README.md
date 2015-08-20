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

`<script src="<pagedown"></script>` You only need Markdown.Converter.js. If you want to filter potentionally harmful HTML elements you might use [Markdown.Sanitizer.js](https://code.google.com/p/pagedown/wiki/PageDown#Markdown.Sanitizer.js "Markdown.Sanitizer.js") too.

Add a HTML container (div, fieldset, span, ...) with the id "blog" and class "blog" where you want the posts to appear.

`<div id="blog" class="blog"></div>`

Link the scripts `JblogSEntries.js`, `JblogS Settings.js` and `JblogS.js` . JblogS at the bottom of the page, JblogSEntries and Settings in the head of the html page.

`<script src="<JblogSEntries>"></script> <script src="<JblogS Settings.js>"></script></head>`

`<script src="<JblogS>" defer></script></body>`

It's important that you link JblogSEntries first, as JblogS can't load files from the array defined in JblogSEntries before JblogSEntries is loaded.

You know where to store your blog posts? Let's say you created a folder called 'posts'. So you've got the files _posts/post1.txt_ and _posts/post2.txt_. Add both files to JblogSEntries.js:

`var blogEntries = ["posts/post2.txt","posts/post1.txt"];`

Now it should work.

## Settings

JblogS uses the file `JblogS Settings.js` to store its settings. At the moment there are two values being stored: `authorstring` and `datestring`. Authorstring is "Written by" by default, datestring is "at" by default.

## Metadata

You can use a BBCode-like tag `[metadata=<Author>;<Date>]` to store __who__ wrote thisthe post, and __when__. `[metadata=HashtagMC;20.08.2015]` will be replaced with 'Written by HashtagMC at 20.08.2015'. The strings (written by and at) can be changed in the config file (JblogS Settings.js).

## CSS

You can easily customize JblogS with CSS. The div that contains all posts has the id "blog". Every blog post has the class "jblogs-blogpost" and the metadata of every post (author, date) have the class "jblogs-metadata".
