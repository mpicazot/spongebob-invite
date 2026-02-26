document.getElementById('link').addEventListener("click", () => {
    const img = document.getElementById('img-window');
    img.classList.remove('animate');
    void img.offsetWidth;
    img.classList.add('animate');

    let audio = new Audio();
    setTimeout(()=>{
        hideItems();
        showItem("thirtyYears");
        showItem("main-picture-ty");
        audio = document.getElementById("audio1");
        audio.play();
        audio.onended = () => {
            console.log('audio ended');
            setTimeout(() => {
                audio.src = "..\\audio\\bubble.mp3";
                audio.play();
                setTimeout(() => {
                    audio.src = "..\\audio\\main.mp3";
                    audio.loop = true;
                    audio.play();
                }, 2500);
            }, 2000);
        };
    }, 900)
    
    setTimeout(() => {
        hideItems();
        showItem("main");
        showItem("main-picture-main");
       /* document.getElementById("audio2").play();*/
        tsParticles.load("tsparticles", {
            fullScreen: { enable: true },
            particles: {
                number: { value: 200 },
                shape: {
                    type: "image",
                        image: {
                            src: "img\\bubble1.png",
                            width: 50,
                            height: 50
                        }
                },
                size: {
                    value: { min: 10, max: 60 }
                },
                move: {
                    enable: true,
                    direction: "top",
                    speed: { min: 10, max: 15 },
                    random: true,
                    straight: false,
                    outModes: {
                        default: "destroy"
                    }
                },
                opacity: {
                    value: { min: 0.4, max: 1 }
                }
            },
            emitters: {
                direction: "top",
                position: {
                    x: 50,
                    y: 100
                },
                rate: {
                    delay: 4,
                    quantity: 2
                }
            }
});
    }, 6400);

});

function hideItems() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
}

function showItem(pageId) {
    // Show selected page
    document.getElementById(pageId).classList.add('active');
}

document.getElementById("scrollIndicator").addEventListener("click", () => {
    const targetSection = document.getElementById("sec-info");
    targetSection.scrollIntoView({behavior: "smooth"});
    disableScrollIndicator();
});



/*sectionMain.addEventListener("scroll", () => {
 console.log("scroll event triggered");
});*/
const indicator = document.querySelector(".scroll-indicator");

function disableScrollIndicator(){
    indicator.style.opacity = "0";
}

function enableScrollIndicator(){
    indicator.style.opacity = "1";
}

const secInfo = document.querySelectorAll("#sec-info");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        if(entry.target.id = "sec-info") disableScrollIndicator();
        console.log("Element in screen:", entry.target.id);
    }
  });
}, {
  threshold: 0.5 // 50% visible
});

secInfo.forEach(box => observer.observe(box));