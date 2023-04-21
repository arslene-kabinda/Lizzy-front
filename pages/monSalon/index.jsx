import React, { useEffect, useState } from "react";
import { SalonContainer } from "../../styles/SalonStyle";
import imgSalon from "../../public/assets/salon.jpeg";
import { Option, Service } from "../../styles/BookingStyle";
import CardBooking from "../../src/components/card-booking/Card";
import Image from "next/image";

const MonSalon = () => {
  const [barberDescription, setBarberDescription] = useState();
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);
  const [user, setUser] = React.useState();
  const [token, setToken] = React.useState();

  const getBarberDetails = async (userId) => {
    const response = await fetch(
      `http://127.0.0.1:4001/api/hairSalons/own/${userId}`
    );
    const data = await response.json();
    setBarberDescription(data.hairSalon);
  };
  useEffect(() => {
    if (window) {
      let userStorage = localStorage.getItem("user");
      userStorage = userStorage ? localStorage.getItem("user") : undefined;
      const tokenStorage = localStorage.getItem("token");
      if (!userStorage) {
        push("/MonCompte");
      }
      setToken(tokenStorage);
      setUser(userStorage);
    }
  }, []);
  const createService = async () => {
    let userStorage;
    if (window) {
      userStorage = localStorage.getItem("user");
      userStorage = userStorage
        ? JSON.parse(localStorage.getItem("user"))
        : undefined;
      const tokenStorage = localStorage.getItem("token");
      if (!userStorage) {
        push("/MonCompte");
      }
      setToken(tokenStorage);
      setUser(userStorage);
    }
    const body = JSON.stringify({
      name: nameInput,
      description: descriptionInput,
      hairSalon: [barberDescription._id],
      price: priceInput,
    });
    const createServiceResponse = await fetch(
      `https://lizzy-app.onrender.com/api/services`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body,
      }
    );
    const data = await createServiceResponse.json();

    getBarberDetails(userStorage._id);
  };

  useEffect(() => {
    if (window) {
      let userStorage = localStorage.getItem("user");
      if (userStorage) userStorage = JSON.parse(userStorage);
      getBarberDetails(userStorage._id);
    }

  }, []);

  return (
    <SalonContainer>
      {barberDescription && (
        <>
          <section>
            <h2>{barberDescription.name}</h2>
            <div className='containerImage_text'>
              <div className='containerImage'>
                <Image src={imgSalon} alt='salon de coiffure' />
              </div>
              <div className='description'>
                <p>{barberDescription.description}</p>
              </div>
            </div>
          </section>
        
        </>
      )}
    </SalonContainer>
  );
};

export default MonSalon;
