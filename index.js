let debug = require('debug');
var through = require('through2')
let debugX= debug;
debugX.stream= (a) => {
    let d = typeof name === 'function' ? name : debug(name)
    let args = arguments.length &&Array.prototype.slice.call(arguments, 1);
    if (args) {
	d.apply(d, args.concat(args));
   } else {
        d(args);
   }
    return args;
  }

debugX.pipe = function (name) {
  var d = typeof name === 'function' ? name : debug(name)
  try {
    var enabled = !!(process.env.DEBUG || localStorage.debug)
  } catch (e) {}
  passThrough.enabled = false
  debugStream.enabled = true
  return enabled ? debugStream : passThrough
  function passThrough () {
    return through.obj()
  }
  function debugStream () {
    var args = arguments.length && Array.prototype.slice.call(arguments)
    var run = args ?
      function (line) {
        d.apply(d, args.concat(line))
      } :
      function (line) {
        d(line)
      }
    return through.obj(function (data, enc, cb) {
      run(data)
      cb(null, data)
    })
  }
}
module.exports=debugX;
