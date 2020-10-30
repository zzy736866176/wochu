import ReactDOM from 'react-dom';
import './index.scss';
import router from './Router'
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css'
ReactDOM.render(router, document.getElementById('root'));
serviceWorker.unregister();
