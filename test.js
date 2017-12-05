function test()
{
	#include "ezui_dev.js";

	var blah = new _EZUI("dialog");
	var myText = blah.static(blah,"this is text", 25);
	blah.show();
}
test();