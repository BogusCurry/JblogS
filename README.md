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

Include jQuery and Pagedown at the end of your page (before the closing of the body). Be careful to include jQuery first.

`<script src="<jquery>"></script>`

`<script src="<pagedown"></script>`

You only need Markdown.Converter.js. If you want to filter potentionally harmful HTML elements you might use [Markdown.Sanitizer.js](https://code.google.com/p/pagedown/wiki/PageDown#Markdown.Sanitizer.js "Markdown.Sanitizer.js") too.

Add a HTML container (div, fieldset, span, ...) with the id "blog" where you want the posts to appear.

`<div id="blog"></div>`

Include the scripts `JblogSEntries.js`, `JblogS_Settings.js` and `JblogS.js` in this order below jQuery and Pagedown.
```
    <script src="./js/JblogSEntries.js"></script>
    <script src="./js/JblogS_Settings.js"></script>
    <script src="./js/JblogS.js"></script>
</body>
```

It's important that you link JblogSEntries first, as JblogS can't load files from the array defined in JblogSEntries otherwise.

You know where to store your blog posts? Let's say you created a folder called 'posts'. So you've got the files _posts/post1.txt_ and _posts/post2.txt_. Add both files to JblogSEntries.js:

`var blogEntries = ["posts/post2.txt","posts/post1.txt"];`

Now it should work.

## Settings

JblogS uses the file `JblogS_Settings.js` to store its settings. At the moment there are two values being stored: `authorstring` and `datestring`. Authorstring is "Written by" by default, datestring is "at" by default.

## Metadata

You can use a BBCode-like tag `[metadata=<Author>;<Date>]` to store __who__ wrote the post, and __when__. `[metadata=HashtagMC;20.08.2015]` will be replaced with 'Written by HashtagMC at 20.08.2015'. The strings (written by and at) can be changed in the config file (JblogS Settings.js).

## CSS

You can easily customize JblogS with CSS. The div that contains all posts has the id "blog". Every blog post has the class "jblogs-blogpost" and the metadata of every post (author, date) have the class "jblogs-metadata".

## Editor

The file `Editor.html` provides textfields for title, author,
date and text, automatically creating the [metadata]-tag and a level 2
heading (title)
