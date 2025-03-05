// Array of quotes with corresponding images
const quotesWithImages = [
    {
        quote: "You can't have flowers without rain. - Brent Faiyaz",
        image: 'images/brent1.jpg'
    },
    {
        quote: "Love is just a feeling, you can make it if you want to. - Brent Faiyaz",
        image: 'images/brent2.jpg'
    },
    {
        quote: "You live and you learn, but some people just live. - Brent Faiyaz",
        image: 'images/brent3.jpg'
    },
    {
        quote: "Everybody want loyalty, consistency, and somebody who won't quit. - Brent Faiyaz",
        image: 'images/brent4.jpg'
    },
    {
        quote: "They sleepin' on me, I'ma wake 'em up. - Brent Faiyaz",
        image: 'images/brent5.jpg'
    },
    {
        quote: "I'm not what you need, but I am what you want. - Brent Faiyaz",
        image: 'images/brent6.jpg'
    },
    {
        quote: "They don't wanna give you time to heal, they just wanna bleed you dry, for real. - Brent Faiyaz",
        image: 'images/brent7.jpg'
    },
    {
        quote: "I still got demons from my younger days. I wish I could shake 'em, but they follow me - Brent Faiyaz",
        image: 'images/brent8.jpg'
    }
];

const quoteDisplay = document.getElementById("quoteDisplay");
const quoteButton = document.getElementById("new-quote");

// Event listener to the button to generate a new quote when clicked
quoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotesWithImages.length);
    const selectedQuote = quotesWithImages[randomIndex];
    quoteDisplay.textContent = selectedQuote.quote;
    document.body.style.backgroundImage = `url('${selectedQuote.image}')`;
});
