# rafy

> A RAF js engine

## Install

```
$ npm install rafy
```

## Usage

```js
import Rafy from 'rafy';

const rafy = new Rafy();

const fn = () => {
  console.log('It will perform the function on each frame');
};

// Add function to queue
rafy.add(fn);

// Start rafy
rafy.start();

// Remove function from queue
rafy.remove(fn);

// Stop rafy
rafy.stop()
```
