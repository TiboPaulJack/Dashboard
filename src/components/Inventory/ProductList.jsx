import data from "../../../data/users.json";
import Product from "./Product.jsx";




const MemberList = ({setVisible}) => { /* Déstructurer la fonction setVisible de props */
  // Utilisation de la méthode .map() pour itérer sur chaque membre dans les données
  
  const member = data.map((item) => (
    <Product
      key={item.name}
      name={item.name}
      role={item.role}
      service={item.service}
      setVisible={setVisible}
    />
  ));
  return(
    <ul>
      {member}
    </ul>
  );
};

export default MemberList;
