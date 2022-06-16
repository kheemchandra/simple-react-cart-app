import ReactDOM from 'react-dom';

import ContextProvider from './components/context/context';

import './index.css';
import App from './App';

ReactDOM.render(<ContextProvider><App /></ContextProvider>, document.getElementById('root'));
