import React from 'react';

const videos = [
    {
      id: 1,
      title: "The Basic Rules of Basket ball",
      thumbnail: "https://i.ytimg.com/vi/XbtmGKif7Ck/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
      description: "The Basic Rules of Basketball explains essential basketball rules, including dribbling, scoring, fouls, and gameplay structure. It provides a simple yet informative guide for beginners to understand how the game is played effectively",
    },
    {
      id: 2,
      title: "The Basketball Scoring System",
      thumbnail: "https://i.ytimg.com/vi/dV-jZKwQHjA/default.jpg",
      url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
      description: "The Basketball Scoring System explains how points are awarded in basketball, including field goals (2-pointers, 3-pointers) and free throws (1 point each). It covers key rules, scoring strategies, and how different shots impact the game",
    },
    {
      id: 3,
      title: "The Basketball Violations",
      thumbnail: "https://i.ytimg.com/vi/-I7hpepS5e4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
      description: "The Basketball Violations explains common rule violations in basketball, such as traveling, double dribbling, shot clock violations, and fouls. It provides clear examples to help players understand and avoid these mistakes during gameplay.",
    },
    {
      id: 4,
      title: "Traveling in Basketball",
      thumbnail: "https://i.ytimg.com/vi/cGXFXEJUEpI/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
      description: "Traveling in Basketball explains the traveling violation, which occurs when a player moves illegally without dribbling. It covers common mistakes, examples, and tips to avoid traveling, helping players understand and improve their footwork in the game.",
    },
    {
        id: 5,
        title: "Time Violations",
        thumbnail: "https://img.youtube.com/vi/4GKsOX-UmA0/default.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Time Violations in Basketball explains key time-related rules such as the 24-second shot clock, 8-second backcourt rule, 5-second inbound rule, and 3-second lane violation. It provides clear examples to help players understand how to avoid these violations.",
      },
      {
        id: 6,
        title: "Fouls in Basketball",
        thumbnail: "https://img.youtube.com/vi/UJbBUi7SgtM/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The video Fouls in Basketball explains different types of fouls, including personal, technical, and flagrant fouls. It covers how fouls impact the game, free throw rules, and defensive mistakes, helping players understand fair play and avoid penalties.",
      },
      {
        id: 7,
        title: "Choosing Basketball Equipment",
        thumbnail:"https://img.youtube.com/vi/qgedPFhewVg/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Choosing Basketball Equipment guides players on selecting the right basketball, shoes, and protective gear. It highlights key factors like material, grip, and comfort to enhance performance and prevent injuries, making it essential for beginners and seasoned players alike.",
      },
      {
        id: 8,
        title: "Basketball Positions and Roles",
        thumbnail: "https://img.youtube.com/vi/4_4CymXARWQ/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The video Basketball Positions and Roles explains the five key positions in basketball—Point Guard, Shooting Guard, Small Forward, Power Forward, and Center. It details their responsibilities, strengths, and how each contributes to the team's strategy and success.",
      },
      {
        id: 9,
        title: "Warming up without a Ball",
        thumbnail: "https://img.youtube.com/vi/kI72juFRuEI/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Warming Up Without a Ball – Basketball demonstrates essential warm-up exercises to improve flexibility, agility, and strength before playing. It covers dynamic stretches, footwork drills, and movement exercises to help players prevent injuries and enhance overall performance on the court",
      },
      {
        id: 10,
        title: "Warming up with the Ball",
        thumbnail: "https://i.ytimg.com/vi/Z4iq2mJ7SeU/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Warming Up with the Ball – Basketball demonstrates essential warm-up drills using a basketball to improve ball control, coordination, and flexibility. It focuses on effective pre-game exercises to enhance player performance and reduce the risk of injuries.",
      },
      {
        id: 11,
        title: "The Basic Stance",
        thumbnail: "https://img.youtube.com/vi/0V92sII3EFw/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The Basic Stance Basketball explains the fundamental stance needed for balance, control, and agility in basketball. It covers proper foot positioning, knee bending, and hand placement to improve defense, dribbling, and shooting efficiency. Perfect for beginners mastering the basics",
      },
      {
        id: 12,
        title: "The Triple Threat Position",
        thumbnail: "https://img.youtube.com/vi/SqmRrYChlZs/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The Triple Threat Position in Basketball explains the fundamental stance allowing players to dribble, pass, or shoot effectively. It covers proper foot placement, hand positioning, and how to use this stance to maintain control and create offensive opportunities",
      },
      {
        id: 13,
        title: "The Two-Handed Pass: Chest and Bounce",
        thumbnail: "https://i.ytimg.com/vi/sKd6aAN8CeY/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The Two-Handed Pass: Chest and Bounce demonstrates the fundamentals of two essential basketball passes—chest pass and bounce pass. It explains proper hand positioning, passing techniques, and when to use each pass for effective ball movement and teamwork.",
      },
      {
        id: 14,
        title: "Catching the Ball",
        thumbnail: "https://i.ytimg.com/vi/jfQy9nbHMB4/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Catching the Ball – Basketball explains essential techniques for properly catching a basketball, including hand positioning, grip, and reaction timing. It emphasizes maintaining control, improving coordination, and reducing turnovers, making it ideal for players looking to refine their fundamental skills.",
      },
      {
        id: 15,
        title: "The Two-Handed Overhead Pass",
        thumbnail: "https://img.youtube.com/vi/_cusca-kwWs/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description:" The Two-Handed Overhead Pass in Basketball demonstrates how to execute this pass effectively. It covers proper hand positioning, arm movement, and ideal situations to use it, helping players improve passing accuracy and ball control on the court",
      },
      {
        id: 16,
        title: "The Dribble Pass",
        thumbnail: "https://i.ytimg.com/vi/eufP0_bNGBw/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The Dribble Pass in Basketball explains how to effectively use the dribble pass to move the ball while maintaining control. It covers key techniques, benefits, and tips for executing accurate and quick passes to teammates during gameplay.",
      },
      {
        id: 17,
        title: "The Wraparound Pass",
        thumbnail: "https://img.youtube.com/vi/vWRFwvMZ1VE/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description:"The Wraparound Pass in Basketball demonstrates how to execute this advanced passing technique effectively. It covers proper hand positioning, timing, and situational usage to evade defenders and create scoring opportunities, making it a valuable skill for players." ,
      },
      {
        id: 18,
        title: "The Baseball Pass",
        thumbnail: "https://img.youtube.com/vi/L2cBs4KDbAY/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The Baseball Pass in Basketball explains how to execute a powerful, long-distance pass using a baseball-style throwing motion. It covers proper grip, stance, and technique to improve passing accuracy and efficiency in fast-break situations. Perfect for all skill levels!",
      },
      {
        id: 19,
        title: "How to Dribble",
        thumbnail: "https://img.youtube.com/vi/7oIruC7gva8/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "How to Dribble a Basketball teaches essential dribbling techniques, including hand positioning, control, and movement strategies. It covers drills to improve ball-handling skills, helping players develop confidence, speed, and coordination for better gameplay. Perfect for beginners and advanced players!",
      },
      {
        id: 20,
        title: "Moving and Dribbling",
        thumbnail: "https://i.ytimg.com/vi/a6JKbMn3ZkA/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Moving and Dribbling in Basketball covers essential dribbling techniques, footwork, and movement strategies to improve ball control. It explains key skills like crossover, speed dribbling, and protecting the ball, helping players enhance their game efficiency",
      },
      {
        id: 21,
        title: "Dribbling: Stopping and Driving",
        thumbnail: "https://i.ytimg.com/vi/FIDeOIcq278/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Dribbling: Stopping and Driving teaches essential basketball dribbling techniques, focusing on stopping effectively and driving past defenders. It covers footwork, control, and timing to improve agility and offensive play, making it ideal for players of all levels.",
      },
      {
        id: 22,
        title: "Different Dribbling Techniques",
        thumbnail: "https://img.youtube.com/vi/HKIg8_jVs1E/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description:"Different Dribbling Techniques in Basketball demonstrates essential dribbling skills, including crossover, behind-the-back, between-the-legs, and spin moves. It helps players improve ball control, agility, and handling for better performance on the court" ,
      },
  ];

