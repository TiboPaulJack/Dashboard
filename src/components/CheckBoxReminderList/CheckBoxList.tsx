import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxListSecondary() : JSX.Element  {



    return (
        <List dense sx={{ overflow: 'auto', backgroundColor: 'inherit' }}>
            {[0, 1, 2, 3, 4, 5, 6].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        }


                    >
                        <ListItemButton>
                            <ListItemText id={labelId}
                                          primary={`Line item ${value + 1}`}
                                          primaryTypographyProps={{ sx: { textAlign: 'left', height: '60px' } }}
                                          secondary={`Secondary text ${value + 1}`}

                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}