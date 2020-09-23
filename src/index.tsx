import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// @ts-ignore
import oAds from '@financial-times/o-ads';

  oAds.init({
    "gpt": {
      "network": 5887,
      "site": "investors.chronicle",
      "zone": "home"
    },
    "dfp_targeting": "pt=art;",
    "responsive": {
        "small": [0, 0],
        "medium": [645, 0],
        "large": [970, 0],
        "extra": [1340, 0]
    },
    "lazyLoad": {
      "viewportMargin": "0%",
      "threshold": [0]
		},
    "slots": {
        "top": {
            "sizes": {
                "small": false,
                "medium": false,
                "large": [[970, 90], [970, 250], [728, 90], [2, 2]],
                "extra": [[970, 90], [970, 250], [728, 90], [2, 2]]
            },
            "center": true,
            "targeting": {
                "pos": "top"
            }
        },
    }
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
