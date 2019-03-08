import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

import {Router, Route} from 'react-router';




import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));


registerServiceWorker();

