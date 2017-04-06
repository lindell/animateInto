/**
 * Return an object with positional and scale information for the animation
 */
function calculatePositions(fromElement, toElement) {
  let fromBB = fromElement.getBoundingClientRect();
  let toBB = toElement.getBoundingClientRect();

  // The scale the cloned element have to be to fit the toElement
  let relativeScale = {
    x: toBB.width / fromBB.width,
    y: toBB.height / fromBB.height,
  };
  if(relativeScale.x < relativeScale.y){
    relativeScale.y = relativeScale.x;
  }
  else{
    relativeScale.x = relativeScale.y;
  }

  return {
    from: {
      x: fromBB.left,
      y: fromBB.top,
    },
    to: {
      scale: relativeScale,
      x: toBB.left - (fromBB.width - toBB.width) / 2,
      y: toBB.top - (fromBB.height - toBB.height) / 2,
    }
  };
}

export default calculatePositions;
