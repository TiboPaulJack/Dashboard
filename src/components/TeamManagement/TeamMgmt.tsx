import {useState} from "react";
import "../../assets/css/teamMgmt.css"
import Table from "./Table";
import Modifier from "./Modifier";


export default function TeamMgmt ()  {


    const [visible, setVisible] = useState(false);


    return(
      <div className={"containerTeam"}>
          <Table
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

