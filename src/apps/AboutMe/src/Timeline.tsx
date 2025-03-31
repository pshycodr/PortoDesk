const Timeline = () => {
    const experiences = [
      {
        year: "2021 - Present",
        role: "Senior UI Developer",
        company: "TechVision Inc.",
        description: "Leading frontend development for enterprise SaaS products."
      },
      {
        year: "2019 - 2021",
        role: "Frontend Developer",
        company: "DigitalCraft Studios",
        description: "Built interactive web applications for clients worldwide."
      },
      {
        year: "2017 - 2019",
        role: "Junior Developer",
        company: "WebStart Solutions",
        description: "Started my career building WordPress sites and learning React."
      }
    ];
  
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="w-2 h-6 bg-blue-500 mr-3 rounded-full"></span>
          Experience Timeline
        </h2>
        
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-600"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              {/* Dot */}
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-800"></div>
              
              <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all">
                <span className="text-blue-400 text-sm">{exp.year}</span>
                <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                <p className="text-gray-400 font-medium">{exp.company}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Timeline;