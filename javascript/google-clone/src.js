const logo = document.getElementsByClassName("logo-img");
const top_link = document.getElementsByClassName("top-link");

for(i = 0; i < 2; i++) {
    logo[i].addEventListener("click", function(evt){
        evt.target.classList.add("del-img");
        if(evt.target.id == "dark") {
            logo[0].classList.remove("del-img");
            document.body.style.backgroundColor = "white";
            document.querySelector("#search-box").classList.remove("dm-box");
            document.querySelector("#search-box").classList.add("lm-box");
            document.querySelectorAll(".top-link").forEach((ob)=>{
                ob.classList.add("light-font");
            })
            document.querySelector("#bottom").classList.remove("dm-b");
            document.querySelector("#bottom").classList.add("lm-b");
            document.querySelector("#bottom-b").classList.remove("dm-border");
            document.querySelector("#bottom-b").classList.add("lm-border");
            document.querySelectorAll(".bottom-link").forEach((ob)=>{
                ob.classList.add("lm-b");
                ob.classList.remove("dm-b");
            })
        }
        else {
            logo[1].classList.remove("del-img");
            document.body.style.backgroundColor = "#202124";
            document.querySelector("#search-box").classList.remove("lm-box");
            document.querySelector("#search-box").classList.add("dm-box");
            document.querySelectorAll(".top-link").forEach((ob)=>{
                ob.classList.remove("light-font");
            })
            document.querySelector("#bottom").classList.remove("lm-b");
            document.querySelector("#bottom").classList.add("dm-b");
            document.querySelector("#bottom-b").classList.remove("lm-border");
            document.querySelector("#bottom-b").classList.add("dm-border");
            document.querySelectorAll(".bottom-link").forEach((ob)=>{
                ob.classList.add("dm-b");
                ob.classList.remove("lm-b");
            })
        }
        
    }) 
}


/*
to show , to vanish를 정의
if문 돌려서
to show와 to vanish를 재정의

마지막에 to show는 display none을 빼고
to vanish는 display none 추가
*/