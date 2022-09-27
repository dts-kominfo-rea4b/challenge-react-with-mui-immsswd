import "./App.css";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";

import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const handleClick = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  return (
    <div>
      <div className="App">
        <Header />
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <ContactForm handleClick={handleClick} />
          </Grid>
          <Grid item xs={6}>
            {contacts.map((item, index) => {
              const object = {
                name: item.name,
                phone: item.phone,
                email: item.email,
                photo: item.photo,
              };
              return (
                <Contact key={index} data={object}>
                  {" "}
                </Contact>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
