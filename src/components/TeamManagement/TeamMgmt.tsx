import {useEffect, useState} from "react";
import "../../assets/css/teamMgmt.css"
import Modifier from "./Modifier";
import TeamTable from "./TeamTable";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {User} from "../../types";
import {getUsers} from "../../api/user";
import {CircularProgress} from "@mui/material";



export default function TeamMgmt () {

    const dispatch = useDispatch();

    const selectedUser = useSelector((state : RootState) => state.user.selectedUser);
    const users = useSelector((state : RootState) => state.user.users);
    const newUser = useSelector((state : RootState) => state.user.newUser);
    const teamFormOpen = useSelector((state : RootState) => state.config.teamFormOpen);
    const isloading = useSelector((state : any) => state.user.isLoading)


    useEffect(() => {
        getUsers()
    }, [newUser, users, selectedUser]);

    return(
      <div className={teamFormOpen ? "containerTeam teamGap": "containerTeam"}>
          {
              isloading
                  ?
                      <>
                          <div className={teamFormOpen ? "team__table hidden" : "team__table"}>
                              <CircularProgress color={'inherit'} sx={{margin: 'auto'}}/>
                          </div>
                          <Modifier/>
                      </>
                  :
                      <>
                          <TeamTable/>
                          <Modifier/>
                      </>

          }
      </div>
    );
};

