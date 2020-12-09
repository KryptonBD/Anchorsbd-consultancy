function Slider(slider) {
    //checking if it's valid slider
    if (!(slider instanceof Element)) {
        throw new Error("Invalid or No Slider");
    }

    //Select element from Slider
    this.slides = slider.querySelector('.slides');
    this.slider = slider;
    const prevBtn = slider.querySelector(".goToPrev");
    const nextBtn = slider.querySelector(".goToNext");

    //When slider created run the below methods
    this.startSlider();
    this.applyClasses();

    //Event Listener
    prevBtn.addEventListener('click', this.move.bind(this, "back"));
    nextBtn.addEventListener('click', this.move.bind(this, "forward"));
    setInterval(()=>{
        this.move("forward")
    }, 10000);
}

/**
 * Initializing Slider current, previous, next
 */
Slider.prototype.startSlider = function() {
    this.current = this.slider.querySelector(".slide--current") || this.slides.firstElementChild;
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
}

/**
 * Applying Classes for Prev Next current 
*/
Slider.prototype.applyClasses = function() {
    this.current.classList.add("slide--current");
    this.prev.classList.add("slide--prev");
    this.next.classList.add("slide--next");
}

/** 
    * Moving Direction
    * @direction either "back" or anything for forward
*/
Slider.prototype.move = function(directon) {
    //Removing Classes
    const classes = ["slide--prev", "slide--current", "slide--next"];
    this.prev.classList.remove(...classes);
    this.current.classList.remove(...classes);
    this.next.classList.remove(...classes);

    //Reassigning Current, previous, next slides
    if (directon === 'back') {
        [this.prev, this.current, this.next] = [this.prev.previousElementSibling || this.slides.lastElementChild, this.prev, this.current];
    } else {
        [this.prev, this.current, this.next] = [this.current, this.next, this.next.nextElementSibling || this.slides.firstElementChild];
    }

    this.applyClasses();
}

const mySlider = new Slider(document.querySelector('.k-slider'));

