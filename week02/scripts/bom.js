const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('chapList');
const li = document.createElement('li');
const remove = document.createElement('button');

li.textContent = input.value;
remove.textContent = '❌';



button.addEventListner("click", function () {
    if (input.value.trim() !== '') {
        li.append(remove);
        list.append(li);
    }
});

remove.addEventListner("click", function () {
    li.remove();
    input.focus;
});

input.value = '';
input.focus = '';