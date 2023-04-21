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
      `http://127.0.0.1:4001/api/booking/${context.query.id}`
    );
  
    const booking = await response.json();
    console.log("aaaa", booking);
    
    return {
      props: { booking },
    };
  }
  