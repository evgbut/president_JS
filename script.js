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

let custom_info = document.querySelector('.custom-info');
let custom_char = document.querySelector('.custom-char');
let custom_style = document.querySelector('.custom-style');
let name_input = document.getElementById('name');
let age_input = document.getElementById('age');
let male = document.getElementById('male');
let female = document.getElementById('female');
let pol_views_input = document.getElementById('select');
let biography_input = document.getElementById('bio');
let sex = "male";
let reset_index = 0;
let name, age, pol_views, biography;

//console.log(custom);
//console.log(custom_info);
//console.log(custom_char);
//console.log(custom_style);

custom_info.style.display = "block";
custom_char.style.display = "block";
custom_style.style.display = "block";

const ready = document.getElementById("ready");
const reset = document.getElementById("reset");
const voting = document.getElementById("voting");
const crime = document.getElementById("crime");

let person_skin = document.getElementById("person-skin");
let person_clothes = document.getElementById("person-clothes");
let person_hair = document.getElementById("person-hair");
let person_shoes = document.getElementsByClassName("person-shoes")[0];

let hair_style = document.getElementsByClassName("hair-style");
let clothes_style = document.getElementsByClassName("clothes-style");

let our_candidate_image = document.getElementsByClassName('person construct')[0];


//console.log(person_skin);
//console.log(person_clothes);
//console.log(person_hair);
//console.log(person_shoes);

//console.log("hs", hair_style);

customInfo();
function customInfo() {

  if(reset_index === 1) {
//    console.log(reset_index);  
    name_input.value = "";
//    console.log(name_input.value);
      age_input.value = "";
//    console.log(age_input.value);
      pol_views_input.value = "Либеральные";
//    console.log(pol_views);  
      biography_input.value = "";
//    console.log(biography);  
  } 
      
  name_input.onchange = function() {
    name = name_input.value;
//      console.log(name);
  };

  age_input.onchange = function() {
    age = age_input.value;
//      console.log(age);
    };

  pol_views_input.onchange = function() {
    pol_views = pol_views_input.value;
//        console.log(pol_views);
    };

  biography_input.oninput = function() {
    biography = biography_input.value;
//        console.log(biography);
      };

    let radios = document.getElementsByName("sex"); 
//console.log(radios);   
 let radio_male = radios[0];
 let radio_female = radios[1]; 
//   console.log(reset_index, sex);

  


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

//   return name, age, sex, pol_views, biography;
//console.log(sex);
};

//   Slider - president
  
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
// console.log(reset_index);
   
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
//  console.log(reset_index);  
      if(reset_index === 1) {

      }


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
//console.log(reset_index);
//customInfo();
//console.log(name, age, sex, pol_views);
//console.log(biography);   
//console.log(sex);
//console.log(our_candidate_image);
  
  custom.style.display = "none";

  main.style.display = "block"; 

  let main_cards_item = document.getElementsByClassName('main-cards-item')[1];
//console.log(main_cards_item);
// Клонируем блок соперника-женщины:
let our_custom_candidate = main_cards_item.cloneNode(true);
//console.log(our_custom_candidate);

main_cards_item.after(our_custom_candidate);
//-------------------------------------
our_custom_candidate.querySelector('.name').innerHTML = name;

our_custom_candidate.querySelector('.age').innerHTML = age;

our_custom_candidate.querySelector('.sex').innerHTML = sex;

our_custom_candidate.querySelector('.views').innerHTML = pol_views;

our_custom_candidate.querySelector('.bio').innerHTML = biography;
//-------------------------------------
let candidate_photo = document.getElementsByClassName('photo-2')[1];

//console.log(castom_candidate_photo);

candidate_photo.style.display = "none";

//---
//console.log(our_candidate_image);
//---

let our_candidate_image_clone = our_candidate_image.cloneNode(true);

//console.log(our_candidate_image_clone);

let candidate_block = document.getElementsByClassName('candidate-block')[2];
//console.log(candidate_block);

let candidate_block_result = document.getElementsByClassName('result')[2];
//console.log(candidate_block_result);

candidate_block_result.before(our_candidate_image_clone);

// Поправляем вёрстку:
//------------------------
let candidate_skin = document.getElementsByClassName('person-skin')[0];
//console.log(candidate_skin);
let candidate_clothes = document.getElementsByClassName('person-clothes')[0];
//console.log(candidate_clothes);
let candidate_hair = document.getElementsByClassName('person-hair')[0];
//console.log(candidate_hair);
let candidate_shoes = document.getElementsByClassName('person-shoes')[0];
//console.log(candidate_shoes);

