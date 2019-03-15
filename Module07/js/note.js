'use strict';
const note = createNote({
    text: 'Содержание заметки',
    date: '07/06/2018'
});
console.log(note);
document.body.appendChild(note);


    function createNote({text, date}) {
        const note = document.createElement('div');
        note.classList.add('note');
        
        const noteContent = document.createElement('div');
        noteContent.classList.add('note__content');
        
        const noteText = document.createElement('p');
        noteText.classList.add('note__text');
        noteText.textContent = text;
        
        const noteDate = document.createElement('p');
        noteDate.classList.add('note__text');
        noteDate.textContent = `Создано ${date}`;
        
        noteContent.append(noteText, noteDate);
        
        const noteActions = document.createElement('div');
        noteActions.classList.add('note__actions');
        
        const editBtn = document.createElement('button');
        editBtn.classList.add('button');
        editBtn.textContent = 'Изменить';
        
        const delBtn = document.createElement('button');
        delBtn.classList.add('button');
        delBtn.textContent = 'Удалить';
        
        noteActions.append(editBtn, delBtn);
        note.append(noteContent, noteActions);
        
        return note;
    }