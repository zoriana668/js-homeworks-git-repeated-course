// #KzrtqyQ
// - Скласти розклад на тиждень за допомоги switch.
//     Користувач вводить порядковий номер дня тижня
//     і на екрані відображається інфа що заплановано на цей день
//     (можна замість плану на день, назву дня англійською).


let scheduleDay = +prompt('enter the number of a week to find out your plans on this day');

switch(scheduleDay){
    case 1:
        document.write(
            `<ul>
                <h1>Monday</h1>
                <li>go for a walk with Volt 3 times a day</li>
                <li>to check finance declaration</li>
                <li>studying JS</li>
                <li>Row training in the gym</li>
            </ul>`);
    break;

    case 2:
        document.write(
            `<ul>
                <h1>Tuesday</h1>
                <li>go for a walk with Volt 3 times a day</li>
                <li>studying JS</li>
                <li>visit driving classes</li>
                <li>psychotherapy</li>
                <li>meeting with a friend</li>
            </ul>`);
    break;

    case 3:
        document.write(
            `<ul>
                <h1>Wednesday</h1>
                <li>go for a walk with Volt 3 times a day</li>
                <li>studying JS</li>
                <li>Power girls training in the gym</li>
            </ul>`);
    break;

    case 4:
        document.write(
            `<ul>
                <h1>Thursday</h1>
                <li>go for a walk with Volt 3 times a day</li>
                <li>studying JS</li>
                <li>execute a home task with zoopsychologist because of Volt's separation anxiety</li>
            </ul>`);
    break;

    case 5:
        document.write(
            `<ul>
                <h1>Friday</h1>
                <li>go for a walk with Volt 3 times a day</li>
                <li>studying JS</li>
                <li>Boxing training in the gym with a friend</li>
                <li>going to the cafe with a friend after boxing</li>
            </ul>`);
    break;

    case 6:
        document.write(
            `<ul>
                <h1>Saturday</h1>
                <li>go for a walk with Volt 3 times a day</li>
                <li>studying JS</li>
                <li>cleaning the flat</li>
                <li>reading a book</li>
            </ul>`);
    break;

    case 7:
        document.write(
            `<ul>
                <h1>Sunday</h1>
                <li>go for a walk with Volt 3 times a day</li>
                <li>studying JS</li>
                <li>Power training in the gym</li>
                <li>visiting parents</li>
                <li>reading a book</li>
            </ul>`);
    break;

    default:
        document.write('please enter the correct value');
}