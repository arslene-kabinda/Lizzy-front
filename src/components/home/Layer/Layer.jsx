import React from "react";
import CustomButton from "../../button/Button";
import { LayerContainer } from "./LayerStyle";
import { Link } from "@mui/material";
const Layer = () => {
  return (
    <LayerContainer>
      <div>
        <p>
          Trouvez le salon le plus proche de chez vous et decouvrez les
          bienfaits de salons de coiffure et instituts de beauté de la ville de
          kinshasa.
        </p>
      </div>
      <Link href='/salons_de_coiffure'>
        <a>
          <CustomButton>Faites votre reservation</CustomButton>
        </a>
      </Link>
    </LayerContainer>
  );
};

export default Layer;
