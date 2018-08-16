var go = new Go();

fetch('main.wasm')
    .then((response) => response.arrayBuffer())
    .then((buffer) => WebAssembly.instantiate(buffer, go.importObject))
    .then((result) => result.instance)
    .then((instance) => {
        go.run(instance);
    })