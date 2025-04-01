// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png який лежить в папці з поточним фйлом


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


let mainDiv = document.createElement('div');

for(let course of coursesArray) {

    let titleDiv = document.createElement('div');
    titleDiv.textContent = `Назва курсу - ${course.title}`;
    titleDiv.classList.add('title');

    let monthDurationDiv = document.createElement('div');
    monthDurationDiv.textContent = `Тривалість курсу - ${course.monthDuration}`;
    monthDurationDiv.classList.add('monthDuration');

    let hourDurationDiv = document.createElement('div');
    hourDurationDiv.textContent = `Кількість годин - ${course.hourDuration}`;
    hourDurationDiv.classList.add('hourDuration');

    let moduleList = document.createElement('ul');
    for(let module of course.modules){
        let li = document.createElement('li');
        li.textContent = ` ${module}`;
        moduleList.appendChild(li);
        moduleList.classList.add('list');
    }

    mainDiv.append(titleDiv, monthDurationDiv, hourDurationDiv, moduleList);

}


document.body.appendChild(mainDiv);