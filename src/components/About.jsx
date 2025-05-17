import SectionHeading from "./SectionHeading"

const About = () => {
  return (
    <div className="py-20 min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Learn more about my background and what drives me as a developer" />

        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-600 dark:text-white mb-4">Who I Am</h3>
              <p className="text-gray-400 dark:text-gray-400 mb-6">
                Hey there! I'm a detail-oriented, creative, and passionate frontend developer with a knack for turning code into clean, responsive, and visually engaging user interfaces. My journey into web development began about two years ago, when I discovered how writing a few lines of code could transform into something magical on screen — that moment hooked me for life.
              </p>

              <h3 className="text-2xl font-semibold text-gray-600 dark:text-white mb-4">My Journey</h3>
              <p className="text-gray-400 dark:text-gray-400 mb-6">
                My journey in web development began with a curiosity about how websites work. I started with the basics — HTML, CSS, and JavaScript — and quickly fell in love with the power of frontend development. Since then, I've deepened my skills in React, TypeScript, and Next.js, building user-focused experiences across real-world projects for brands like Lubro Paints, Bardali Creations, Sunira Open Space, and Premier Global College.
              </p>

              <h3 className="text-2xl font-semibold text-gray-600 dark:text-white mb-4">My Approach</h3>
              <p className="text-gray-400 dark:text-gray-400 mb-6">
                My approach is simple: build UI that looks good, performs great, and makes users feel at home. Whether it's optimizing performance, crafting responsive layouts, ensuring accessibility, or fine-tuning every pixel, I'm always up for the challenge.
              </p>

              <h3 className="text-2xl font-semibold text-gray-600 dark:text-white mb-4">When I'm Not Coding</h3>
              <p className="text-gray-400 dark:text-gray-400">
                When I'm not coding, you'll find me strumming the guitar, vibing to music from every genre, watching anime, or playing cricket and table tennis with friends. I believe creativity doesn't end with the keyboard — it flows through everything I do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
