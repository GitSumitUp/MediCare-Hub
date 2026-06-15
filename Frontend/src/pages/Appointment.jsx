import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <div className="appointment-page">
      <div className="hero-image-container">
        <Hero
          title={"Schedule Your Appointment | Advanced MediCare Hub"}
          imageUrl={"/public/signin.png"}
        />
      </div>
      <AppointmentForm />
    </div>
  );
};

export default Appointment;