function Begpage() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "black",
        color: "#ffffff",
        padding: "20px",
        boxSizing: "border-box",
        marginTop: "80px",
        position: "relative",
      }}
    >
      {/* Vertical Connecting Line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "0",
          bottom: "0",
          width: "3px",
          backgroundColor: "white",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />

      {/* Left Column */}
      <div style={{ flex: "1 1 50%", padding: "10px", boxSizing: "border-box" }}>
        {videos.slice(0, Math.ceil(videos.length / 2)).map((video, index) => (
          <div
            key={video.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              padding: "15px",
              backgroundColor: "black",
              borderRadius: "8px",
              border: "2px solid #ea9215",
              position: "relative",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginRight: "15px",
                color: "#ea9215",
              }}
            >
              {video.id}.
            </span>
            <a href={video.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={video.thumbnail}
                alt={video.title}
                style={{
                  width: "120px",
                  height: "80px",
                  borderRadius: "8px",
                  marginRight: "15px",
                }}
              />
            </a>
            <div>
              <h5 style={{ margin: "0", fontSize: "1.2rem", fontWeight: "600" }}>{video.title}</h5>
              <p style={{ margin: "5px 0 0", fontSize: "0.9rem", color: "#b0b0b0" }}>{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div style={{ flex: "1 1 50%", padding: "10px", boxSizing: "border-box" }}>
        {videos.slice(Math.ceil(videos.length / 2)).map((video, index) => (
          <div
            key={video.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              padding: "15px",
              backgroundColor: "black",
              borderRadius: "8px",
              border: "2px solid #ea9215",
              position: "relative",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginRight: "15px",
                color: "#ea9215",
              }}
            >
              {video.id}.
            </span>
            <a href={video.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={video.thumbnail}
                alt={video.title}
                style={{
                  width: "120px",
                  height: "80px",
                  borderRadius: "8px",
                  marginRight: "15px",
                }}
              />
            </a>
            <div>
              <h5 style={{ margin: "0", fontSize: "1.2rem", fontWeight: "600" }}>{video.title}</h5>
              <p style={{ margin: "5px 0 0", fontSize: "0.9rem", color: "#b0b0b0" }}>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Begpage;
