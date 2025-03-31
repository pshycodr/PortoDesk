const BioSection = () => {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="w-2 h-6 bg-blue-500 mr-3 rounded-full"></span>
          My Story
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            I'm a passionate developer with a designer's eye, specializing in creating 
            immersive digital experiences. With over 5 years in the industry, I've helped 
            startups and Fortune 500 companies bring their visions to life.
          </p>
          
          <p>
            My approach combines technical expertise with creative problem-solving. 
            I believe in writing clean, efficient code that doesn't compromise on 
            aesthetic appeal.
          </p>
          
          <p>
            When I'm not coding, you'll find me hiking, photography, or experimenting 
            with new web technologies. I'm constantly learning and pushing the boundaries 
            of what's possible in digital experiences.
          </p>
        </div>
      </div>
    );
  };
  
  export default BioSection;