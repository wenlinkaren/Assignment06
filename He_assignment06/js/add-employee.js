// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {
    // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    let width = 800;
    let height = 600;
    // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width, height);
    // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height)/ 2));
        // CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
        const $ = (id) => document.getElementById(id);
        // HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
        $('cancel').addEventListener('click', () => {
            window.close();
        });
        // HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
        $('submit').addEventListener('click', (e) => {    
            e.preventDefault();
            // CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
            // SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
            let ID        = $('id').value;
            let Name      = $('name').value;
            let Extension = $('extension').value;
            let Email     = $('email').value;
            let Department= $('department').value;
            // GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
            let output = window.opener.document.getElementById('loginDetails');
            // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
            // THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
            output.innerHTML = 'ID: ' + ID +
                               '<br>Name: ' + Name +
                               '<br>Extension: ' + Extension +
                               '<br>Email: ' + Email +
                               '<br>Department: ' + Department;
            // CLOSE THE POPUP
            window.close();
        });
});