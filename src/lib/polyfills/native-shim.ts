const nativeShim = require('raw-loader!./native-shim.js');

window.customElements && eval(nativeShim);