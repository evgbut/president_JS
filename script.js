'use strict';

window.addEventListener('DOMContentLoaded',
function() {

    // Popup

let over = document.getElementsByClassName('overlay')[0],
    main = document.getElementsByClassName('main')[0],
    custom = document.getElementsByClassName('custom')[0];

//console.log(over);
//console.log(main);


over.addEventListener('click', function() {
    over.style.display = "none";
    main.style.display = "none";
    custom.style.display = "flex";
});

// Customization
let custom_block = document.getElementsByClassName('custom')[0];
let custom_info = document.querySelector('.custom-info');
let custom_char = document.querySelector('.custom-char');
let custom_style = document.querySelector('.custom-style');
let name_input = document.getElementById('name');
let age_input = document.getElementById('age');
/* let male = document.getElementById('male');
let female = document.getElementById('female'); */
let pol_views_input = document.getElementById('select');
let biography_input = document.getElementById('bio');
let sex = "male";

//console.log(custom);
//console.log(custom_info);
//console.log(custom_char);
//console.log(custom_style);

custom_info.style.display = "block";
custom_char.style.display = "block";
custom_style.style.display = "block";

const ready = document.getElementById("ready");
let name, age, pol_views, biography;
 

let person_skin = document.getElementById("person-skin");
let person_clothes = document.getElementById("person-clothes");
let person_hair = document.getElementById("person-hair");
let person_shoes = document.getElementsByClassName("person-shoes")[0];

let hair_style = document.getElementsByClassName("hair-style");
let clothes_style = document.getElementsByClassName("clothes-style");

//console.log(person_skin);
//console.log(person_clothes);
//console.log(person_hair);
//console.log(person_shoes);

//console.log("hs", hair_style);

customInfo();
function customInfo() {
    name = name_input.value;
    age = age_input.value;

let radios = document.getElementsByName("sex");
//console.log(radios);   
let radio_male = radios[0];
let radio_female = radios[1];

  radio_male.addEventListener("click", () => {
    radio_female.removeAttribute("checked"); 
    if (radio_female.checked == false) {
     radio_male.setAttribute("checked", "checked")
    }
    sex = "male";
    customStyle(sex);
  });  

 radio_female.addEventListener("click", () => {
     radio_male.removeAttribute("checked"); 
       if (radio_male.checked == false) {
        radio_female.setAttribute("checked", "checked");
        }
        sex = "female";
        customStyle(sex);
  });

    pol_views = pol_views_input.value;
//console.log(pol_views); 

    biography = biography_input.value;

return name, age, sex, pol_views, biography;
//console.log(sex);
};

// Slider - president
  
function showSlides_Skin(slides, prev, next, m, f) {
 let n = 1;    
    showSlides(n);
    
   function showSlides(n) {
    
    let slideIndex = n;
   
// console.log(n, slideIndex, slides);
     
    for( let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    };
//console.log(slideIndex); 
    slides[slideIndex - 1].style.display = 'block';
 //console.log(slides);
   
    customCandidate(slideIndex, m, f);
}; 
    
    prev.addEventListener('click', function() {
    //    console.log(slides);
    if(n <= slides.length) {n = n - 1};
    if(n < 1) {n = slides.length};
    if(m === 1 || f === 1) { 
    showSlides(n);
    }
    });
    
    next.addEventListener('click', function() {
    //    console.log(slides);
    if(n < slides.length) {n = n + 1} else {n = 1};
    if( m === 1 || f === 1) {
    // console.log(slides, m, f);   
    showSlides(n);
    }
    });
    
  };

  function showSlides_Hair(sex, slides, prev, next, m, f) {
      
    let n = 1;    
       showSlides(n);
       
      function showSlides(n) {
// console.log(sex, m, f, slides);      
       let slideIndex = n;
      
   // console.log(n, slideIndex, slides);
        
       for( let i = 0; i < slides.length; i++) {
           slides[i].style.display = 'none';
       };
   //console.log(slideIndex); 
       slides[slideIndex - 1].style.display = 'block';
    //console.log(slides);
      
       customCandidate(slideIndex, m, f);
   }; 
       
       prev.addEventListener('click', function() {
       //    console.log(slides);
       if(n <= slides.length) {n = n - 1};
       if(n < 1) {n = slides.length};
       if(sex === "male") {
//        console.log(slides, m, f);
         hair_style[3].style.display = 'none';
         hair_style[4].style.display = 'none';
         hair_style[5].style.display = 'none';
        showSlides(n); 
       }
              
       if(sex === "female") {
//        console.log(slides, m, f); 
        hair_style[0].style.display = 'none';
        hair_style[1].style.display = 'none';
        hair_style[2].style.display = 'none';
        showSlides(n);
       }
       showSlides(n);
       
      });
       
       next.addEventListener('click', function() {
//           console.log(m, f, slides);
       if(n < slides.length) {n = n + 1} else {n = 1}
//      console.log(sex, slides);
       
       if(sex === "male") {
 //       console.log(slides, m, f);
         hair_style[3].style.display = 'none';
         hair_style[4].style.display = 'none';
         hair_style[5].style.display = 'none';
        showSlides(n); 
       }
              
       if(sex === "female") {
//        console.log(slides, m, f); 
        hair_style[0].style.display = 'none';
        hair_style[1].style.display = 'none';
        hair_style[2].style.display = 'none';
        showSlides(n);
       }
       

       // console.log(slides, m, f);   
    //   showSlides(n);
       
      });
       
     };
     function showSlides_Clothes(sex, slides, prev, next, m, f) {
      
        let n = 1;    
           showSlides(n);
           
          function showSlides(n) {
//     console.log(sex, m, f, slides);      
           let slideIndex = n;
          
       // console.log(n, slideIndex, slides);
            
           for( let i = 0; i < slides.length; i++) {
               slides[i].style.display = 'none';
           };
       //console.log(slideIndex); 
           slides[slideIndex - 1].style.display = 'block';
        //console.log(slides);
          
           customCandidate(slideIndex, m, f);
       }; 
           
           prev.addEventListener('click', function() {
           //    console.log(slides);
           if(n <= slides.length) {n = n - 1};
           if(n < 1) {n = slides.length};
           if(sex === "male") {
//            console.log(slides, m, f);
             clothes_style[3].style.display = 'none';
             clothes_style[4].style.display = 'none';
             clothes_style[5].style.display = 'none';
            showSlides(n); 
           }
                  
           if(sex === "female") {
//            console.log(slides, m, f); 
            clothes_style[0].style.display = 'none';
            clothes_style[1].style.display = 'none';
            clothes_style[2].style.display = 'none';
            showSlides(n);
           }
           showSlides(n);
           
          });
           
           next.addEventListener('click', function() {
 //              console.log(m, f, slides);
           if(n < slides.length) {n = n + 1} else {n = 1}
//           console.log(sex, slides);
           
           if(sex === "male") {
//            console.log(slides, m, f);
             clothes_style[3].style.display = 'none';
             clothes_style[4].style.display = 'none';
             clothes_style[5].style.display = 'none';
            showSlides(n); 
           }
                  
           if(sex === "female") {
//            console.log(slides, m, f); 
            clothes_style[0].style.display = 'none';
            clothes_style[1].style.display = 'none';
            clothes_style[2].style.display = 'none';
            showSlides(n);
           }
           
    
           // console.log(slides, m, f);   
        //   showSlides(n);
           
          });
           
         };     
function customCandidate(slideIndex, m, f) {
   
 //   console.log(slideIndex, m, f);

 if(m === 1) {
 
    switch(slideIndex) {
      case 1: 
       person_skin.style.background = 'url("./img/skin/skin-1.png") center no-repeat';
       person_skin.style.backgroundSize = "cover"; 
       break;
      case 2:
       person_skin.style.background = 'url("./img/skin/skin-2.png") center no-repeat';
       person_skin.style.backgroundSize = "cover";
       break;
      case 3:
       person_skin.style.background = 'url("./img/skin/skin-3.png") center no-repeat';
       person_skin.style.backgroundSize = "cover";
       break;
    }  
 }

 if(m === 2) {
 
    switch(slideIndex) {
      case 1: 
       person_hair.style.background = 'url("./img/hair/slide/hair-1.png") center no-repeat'; 
       person_hair.style.backgroundSize = '40%';
       person_hair.style.marginTop = '-175px';
       break;
      case 2:
       person_hair.style.background = 'url("./img/hair/slide/hair-2.png") center no-repeat';
       person_hair.style.backgroundSize = '40%';
       person_hair.style.marginTop = '-175px';
       break;
      case 3:
       person_hair.style.background = 'url("./img/hair/slide/hair-3.png") center no-repeat';
       person_hair.style.backgroundSize = '40%';
       person_hair.style.marginTop = '-175px';
       break;
    }  
 }

 if(m === 3) {
 
    switch(slideIndex) {
      case 1: 
       person_clothes.style.background = 'url("./img/clothes/slide/clothes-1.png") center no-repeat'; 
       person_clothes.style.backgroundSize = '110%';
       person_clothes.style.marginTop = '70px';
       break;
      case 2:
       person_clothes.style.background = 'url("./img/clothes/slide/clothes-2.png") center no-repeat';
       person_clothes.style.backgroundSize = '110%';
       person_clothes.style.marginTop = '70px';
       break;
      case 3:
       person_clothes.style.background = 'url("./img/clothes/slide/clothes-3.png") center no-repeat';
       person_clothes.style.backgroundSize = '110%';
       person_clothes.style.marginTop = '70px';
       break;
    }  
 }

 if(f === 1) {
 
    switch(slideIndex) {
      case 1: 
       person_skin.style.background = 'url("./img/skin/skin-4.png") center no-repeat';
       person_skin.style.backgroundSize = "cover";
       break;
      case 2:
       person_skin.style.background = 'url("./img/skin/skin-5.png") center no-repeat';
       person_skin.style.backgroundSize = "cover";
       break;
      case 3:
       person_skin.style.background = 'url("./img/skin/skin-6.png") center no-repeat';
       person_skin.style.backgroundSize = "cover";
       break;
    }  
 }

 if(f === 2) {
 
    switch(slideIndex) {
      case 1: 
       person_hair.style.background = 'url("./img/hair/slide/hair-4.png") center no-repeat';
       person_hair.style.backgroundSize = "40%"; 
       person_hair.style.marginTop = '-165px';
       break;
      case 2:
       person_hair.style.background = 'url("./img/hair/slide/hair-5.png") center no-repeat';
       person_hair.style.backgroundSize = "40%"; 
       person_hair.style.marginTop = '-165px';
       break;
      case 3:
       person_hair.style.background = 'url("./img/hair/slide/hair-6.png") center no-repeat';
       person_hair.style.backgroundSize = "40%"; 
       person_hair.style.marginTop = '-165px';
       break;
    }  
 }

 if(f === 3) {
 
    switch(slideIndex) {
      case 1: 
       person_clothes.style.background = 'url("./img/clothes/slide/clothes-4.png") center no-repeat';
       person_clothes.style.backgroundSize = "90%"; 
       person_clothes.style.marginTop = '78px';
       break;
      case 2:
       person_clothes.style.background = 'url("./img/clothes/slide/clothes-5.png") center no-repeat';
       person_clothes.style.backgroundSize = "89%"; 
       person_clothes.style.marginTop = '-1px';
       break;
      case 3:
       person_clothes.style.background = 'url("./img/clothes/slide/clothes-6.png") center no-repeat';
       person_clothes.style.backgroundSize = "61%"; 
       person_clothes.style.marginTop = '23px';
       break;
    }  
 }
  
}

customStyle(sex);
function customStyle(sex) {
  
// console.log(sex);

customSkin(sex);
    function customSkin(sex) {
let m1, f1;
    
 let elems_skin = document.getElementsByClassName('skin')[0]; 
 let childs = elems_skin.childNodes;   
 let prev1 = childs[1];
 let next1 = childs[9];
// console.log(prev, next);
    
 let slides1 = document.getElementsByClassName('skin-color');
// console.log(slides1);  
    if(sex === "male") {
    m1 = 1; // индекс для male
    f1 = 0;
    
    showSlides_Skin(slides1, prev1, next1, m1, f1);
  //  console.log(slideIndex);
    } else if(sex === "female") {
        f1 = 1;   // индекс для female 
        m1 = 0;
        
        showSlides_Skin(slides1, prev1, next1, m1, f1);
 //   console.log(slideIndex);
    }
   
    };
 
customHair(sex);   
    function customHair(sex) {
// 
//  console.log(sex);

let m2, f2, slides2m, slides2f;             
 let elems_hair = document.getElementsByClassName('hair')[0]; 

 let childs = elems_hair.childNodes;   
 let prev2 = childs[1];
 let next2 = childs[15];
// console.log(elems_hair);
 //console.log(childs);
// console.log(prev2, next2);

let slides2 = document.getElementsByClassName('hair-style'); 
//console.log("aaa", slides2.length, slides2);
for( let i = 0; i < slides2.length; i++) {
    slides2[i].style.display = 'none';
};
        if(sex === "male") {
        m2 = 2; // индекс для male
        f2 = 0;
     slides2m = [slides2[0], slides2[1], slides2[2]];
//        console.log("2m", slides2m); 
        showSlides_Hair(sex, slides2m, prev2, next2, m2, f2);

        } else if(sex === "female") {
            f2 = 2;   // индекс для female 
            m2 = 0;
     slides2f = [slides2[3], slides2[4], slides2[5]]; 
//    console.log("fff", slides2f);
    
       showSlides_Hair(sex, slides2f, prev2, next2, m2, f2);
     //   console.log(slideIndex);
        }
         
    };

customClothes(sex); 
function customClothes(sex) {
    // 
//      console.log(sex);
    
    let m3, f3, slides3m, slides3f;             
     let elems_clothes = document.getElementsByClassName('clothes')[0]; 
    
     let childs3 = elems_clothes.childNodes;   
     let prev3 = childs3[1];
     let next3 = childs3[15];
//     console.log(elems_clothes);
     //console.log(childs3);
//     console.log(prev3, next3);
    
    let slides3 = document.getElementsByClassName('clothes-style'); 
//    console.log("aaa", slides3.length, slides3f);
    for( let i = 0; i < slides3.length; i++) {
        slides3[i].style.display = 'none';
    };
            if(sex === "male") {
            m3 = 3; // индекс для male
            f3 = 0;
         slides3m = [slides3[0], slides3[1], slides3[2]];
//            console.log("3m", slides3m); 
            showSlides_Clothes(sex, slides3m, prev3, next3, m3, f3);
    
            } else if(sex === "female") {
                f3 = 3;   // индекс для female 
                m3 = 0;
         slides3f = [slides3[3], slides3[4], slides3[5]]; 
//        console.log("fff", slides3f);
        
           showSlides_Clothes(sex, slides3f, prev3, next3, m3, f3);
         //   console.log(slideIndex);
            }
             
        };
};

 

ready.addEventListener("click", () => {
    console.log("info-атрибуты нашего кандидата готовы!");
customInfo();
//console.log(name, age, sex, pol_views);
//console.log(biography);   

let candidate = {
    name: name,
    age: age,
    sex: sex,
    pol_views: pol_views,
    biography: biography
}
  console.log(candidate);
  
  custom_block.style.display = "none";
//console.log(custom_block);
  main.style.display = "block"; 

  let main_cards_item = document.getElementsByClassName('main-cards-item')[1];
console.log(main_cards_item);

let custom_candidate = main_cards_item.cloneNode(true);
console.log(custom_candidate);

main_cards_item.after(custom_candidate);




////////////
//return candidate;
}); 

});
