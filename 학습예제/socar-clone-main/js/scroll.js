const adventage = document.getElementsByClassName('advantage');

for(let j = 0 ; j < adventage.length ; j ++) {
    for(let i = 0 ; i < adventage[0].childElementCount ; i ++) {

        const 대상 = adventage[j].children[i];

        대상.classList.add('scroll-inter')

        window.addEventListener('scroll', () =>{
            if(대상.getBoundingClientRect().top - window.innerHeight < 0 ) {
                대상.classList.add('active');
            }else {
                대상.classList.remove("active");
            }
        })
    }
}




