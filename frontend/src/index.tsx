import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PrivateRoute from '../components/utils/PrivateRoute';
// import PublicOnlyRoute from '../components/utils/PublicOnlyRoute';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import Header from '../components/header/Header';
import Home from './pages/home/home';
import BackgroundAnimation from './components/backgroundAnimation/backgroundAnimation';
import Header from './components/header/header';
// import About from '../pages/about/About';
// import Contact from '../pages/contact/Contact';
// import Portfolio from '../pages/contact/Portfolio';
// import Resume from '../pages/contact/Resume';
// import Login from '../pages/contact/Login';
// import NotFound from '../pages/notfound/NotFound';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<BackgroundAnimation />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						{/* <Route exact path='/about' component={ About }/> */}
						{/* <Route exact path='/contact' component={ Contact }/> */}
						{/* <Route exact path='/contact' component={ Portfolio }/> */}
						{/* <Route exact path='/contact' component={ Resume }/> */}
						{/* <PrivateRoute exact path='/login' component={Login}/> */}
						{/* <Route component={ NotFound }/> */}
					</Routes>
				</main>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
