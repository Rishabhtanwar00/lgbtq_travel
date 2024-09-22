import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const RoutesContainer = () => {
	return (
		<div className='routes-container'>
			<Routes>
				<Route exact path='/' element={<Homepage/>}></Route>
				<Route path='/*' element={<Homepage />}></Route>
			</Routes>
		</div>
	);
};

export default RoutesContainer;
