function About() {
  return (
    <div
      id="about"
      className="sm:flex items-center max-w-screen-xl mx-auto  px-4 py-[20px]"
    >
      {/* Image Section */}
      <div className="sm:w-1/2 p-6">
        <div className="image object-center text-center">
          <img
            src="/images/about.png"
            alt="About our company"
            className="mx-auto"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="sm:w-1/2 p-6">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-indigo-600">Intalk.ai</span>
          </h2>
          <p className="text-gray-500">
            We are a team of innovators building the next generation of
            AI-powered voice automation solutions. Our mission is to help
            businesses reduce call load, improve customer experience, and
            automate repetitive phone interactions using cutting-edge voice
            technology. <br /> Our voice bot seamlessly integrates with Vicidial
            and other PBX — all without the need for extra hardware. With
            features like silence detection, rapid response, and 99%
            transcription accuracy, our solution is fast, reliable, and easy to
            deploy. <br />
            We are passionate about transforming customer service through AI,
            and we’re just getting started.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
