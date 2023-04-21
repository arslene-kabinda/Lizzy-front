import React, { useState, useEffect } from "react";
import {
  BtnContainer,
  CalendarContainer,
  ContainerForm,
  TimeContainer,
  Title,
} from "../../../styles/BookingFormStyle";
import DateAndTimePicker from "./DateAndTimePicker";
import TimePickers from "./TimePiker";
import DatePickerValue from "./DateAndTimePicker";
import TimePickerValue from "./TimePiker";

const BookingForm = () => {
  const [form, SetForm] = useState(false);

  const fixForm = () => {
    if (window.scrollY >= 1) {
      SetForm(true);
    } else {
      SetForm(false);
    }
  };

  useEffect(() => {
    fixForm();

    window.addEventListener("scroll", fixForm);
  });

  return (
    <ContainerForm>
      <Title>
        <h1>Faites votre choix et résevez votre place.</h1>
      </Title>
      <CalendarContainer>
      <div>
          <h5> Date de la reservation</h5>
        </div>
        <DatePickerValue/>
      </CalendarContainer>
      <TimeContainer>
        <div>
          <h5> Heure de la reservation</h5>
        </div>

        <TimePickers />
      </TimeContainer>

      <BtnContainer>
        <button type="submit">Soumettre</button>
      </BtnContainer>
    </ContainerForm>
  );
};

export default BookingForm;
