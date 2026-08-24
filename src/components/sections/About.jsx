function About() {
  return (
    <section
      id="about"
      className="bg-[#FFF9ED] px-5 py-10 sm:px-8 md:px-12 md:py-14"
    >
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        
        {/* About Us */}
        <p className="text-[9px] text-black">
          About us
        </p>

        {/* About Text */}
        <div className="max-w-[620px]">
          <h2 className="text-[23px] leading-[1.25] text-[#333] sm:text-[28px] md:text-[31px]">
            <span className="font-semibold">
              We are a functional medicine studio built for people, not
              paperwork.
            </span>{" "}
            
            <span className="text-gray-500">
              Our work lives in the space between biology and behavior, symptom
              and cause, data and care.
            </span>
          </h2>
        </div>

      </div>
    </section>
  );
}

export default About;