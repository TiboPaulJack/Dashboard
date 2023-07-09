



export default function Product(props) : JSX.Element  {
  const handleClick = () => {
    props.setVisible(true);
  };
  
  const {name, role, service} = props;
  
  return(
    <div className={"member"} >
      <h3 className={"name"}>{name}</h3>
      <h3 className={"role"}>{role}</h3>
      <h3 className={"service"}>{service}</h3>
      
      <div className="status-switch-wrapper">
        <label className="member-switch" >
          <input type="checkbox" id="memberCheckbox"/>
          <div className="statusSlider round"></div>
        </label>
      </div>
      <button className={"editMemberButton"} onClick={handleClick}>edit</button>
    
    </div>
  
  );
};

