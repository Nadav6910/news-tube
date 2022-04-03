import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CategorySelector() {

    const [category, setCategory] = useState("Tranding");

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="category-selector-container">        
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                className="category-selector"
                value={category}
                onChange={handleChange}
                >
                    <MenuItem value="Tranding">Tranding</MenuItem>
                    <MenuItem value="Business">Business</MenuItem>
                    <MenuItem value="Entertainment">entertainment</MenuItem>
                    <MenuItem value="Technology">Technology</MenuItem>
                    <MenuItem value="Health">Health</MenuItem>
                    <MenuItem value="Science">Science</MenuItem>
                    <MenuItem value="Sports">Sports</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}