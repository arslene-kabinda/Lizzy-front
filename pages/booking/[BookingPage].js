/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ContainerBtn, Rating } from "../../styles/DetailStyle";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  FirstContent,
  ContentContainer,
  Title,
  ContainerImage,
  SecondContainer,
  ServicesContainer,
  CalendarContainer,
  ServiceContainer,
  Service,
  Option,
  Btn,
  Map,
} from "../../styles/BookingStyle";
import HalfRating from "../../src/components/rating/Rating";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import img from "../../public/assets/_33.jpeg";
import map from "../../public/assets/afro.jpeg";
import BookingForm from "../../src/components/booking/BookigForm";
import WorkingHours from "../../src/components/WorkingHours.jsx";
import {
  BtnContainer,
  ContainerForm,
  TimeContainer,
} from "../../styles/BookingFormStyle";
import DatePickerValue from "../../src/components/booking/DateAndTimePicker";
import dayjs from "dayjs";
// import { DemoContainer } from '@mui/x-date-pickers';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const BookingPage = ({ hairSalon, services }) => {
  const [dateValue, setDateValue] = React.useState(dayjs("2022-04-17"));
  const [initiateDateValue, setInitiateDateValue] = React.useState(
    dayjs("2022-04-17")
  );
  const { push } = useRouter();

  const [timeValue, setTimeValue] = React.useState(dayjs("2022-04-17"));
  const [user, setUser] = React.useState();
  const [token, setToken] = React.useState();
  const [initiateTimeValue, setInitiateTimeValue] = React.useState(
    dayjs("2022-04-17")
  );
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const [selectedService, setSelectedService] = useState();

  useEffect(() => {
   
      let userStorage = localStorage.getItem("user");
      userStorage = userStorage
        ? JSON.parse(localStorage.getItem("user"))
        : undefined;
      const tokenStorage = localStorage.getItem("token");
      if (!userStorage) {
        push("/MonCompte");
      }
      setToken(tokenStorage);
      setUser(userStorage);
   
  }, []);

  const requestBook = async () => {
    const body = JSON.stringify({
      hairSalon: hairSalon._id,
      service: selectedService,
      date: initiateDateValue,
      user: user._id,
      status: "pending",
    });
    const requestBookResponse = await fetch(
      `https://lizzy-app.onrender.com/api/booking`,
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

    push("/reservations/[reservation].js");
  };

  return (
    <Container>
      {hairSalon && (
        <>
          <ContentContainer>
            <FirstContent>
              <Title>{hairSalon.name}</Title>
              <div style={{ display: "flex" }}>
                <address style={{ paddingTop: "15px" }}>
                  54, Av de la Justice, Gombe - KINSHASA
                </address>
                <Rating>
                  <HalfRating />
                  <p>Avis</p>
                </Rating>
              </div>
            </FirstContent>
          </ContentContainer>
          <ContainerImage image={hairSalon.coverImage} />

          <SecondContainer>
            <ServicesContainer>
              <p>
                Réservez en ligne pour un rendez-vous chez La Beauté Chinoise ,
                expert dans plusieurs services tels que : les soins de visage ,
                manicure, pédicure, massage , .....
              </p>
              <span>Paiement sur place </span>
              <div>
                {!selectedService &&
                  services &&
                  services.length &&
                  services.map(({ name, description, _id }, key) => (
                    <ServiceContainer key={key}>
                      <Service>
                        <h4>{name} </h4>
                        <p>{description}</p>
                      </Service>
                      <Option>
                        <div>
                          <p>30$</p>
                        </div>
                        <Btn
                          onClick={() => {
                            setSelectedService(_id);
                          }}
                        >
                          <Button
                            type='submit'
                            sx={{
                              color: "#fff",
                              backgroundColor: "#45ad7e",
                              paddingLeft: "1rem",
                              paddingRight: "1rem",
                              fontFamily: "Poppins",
                              textTransform: "none",
                              paddingTop: "0.1rem",
                              paddingBottom: "0.1rem",
                              alignSelf: "flex-end",
                              width: "5rem",
                              ":hover": {
                                color: "#45ad7e",
                                fontWeight: "700",
                                border: "1px solid #45ad7e",
                                backgroundColor: "transparent",
                              },
                            }}
                          >
                            Choisir
                          </Button>
                        </Btn>
                      </Option>
                    </ServiceContainer>
                  ))}
              </div>
              {/* <Map>
            <img src={map.src} alt='image preview' />
          </Map> */}
            </ServicesContainer>
            {selectedService && (
              <CalendarContainer>
                <ContainerForm>
                  <Title>
                    <h1>Faites votre choix et résevez votre place.</h1>
                  </Title>
                  <CalendarContainer>
                    <div>
                      <h5> Date de la reservation</h5>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      {/* <DemoContainer components={['DatePicker', 'DatePicker']}> */}
                      <DatePicker
                        label='Choisir une date'
                        value={dateValue}
                        onChange={(newValue) => {
                          const date = newValue.toDate();
                          setDateValue(newValue);
                          setInitiateDateValue(date);
                        }}
                      />
                      {/* </DemoContainer> */}
                    </LocalizationProvider>
                  </CalendarContainer>
                  <TimeContainer>
                    <div>
                      <h5> Heure de la reservation</h5>
                    </div>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      {/* <DemoContainer components={["TimePicker", "TimePicker"]}> */}
                      <TimePicker
                        label="Inserer l'heure"
                        value={initiateTimeValue}
                        onChange={(newValue) => {
                          const time = newValue.$H;
                          const date = new Date(dateValue).setHours(time);
                          setTimeValue(date);
                          setInitiateTimeValue(newValue);
                        }}
                      />
                      {/* </DemoContainer> */}
                    </LocalizationProvider>
                  </TimeContainer>

                  <BtnContainer>
                    <button
                      type='submit'
                      onClick={() => {
                        requestBook();
                      }}
                    >
                      Soumettre
                    </button>
                  </BtnContainer>
                </ContainerForm>
                <WorkingHours />
              </CalendarContainer>
            )}
          </SecondContainer>
        </>
      )}
    </Container>
  );
};

export default BookingPage;
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://lizzy-app.onrender.com/api/hairSalons/${params.BookingPage}`
  );
  const services = [];
  const { hairSalon } = await res.json();
  if (hairSalon && hairSalon.service && hairSalon.service.length) {
    const resu = await Promise.all(
      hairSalon?.service?.map(async ({ _id }) => {
        const response = await fetch(
          `https://lizzy-app.onrender.com/api/services/${_id}`
        );
        const { service } = await response.json();
        services.push(service);
      })
    );
  }

  return {
    props: { hairSalon, services },
  };
}
