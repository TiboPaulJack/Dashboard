import { useState, useEffect } from 'react';

function Clock() {
		const [time, setTime] = useState(new Date());
		const [showSeconds, setShowSeconds] = useState(true);

		useEffect(() => {
				const interval = setInterval(() => {
						setTime(new Date());
				}, 1000);
				return () => clearInterval(interval);
		}, []);

		const handleClick = () => {
				setShowSeconds(!showSeconds);
		};

		const formattedTime = showSeconds ? time.toLocaleTimeString() : time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

		return (
			<div className={"clock"} onClick={handleClick}>
					<span>{formattedTime}</span>
			</div>
		);
}

export default Clock;
