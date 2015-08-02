var converter = new Markdown.Converter();

var blog = "";

for (i = 0; i < blogEntries.length; i++) {
	$("#blog").load(blogEntries[i], function(data) {
		var text = converter.makeHtml(data);
		blog += text;
		blog += "<hr>";
		document.getElementById("blog").innerHTML=blog;
	});
}