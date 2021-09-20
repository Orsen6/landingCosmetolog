"use strict";


    // document.getElementsByClassName('blog-inner_button').onclick = function(){
    //     document.getElementsByClassName(this).classList.toggle('button--active');
    // }

let tabNavs = document.querySelectorAll(".blog-inner_button");
let tabPanes = document.querySelectorAll(".blog-inner_item");

for (let i = 0; i < tabNavs.length; i++){
    tabNavs[i].addEventListener("click", function(e){
        e.preventDefault();
        let activeTabAttr = e.target.getAttribute("data-tab");

        for (j = 0; j < tabNavs.length; j++){
            let contentAttr = tabPanes[j].getAttribute("data-tab-content");

            if(activeTabAttr === contentAttr){
                tabNavs[j].classList.add("blog-inner_button--active");
                tabPanes[j].classList.add("blog-inner_item--active");
            } else {
                tabNavs[j].classList.remove("blog-inner_button--active");
                tabPanes[j].classList.remove("blog-inner_item--active");
            }
        }
    })
}
