import React from "react";

export const About = () => {
  return (
    <about className="w-screen flex justify-center py-12 md:py-24 px-6 md:px-20 bg-gray-100">
      <div className="w-full md:w-4/5 flex flex-col items-center">
        <button className="w-20 h-7 bg-gray-200 text-slate-600 rounded flex items-center justify-center mb-8 md:mb-12">
          About me
        </button>

        <div className="w-full md:flex md:flex-row gap-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="/Uba.png" alt="My Image" className="w-full" />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-semibold leading-9 mb-4 md:w-9/12">
              Curious about me? Here you have it:
            </h1>
            <div className="text-base md:text-lg flex flex-col gap-4 w-full">
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>

              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>

              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>

              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>

              <p>Finally, some quick bits about me.</p>

              <div className=" flex gap-3 ">
                <div className="w-60">
                  <li>B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                </div>

                <div className="w-60">
                  <li>Avid learner</li>
                  <li>Aspiring indie hacker</li>
                </div>
              </div>

              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </about>
  );
};
