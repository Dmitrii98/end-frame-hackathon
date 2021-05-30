import React, { useState } from "react";
import axios from "axios";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import "./FilterPosts.scss";

const FilterPosts = ({ setFilteredPosts }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [filter, setFilter] = useState({});

  const handleChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.checked });
  };

  const filterList = [
    {
      name: "1",
      text: "Общежитие №1",
    },
    {
      name: "2",
      text: "Общежитие №2",
    },
    {
      name: "3",
      text: "Общежитие №3",
    },
    {
      name: "4",
      text: "Общежитие №4",
    },
    {
      name: "5",
      text: "Общежитие №5",
    },
    {
      name: "6",
      text: "Общежитие №6",
    },
    {
      name: "7",
      text: "Общежитие №7",
    },
  ];

  const handleFilterDorms = async () => {
    try {
      const res = await axios.post("http://10.131.56.106:4000/getFilteredPosts", {
          dorms: filter
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${user?.accessToken} `
          },
        }
      );
      setFilteredPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="filter_posts">
      <div className="filter_content">
        {
          filterList.map((item, index) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.value}
                  onChange={handleChange}
                  name={item.name}
                  color="primary"
                  onClick={handleFilterDorms}
                />
              }
              label={item.text}
            />
          ))
        }
      </div>
    </div>
  );
};

export default FilterPosts;