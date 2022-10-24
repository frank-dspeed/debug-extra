# debug-extra
NodeJS Module using npm debug but Adds. debug.return() and debug.pipe() returns the values that get debuged Used for FRP and Stream Coding

## why?
There was a time where i used only FRP code styles as i liked them the most. Today there are helper methods inside Nodejs to turn infos more easy into streams like iterators. Or the Transform stream

With the current helper methods you can simply throw in a function that calls a function with args that returns the original input or you create a tee of streams.

## Conclusion
Maybe the ECMAScript indirect call syntax is the most best to archive that without a module

```js
/** returns {anyArg} */
const indirectCallExampleFn = (anyArg) => console.log({ anyArg }), anyArg; 
```
the secret here is the use of , which is no opinionated like the && and other chain operators || ?? and so on.
