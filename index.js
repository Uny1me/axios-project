// GET REQUEST

// 1. JQUERY 2. JAVASCRIPT
function getRes() {
    // axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/todos'
    // })
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err));

    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        // .then(res => outputTodos(res) )
        .then((res) => {
            const resLength = res.data.length;
            const userData = res.data;

            for (let i = 0; i < resLength; i++) {

                //    Create A Div Element to house looped Axios Data
                var cardDiv = document.createElement('div')
                cardDiv.classList.add('card', 'card-body', 'col-7', 'p-0', 'mt-4')

                // Create Card Header For User Id
                var cardHead = document.createElement('h5')
                cardHead.classList.add('card-header')
                cardHead.textContent = `Received From User ${[i]}`


                //    Create A Text Element and Assign Text Gotten From AXIOS Request
                var pText = document.createElement('p')
                pText.classList.add('lead', 'ml-3', 'mr-3', 'pt-3');
                pText.textContent = `${userData[i].title}`

                // Create Card Header For User Id
                var cardFoot = document.createElement('small')
                cardFoot.classList.add('card-footer', 'lead')
                cardFoot.innerHTML = `Completed: <strong>${userData[i].completed}</strong>`

                //  Appending Elements, Note the order Matters
                /*1. The Card Header to the card div*/cardDiv.appendChild(cardHead)
                /*2. The text element to the card div*/ cardDiv.appendChild(pText)
                /*3. The Card Footer to the card div*/ cardDiv.appendChild(cardFoot)
                /*4. The Card Footer to the card div*/ $('#content').append(cardDiv)
                // $('#content').html(

                //     `<div class="card col-7 p-0 mt-4">
                //     <h5 class="card-header">Received from user ${res.data[i].userId}</h5>
                //     <div class="card-body">
                //     <p class="lead" id="inner-text">The todo is ${res.data[i].title}</p>
                //     </div>
                //     <div class="card-footer lead">Completed: <b>${res.data[i].completed}</b></div>
                //     </div>
                //     `)
            }


            /*1.*/ // $('#inner-text').text(`${res.data[2].title}`)


        })
        .catch(err => console.log(err))
}
function outputTodos(res) {

}
// Usually you output res i.e. response to the console but to get data Object we use res.data
