document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: 'img/black g shock.jpg', title: 'Black G Shock', description: "A stylish black G Shock watch." },
        { src: 'img/black shoe 1.jpg', title: 'Black Shoe 1', description: "Classic black shoe with a sleek design." },
        { src: 'img/black shoe 4.jpg', title: 'Black Shoe 4', description: "Stylish and comfortable black shoe." },
        { src: 'img/black shoe 5.jpg', title: 'Black Shoe 5', description: "Premium quality black shoe for formal wear." },
        { src: 'img/black shoe 6.jpg', title: 'Black Shoe 6', description: "Elegant black shoe for all occasions." },
        { src: 'img/black shoe 7.jpg', title: 'Black Shoe 7', description: "Perfect black shoe for casual outfits." },
        { src: 'img/black shoe.jpg', title: 'Black Shoe', description: "Timeless black shoe with a modern touch." },
        { src: 'img/black show 2.jpg', title: 'Black Show 2', description: "Stylish black show." },
        { src: 'img/black show 3.jpg', title: 'Black Show 3', description: "Comfortable black show." },
        { src: 'img/blue g shoxk.jpg', title: 'Blue G Shoxk', description: "Sporty blue G Shock watch." },
        { src: 'img/blue shoe.jpg', title: 'Blue Shoe', description: "Vibrant blue shoe for a stylish look." },
        { src: 'img/brown shoe 1.jpg', title: 'Brown Shoe 1', description: "Classic brown shoe with durability." },
        { src: 'img/brown shoe 2.jpg', title: 'Brown Shoe 2', description: "Rich brown shoe for formal and casual use." },
        { src: 'img/brown shoe 3.jpg', title: 'Brown Shoe 3', description: "Trendy brown shoe with a sleek design." },
        { src: 'img/brown shoe 5.jpg', title: 'Brown Shoe 5', description: "Stylish brown shoe." },
        { src: 'img/brown shoe 6.jpg', title: 'Brown Shoe 6', description: "Comfortable brown shoe." },
        { src: 'img/brown shoe 8.jpg', title: 'Brown Shoe 8', description: "Elegant brown shoe." },
        { src: 'img/brown shoe.jpg', title: 'Brown Shoe', description: "Classic brown shoe." },
        { src: 'img/brown shou 4.jpg', title: 'Brown Shou 4', description: "Stylish brown shou." },
        { src: 'img/butterfly.jpg', title: 'Butterfly', description: "A delicate butterfly captured in nature." },
        { src: 'img/cherry.jpg', title: 'Cherry', description: "Fresh and vibrant cherries." },
        { src: 'img/cream show.jpg', title: 'Cream Show', description: "Stylish cream show." },
        { src: 'img/darck blue shoe.jpg', title: 'Dark Blue Shoe', description: "Elegant dark blue shoe." },
        { src: 'img/fox.jpg', title: 'Fox', description: "A beautiful fox in nature." },
        { src: 'img/gold 1.jpg', title: 'Gold 1', description: "Shiny gold accessory." },
        { src: 'img/gold g shock.jpg', title: 'Gold G Shock', description: "Luxury gold G Shock watch." },
        { src: 'img/gold.jpg', title: 'Gold', description: "Shiny gold accessory for luxury lovers." },
        { src: 'img/green shoe.jpg', title: 'Green Shoe', description: "Stylish green shoe for a unique look." },
        { src: 'img/logo.png', title: 'Logo', description: "Company logo." },
        { src: 'img/pink shoe.jpg', title: 'Pink Shoe', description: "Vibrant pink shoe." },
        { src: 'img/red shoe 1.jpg', title: 'Red Shoe 1', description: "Bright red shoe for a bold fashion statement." },
        { src: 'img/red shoe 2.jpg', title: 'Red Shoe 2', description: "Stylish red shoe." },
        { src: 'img/red shoe.jpg', title: 'Red Shoe', description: "Classic red shoe." },
        { src: 'img/silver.jpg', title: 'Silver', description: "Shiny silver accessory." },
        { src: 'img/stick.jpg', title: 'Stick', description: "A simple stick." },
        { src: 'img/tiger show.jpg', title: 'Tiger Show', description: "A majestic tiger." },
        { src: 'img/tigerr shoe 1.jpg', title: 'Tigerr Shoe 1', description: "Stylish tigerr shoe." },
        { src: 'img/white shoe 3.jpg', title: 'White Shoe 3', description: "Elegant white shoe." },
        { src: 'img/white shoe.jpg', title: 'White Shoe', description: "Classic white shoe." },
        { src: 'img/white show 1.jpg', title: 'White Show 1', description: "Stylish white show." },
        { src: 'img/yellow butterfly].jpg', title: 'Yellow Butterfly', description: "A beautiful yellow butterfly." },
        { src: 'img/yellow g shock.jpg', title: 'Yellow G Shock', description: "Sporty yellow G Shock watch." },
        { src: 'img/yellow shoe.jpg', title: 'Yellow Shoe', description: "Cheerful yellow shoe for a pop of color." }
    ];

 const thumbnailContainer = document.getElementById("thumbnail-container");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxDescription = document.getElementById("lightbox-description");
    const closeBtn = document.getElementById("close-lightbox");
    const prevBtn = document.getElementById("prev-lightbox");
    const nextBtn = document.getElementById("next-lightbox");

    let currentIndex = 0;

    // Populate Thumbnails
    images.forEach((image, index) => {
        const thumbnail = document.createElement("img");
        thumbnail.src = image.src;
        thumbnail.alt = image.title;
        thumbnail.classList.add("col-4", "thumbnail", "mb-3");
        thumbnail.style.cursor = "pointer";

        // Handle missing images by using onerror event
        thumbnail.onerror = function () {
            console.log(`Image not found: ${image.src}`);
            thumbnail.src = "img/placeholder.jpg"; // Use a fallback image or display a placeholder
        };

        // Open Lightbox on Click
        thumbnail.addEventListener("click", function () {
            openLightbox(index);
        });

        thumbnailContainer.appendChild(thumbnail);
    });

    function openLightbox(index) {
        currentIndex = index;
        lightboxImage.src = images[index].src;
        lightboxTitle.textContent = images[index].title;
        lightboxDescription.textContent = images[index].description;
        lightbox.style.display = "flex";
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
    }

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Event Listeners for Buttons
    closeBtn.addEventListener("click", closeLightbox);
    nextBtn.addEventListener("click", showNextImage);
    prevBtn.addEventListener("click", showPrevImage);

    // Keyboard Support
    document.addEventListener("keydown", function (e) {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowRight") showNextImage();
            if (e.key === "ArrowLeft") showPrevImage();
            if (e.key === "Escape") closeLightbox();
        }
    });
});
