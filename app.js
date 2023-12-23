const reviews = [
    {
        id: 1,
        name: 'Anna Koto',
        job: 'accountant',
        title: 'Wonderful Experience',
        img: 'images/alex-starnes-PK_t0Lrh7MM-unsplash.jpg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 2,
        name: 'Will Anderson',
        job: 'buisness owner',
        title: 'Nice Relaxing Spa',
        img: 'images/philipp-wuthrich-5n3JP9WAJTs-unsplash.jpg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 3,
        name: 'Mateo Urdiales',
        job: 'product manager',
        title: 'Great Service, Awesome Amenitites',
        img: 'images/jacinto-diego-_upgGOuAOYs-unsplash.jpg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'Sarah Forbes',
        job: 'beauty blogger',
        title: 'Frequent Visitor',
        img: 'images/pexels-maria-orlova-4946942.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
  ];
//initialize your variables

const image = document.getElementById('person-img');
const identity = document.getElementById('author');
const job = document.getElementById('job');
const desc = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let count = 0;

function showPerson(array) {
  const update = reviews[count];
  image.src = update.img;
  identity.textContent = update.name;
  job.textContent = update.job;
  desc.textContent = update.text;
}

nextBtn.addEventListener('click', () => {
  count++;
  if (count > reviews.length - 1) {
    count = 0;
  }
  showPerson();
});

prevBtn.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = reviews.length - 1;
  }
  showPerson();
});


randomBtn.addEventListener('click', function() {
  count = Math.floor(Math.random() * reviews.length)
  showPerson();
});


window.addEventListener('DOMContentLoaded', () => {
  showPerson();

})