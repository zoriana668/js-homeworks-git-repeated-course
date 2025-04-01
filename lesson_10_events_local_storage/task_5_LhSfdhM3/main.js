//
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
//     в масив sessionsList зберігається інформація про дату та час відвідування сторінки.

//     Є сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM



// функція для того, щоб зробити логіку для двох сторінок в одному JS файлі

document.addEventListener('DOMContentLoaded', (event) => {
    const pageTitle = document.title;
    const pagePath = window.location.pathname;

    if(pageTitle.includes('Головна') || pagePath.includes('index.html')) {
        handleIndexPage();
    } else if(pageTitle.includes('Історія') || pagePath.includes('sessionsListPage.html')) {
        handleSessionsListPage();
    }
});


// index.html -----

function handleIndexPage() {
    let currentSession = new Date().toLocaleString('uk-UA');

    let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

    sessionsList.push(currentSession);

    localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
}


// sessionsListPage.html ----

function handleSessionsListPage() {
    let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
    let list = document.createElement('ul');

    document.body.appendChild(list);

    sessionsList.forEach((session) => {
        let liElement = document.createElement('li');
        liElement.textContent = session;
        liElement.style.marginBottom = '20px';
        list.appendChild(liElement);

        list.style.backgroundColor = '#aea8a8';
        list.style.padding = '30px';
    });

}