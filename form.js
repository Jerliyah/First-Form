let question_sets = object_to_array( document.querySelectorAll("div.question-set") );


let options =  document.querySelectorAll("p") ;

options.forEach( (option) => {
    option.addEventListener('click', () => {
        there_can_be_only_one_selected(option)
    })
})


let button = document.getElementsByTagName("button")[0];

button.addEventListener('click', () => { form_submission() })

function form_submission() {
    /* Look at each question set
        - Establish which option has the selected class
        - Record it's number
            - If none selected, record as zero
        - Each number should refer to a dictionary
        - The matching statement should be pushed to model string
        - Present modal
    */
    console.log("form submitted");
    let submission_message = "The form has been submitted. Let's see your results: \n";

    for(let counter=0; counter < question_sets.length; counter++) {
        let question_set = question_sets[counter];

        console.log(question_set.querySelector("li").innerText);
        
        let selected_option = find_selected_option(question_set.querySelector("div.options-ctn"));

        submission_message += `${counter+1}. ${get_messages(counter, selected_option)} \n`;
    }
       
    alert(submission_message)
    
}






// Helper Functions
function find_selected_option(parent) {

    for(let counter=0; counter < parent.children.length; counter++) {

        child = parent.children[counter];

        if( has_selected_class(child) ) {
            selected_option = parseInt( child.innerText );
            return selected_option
        }
    }

    // When no selections were made for this set
    return 0    
}


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


function get_messages(questionNumber, selectedNumber) {
    switch(questionNumber) {

        case 0: 
            switch(selectedNumber) {
                case 0: return "I guess you don't know how cubic you are"
                case 1: return "Ah, you're definetely a cylinder"
                case 2: return "Hmm, perhaps you're a pyramid"
                case 3: return "Pretty cubic, perhaps of a rectangular prism though"
                case 4: "Yay! Cubic all the way!"
            }
        break;
        default:
            return "Haven't gotten to these questions yet"
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
