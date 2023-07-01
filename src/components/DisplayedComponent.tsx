type DisplayedComponentProps = {
	rendered: string;
	children?: React.ReactNode;
};

const DisplayedComponent: React.FC<DisplayedComponentProps> = ({ children}) => {
	return (
		<>
			{children}
		</>
	);
};

export default DisplayedComponent;
