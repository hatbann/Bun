const openingBtn = $('#openingBtn');
const selectbtn = $('#selectbtn');
const restartBtn = $('#restartBtn');
const drinkBtn = $('');
let username;
let drink;

//이름 넘기기
openingBtn.click(function () {
  username = $('#nameinput').val();
  drink = $('#drink').val();
  console.log(drink);
  localStorage.setItem('username', JSON.stringify(username));
  localStorage.setItem('drink', JSON.stringify(drink));

  if (drink === '0') {
    location.replace('./coke.html');
  } else if (drink === '1') {
    location.replace('./sprite.html');
  } else if (drink === '2') {
    location.replace('./fanta.html');
  } else if (drink === '3') {
    location.replace('./water.html');
  }
});

selectbtn.click(function () {
  let animal = $('#animal').val();
  let food = $('#food').val();
  let season = $('#season').val();
  let color = $('#color').val();
  localStorage.setItem('animal', JSON.stringify(animal));
  localStorage.setItem('food', JSON.stringify(food));
  localStorage.setItem('color', JSON.stringify(color));
  localStorage.setItem('season', JSON.stringify(season));
  location.replace('./bunpage2.html');
});


function reset(){
  localStorage.clear();
}

function changeSelect() {
  let drink = document.getElementById('drink');
  let btn = document.getElementById('openingBtn');
  let drinkVal = drink.options[drink.selectedIndex].value;
  if (Number(drinkVal) === 0) {
    drink.className = 'coke';
    btn.className = 'coke';
  } else if (Number(drinkVal) === 1) {
    console.log('hrerx');
    drink.className = 'sprite';
    btn.className = 'sprite';
  } else if (Number(drinkVal) === 2) {
    drink.className = 'fanta';
    btn.className = 'fanta';
  } else if (Number(drinkVal) === 3) {
    drink.className = 'water';
    btn.className = 'water';
  }
}

$().ready(function () {
  $('#info1').click(function () {
    Swal.fire({
      title: 'Ear',
      text: '최신 트렌드를 누구보다 빠르게 캐치하는 고성능 초정밀 센서를 탑재해 이제 당신도 뒤쳐지지 않는 센스를 겸비할 수 있습니다. 평소 유행에 뒤쳐지는 기분이 들었다면 파우더 필터를 경험해보세요.',
      imageUrl: 'https://ifh.cc/g/O0GJ0h.png',
      imageWidth: 270,
      confirmButtonColor: '#4868A3',
      imageHeight: 270,
      imageAlt: 'Custom image',
    });
  });
  $('#info2').click(function () {
    Swal.fire({
      title: 'Eye',
      text: '지루할때 무엇을 봐야할 지 모르시겠다면 파우더 필터가 볼거리를 추천해드립니다. 요즘 유행하는 쇼츠, 틱톡, 릴스만 골라서 당신의 취향을 만들어 드립니다. ',
      imageUrl: 'https://ifh.cc/g/ZhqBxV.png',
      imageWidth: 270,
      imageHeight: 270,
      confirmButtonColor: '#4868A3',
      imageAlt: 'Custom image',
    });
  });
  $('#info3').click(function () {
    Swal.fire({
      title: 'Filter',
      text: '아직까지 당신이 무엇을 좋아하시는지 헷갈린다면 파우더 필터의 데이터 셋으로 파악해보세요. 파우더 필터의 알고리즘은 사람들 사이에서 가장 유행한는 음악, 영화, 음식 등을 수집해서 당신의 취향으로 만들어드립니다',
      imageUrl: 'https://ifh.cc/g/skJZkw.png',
      imageWidth: 270,
      imageHeight: 270,
      confirmButtonColor: '#4868A3',
      imageAlt: 'Custom image',
    });
  });
});

function enterPage(){
  location.replace('./bun.html');
}

function goIntro(){
  reset();
  location.replace('./bunIntro.html');
}

$('#star').click(function(e){
  let star = $('#star');
  let xBtn = $('#xBtn');
  let msg = $('#messege');

  star.addClass('transparent');
  xBtn.removeClass('transparent');
  msg.removeClass('transparent');
});

$('#xBtn').click(function(e){
  let star = $('#star');
  let xBtn = $('#xBtn');
  let msg = $('#messege');

  star.removeClass('transparent');
  xBtn.addClass('transparent');
  msg.addClass('transparent');
})
