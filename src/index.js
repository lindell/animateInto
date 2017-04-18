import fixOptions from './fixOptions';
import calculatePositions from './calculatePositions';
import addCSS from './util/addCSS';

function animateInto(fromBox, toBox, options){
  options = fixOptions(options);

  let body = document.querySelector('body');

  let clonedElement = fromBox.cloneNode(true);

  // Generate a random ID to be used as the animation name
  let animationID = 'cloneInto-' + Math.random().toString(36).substr(2, 20);

  // Get position and scale information
  let positions = calculatePositions(fromBox, toBox, options);

  clonedElement.style.position = 'fixed';
  clonedElement.style.left = '0';
  clonedElement.style.top = '0';
  clonedElement.style.margin = '0';
  clonedElement.style.transform = 'translate(' + positions.from.x + 'px, ' + positions.from.y + 'px)';
  clonedElement.style.animationDuration = options.time + 'ms';
  clonedElement.style.animationName = '' + animationID;
  clonedElement.style.animationTimingFunction = options.timingFunction;

  let animation = `
    @keyframes ${animationID} {
      0%   {
        opacity: 1;
        translate(${positions.from.x}px, ${positions.from.y}px) scale(1, 1);
      }
      100% {
        opacity: ${options.endOpacity};
        transform: translate(${positions.to.x}px, ${positions.to.y}px) scale(${positions.to.scale.x}, ${positions.to.scale.y});
      }
    }`;

  let styleElement = addCSS(animation);

  body.appendChild(clonedElement);

  clonedElement.addEventListener('animationend', () => {
    clonedElement.remove();
    options.callback(clonedElement);
    styleElement.remove();
  });
}

if (module.exports) {
  module.exports = animateInto;
}
else {
  window.animateInto = animateInto;
}
