const WelcomeBanner = () => {
		const time = new Date()
		const dateStr = time.toLocaleDateString()
		const timeStr = time.toLocaleTimeString()
		return (
			<div className={"welcome-banner card"}>
					<h1 className={"title-banner"}>Welcome Thibault</h1>
					<span>Last connected {dateStr} {timeStr}</span>
			</div>

		)
}

export default WelcomeBanner;
