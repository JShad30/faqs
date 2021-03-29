const questions = [
    {
        id: 1,
        question: "Etiam eget sem justo. Vestibulum fringilla dictum purus id condimentum. Ut pulvinar faucibus arcu?",
        answer: "Curabitur ac nibh luctus, ullamcorper tortor in, consectetur ex. Phasellus vel dapibus ante. Quisque sollicitudin tincidunt posuere. In non dignissim magna. Etiam tincidunt ante at mi lobortis mollis. Ut semper commodo euismod. Morbi iaculis laoreet eros, vel posuere sapien fermentum."
    },
    {
        id: 2,
        question: "Curabitur luctus accumsan ex et pretium. Quisque volutpat mi sed felis consequat, posuere suscipit nunc?",
        answer: "Praesent vitae nisl vestibulum, dignissim arcu in, mattis urna. Etiam mattis ante sed lobortis gravida. Nunc tempor orci leo, non cursus quam tincidunt ac. Vestibulum sit amet auctor arcu. Aenean sit amet faucibus tortor. Etiam hendrerit blandit odio, sed molestie est semper eget. Nam ut sem eu neque ornare sagittis."
    },
    {
        id: 3,
        question: "Etiam vehicula ac lectus vitae ornare. In consectetur vel nisl eget maximus?",
        answer: "Vestibulum sollicitudin, massa eget iaculis fermentum, magna augue rutrum libero, nec blandit ligula augue a erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel magna cursus, consequat metus."
    },
    {
        id: 4,
        question: "Phasellus id vehicula ante. Duis in facilisis dui. Nunc fringilla nec ex eu convallis. In porta nunc?",
        answer: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eget ligula mollis, gravida urna sed, commodo turpis. Sed tincidunt erat vitae auctor eleifend. Integer finibus facilisis turpis ut tempor. Aliquam arcu leo, cursus."
    }
]

const questionLocation = document.getElementById('questions-container');

window.onload = getData();

function getData() {
    var data = questions;
    var documentQuestions = "";
    
    for (i in data) {
        documentQuestions += "<article class='question-section'>" +                                
                                "<div class='question'>" + 
                                data[i].question + 
                                "<div class='button plus-button active'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z'/></svg></div>" + 
                                "<div class='button minus-button'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-14v-4h14v4z'/></svg></div>" +
                                "</div>" +
                                "<div class='answer'><div class='horizontal-rule'></div>" +                            
                                data[i].answer + 
                                "</div></article>"

        questionLocation.innerHTML = documentQuestions;
    }
}

const plusMinusButtons = document.querySelectorAll('.button');

plusMinusButtons.forEach(function(thisButton) {
    thisButton.addEventListener('click', function(e) {
        const currentTargetText = e.currentTarget.parentElement.parentElement.childNodes[1];       
        currentTargetText.classList.toggle('active');
    });
});

