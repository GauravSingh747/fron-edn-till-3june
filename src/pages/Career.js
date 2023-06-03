import React from "react";
import Navbar2 from "../components/Navbar2";
import bgImg from "../assets/career-img.jpg";
import Footer from "../components/footer/Footer";
const Career = () => {
  const url =
    "https://cdn.pixabay.com/photo/2016/08/12/00/51/doors-1587329_640.jpg";

  return (
    <div>
      {/* ============= 1 fixed navbar ========= */}
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="h-96 w-full bg-cover bg-no-repeat  "
      >
        <div className="font-serif lg:text-[4rem] text-[3rem] text-white flex justify-center items-center  py-[10rem] ">
          <h1 className="text-center">CAREER</h1>
        </div>
        <Navbar2 />
      </div>

      {/* ============= 2 carrer conteent ========= */}
      <div className=" max-w-7xl mx-auto my-16 px-8 ">
        <div className="text-center my-8 ">
          {/* ======= 1. Heading ====== */}
          <p className="text-3xl font-Playfair ">Overview</p>
          {/* ======= 2. Details ====== */}
          <p className=" font-normal px-3 py-4 text-left ">
            Join our dynamic and growing team at,
            <strong>
              TURN<span className="text-[#ae9938] ">KEY</span> REALITY
            </strong>
            , where we are passionate about real estate and dedicated to
            delivering exceptional services to our clients. We believe that our
            success stems from the talent and commitment of our team members,
            and we are always looking for driven individuals who share our
            vision and values At,
            <strong>
              TURN
              <span className="text-[#cdb447] font-bold  ">KEY</span> REALITY
            </strong>
            , you'll find a collaborative and supportive work environment that
            fosters professional growth and provides exciting opportunities for
            career advancement. We value diversity and inclusion, and we strive
            to create an inclusive workplace where everyone's contributions are
            respected and celebrated. With a focus on innovation and a
            commitment to excellence, we offer great packages, comprehensive
            benefits, and a range of employee perks. Whether you're an
            experienced professional or just starting your career. Join us in
            shaping the future of real estate!"
          </p>
        </div>
        {/* ======= 3. New Jobs or Opening ====== */}

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 my-8 ">
          <div>
            <h1 className="text-2xl font-semibold font-serif ">
              Current New Openings
            </h1>
            <p className="my-2">All Opening</p>
            <p className="my-2">Sales</p>
            <p className="my-2">Tele Callers </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold font-serif ">
              Jobs in sales
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
            </ul>
          </div>
        </div>
      </div>

      {/* ========= 3. Footer ========= */}

      <Footer />
    </div>
  );
};

export default Career;
