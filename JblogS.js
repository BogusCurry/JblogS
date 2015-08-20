var converter = new Markdown.Converter();

var blog = "";

for (i = 0; i < blogEntries.length; i++) {
	$("#blog").load(blogEntries[i], function(data) {
		var text = converter.makeHtml(data);
		blog += text;
		blog = metadata(blog);
		blog += "<hr>";
		document.getElementById("blog").innerHTML=blog;
	});
}

function metadata(blogpost) {
	blogpost = blogpost.replace(/\[metadata=(.*)[;](.*)\]/, "<p>"+authorstring+" "+'$1'+" "+datestring+" "+'$2'+"</p>", "gi");
	return blogpost;
}
