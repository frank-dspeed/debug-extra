import debug from 'debug'; // NPM
import { Transform } from 'node:stream'; // or NPM readable-stream
/**
 * 
 * @param {string | function} name as String or debug instance
 * @returns 
 */
export const debugPipe = (name) => {
    
  let enabled = false;
  
  try {
    enabled = !!(process.env.DEBUG || localStorage.debug)
  } catch (e) {
    return 
  }
  /**
   * @returns {Transform}
   */
  return (...args) => {
    //var args = arguments.length && Array.prototype.slice.call(arguments)
    const d = typeof name === 'function' ? name : debug(name) ;
    const run = args 
      ? (line='') => d(args.concat(line))
      : d;
    
    if (enabled) {
      return new Transform({
        transform(chunk, enc, callback) {
          run(chunk)
          callback(null, chunk)
        }
      });    
    }
    // passThrough
    return new Transform({ transform(chunk, enc, callback) { callback(null, chunk); } });
  }
  
}

export default debug;
