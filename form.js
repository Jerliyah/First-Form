// All the p tags will be collected into an array called options
let options = document.querySelectorAll('p');



// A function to get siblings of a given element
function getSiblings(element) {
    // Look at the element's parents and grab all of its children
    let allChildren = element.parentElement.children;

    // Convert allChildren to an array
    allChildrenList = objectToArray(allChildren);

    // Remove the given element from the children list so that we are left with just the siblings
    let elementIndex = allChildrenList.indexOf(element);
    let siblings = allChildrenList.filter( (child) => { return child != element });

    // return siblings
    return siblings;
}


function objectToArray(object) {
    array = [];
    
    for(let i=0; i < object.length; i++) {
        array.push(object[i]);
    }

    return array;
}


function hasSelectedClass(element) {
    if ( element.classList.contains('selected') ) {
        return element
    }
}




// For each item in the options array (p elements)...
options.forEach( (element) => {

    // Add a listener for when the mouse hover over it...
    element.addEventListener( 'click', () => {
        // Get the siblings of the element
        let siblings = getSiblings(element);

        // Remove 'selected' class from any previously hovered on items
        siblings.forEach( (sibling) => {
            if ( sibling.classList.contains('selected') ) {
                sibling.classList.remove('selected');
            }
        });

        // Add the selected class to this specific element
        element.classList.add('selected');
    });
});



// Create a variable for the button
let button = document.querySelector('button');

// When the button is clicked...
button.addEventListener('click', () => {
    // Get all of the selected element...
    let selectedOptions = document.querySelectorAll('.selected');
    let selectedInput = [];

    // Grab the data out of those selected elements
    selectedOptions.forEach( (selectedOption) => {
        selectedInput.push( selectedOption.innerText);
    })

    // Alert the user of what they selected
    alert("Here's what you selected: \n" + selectedInput)

    // TODO: Autodirect to a new page personalized due to their selection
});

