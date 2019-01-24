/*
*Count variable for title numbering
*/
var titleCount = 1;

$(function(){

// Please complete the below exercises preferrably using JQuery

/*
*getting item list to append items
*/
var itemList = $('.item-list');

/*
*Generating items dynamically to track title count
*/
for(titleCount; titleCount<=5; titleCount++){
	itemList.append(addItem("Title" + titleCount));
}

// 1. Make each item's paragraph collapse/expand when the title is clicked
$('body').on("click", "header .title" ,function(evt){
    $(this).closest('.item').find('p.description').slideToggle();
});
// 2. Remove each item when we click on the closing X
$('body').on("click", "span.close" ,function(evt){
	$(this).closest('.item').remove();
	titleCount--;
});

// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items

$('#add_new').on("submit", function(evt){
	evt.preventDefault();
	var itemTitle = $.trim($('#newtitle').val());
	if(itemTitle) {
		var newElement = addItem(itemTitle);
		itemList.append(newElement);	
	}else {
		var newElement = addItem("Title " + titleCount);
		itemList.append(newElement);
		titleCount++;
	}
});

/*
*Abstracting add element functionality to a function for reusability
*/
function addItem(title) {
	var elemString = '<div class="item">';
		elemString +=	'<header>';
		elemString +=	'<h1 class="title">%newTitle%</h1>';
		elemString +=	'<span class="close">x</span>';
		elemString +=	'</header>';
		elemString +=	'<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p>';
		elemString +=	'</div>';

	return elemString.replace('%newTitle%', title);
}
	

//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page

/*
*Done
*/


});