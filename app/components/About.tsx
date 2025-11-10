"use client";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0f1a2b] text-[#d1cfc9] py-16 px-6 text-center md:text-left"
    >
      <h2 className="text-3xl font-bold mb-6 text-[#bae6fd]">About Me</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg leading-relaxed">
        <p>
          I’m <strong>Santhosh Babu S</strong>, an aspiring Full Stack Developer passionate about
          creating efficient and user-friendly web applications that combine functionality
          and clean design.
        </p>

        <p>
          I’m currently pursuing my <strong>Bachelor of Engineering in Mechanical Engineering at Alagappa Chettiar Government College of Engineering and Technology (ACGCET)</strong>, 
          Karaikudi (2023–2027).
        </p>

        <p>
          Alongside my academics, I’ve gained hands-on experience through internships and
          personal projects, where I learned to integrate backend and frontend technologies
          to build complete, production-ready applications.
        </p>
      </div>
    </section>
  );
}
