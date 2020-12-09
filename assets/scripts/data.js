var universities = [
    {
        id: 1,
        url: "./assets/images/universities/u0.jpg",
        name: "McGill University"
    },
    {
        id: 2,
        url: "./assets/images/universities/u1.jpg",
        name: "City University London"
    },
    {
        id: 3,
        url: "./assets/images/universities/u2.png",
        name: "University of Reading"
    },
    {
        id: 4,
        url: "./assets/images/universities/u3.png",
        name: "British Columbia"
    },
    {
        id: 5,
        url: "./assets/images/universities/u4.jpg",
        name: "University of portsmouth"
    },
    {
        id: 6,
        url: "./assets/images/universities/u5.png",
        name: "University of york"
    },
    {
        id: 7,
        url: "./assets/images/universities/u6.jpg",
        name: "Coventry University"
    },
    {
        id: 8,
        url: "./assets/images/universities/u7.jpg",
        name: "London South Bank"
    }

];

const uniSlide = document.querySelector(".uni-slides");

universities.forEach((uni, index) => {
    let uniURL = uni.url;
    let uniName = uni.name;

    let uniHTML = `<div class="uni-slide"><img src="${uniURL}" alt="${uniName}"></div>`;
    uniSlide.innerHTML += uniHTML;

});