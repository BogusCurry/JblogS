var metadata = function(blogpost) {
	blogpost = blogpost.replace(/\[metadata=(.*)[;](.*)\]/, "<p class='jblogs-metadata'>"+authorstring+" "+'$1'+" "+datestring+" "+'$2'+"</p>", "gi");
	return blogpost;
};

var converter = new Markdown.Converter();

for (entry of blogEntries) {
    var id = "entry-" + entry;
    var elem = $("<p class='jblogs-blogpost' id='" + id + "'/>");
    
    $("#blog").append(elem);
    
    elem.load(entry, function(data) {
        var text = converter.makeHtml(data);
        text += "<hr>";
        text = metadata(text);
        this.innerHTML = text;
    });
}