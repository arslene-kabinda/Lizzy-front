import Card from "../../card/Card";
import { CardContainer, HairSalonContainer } from "./HairSalonStyle";

import HalfRating from "../../rating/Rating";
import { useState, useEffect } from "react";

const HairSalonSection = () => {
  const [hairSalon, setHairSalon] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getSalon = async () => {
      try {
        const getAllSalonUrl = `https://lizzy-app.onrender.com/api/hairSalons`;
        const response = await fetch(getAllSalonUrl);
        const data = await response.json();

        setHairSalon(data.hairSalons.slice(0, 8));
      } catch (err) {
        setError(err.message);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps

    getSalon();
  }, );

  return (
    <HairSalonContainer>
      <h2>
        Explorez nos différents salons de coiffure et instituts de beauté{" "}
      </h2>

      <CardContainer>
        {!hairSalon == ""
          ? hairSalon.map(({ name, ratingsAverage, coverImage, _id }) => {
              return (
                <Card
                  key={_id}
                  imagePreviews={coverImage}
                  alt={name}
                  cardTitle={name}
                  rating={ratingsAverage}
                />
              );
            })
          : ""}
      </CardContainer>
    </HairSalonContainer>
  );
};

export default HairSalonSection;
