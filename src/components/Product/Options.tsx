import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button, Grid} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Options() {

    return (
        <div className={"product_options"}>
            <TableContainer
                sx={{ height: '100%', width: '100%' }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Products</TableCell>
                            <TableCell align="right">Color</TableCell>
                            <TableCell align="right">Size</TableCell>
                            <TableCell align="right">Cost Price&nbsp;(€)</TableCell>
                            <TableCell align="right">Selling Price&nbsp;(€)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container spacing={1} justifyContent="flex-end">
                <Grid item xs={4}>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        fullWidth
                        endIcon={<SaveAltIcon />}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

