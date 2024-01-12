import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
// 	BrowserRouter,
// 	Routes,
// 	Route,
// 	Link,
// } from "react-router-dom";

function App() {
	const [mode, setMode] = useState('light');
	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			window.document.body.style.backgroundColor = '#343434';
			window.document.body.style.color = 'white';
			showAlert('Dark mode has been enabled', 'success');
		}
		else {
			setMode('light');
			window.document.body.style.backgroundColor = 'white';
			window.document.body.style.color = 'black';
			showAlert('Light mode has been enabled', 'success');
		}
	}
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			message: message,
			type: type
		});
		setTimeout(() => {
			setAlert(null)
		}, 1500);
	}
	return (
		<>
			{/* <BrowserRouter> */}
			<Navbar title="TextUtils" aboutInfo="About Us" mode={mode} toggleMode={toggleMode} />
			<Alert alert={alert} />
				{/* <Routes> */}
					{/* <Route exact path="/" element={ */}
						<div className='container'>
							<TextForm heading="Enter the text to process" mode={mode} showAlert={showAlert} />
						</div>
					{/* } /> */}
					{/* <Route exact path="/about" element={<About />} /> */}
				{/* </Routes> */}
			{/* </BrowserRouter> */}
		</>
	);
}

export default App;
