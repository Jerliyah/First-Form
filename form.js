

let options = document.querySelectorAll('p'); // Returns NodeList

options.forEach( (element) => {

    element.addEventListener( 'click', () => { there_can_be_only_one_selected(element) } );
        
});



let button = document.querySelector('button');
let questionItems = object_to_array( document.querySelectorAll('li') ); 
let questions = [];

// Get raw strings of question instead of elements
questionItems.forEach( (questionItem) => {
                questions.push( questionItem.innerText );
})


button.addEventListener('click', () => {
    // Get all of the selected elements...
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






// Helper Functions
function get_siblings(element) {
    let allChildren = element.parentElement.children; // Returns NodeList

    allChildrenList = object_to_array(allChildren);

    // Remove the given element from the children list so that we are left with just the siblings
    let elementIndex = allChildrenList.indexOf(element);
    let siblings = allChildrenList.filter( (child) => { return child != element });

    return siblings;
}


function has_selected_class(element) {
    if ( element.classList.contains('selected') ) {
        return element
    }
}


function object_to_array(object) {
    array = [];
    
    for(let i=0; i < object.length; i++) {
        array.push(object[i]);
    }

    return array;
}


function there_can_be_only_one_selected(element) {
    let siblings = get_siblings(element);
    
    siblings.forEach( (sibling) => {
        if ( sibling.classList.contains('selected') ) {
            sibling.classList.remove('selected');
        }
    });

    element.classList.add('selected');

}
