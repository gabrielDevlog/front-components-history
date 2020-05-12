# Front-components-history

A [front-components](https://www.npmjs.com/package/front-components) plugin. Provides an history for react-router.

## Install

`npm install --save front-components-history`

## Usage

```javscript
import { getReactRouterHistory } from "front-components-history";

function mount(domElement) {
  const history = getReactRouterHistory();

  ReactDOM.render(<App history={history} />, domElement)
}
```
