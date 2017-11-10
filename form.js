let question_sets = object_to_array( document.querySelectorAll("div.question-set") );

button.addEventListener('click', () => {
    /* Look at each question set
        - Establish which option has the selected class
        - Record it's number
            - If none selected, record as zero
        - Each number should refer to a dictionary
        - The matching statement should be pushed to model string
        - Present modal
    */

})






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
