import './style.css';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello Webpack 5';
    element.classList.add('hello');

    // Пример использования картинки

    element.appendChild(element);

    return element;
}

document.body.appendChild(component());