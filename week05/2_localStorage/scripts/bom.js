
// Accessing DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != "") {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
})

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li)

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    })
}

function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chapterArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.lenght - 1);
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChapterList();
}




