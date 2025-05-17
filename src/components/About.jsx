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
                I'm a passionate Frontend Developer with a strong foundation in building modern web applications. With a
                keen eye for design and a commitment to writing clean, efficient code, I strive to create digital
                experiences that are both beautiful and functional.
              </p>

              <h3 className="text-2xl font-semibold text-gray-600 dark:text-white mb-4">My Journey</h3>
              <p className="text-gray-400 dark:text-gray-400 mb-6">
                My journey in web development began with a curiosity about how websites work. This curiosity led me to
                explore HTML, CSS, and JavaScript, and I quickly fell in love with the process of bringing designs to
                life through code. Over the years, I've honed my skills in modern frontend frameworks like React, and
                I'm constantly learning new technologies to stay at the forefront of web development.
              </p>

              <h3 className="text-2xl font-semibold text-gray-600 dark:text-white mb-4">My Approach</h3>
              <p className="text-gray-400 dark:text-gray-400 mb-6">
                I believe in a user-centered approach to development. Every line of code I write is with the end user in
                mind, ensuring that the applications I build are not only visually appealing but also intuitive and
                accessible. I'm passionate about performance optimization and responsive design, making sure that
                websites work flawlessly across all devices.
              </p>

              <h3 className="text-2xl font-semibold text-gray-600 dark:text-white mb-4">When I'm Not Coding</h3>
              <p className="text-gray-400 dark:text-gray-400">
                Outside of development, I enjoy [your hobbies or interests]. I believe that these activities help me
                maintain a balanced perspective and often inspire creative solutions to technical challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
