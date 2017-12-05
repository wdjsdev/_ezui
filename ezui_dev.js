/*
	Component Name: EZUI
	Author: William Dowling
	Creation Date: 02 December, 2017
	Description: 
		Simple and comprehensive framework for
		building UI dialogs/palettes in Adobe
		Illustrator.
*/

//global variabls
const DEFAULT_WINDOW_TYPE = "dialog";

var _EZUI = function(type)
{
	//validate type argument
	//if no argument given,
	//set to DEFAULT_WINDOW_TYPE

	this.type = (!type) ? DEFAULT_WINDOW_TYPE : this.validateType(type);

	this.window = new Window(type);

	return this.window;

}


//prototype methods

_EZUI.prototype.validateType =  function(type)
{
	type = type.toLowerCase();
	if(type !== "dialog" && type !== "palette")
	{
		type = undefined;
	}
	return type;
}

_EZUI.prototype.show = function()
{
	this.window.show();
}

_EZUI.prototype.static = function(parent,txt,len)
{
	var result = parent.add("statictext", undefined, txt);
	if(len)
	{
		result.characters = len;
	}
	return result;
}