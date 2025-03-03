import React from 'react';

const videos = [
    { id: 1, title: "Defense in basketball", thumbnail: "https://img.youtube.com/vi/QhkqMQkY494/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=QhkqMQkY494&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=42", description: "it likely covers defensive strategies and techniques in basketball, focusing on positioning, footwork, and how to effectively guard opponents. Let me know if you'd like any tips on basketball defense!" },
    { id: 2, title: "Defend the Ball-Handler in basketball", thumbnail: "https://img.youtube.com/vi/J9KL8YjFMm4/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=J9KL8YjFMm4&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=43", description: "The video likely covers techniques for effectively defending against a ball-handler, focusing on body positioning, footwork, and how to prevent the opponent from making a successful play. It will include tips on defensive stances and common mistakes to avoid" },
    { id: 3, title: "How to Guarding a player without the ball", thumbnail: "https://img.youtube.com/vi/6L6QPqrtCGc/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=6L6QPqrtCGc&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=44", description: "The video explains effective techniques for guarding a player without the ball in basketball, focusing on maintaining defensive positioning, anticipation, and footwork to limit offensive opportunities and create turnovers." },
    { id: 4, title: "Defending the Low Post", thumbnail: "https://img.youtube.com/vi/pfrlIvz92N4/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=pfrlIvz92N4&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=45", description: "The video 'Defending the Low Post' focuses on techniques for defending against post players in basketball, covering positioning, footwork, and strategies to prevent easy scoring opportunities near the basket." },
    { id: 5, title: "Catching an Opponent's Rebound", thumbnail: "https://img.youtube.com/vi/xytOab81wFc/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=xytOab81wFc&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=46", description: "it explains the technique of catching an opponent's rebound in basketball, including positioning, timing, and tips for successful grabs under pressure. You can watch the full video for more detailed insights" },
    { id: 6, title: "Man-to-man defense", thumbnail: "https://img.youtube.com/vi/wuWE4T1DHCw/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=wuWE4T1DHCw&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=47", description: "The video explains man-to-man defense in basketball, where each defender is assigned a specific opponent to guard, focusing on positioning, movement, and defensive strategies to prevent the opponent from scoring." },
    { id: 7, title: "Zone Defense", thumbnail: "https://img.youtube.com/vi/N5Nsw0WHvX0/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=N5Nsw0WHvX0&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=48", description: "Zone Defense in basketball is a defensive strategy where players cover specific areas or 'zones' of the court rather than guarding individual opponents. This forces the offensive team to adjust their plays, limiting opportunities for easy shots and movement." },
    { id: 8, title: "Individual Drills: Pivot", thumbnail: "https://img.youtube.com/vi/csHZsLnD_do/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=csHZsLnD_do&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=49", description: "The video demonstrates the pivot drill in basketball, focusing on footwork, balance, and maintaining control while pivoting in different directions to improve offensive movement and decision-making" },
    { id: 9, title: "Individual Exercises: Dribbling", thumbnail: "https://img.youtube.com/vi/OEcySIVd0kM/hqdefault.jpg", url: "https://www.youtube.com/watch?v=OEcySIVd0kM&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=50", description: "The 'Individual Exercises: Dribbling - Beginner' video teaches foundational dribbling skills for basketball, focusing on control, ball handling, and technique, helping beginners improve their dribbling proficiency and coordination on the court" },
    { id: 10, title: "Individual Exercise: Dribbling- Advanced", thumbnail: "https://img.youtube.com/vi/_DA6KPHZlJc/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=_DA6KPHZlJc&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=51", description: "The 'Individual Exercise: Dribbling - Advanced' basketball video demonstrates advanced dribbling techniques, focusing on ball control, speed, and agility. It includes drills to enhance skill development for players at higher levels" },
    { id: 11, title: "Individual Drills: Crossovers", thumbnail: "https://img.youtube.com/vi/k9-80edKplw/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=k9-80edKplw&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=52", description: "The video demonstrates basketball crossover drills, focusing on improving ball-handling skills. It showcases various techniques to enhance agility, speed, and control, crucial for effective offensive play in basketball." },
    { id: 12, title: "Individual Drill: Shooting", thumbnail: "https://img.youtube.com/vi/BgEzaJugxP4/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=BgEzaJugxP4&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=53", description: "The 'Individual Drill: Shooting' video focuses on basketball shooting techniques, demonstrating various drills to improve shooting accuracy, form, and consistency. It provides step-by-step guidance for players at different skill levels." },
    { id: 13, title: "Individual Drill: Attacking the Basket", thumbnail: "https://img.youtube.com/vi/f5xpE_HNEkI/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=f5xpE_HNEkI&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=54", description: "The video demonstrates an individual basketball drill focused on attacking the basket, emphasizing footwork, dribbling, and finishing at the rim through various techniques for improving offensive skills." },
    { id: 14, title: "Individual Drills: Defense", thumbnail: "https://img.youtube.com/vi/rt550JoXKaM/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=rt550JoXKaM&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=55", description: "The video demonstrates individual defensive drills in basketball, focusing on footwork, positioning, and reaction time to improve defensive skills, agility, and on-ball defense, enhancing overall defensive performance on the court" },
    { id: 15, title: "Group Exercise: Zig-Zag and 1-on-1", thumbnail: "https://img.youtube.com/vi/XTSimD364Q8/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=XTSimD364Q8&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=56", description: "The video demonstrates basketball drills focusing on the Zig-Zag and 1-on-1 exercises, helping players improve their dribbling, footwork, and defensive skills through engaging, dynamic movements." },
    { id: 16, title: "Group Drill: Escaping your Marker and 1 on 1", thumbnail: "https://img.youtube.com/vi/QgAWXPWbMd8/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=QgAWXPWbMd8&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=57", description: "The video demonstrates basketball drills focused on escaping a defender's marker and improving 1-on-1 skills. It highlights techniques for creating space, quick moves, and effective scoring against a defender." },
    { id: 17, title: "Group Drills: Shooting on the Spot", thumbnail: "https://img.youtube.com/vi/GqEKJtWEBxs/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=GqEKJtWEBxs&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=58", description: "The video demonstrates group drills focused on shooting on the spot in basketball, improving shooting accuracy and form through repetitive practice. It emphasizes proper technique and positioning for better scoring consistency" },
    { id: 18, title: "Group Drill: Get Past your Opponent", thumbnail: "https://img.youtube.com/vi/jlInsp4k0Uw/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=jlInsp4k0Uw&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=59", description: "The 'Group Drill: Get Past Your Opponent' basketball video demonstrates techniques to improve dribbling and offensive moves, focusing on getting past defenders with speed, agility, and strategic body positioning." },
    { id: 19, title: "Group Drill: the Pick and Roll", thumbnail: "https://img.youtube.com/vi/0wQsF_7lzow/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=0wQsF_7lzow&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=60", description: "The video demonstrates a basketball group drill focusing on the 'Pick and Roll' technique, highlighting player movements, screen setting, and timing to create effective offensive plays for better team coordination." },
    { id: 20, title: "Group Drills: Attacking Without Dribbling", thumbnail: "https://img.youtube.com/vi/8g0spgm5SoI/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=8g0spgm5SoI&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=61", description: "The video demonstrates group drills focused on attacking the basket without dribbling, emphasizing quick passes, movement, and proper positioning to create scoring opportunities and improve team dynamics in basketball." },
    { id: 21, title: "Group Drills: The Rebound", thumbnail: "https://img.youtube.com/vi/X-GZZk8rAVQ/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=X-GZZk8rAVQ&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=62", description: "The video 'Group Drills: The Rebound' focuses on basketball rebound drills, demonstrating techniques and strategies to improve team performance, positioning, and timing for better rebounding in games." },
    { id: 22, title: "Group Drill: One-on-One Fast Breaks", thumbnail: "https://img.youtube.com/vi/rPxrC75PaSw/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=rPxrC75PaSw&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=63", description: "The 'Group Drill: One-on-One Fast Breaks' video demonstrates basketball players practicing fast breaks, focusing on offensive and defensive transitions, timing, and quick decision-making in one-on-one scenarios to enhance gameplay efficiency." },
    { id: 23, title: "Group Drill: Chase the Ball", thumbnail: "https://img.youtube.com/vi/Cto5xQtl6kA/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=Cto5xQtl6kA&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=64", description: "The 'Group Drill: Chase the Ball' video demonstrates a basketball drill where players work in groups, chasing and retrieving the ball to improve speed, agility, and team coordination during practice." },
    { id: 24, title: "Group Drills: Ten Passes", thumbnail: "https://img.youtube.com/vi/5oDEzVnlqF4/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=5oDEzVnlqF4&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=65", description: "The 'Group Drills: Ten Passes' basketball video demonstrates a fast-paced passing drill, focusing on teamwork, accuracy, and quick decision-making, where players complete ten consecutive passes without interruption." },
    { id: 25, title: "Group Drills: The Shootout", thumbnail: "https://img.youtube.com/vi/tjsSPqQ4Nn4/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=tjsSPqQ4Nn4&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=66", description: "The video 'Group Drills: The Shootout' demonstrates basketball shooting drills designed to improve accuracy and teamwork, featuring competitive exercises for players to enhance their skills in game-like situations." },
    { id: 26, title: "Stretching and Cooling Down", thumbnail: "https://img.youtube.com/vi/Ee1reoBypmY/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=Ee1reoBypmY&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=67", description: "This video demonstrates essential stretching and cooling down exercises for basketball players to improve flexibility, prevent injuries, and enhance recovery, featuring key techniques and proper form." }
  ];
  

  function Advanced() {
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
  
  export default Advanced;