import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Department from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Advanced MediCare Hub | Your Trusted Healthcare Provider"
        }
        imageUrl={"/public/hero.png"}
      />
      <Biography imageUrl={"/public/about.png"} />
      <Department />
      <MessageForm />
    </>
  );
};

export default Home;