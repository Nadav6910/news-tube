import { useContext, useEffect } from "react"
import { AppContext } from "../App"
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CategorySelector() {

    const { themeState } = useContext(AppContext)
    const navigate = useNavigate()
    let location = useLocation()

    const [category, setCategory] = useState("Trending");

    useEffect(() => {
      if (location.pathname === "/") {
        setCategory("Trending")
      } else {
        if (location.pathname.includes("/search")) {
          setCategory("")
        } else {
          setCategory(location.pathname.split("/")[1])
        }
      }
    }, [location])

    const handleChange = (event) => {
        setCategory(event.target.value)
        event.target.value === "Trending" ? navigate("/") : navigate(`/${event.target.value}`)
    }

    return (
        <div className="category-selector-container">    
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                className="category-selector"
                style={{"backgroundColor": themeState && "white", "color": themeState ? "#6c19ff" : "#01b2d7"}}
                value={category}
                onChange={handleChange}
                >
                    <MenuItem value="Trending">Trending</MenuItem>
                    <MenuItem value="Business">Business</MenuItem>
                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                    <MenuItem value="Technology">Technology</MenuItem>
                    <MenuItem value="Science">Science</MenuItem>
                    <MenuItem value="Sports">Sports</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}