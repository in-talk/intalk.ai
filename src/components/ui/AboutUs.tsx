function About() {
  return (
    <div id="about" className="relative min-h-[400px]">
      <div className="mx-auto max-w-3xl px-[30px] md:absolute md:left-[25%] -bottom-[20px] pt-12 pb-12 text-left md:pb-20">
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-3xl">
          About Intalk.ai
        </h2>
        <p className="text-lg text-gray-200">
          We are a team of innovators building the next generation of AI-powered
          voice automation solutions. Our mission is to help businesses reduce
          call load, improve customer experience, and automate repetitive phone
          interactions using cutting-edge voice technology. <br /> Our voice bot
          seamlessly integrates with Vicidial and other PBX — all without the
          need for extra hardware. With features like silence detection, rapid
          response, and 99% transcription accuracy, our solution is fast,
          reliable, and easy to deploy. <br />
          We are passionate about transforming customer service through AI, and
          we’re just getting started.
        </p>
      </div>
    </div>
  );
}

export default About;