// console.log(sex);
our_candidate_image_clone.style.marginRight = "30px";

 if(sex === "male") {

   candidate_hair.style.backgroundSize = '33%';
   candidate_hair.style.marginTop = '-87px';
 //console.log(candidate_hair);
 
   candidate_clothes.style.backgroundSize = '93%';
   candidate_clothes.style.marginTop = '17px';
 //console.log(candidate_clothes);

}

 if(sex === "female") {

//    console.log(candidate_hair.style[0]);
    let str_hair = candidate_hair.style.backgroundImage;
//  console.log(str_hair);
//console.log(str_hair.indexOf('hair-4.png'));    

    if(str_hair.indexOf('hair-4.png') === 22) { 
        candidate_hair.style.backgroundSize = '28%';
        candidate_hair.style.marginTop = '-81px';
        //console.log(candidate_hair);
      } 
      if(str_hair.indexOf('hair-5.png') === 22) { 
        candidate_hair.style.backgroundSize = '31%';
        candidate_hair.style.marginTop = '-82px';
        //console.log(candidate_hair);
      } 
      if(str_hair.indexOf('hair-6.png') === 22) { 
        candidate_hair.style.backgroundSize = '30%';
        candidate_hair.style.marginTop = '-80px';
        //console.log(candidate_hair);
      } 
    
//  console.log(candidate_clothes.style[0]);
  let str_clothes = candidate_clothes.style.backgroundImage;
//  console.log(str_clothes);

  if(str_clothes.indexOf('clothes-4.png') === 25) { 
    candidate_clothes.style.backgroundSize = '77%';
    candidate_clothes.style.marginTop = '18px';
    //console.log(candidate_clothes);
  } 
  if(str_clothes.indexOf('clothes-5.png') === 25) { 
    candidate_clothes.style.backgroundSize = '79%';
    candidate_clothes.style.marginTop = '-13px';
    //console.log(candidate_clothes);
  } 
  if(str_clothes.indexOf('clothes-6.png') === 25) { 
    candidate_clothes.style.backgroundSize = '56%';
    candidate_clothes.style.marginTop = '-2px';
    //console.log(candidate_clothes);
  } 
}
// -------------------------------


reset.addEventListener("click", () => {
  reset_index = 1;
   main.style.display = "none";
   custom.style.display = "flex";
   our_custom_candidate.style.display = "none";
   customInfo();
   customStyle(sex);
});

// Сброс значений для голосования:  
  let result_count = document.getElementsByClassName('result-count');
//console.log(result_count);

  let progress_bar_1 = document.getElementsByClassName('progress-bar-1');
//console.log(progress_bar_1);

  let progress_bar_2 = document.getElementsByClassName('progress-bar-2');
//console.log(progress_bar_2);

   result_count[0].innerHTML = '0%';
   result_count[1].innerHTML = '0%';
   result_count[2].innerHTML = '0%';

progress_bar_1[0].style.height = '0%';
progress_bar_2[0].style.height = '0%';
progress_bar_2[1].style.height = '0%';

voting.addEventListener("click", () => {
// Расчёт случайных чисел голосования:
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
let count_1 = getRandomIntInclusive(10,50);
let count_2 = getRandomIntInclusive(20,40);
let count_3 = 100 - (count_1 + count_2);
//console.log(count_1, count_2, count_3);

   result_count[0].innerHTML = count_1 + '%';
   result_count[1].innerHTML = count_2 + '%';
   result_count[2].innerHTML = count_3 + '%';

progress_bar_1[0].style.height = count_1 + '%';
progress_bar_2[0].style.height = count_2 + '%';
progress_bar_2[1].style.height = count_3 + '%';

});

crime.addEventListener("click", () => {
// Расчёт подтасованных чисел голосования:
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
let count_1 = getRandomIntInclusive(10,50);
let count_2 = getRandomIntInclusive(20,40);
let count_3 = 100 - (count_1 + count_2);

//console.log(count_1, count_2, count_3);

let count_3_fake = Math.floor(count_3 * 1.25);
let count_1_fake = getRandomIntInclusive(10,(100 - count_3_fake)/2);;
let count_2_fake = 100 - (count_1_fake + count_3_fake);

//console.log(count_1_fake, count_2_fake, count_3_fake);

   result_count[0].innerHTML = count_1_fake + '%';
   result_count[1].innerHTML = count_2_fake + '%';
   result_count[2].innerHTML = count_3_fake + '%';

progress_bar_1[0].style.height = count_1_fake + '%';
progress_bar_2[0].style.height = count_2_fake + '%';
progress_bar_2[1].style.height = count_3_fake + '%';

});

}); 

});
