import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/footer/Footer";

const About = () => {
  const url =
    " https://images.unsplash.com/photo-1553368191-b4431ec06fca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <div>
      {/* ======== Fixed bar ======== */}
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="h-96 w-full bg-cover bg-no-repeat  "
      >
        <div className="font-serif lg:text-[4rem] text-[3rem] text-white flex justify-center items-center  py-[10rem] ">
          <h1>ABOUT-US</h1>
        </div>
        <Navbar2 />
      </div>

      {/* =========Rest of the Contetnt ========= */}

      <div className=" max-w-7xl mx-auto my-16 px-8 ">
        {/* ======= 1. Heading ====== */}
        <div className="text-center my-8 ">
          <p className="text-2xl">Our Company</p>
          <h1 className="text-7xl my-4 ">Who We Are</h1>
        </div>
        {/* ======= 2. Details ====== */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 my-8 ">
          <div>
            <h1 className="text-2xl font-semibold font-serif ">
              Global Presence
            </h1>
            <p className="my-5">
              Our mission is to provide personalized and exceptional service to
              each and every one of our clients. We understand that buying or
              selling a home can be a complex and emotional process, which is
              why we work closely with our clients to understand their unique
              needs and preferences.Whether you are a first-time home buyer, a
              seasoned investor, or looking to sell your home, we are here to
              help. Our commitment to honesty, integrity, and transparency
              ensures that you can trust us to provide you with the best
              possible service. Contact us today to learn more about how we can
              help you achieve your real estate goals.
            </p>
            <p className="my-5">
              We are a team of experienced professionals who are passionate
              about helping our clients find their dream homes . With the years
              of experience in the industry .We have the knowledge and expertise
              to guide you through every step of the residential and commercial
              property for buyinmg or selling process
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold font-serif ">
              Responsiblity
            </h1>
            <ul className="my-5 list-disc px-8 ">
              <li>
                Determine clients’ needs and financials abilities to propose
                solutions that suit them
              </li>
              <li>
                Intermediate negotiation processes, consult clients on market
                conditions, prices, mortgages, legal requirements and related
                matters, ensuring a fair and honest dealing
              </li>
              <li className="mt-8 ">
                Perform comparative market analysis to estimate properties’
                value
              </li>
              <li>Display and market real property to possible buyers</li>
              <li>
                Prepare necessary paperwork (contracts, leases, deeds, closing
                statements etc)
              </li>
              <li>Manage property auctions or exchanges</li>
              <li>Maintain and update listings of available properties</li>
              <li>
                Cooperate with appraisers, escrow companies, lenders and home
                inspectors
              </li>
              <li className="mt-8">
                Develop networks and cooperate with attorneys, mortgage lenders
                and contractors
              </li>
              <li>
                Promote sales through advertisements, open houses and listing
                services
              </li>
              <li>
                Remain knowledgeable about real estate markets and best
                practices
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 my-8 ">
          <div>
            <h1 className="text-2xl font-semibold font-serif ">Our Vision</h1>
            <p className="my-5">
              We aim to continuously exceed our client’s expectations by
              providing personalized and comprehensive real estate services that
              address our unique needs and Preferences. We strive to build long
              term relationships with our clients based on trust, transparency,
              and open communication.
            </p>
            <p className="my-5">
              We are committed to staying in front of industry trends and
              adopting new technologies and practices that enhance our clients’
              buying and selling experience. Our vision To includes creating a
              positive impact in the communities we serve . We believe in giving
              back and are dedicated to supporting local organizations.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold font-serif ">Our Mission</h1>
            <p className="my-5">
              Our mission is to provide our customer with the highest quality of
              the product and services. While delivering exceptional customer
              service . we are committed to excellence in everything we do and
              strive to exceed our customers’ expectations Everyday .
            </p>
            <p className="my-5">
              We Beleive in buidling strong relationships with our customers,
              and employees based on mutual trust, respect, and open
              communication. We are dedicated to creating a positive and
              inclusive workplace where all employees can work thrive and
              contribute to our success.
            </p>
          </div>
        </div>
      </div>

      {/* =========Rest of the Contetnt ========= */}
      <Footer />
    </div>
  );
};

export default About;
