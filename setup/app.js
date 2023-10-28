// local reviews data
const reviews = [
  {
    id: 1,
    name: 'jhon smith',
    job: 'web developer',
    img: 'https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'alderson johnson',
    job: 'web designer',
    img: 'https://images.pexels.com/photos/7869562/pexels-photo-7869562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];





// select items
const image = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

      let testi = 0

      function ubahData(e) {
        const { name, job, img, text } = e

        author.textContent = name;
        job.textContent = job;
        info.textContent = text;
        image.src = img;
      }

      function nextData() {
        testi++
        if (testi >= reviews.length) {
          testi = 0
        }
        ubahData(reviews[testi])
      }

      function prevData() {
        testi--
        if (testi < 0) {
          testi = reviews.length - 1
        }
       ubahData(reviews[testi])
      }

      function allData() {
        const index = Math.floor(Math.random() * reviews.length)
        testi = index
        ubahData(reviews[testi])
      }

      document.addEventListener('DOMContentLoaded', () => {
        ubahData(reviews[testi])

        
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const randomBtn = document.querySelector('.random-btn');

        prevBtn.addEventListener('click', prevData)
        nextBtn.addEventListener('click', nextData)
        randomBtn.addEventListener('click', allData)


})



