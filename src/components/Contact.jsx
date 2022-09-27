// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
// import React from "react";
import React, { useState, useEffect } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  const [arrContact, setArrContact] = useState({});

  useEffect(() => {
    setArrContact(data);
  }, []);
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      {arrContact && (
        <List id="contacts" className="list" sx={{ padding: 2 }}>
          <ListItem id="listcontact">
            <ListItemAvatar>
              <Avatar
                id="photo"
                alt={arrContact.name}
                src={arrContact.photo}
                sx={{ width: 56, height: 56, marginRight: 2 }}
              ></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={arrContact.name}
              secondary={
                <React.Fragment>
                  {arrContact.phone}
                  <br />
                  {arrContact.email}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider component="li" />
        </List>
      )}
    </>
  );
};

export default Contact;
