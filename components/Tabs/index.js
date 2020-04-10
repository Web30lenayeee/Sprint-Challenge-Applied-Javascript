// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


axios
        .get('https://lambda-times-backend.herokuapp.com/topics')
        .then(res => {
                const topics= document.querySelector('.topics');
                const topico= res.data.topics;   //destructure
                // console.log(topico);

                topico.forEach( elemento => {
                        topics.appendChild(createTab(elemento) );
                        // console.log(elemento);
                })//end foreach
                // console.log(res);
        })
        .catch(err => {
                console.log('Error: ', err);
        })

function createTab(topic){
        //created elements
        const tab= document.createElement('div');

        //classes addeddddd
        tab.classList.add('tab');

        //content added
        tab.textContent= topic;

        return tab;
}//end function