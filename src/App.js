import React, { useState } from 'react';

import './App.css';

const App = () => {
	const [dice, setDice] = useState(1);

	const Clicked = () => {
		const r = Math.floor(Math.random() * 6) + 1;
		setDice(r);
		console.log(r);
	};

	return (
		<div className="app">
			<div className="container">
				<div className="dice">
					<img
						src={require(`./assets/Dice-${dice}.svg`)}
						alt="dice-1"
						className="image"
					/>
				</div>

				<button onClick={Clicked} className="button">
					Play Again
				</button>
			</div>
		</div>
	);
};

export default App;
