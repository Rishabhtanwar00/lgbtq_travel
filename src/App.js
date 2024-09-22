import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Navbar from './components/Navbar';
import RoutesContainer from './components/RoutesContainer';
import { useEffect } from 'react';
// import Footer from './components/Footer';

function App() {
	useEffect(() => {
		const body = document.querySelector('body');

		setTimeout(() => {
			body.style.overflowY = 'visible';
		}, 7000);
	});
	return (
		<div className='App'>
			<BrowserRouter>
				{/* <Navbar /> */}
				<RoutesContainer />
				{/* <Footer /> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
