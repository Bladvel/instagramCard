// Functions


function createNode(node) {
    let element = document.createElement(node);
    return element;
}

function appendNode(parent, element) {
    parent.appendChild(element);
}


// image fetching through API example
fetch('https://picsum.photos/v2/list?limit=3').then((response) =>{
    return response.json();
}).then((responseJson) =>{
    console.log(responseJson)
    console.log(responseJson[0].download_url);

    let father = document.querySelector('#img1');
    let imgContainer = createNode('img')
    imgContainer.setAttribute('src',`${responseJson[0].download_url}`)
    imgContainer.setAttribute('class','swiperSize-img')
    appendNode(father,imgContainer);
});

// DISCLAIMER

// I didn't use the fetching method for all the images because the swiper breaks at the start of the loop going to the right


// heart button selection

document.addEventListener('DOMContentLoaded', function () {
    var heartButton = document.getElementById('heart-button');
    heartButton.addEventListener('click', function () {
        window.lb = heartButton;
        heartButton.classList.toggle('selected');
    });
}, false);

//   swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//   comment section

const form = document.querySelector('#form');

function dataHandler(element) {
    element.preventDefault();
    new FormData(form);
}

form.addEventListener('submit', dataHandler);
form.addEventListener('formdata', (element) => {
    let data = element.target.newComment.value;
    if(data != ''){
        let comment = document.querySelector('.comments');
        let itemContainer = createNode('div');
        itemContainer.innerHTML = `
                            <p class="comment-text my-22"><span class="comment-name">Comment</span> ${data} </p>
                        `
        appendNode(comment, itemContainer);
    }

    
});