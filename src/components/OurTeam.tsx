import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import React from "react";

const teamMembers = [
  {
    name: "Bilal Ahmed",
    title: "CEO & Co-Founder",
    description:
      "Seasoned tech expert with 5+ years of experience in software development, specializing in AI and machine learning for top-tier companies.",
    image: "/images/bilal-ahmed.png",
    linkedinUrl: "https://www.linkedin.com/in/bilaal-js/",
  },
  {
    name: "Muhammad Bilal",
    title: "CTO & Co-Founder",
    description:
      "Tech genius with 9+ years in software development, mastering AI and machine learning while delivering innovation at top-tier companies.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQECKeSZ6F9iJQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724495033577?e=1756944000&v=beta&t=aZucqNo8AL_8lTU73mg8CtNhtGrgGqtDdXg4aKmNdXQ",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-bilal-01123368/",
  },
];

export const OurTeam = () => {
  return (
    <section className="pt-20 pb-10 px-4 bg-dark">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Talented Team
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group w-full sm:w-[48%] lg:w-[23%] flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
              <div className="text-center">
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:text-indigo-400 transition flex justify-center items-center gap-2"
                  >
                    <h3 className="text-xl font-bold text-gray-300 ">
                      {member.name}
                    </h3>
                    <LinkedInLogoIcon />
                  </a>
                )}

                <p className="text-indigo-600 font-medium">{member.title}</p>
                <p className="text-gray-500 mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
