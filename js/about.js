// Loader Code Start 

window.addEventListener('load', function() {
    const loader = document.getElementById('loader-wrapper');
    //Smoothly fade out
    loader.style.opacity = '0';
    //Completely remove from layout after fade finishes
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
    });



// Loader Code End 


// Fetching Header and Footer Code Start 



document.addEventListener("DOMContentLoaded", () => {
    
    // Clean, easy async function definition
    async function loadComponent(selector, fileUrl) {
        try {
            const response = await fetch(fileUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            // Wait for the text content to arrive
            const htmlContent = await response.text();
            
            // Inject it into the page element safely
            const targetElement = document.querySelector(selector);
            if (targetElement) {
                targetElement.innerHTML = htmlContent;
            }

            // Run your scroll animation setup once header is ready
            if (selector === '#header-placeholder') {
                initHeaderScroll();
            }
            
        } catch (error) {
            console.error(`Could not load component from ${fileUrl}:`, error);
        }
    }

    // Call them cleanly line-by-line
    loadComponent('#header-placeholder', './components/header.html');
    loadComponent('#sidebar-placeholder', './components/sidebar.html');
    loadComponent('#footer-placeholder', './components/footer.html');
});



// Fetching Header and Footer Code End 


// Header Hide on Scroll Code Start 


// Wrap your scroll logic in a function so it can be called safely
function initHeaderScroll() {
    const header1 = document.getElementById("header-1");
    const header2 = document.getElementById("header-2");

    // Safety check to ensure elements exist
    if (!header1 || !header2) return;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            // We are scrolled down: Show Header 2
            header1.classList.add("hidden");
            header1.classList.remove("visible");

            header2.classList.add("visible");
            header2.classList.remove("hidden");
        } else {
            // We are back at the top (0-100px): Show Header 1
            header1.classList.add("visible");
            header1.classList.remove("hidden");

            header2.classList.add("hidden");
            header2.classList.remove("visible");
        }
    });
}


// Header Hide on Scroll Code Start 









// Moving Border Effect Code Start 



    const handleOnMouseMoveOtherEx = e => {
    const { currentTarget: target } = e;


    const rect = target.getBoundingClientRect(),

    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
    }



    for(const otherEx of document.querySelectorAll(".other-ex")) {
        otherEx.onmousemove = e => handleOnMouseMoveOtherEx(e);
    }


    // Moving Border Effect Code End 



   // For Counting Effect Start


  // For Works Counting Effect
    
    // 1. Setup the Observer Options
const observerOptions = {
    threshold: 0.2 // Starts when 20% of the element is visible
};

// 2. The Animation Function
const startCounting = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const container = entry.target;
            // Find all numbers within this specific container
            const counters = container.querySelectorAll('.num, .skill-num');

            counters.forEach((e) => {
                let start = 0;
                let end = parseInt(e.dataset.num);
                let duration = 2500; // Total time in ms
                
                // Safety check: if end is 0, don't interval
                if(end === 0) return e.textContent = 0;

                let count = setInterval(() => {
                    start++;
                    e.textContent = start;
                    if (start == end) {
                        clearInterval(count);
                    }
                }, duration / end);
            });

            // 3. Stop watching once the animation has triggered
            observer.unobserve(container);
        }
    });
};

// 4. Create the Observer
const counterObserver = new IntersectionObserver(startCounting, observerOptions);

// 5. Tell it what to watch
const workSection = document.querySelector(".work");
const skillSection = document.querySelector(".skills");

if (workSection) counterObserver.observe(workSection);
if (skillSection) counterObserver.observe(skillSection);


    // For Counting Effect End
    
    



  
    
    

// For Skills Counting Effect Start


const progressBars = document.querySelectorAll('.progress-bar div.count');

// 1. Define the "Watchman" (The Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // 2. Check if the bar is visible on screen
        if (entry.isIntersecting) {
            const bar = entry.target; // This is the specific bar that scrolled into view
            startAnimation(bar);      // Run your animation function
            observer.unobserve(bar);  // Stop watching this bar once it's started (so it doesn't repeat)
        }
    });
}, { threshold: 0.5 }); // 0.5 means start when 50% of the bar is visible

// 3. Tell the Observer which elements to watch
progressBars.forEach(bar => {
    observer.observe(bar);
});

// 4. Wrap your original logic in a function
function startAnimation(bar) {
    const target = parseInt(bar.getAttribute('data-target'));
    const span = bar.querySelector('span');
    let currentCount = 0;

    // Trigger width
    bar.style.width = target + '%';

    // Start counter
    const updateCounter = () => {
        const increment = target / 100; 
        if (currentCount < target) {
            currentCount += increment;
            span.innerText = Math.ceil(currentCount) + "%";
            requestAnimationFrame(updateCounter);
        } else {
            span.innerText = target + "%";
        }
    };
    updateCounter();
}






// For Skills Counting Effect End


// For Latest Services Info Box Start


const handleOnMouseMoveLs = e => {
    const { currentTarget: target } = e;


    const rect = target.getBoundingClientRect(),

    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
    }



    for(const Price of document.querySelectorAll(".pp-info")) {
        Price.onmousemove = e => handleOnMouseMoveLs(e);
    }




// For Latest Services Info Box End



// For Education & Experience Info Box Start


const handleOnMouseMoveEd = e => {
    const { currentTarget: target } = e;


    const rect = target.getBoundingClientRect(),

    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
    }



    for(const Ed of document.querySelectorAll(".ed-info")) {
        Ed.onmousemove = e => handleOnMouseMoveEd(e);
    }





// For Education & Experience Info Box End





// Contact Section Moving Border Effect Start


    const handleOnMouseMoveContact = e => {
    const { currentTarget: target } = e;


    const rect = target.getBoundingClientRect(),

    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
    }



    for(const contact of document.querySelectorAll(".contact")) {
        contact.onmousemove = e => handleOnMouseMoveContact(e);
    }

    // Contact Section Moving Border Effect End




