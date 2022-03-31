// create a carousel for the actions
let htmlElement = document.getElementsByTagName('html');

// get the carousel items
const actions = document.getElementsByClassName('carousel-item');

const actionsList = [...actions];
const lenActions = actionsList.length;

// set the beginning one
let active = 0;

// set up or remove the carousel depending on users view width
window.onresize = () => {
  if (htmlElement[0].offsetWidth >= 754) {
    actionsList.forEach((element) => {
      element.style.display = 'block';
    });
  } else {
    updateView(active);
  }
};

// set up the carousel when the window first loads.
window.onload = () => {
  if (htmlElement[0].offsetWidth >= 768) {
    actionsList.forEach((element) => {
      element.style.display = 'block';
    });
  } else {
    updateView(active);
  }
};
// this function will handle which one is displayed.
function updateView(activeIndex) {
  // set the active one to display = block
  actionsList[activeIndex].style.display = 'block';

  //   filter out the active one
  let hiddenActions = actionsList.filter(
    (element) => element != actionsList[activeIndex]
  );

  //   set the other actions to display = none
  hiddenActions.forEach((element) => (element.style.display = 'none'));
}

// add the event listeners
document.getElementById('left').addEventListener('click', left);
document.getElementById('right').addEventListener('click', right);

// this function will adjust the variable active by -1
function left() {
  switch (active) {
    case 0:
      active = 2;
      updateView(active);
      break;
    case 1:
      active = 0;
      updateView(active);
      break;
    case 2:
      active = 1;
      updateView(active);
      break;
  }
}
// this function will adjust the variable active by 1
function right() {
  switch (active) {
    case 0:
      active = 1;
      updateView(active);
      break;
    case 1:
      active = 2;
      updateView(active);
      break;
    case 2:
      active = 0;
      updateView(active);
      break;
  }
}
