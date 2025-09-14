
// Accessing DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Adding event listener to the button
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        
        // Creating new list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button'); 

        // Setting text content and appending elements
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        
        // Adding event listener to the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        
        // Clearing and focusing the input field
        input.value = '';
        input.focus();
    }
});


