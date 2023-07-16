import {FormControl, InputLabel, MenuItem, Select, Switch} from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {setFilter, setInventoryGroup} from "../../redux/reducers/product";
import {useEffect} from "react";
import {getAllCategories} from "../../api/product_categories";


export default function Header () {

    useEffect(() => {
        getAllCategories();
    }, []);

    const dispatch = useDispatch();
    const categories = useSelector((state: any) => state.product.categories);
    const filter = useSelector((state: any) => state.product.filter);
    const groupRelated = useSelector((state: any) => state.config.inventoryGroup);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(Number(event.target.value)))
    }

    const handleGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setInventoryGroup(event.target.checked))
    }

    const categoriesList = categories.map((category: any) => {
        return (
            <MenuItem value={category.id}>{category.name}</MenuItem>
        )
    });

    return (
        <div className="header">
                <Stack direction={'row'} spacing={1} alignItems={'baseline'}>
                    <Typography >Show All</Typography>
                    <Switch
                        name={'groupRelated'}
                        checked={groupRelated}
                        onChange={handleGroupChange}
                        inputProps={{'aria-label': 'controlled'}}
                    />
                    <Typography>Group Related</Typography>
                </Stack>
                <FormControl fullWidth  sx={{width:'300px'}}>
                    <InputLabel>Filter by Category</InputLabel>
                    <Select
                        label="Category"
                        variant="filled"
                        name="category"
                        value={filter}
                        onChange={handleChange}
                    >
                        <MenuItem value={0}>All</MenuItem>
                        {categoriesList}
                    </Select>
                </FormControl>
        </div>
    )
}