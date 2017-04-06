/**
 * Create a style element and add a string of css to it
 */
function addCSS(text) {
  let head = document.querySelector('head');
  let style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = text;
  head.appendChild(style);

  return style;
}

export default addCSS;
