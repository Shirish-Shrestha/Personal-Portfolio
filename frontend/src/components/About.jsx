import { useState, useEffect, useRef } from "react";

const About = () => {
  const [counters, setCounters] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const highlights = [
    { number: 2, suffix: "+", label: "Years Experience" },
    { number: 10, suffix: "+", label: "Projects Built" },
    { number: 100, suffix: "%", label: "Client Satisfaction" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    highlights.forEach((highlight, index) => {
      let start = 0;
      const end = highlight.number;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = end;
            return newCounters;
          });
          clearInterval(timer);
        } else {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(start);
            return newCounters;
          });
        }
      }, 16);
    });
  };

  const skills = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", 
    "JavaScript", "HTML/CSS", "Git", "Responsive Design"
  ];

  return (
    <div className="bg-white py-20" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">About</h2>
          <div className="w-12 h-0.5 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                I build things for the web. Started with curiosity, now it's passion.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Two years ago, I wrote my first line of code. Today, I craft digital 
                experiences that people actually enjoy using. I believe good design 
                should be invisible—it just works.
              </p>

              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me listening to music or watching cricket. 
                Both teach patience and timing—skills that surprisingly translate well to debugging.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {highlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-light text-gray-900 mb-1">
                    {counters[index]}{item.suffix}
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-normal text-gray-900 mb-6">Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="text-gray-600 text-sm py-2 px-3 bg-gray-50 rounded-sm hover:bg-gray-100 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <p className="text-gray-600 leading-relaxed">
                Currently exploring modern web technologies and focusing on creating 
                performant, accessible applications that solve real problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;