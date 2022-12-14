import React, { useState } from "react";
import image from "../images/image_icon.png";
import eye from "../images/eye.png";
import edit from "../images/edit.png";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Toggle = ({ obj, getData }) => {
  // const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      
      const path = obj._id;
      console.log(path);
      const response = await fetch(
        "https://real-esstate.herokuapp.com/property/" + path,
        //"http://localhost:3003/property/" + path,
        
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ obj }),
        }
      );
      getData();
    } catch (error) {
      alert(error);
    }
  };

  // const [state, setState] = useState(false);
  return (
    <div className="tabledats">
      <div className="ppid-row">{obj.PPID}</div>
      <div className="image-row">
        <img className="img-static" src={image} alt="aj" />
      </div>
      <div className="property-row">{obj.Property}</div>
      <div className="contact-row">{obj.Contact}</div>
      <div className="area-row">{obj.Area}</div>
      <div className="views-row">0{obj.Views}</div>
      <div className="status-row">
        {" "}
        <button className="status-button" onClick={() => handleSubmit(obj)}>
          {obj.Status}
        </button>
      </div>
      <div className="day-row">{obj.Duration}</div>
      <div className="action-row">
        {" "}
        <img className="action-eye" src={eye} alt="eye" />{" "}
        <img className="action-edit" src={edit} alt="edit" />
      </div>
    </div>
    // <tr>
    //   <td className="ppd ppdid">{obj.PPID}</td>
    //   <td className="image">
    //     <img src={image} alt="aj" />
    //   </td>
    //   <td className="plot">{obj.Property}</td>
    //   <td className="contact">{obj.Contact}</td>
    //   <td className="area">{obj.Area}</td>
    //   <td className="view">{obj.Views}</td>
    //   <td className="status">
    //     <button onClick={() => handleSubmit(obj)}>{obj.Status}</button>
    //   </td>
    //   <td className="days">{obj.Duration}</td>
    //   <td className="action">
    //     <img src={eye} alt="eye" /> <img src={edit} alt="edit" />
    //   </td>
    // </tr>
  );
};

// {
//    <button onClick={() => {setState(true)}}>{state ? "Sold" : "Unsold"}</button> 
// }
export default Toggle;
