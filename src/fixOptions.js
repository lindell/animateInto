let defaultOptions = {
  time: 600,
  callback: function(){},
  timingFunction: 'cubic-bezier(0.505, 0.005, 0.575, 0.450)',
  endOpacity: 0.2,
};

function fixOptions(options) {
  let newOptions = Object.assign({}, defaultOptions, options);

  newOptions.time = parseInt(newOptions.time, 10);
  newOptions.endOpacity = parseFloat(newOptions.endOpacity);

  return newOptions;
}

export default fixOptions;
