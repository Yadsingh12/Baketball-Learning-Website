import React from 'react';


const videos = [
    {
      id: 1,
      title: "The Crossover Dribble",
      thumbnail: "https://i.ytimg.com/vi/M3yD-gwjoRE/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=M3yD-gwjoRE&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=24",
      description: "The Crossover Dribble in Basketball explains the technique and importance of the crossover dribble. It demonstrates how to use this move effectively to change direction, evade defenders, and improve ball-handling skills for better gameplay",
    },
    {
      id: 2,
      title: "The Behind-the-Back Crossover",
      thumbnail: "https://i.ytimg.com/vi/QeGP09d8oSA/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=QeGP09d8oSA&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=25",
      description: "The Behind-the-Back Crossover  demonstrates how to effectively execute this advanced dribbling move. It covers key techniques, footwork, and hand placement to improve ball control and deception, helping players enhance their handling skills on the court.",},
    {
      id: 3,
      title: "The Between-the-Legs Crossover",
      thumbnail: "https://i.ytimg.com/vi/H1qNVDslNJs/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=H1qNVDslNJs&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=26",
      description: "The Between-the-Legs Crossover teaches how to execute a smooth and effective between-the-legs dribble move. It covers proper footwork, hand placement, and timing to improve ball-handling skills and create space from defenders.",},
    {
      id: 4,
      title: "The Reverse Crossover",
      thumbnail: "https://img.youtube.com/vi/PRwvU26wKm4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=PRwvU26wKm4&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=27",
      description: "The Reverse Crossover demonstrates how to execute a reverse crossover dribble effectively in basketball. It explains footwork, hand placement, and timing to deceive defenders and improve ball-handling skills, making it a valuable move for players.",},
    {
        id: 5,
        title: "How to Shoot",
        thumbnail: "https://img.youtube.com/vi/SyvuSxCyfi0/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=SyvuSxCyfi0&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=28",
        description: "How to Shoot in Basketball provides essential tips on proper shooting techniques, including hand placement, stance, and follow-through. It helps players improve accuracy and consistency, making it ideal for beginners and those looking to refine their shooting skills",},
      {
        id: 6,
        title: "The Jump Shot",
        thumbnail: "https://i.ytimg.com/vi/qhgs5ZODc4A/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=qhgs5ZODc4A&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=29",
        description: "The Jump Shot in Basketball explains the fundamentals of executing a perfect jump shot, including body positioning, hand placement, and follow-through. It provides essential tips to improve shooting accuracy and consistency for players at all levels.",},
      {
        id: 7,
        title: "The Free Throw",
        thumbnail:"https://i.ytimg.com/vi/iW2VFzBiaQo/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=iW2VFzBiaQo&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=30",
        description: "The Free Throw in Basketball explains the fundamentals of free throw shooting, including proper stance, hand positioning, and follow-through. It provides key tips to improve accuracy and consistency, helping players master this essential skill in basketball.",},
      {
        id: 8,
        title: "The Lay Up",
        thumbnail: "https://img.youtube.com/vi/q4IqeXob_qg/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=q4IqeXob_qg&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=31",
        description: "This video provides a step-by-step guide on how to perform a layup, one of the most essential and fundamental basketball shots. It covers key techniques such as foot placement, hand positioning, and timing while driving toward the basket.",},
      {
        id: 9,
        title: "the Changing your Feet in a Lay Up",
        thumbnail: "https://img.youtube.com/vi/ukCrnEtQxio/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=ukCrnEtQxio&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=32",
        description: "The video demonstrates how to fake a defender by changing foot positioning during a layup, commonly known as the Eurostep. This technique helps players evade defenders and create clear scoring opportunities",},
      {
        id: 10,
        title: "The Lay-Up: Power Lay-Ups, Reverse Lay-Ups and One-Step Lay-Ups",
        thumbnail: "https://i.ytimg.com/vi/Wp3nQOG4D4o/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=Wp3nQOG4D4o&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=33",
        description: "This video teaches three lay-up variations—power, reverse, and one-step—to enhance your basketball skills. It offers practical demonstrations and tips to improve your finishing techniques in various game situations",},
      {
        id: 11,
        title: "The hook shot",
        thumbnail: "https://i.ytimg.com/vi/uh_Qd2awC9Y/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=uh_Qd2awC9Y&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=34",
        description: "The hook shot is a one-handed basketball technique that’s a game-changer for inside players. In this video, we’ll teach you how to execute it like a pro! Whether you're a beginner or looking to refine your skills."},
      {
        id: 12,
        title: "The V Cut",
        thumbnail: "https://img.youtube.com/vi/QpSXkMuMf7Q/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=QpSXkMuMf7Q&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=35",
        description: "The V Cut in basketball is a technique used to create separation from a defender. The player makes a sharp, angled cut in the shape of a V to receive the ball. This move is crucial for getting open for passes. For more detailed instruction, you can watch the video",},
      {
        id: 13,
        title: "The Backdoor Cut",
        thumbnail: "https://i.ytimg.com/vi/O4EX3P76h_U/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=O4EX3P76h_U&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=36",
        description: "The Backdoor Cut in basketball is a strategic move where a player moves behind a defender to receive a pass. This video explains how to effectively execute the cut for creating scoring opportunities",},
      {
        id: 14,
        title: "The Give-and-Go",
        thumbnail: "https://i.ytimg.com/vi/LOL5ZNuP7vk/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=LOL5ZNuP7vk&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=37",
        description: "The Give-and-Go in basketball refers to a quick two-player offensive play where a player passes the ball to a teammate and immediately cuts towards the basket to receive a return pass. It creates a fast and effective scoring opportunity by exploiting defensive gaps",},
      {
        id: 15,
        title: "The Fast Break",
        thumbnail: "https://img.youtube.com/vi/FTQ64Vd-NQ8/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=FTQ64Vd-NQ8&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=38",
        description:"The video explains the concept of a fast break in basketball, showcasing strategies for quick transitions from defense to offense. It highlights the importance of speed, teamwork, and decision-making for successful fast breaks",},
      {
        id: 16,
        title: "Attacking the Low Post",
        thumbnail: "https://i.ytimg.com/vi/OkSbF8g6_v0/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=OkSbF8g6_v0&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=39",
        description: "The video demonstrates techniques for attacking the low post in basketball, including proper footwork, positioning, and how to create scoring opportunities through effective post moves and using body control against defenders.",},
      {
        id: 17,
        title: "Setting and Using a Screen",
        thumbnail: "https://img.youtube.com/vi/CTnSABsyzIE/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=CTnSABsyzIE&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=40",
        description:"The video explains how to set and use a screen in basketball, demonstrating techniques for creating effective picks to free up teammates for better shot opportunities or driving lanes. It provides tips for both offensive and defensive players.",},
      {
        id: 18,
        title: "Catching an Offensive Rebounder",
        thumbnail: "https://i.ytimg.com/vi/4_L5s2w-YNo/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=4_L5s2w-YNo&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=41",
        description: "This video explains techniques for catching an offensive rebound in basketball, focusing on positioning, timing, and body control to secure the ball after a missed shot and create additional scoring opportunities.",  },
      
  ];

function Inter() {
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
    <div
      style={{
        flex: "1 1 50%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {videos.slice(0, Math.ceil(videos.length / 2)).map((video) => (
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
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
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
            <h5
              style={{
                margin: "0",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              {video.title}
            </h5>
            <p
              style={{
                margin: "5px 0 0",
                fontSize: "0.9rem",
                color: "#b0b0b0",
              }}
            >
              {video.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Column */}
    <div
      style={{
        flex: "1 1 50%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {videos.slice(Math.ceil(videos.length / 2)).map((video) => (
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
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
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
            <h5
              style={{
                margin: "0",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              {video.title}
            </h5>
            <p
              style={{
                margin: "5px 0 0",
                fontSize: "0.9rem",
                color: "#b0b0b0",
              }}
            >
              {video.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Inter
