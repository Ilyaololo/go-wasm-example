var Module = {};

fetch('main.wasm')
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
        Module.wasmBinary = buffer;
        
        const script = document.createElement('script');
        script.src = "main.js";
        
        document.body.appendChild(script);
    });