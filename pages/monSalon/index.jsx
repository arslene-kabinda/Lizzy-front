import React, { useEffect, useState } from "react";
import { SalonContainer } from "../../styles/SalonStyle";
import imgSalon from "../../public/assets/salon.jpeg";
import { Option, Service } from "../../styles/BookingStyle";
import CardBooking from "../../src/components/card-booking/Card";

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
      `http://127.0.0.1:4001/api/services`,
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
                <img src={imgSalon.src} alt='salon de coiffure' />
              </div>
              <div className='description'>
                <p>{barberDescription.description}</p>
              </div>
            </div>
          </section>
          {/* <section>
            <h3>Nos services</h3>
            {barberDescription && barberDescription.length ? (
              <div className='containerService'>
                <div className='contentService'>
                  <h5>Nom du service </h5>
                  <p>La description</p>
                  <p>30$</p>
                </div>
                <div>
                  <div className='price'></div>

                  <div className='btn'>
                    <button type='submit'>Editer</button>
                    <button type='submit'>Supprimer</button>
                  </div>
                </div>
              </div>
            ) : (
              <h5>Aucun jusque là </h5>
            )}

            <div>
              <form
                method='post'
                onSubmit={(e) => {
                  e.preventDefault();
                  createService();
                }}
              >
                <label htmlFor='name'>Nom du service</label>
                <br></br>
                <input
                  value={nameInput}
                  onChange={(e) => {
                    setNameInput(e.target.value);
                  }}
                  type='text'
                  name='name'
                />{" "}
                <br></br>
                <label htmlFor='name'>Descriptions du service</label>
                <br></br>
                <textarea
                  name='description'
                  value={descriptionInput}
                  onChange={(e) => {
                    setDescriptionInput(e.target.value);
                  }}
                ></textarea>{" "}
                <br></br>
                <label htmlFor='name'>Choisir le prix</label>
                <br></br>
                <br></br>
                <input
                  value={priceInput}
                  onChange={(e) => {
                    setPriceInput(e.target.value);
                  }}
                  type='number'
                  name='price'
                />{" "}
                <br></br>
                <label htmlFor='name'>Prix du service</label>
                <br></br>
                <br></br>
                <button type='submit'> Ajouter</button>
              </form>
            </div>
          </section>
          <section>
            <h4>Nos réservations</h4>

            <CardBooking
              // key={_id}

              alt='user'
              userName='arsy'
              serviceName='La description du service choisi'
              time='le jour et la date de la reservation'
            />
          </section> */}
        </>
      )}
    </SalonContainer>
  );
};

export default MonSalon;
