let count = 0;
let parent = document.querySelector('.continar');
async function thriukkuralapi(kural_num) {
  try {

    let data = fetch(`https://api-thirukkural.vercel.app/api?num=${kural_num}`);
    let response = await data;
    let prom = response.json();
    let output = await prom;
    let card = document.querySelector('.data-card')
    card.innerHTML = `
  <div class="tamil" style="display:none" > 
  <p>குறள்: <span>${output.number}</span></p>
  <p>குறள் பால்: <span>${output.sect_tam}</span></p>
  <p>திருக்குறள் அதிகாரம்: <span>${output.chap_tam}</span></p>
  <p>குறள் இயல்: <span>${output.chapgrp_tam}</span></p>
  <p>திருக்குறள்:</p>
  <p> <span class="line1">${output.line1}</span><p>
  <p > <span class="line1">${output.line2}</span></p>
  <p>திருக்குறள் விளக்கம் உரை: <span>${output.tam_exp}</span></p>
  </div>
  <div class="english" style="display:none" >
  <p>Thirukkural No: <span>${output.number}</span></p>
  <p>Thirukkural Sections: <span>${output.sect_eng}</span></p>
  <p>Thirukkural Chapter: <span>${output.chap_eng}</span></p>
  <p>Thirukkural Chapter Group: <span>${output.chapgrp_eng}</span></p>
  <p>Thirukkural : <span>${output.eng}</span></p>
  <p>Thirukkural Explanation: <span>${output.eng_exp}</span></p>
  </div>
  `
  }
  catch (error) {
    alert(error);
  }
}

//selected language
function selectlang() {
  let selected_language = document.querySelector('.form-select').value
  if (selected_language == 'tamil') {
    let tamil_block = document.querySelector('.tamil');
    tamil_block.style.display = "block";
  } else {
    let tamil_none = document.querySelector('.tamil');
    tamil_none.style.display = "none";
  }

  if (selected_language == 'english') {
    let english_block = document.querySelector('.english');
    english_block.style.display = "block";
  } else {
    let english_none = document.querySelector('.english');
    english_none.style.display = "none"
  }
}

//pagenation next
let next = document.querySelector('#next_page');
next.addEventListener('click', () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  for (let i of arr) {
    element_next = document.querySelector(`[for="${i}"]`);
    element_next.innerText = parseInt(element_next.innerText) + 10;
  }
})
//pagenation previous
let previous = document.querySelector('#previous_page');
previous.addEventListener('click', () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  for (let i of arr) {
    element_previous = document.querySelector(`[for="${i}"]`);
    element_previous.innerText = parseInt(element_previous.innerText) - 10;

  }
})

//create div
function create_div() {
  let data_card = document.createElement('div');
  data_card.classList.add('data-card');
  parent.append(data_card);
}
//remove div
function remove_div() {
  let card = document.querySelector('.data-card');
  card.remove();
}
//display time is 1.8s

//page number to search
function page_number(e) {
  remove_div()
  count++;
  create_div()
  thriukkuralapi(e.innerText);
  setTimeout(() => {
    selectlang()
  }, 1800)


}

//button to search
let btn = document.querySelector('.btn_search');
btn.addEventListener('click', (e) => {
  remove_div()
  count++;
  create_div()
  let button_value = document.querySelector('#thirukkural_no').value;
  thriukkuralapi(button_value);
  setTimeout(() => {
    selectlang()
  }, 1800)

})
// first time showing
if (count == 0) {
  create_div()
  thriukkuralapi(1);
  setTimeout(() => {
    selectlang()
  }, 1800)
}
