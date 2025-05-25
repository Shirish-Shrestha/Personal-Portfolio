import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <div className="pt-10 pb-20 min-h-1/2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Discover my technical expertise and approach as a frontend developer"
        />

        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-600 dark:text-white mb-4">
                Technical Background & Expertise
              </h3>
              <p className="text-gray-400 dark:text-gray-400 mb-10">
                I'm a frontend developer with two years of experience crafting responsive, user-centric interfaces using HTML, CSS, JavaScript, React, TypeScript, and Next.js. My journey started with a fascination for web mechanics, leading me to build optimized, accessible UI for projects like Lubro Paints and Premier Global College. I specialize in creating performant, visually engaging web experiences with a focus on clean code and modern frameworks.
              </p>

              <h3 className="text-2xl font-semibold text-gray-600 dark:text-white mb-4">
                Development Approach & Creative Drive
              </h3>
              <p className="text-gray-400 dark:text-gray-400">
                My approach to web development prioritizes intuitive UI, performance optimization, and accessibility. I tackle challenges by ensuring responsive designs and pixel-perfect execution while adhering to best practices. Outside coding, I draw inspiration from music and strategic sports like cricket, which sharpen my problem-solving skills and attention to detail, enhancing my ability to deliver high-quality technical solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;