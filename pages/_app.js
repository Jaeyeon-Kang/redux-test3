import '../styles/globals.css';
import '@progress/kendo-theme-default/dist/all.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const 테스트 = ['#1fe900', '#006de9', '#e9ce00', '#e9000c'];

function reducer(state = 테스트, action) {
    return state;
}

let store = createStore(reducer);

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
