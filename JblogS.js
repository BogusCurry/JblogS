var converter = new Markdown.Converter();

for (entry of blogEntries) {
    var id = "entry-" + entry;
    var elem = $("<p id='" + id + "'/>");
    
    $("#blog").append(elem);
    
    elem.load(entry, function(data) {
	var text = converter.makeHtml(data);
	text += "<hr>";
        this.innerHTML = text;
    });
}
