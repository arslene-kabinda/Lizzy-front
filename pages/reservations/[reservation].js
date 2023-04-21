import { ReservationContainer } from "../../styles/BookingStyle"

const Reservation = ({booking})=>{
    return(
        <ReservationContainer>
            <div><h2> Mes réservations</h2></div>
            <div className="reservation">
                <p>Manicure & pedicure</p>
                <p> 12h :00 le 28/04/2023</p>
            </div>

        </ReservationContainer>
    )
}
export default Reservation;


export async function getServerSideProps(context) {
   
    const response = await fetch(
      `https://lizzy-app.onrender.com/api/booking/${context.query.id}`
    );
  
    const booking = await response.json();
    console.log("aaaa", booking);
    
    return {
      props: { booking },
    };
  }
  