import {useState} from "react";
import "../../assets/css/teamMgmt.css"
import Modifier from "./Modifier";
import TeamTable from "./TeamTable";


export default function TeamMgmt () : JSX.Element  {


    const [visible, setVisible] = useState(false);


    return(
      <div className={"containerTeam"}>
          <TeamTable
              setVisible={setVisible}
              visible={visible}
          />
          <Modifier
            visible={visible}
            setVisible={setVisible}
          />
      </div>
    );
};

