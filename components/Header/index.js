// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // elements created
    const header= document.createElement('div');
    const date= document.createElement('span');
    const heading= document.createElement('h1');
    const temp= document.createElement('span');

    //structure created
    header.appendChild(date);
    header.appendChild(heading);
    header.appendChild(temp);

    //classes
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //data
    date.textContent= 'MARCH 28, 2019';
    temp.textContent= '98°';
    heading.textContent= 'Lambda Times';

    return header;
}//end func


const headerCont= document.querySelector('.header-container');

headerCont.appendChild(Header());