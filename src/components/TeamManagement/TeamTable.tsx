// @ts-ignore
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button, Stack} from "@mui/material";
import {Add} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {setSelectedUser} from "../../redux/reducers/user";
import {setNewUserMode, setTeamFormOpen} from "../../redux/reducers/config";

type id = number;


export default function TeamTable ()  {

    const dispatch = useDispatch();
    const user = useSelector((state : RootState) => state.user.users);
    const selected = useSelector((state : RootState) => state.user.selectedUser);
    const newUserMode = useSelector((state : RootState) => state.config.newUserMode);
    const teamFormOpen = useSelector((state : RootState) => state.config.teamFormOpen);

    const handleClick = (user): void => {
        if(newUserMode) {
            dispatch(setNewUserMode());
        }
        dispatch(setSelectedUser(user));
        dispatch(setTeamFormOpen(true));
    }

    const handleAddUser = (): void => {
        dispatch(setNewUserMode());
        dispatch(setTeamFormOpen(true));
    }

    return(
        <div className={teamFormOpen ? "team__table hidden" : "team__table"}>
            <Stack direction={'row'} alignItems={'baseline'} justifyContent={'space-between'}>
                <h2>Team</h2>
                <Button
                    variant="contained"
                    fullWidth
                    endIcon={<Add/>}
                    onClick={handleAddUser}
                    sx={{height:'40px', width:'200px'}}
                >
                    Add new User
                </Button>
            </Stack>
            <TableContainer className={"table__container"}>
                <Table>
                    <TableHead className={"table__head"}>
                        <TableRow
                            sx={{ cursor: 'pointer' }}
                        >
                            <TableCell>Firstname</TableCell>
                            <TableCell align="right">Lastname</TableCell>
                            <TableCell align="right">Role</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((user) => (
                            <TableRow
                                hover
                                key={user.firstname}
                                sx={{ cursor:"pointer", '&:last-child td, &:last-child th': { border: 0 },  backgroundColor: selected === user ? "hover" : "inherit" }}
                                onClick={() => handleClick(user)}
                            >
                                <TableCell component="th" scope="row">
                                    {user.firstname}
                                </TableCell>
                                <TableCell align="right">{user.lastname}</TableCell>
                                <TableCell align="right">{user.role}</TableCell>
                                <TableCell align="right">{user.title}</TableCell>
                                <TableCell align="right">{user.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    );
};
