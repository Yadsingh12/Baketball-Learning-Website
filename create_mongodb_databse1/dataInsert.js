const { MongoClient } = require("mongodb");

// Replace with your MongoDB Atlas connection string
const uri = MONGO_URI;

const client = new MongoClient(uri);

const videos = [
    {
        title: "The Basic Rules of Basket ball",
        thumbnail: "https://i.ytimg.com/vi/XbtmGKif7Ck/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
        description: "The Basic Rules of Basketball explains essential basketball rules, including dribbling, scoring, fouls, and gameplay structure. It provides a simple yet informative guide for beginners to understand how the game is played effectively",
    },
    {
        title: "The Basketball Scoring System",
        thumbnail: "https://i.ytimg.com/vi/dV-jZKwQHjA/default.jpg",
        url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
        description: "The Basketball Scoring System explains how points are awarded in basketball, including field goals (2-pointers, 3-pointers) and free throws (1 point each). It covers key rules, scoring strategies, and how different shots impact the game",
    },
    {
        title: "The Basketball Violations",
        thumbnail: "https://i.ytimg.com/vi/-I7hpepS5e4/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
        description: "The Basketball Violations explains common rule violations in basketball, such as traveling, double dribbling, shot clock violations, and fouls. It provides clear examples to help players understand and avoid these mistakes during gameplay.",
    },
    {
        title: "Traveling in Basketball",
        thumbnail: "https://i.ytimg.com/vi/cGXFXEJUEpI/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Traveling in Basketball explains the traveling violation, which occurs when a player moves illegally without dribbling. It covers common mistakes, examples, and tips to avoid traveling, helping players understand and improve their footwork in the game.",
    },
    {
        title: "Time Violations",
        thumbnail: "https://img.youtube.com/vi/4GKsOX-UmA0/default.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Time Violations in Basketball explains key time-related rules such as the 24-second shot clock, 8-second backcourt rule, 5-second inbound rule, and 3-second lane violation. It provides clear examples to help players understand how to avoid these violations.",
    },
    {
        title: "Fouls in Basketball",
        thumbnail: "https://img.youtube.com/vi/UJbBUi7SgtM/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The video Fouls in Basketball explains different types of fouls, including personal, technical, and flagrant fouls. It covers how fouls impact the game, free throw rules, and defensive mistakes, helping players understand fair play and avoid penalties.",
    },
    {
        title: "Choosing Basketball Equipment",
        thumbnail: "https://img.youtube.com/vi/qgedPFhewVg/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Choosing Basketball Equipment guides players on selecting the right basketball, shoes, and protective gear. It highlights key factors like material, grip, and comfort to enhance performance and prevent injuries, making it essential for beginners and seasoned players alike.",
    },
    {
        title: "Basketball Positions and Roles",
        thumbnail: "https://img.youtube.com/vi/4_4CymXARWQ/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The video Basketball Positions and Roles explains the five key positions in basketball—Point Guard, Shooting Guard, Small Forward, Power Forward, and Center. It details their responsibilities, strengths, and how each contributes to the team's strategy and success.",
    },
    {
        title: "Warming up without a Ball",
        thumbnail: "https://img.youtube.com/vi/kI72juFRuEI/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Warming Up Without a Ball – Basketball demonstrates essential warm-up exercises to improve flexibility, agility, and strength before playing. It covers dynamic stretches, footwork drills, and movement exercises to help players prevent injuries and enhance overall performance on the court",
    },
    {
        title: "Warming up with the Ball",
        thumbnail: "https://i.ytimg.com/vi/Z4iq2mJ7SeU/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Warming Up with the Ball – Basketball demonstrates essential warm-up drills using a basketball to improve ball control, coordination, and flexibility. It focuses on effective pre-game exercises to enhance player performance and reduce the risk of injuries.",
    },
    {
        title: "The Basic Stance",
        thumbnail: "https://img.youtube.com/vi/0V92sII3EFw/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The Basic Stance Basketball explains the fundamental stance needed for balance, control, and agility in basketball. It covers proper foot positioning, knee bending, and hand placement to improve defense, dribbling, and shooting efficiency. Perfect for beginners mastering the basics",
    },
    {
        title: "The Triple Threat Position",
        thumbnail: "https://img.youtube.com/vi/SqmRrYChlZs/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The Triple Threat Position in Basketball explains the fundamental stance allowing players to dribble, pass, or shoot effectively. It covers proper foot placement, hand positioning, and how to use this stance to maintain control and create offensive opportunities",
    },
    {
        title: "The Two-Handed Pass: Chest and Bounce",
        thumbnail: "https://i.ytimg.com/vi/sKd6aAN8CeY/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The Two-Handed Pass: Chest and Bounce demonstrates the fundamentals of two essential basketball passes—chest pass and bounce pass. It explains proper hand positioning, passing techniques, and when to use each pass for effective ball movement and teamwork.",
    },
    {
        title: "Catching the Ball",
        thumbnail: "https://i.ytimg.com/vi/jfQy9nbHMB4/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Catching the Ball – Basketball explains essential techniques for properly catching a basketball, including hand positioning, grip, and reaction timing. It emphasizes maintaining control, improving coordination, and reducing turnovers, making it ideal for players looking to refine their fundamental skills.",
    },
    {
        title: "The Two-Handed Overhead Pass",
        thumbnail: "https://img.youtube.com/vi/_cusca-kwWs/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: " The Two-Handed Overhead Pass in Basketball demonstrates how to execute this pass effectively. It covers proper hand positioning, arm movement, and ideal situations to use it, helping players improve passing accuracy and ball control on the court",
    },
    {
        title: "The Dribble Pass",
        thumbnail: "https://i.ytimg.com/vi/eufP0_bNGBw/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The Dribble Pass in Basketball explains how to effectively use the dribble pass to move the ball while maintaining control. It covers key techniques, benefits, and tips for executing accurate and quick passes to teammates during gameplay.",
    },
    {
        title: "The Wraparound Pass",
        thumbnail: "https://img.youtube.com/vi/vWRFwvMZ1VE/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The Wraparound Pass in Basketball demonstrates how to execute this advanced passing technique effectively. It covers proper hand positioning, timing, and situational usage to evade defenders and create scoring opportunities, making it a valuable skill for players.",
    },
    {
        title: "The Baseball Pass",
        thumbnail: "https://img.youtube.com/vi/L2cBs4KDbAY/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "The Baseball Pass in Basketball explains how to execute a powerful, long-distance pass using a baseball-style throwing motion. It covers proper grip, stance, and technique to improve passing accuracy and efficiency in fast-break situations. Perfect for all skill levels!",
    },
    {
        title: "How to Dribble",
        thumbnail: "https://img.youtube.com/vi/7oIruC7gva8/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "How to Dribble a Basketball teaches essential dribbling techniques, including hand positioning, control, and movement strategies. It covers drills to improve ball-handling skills, helping players develop confidence, speed, and coordination for better gameplay. Perfect for beginners and advanced players!",
    },
    {
        title: "Moving and Dribbling",
        thumbnail: "https://i.ytimg.com/vi/a6JKbMn3ZkA/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Moving and Dribbling in Basketball covers essential dribbling techniques, footwork, and movement strategies to improve ball control. It explains key skills like crossover, speed dribbling, and protecting the ball, helping players enhance their game efficiency",
    },
    {
        title: "Dribbling: Stopping and Driving",
        thumbnail: "https://i.ytimg.com/vi/FIDeOIcq278/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Dribbling: Stopping and Driving teaches essential basketball dribbling techniques, focusing on stopping effectively and driving past defenders. It covers footwork, control, and timing to improve agility and offensive play, making it ideal for players of all levels.",
    },
    {
        title: "Different Dribbling Techniques",
        thumbnail: "https://img.youtube.com/vi/HKIg8_jVs1E/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
        description: "Different Dribbling Techniques in Basketball demonstrates essential dribbling skills, including crossover, behind-the-back, between-the-legs, and spin moves. It helps players improve ball control, agility, and handling for better performance on the court",
    },
    {
        title: "The Crossover Dribble",
        thumbnail: "https://i.ytimg.com/vi/M3yD-gwjoRE/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=M3yD-gwjoRE&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=24",
        description: "The Crossover Dribble in Basketball explains the technique and importance of the crossover dribble. It demonstrates how to use this move effectively to change direction, evade defenders, and improve ball-handling skills for better gameplay",
    },
    {
        title: "The Behind-the-Back Crossover",
        thumbnail: "https://i.ytimg.com/vi/QeGP09d8oSA/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=QeGP09d8oSA&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=25",
        description: "The Behind-the-Back Crossover  demonstrates how to effectively execute this advanced dribbling move. It covers key techniques, footwork, and hand placement to improve ball control and deception, helping players enhance their handling skills on the court.",
    },
    {
        title: "The Between-the-Legs Crossover",
        thumbnail: "https://i.ytimg.com/vi/H1qNVDslNJs/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=H1qNVDslNJs&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=26",
        description: "The Between-the-Legs Crossover teaches how to execute a smooth and effective between-the-legs dribble move. It covers proper footwork, hand placement, and timing to improve ball-handling skills and create space from defenders.",
    },
    {
        title: "The Reverse Crossover",
        thumbnail: "https://img.youtube.com/vi/PRwvU26wKm4/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=PRwvU26wKm4&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=27",
        description: "The Reverse Crossover demonstrates how to execute a reverse crossover dribble effectively in basketball. It explains footwork, hand placement, and timing to deceive defenders and improve ball-handling skills, making it a valuable move for players.",
    },
    {
        title: "How to Shoot",
        thumbnail: "https://img.youtube.com/vi/SyvuSxCyfi0/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=SyvuSxCyfi0&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=28",
        description: "How to Shoot in Basketball provides essential tips on proper shooting techniques, including hand placement, stance, and follow-through. It helps players improve accuracy and consistency, making it ideal for beginners and those looking to refine their shooting skills",
    },
    {
        title: "The Jump Shot",
        thumbnail: "https://i.ytimg.com/vi/qhgs5ZODc4A/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=qhgs5ZODc4A&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=29",
        description: "The Jump Shot in Basketball explains the fundamentals of executing a perfect jump shot, including body positioning, hand placement, and follow-through. It provides essential tips to improve shooting accuracy and consistency for players at all levels.",
    },
    {
        title: "The Free Throw",
        thumbnail: "https://i.ytimg.com/vi/iW2VFzBiaQo/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=iW2VFzBiaQo&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=30",
        description: "The Free Throw in Basketball explains the fundamentals of free throw shooting, including proper stance, hand positioning, and follow-through. It provides key tips to improve accuracy and consistency, helping players master this essential skill in basketball.",
    },
    {
        title: "The Lay Up",
        thumbnail: "https://img.youtube.com/vi/q4IqeXob_qg/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=q4IqeXob_qg&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=31",
        description: "This video provides a step-by-step guide on how to perform a layup, one of the most essential and fundamental basketball shots. It covers key techniques such as foot placement, hand positioning, and timing while driving toward the basket.",
    },
    {
        title: "the Changing your Feet in a Lay Up",
        thumbnail: "https://img.youtube.com/vi/ukCrnEtQxio/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=ukCrnEtQxio&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=32",
        description: "The video demonstrates how to fake a defender by changing foot positioning during a layup, commonly known as the Eurostep. This technique helps players evade defenders and create clear scoring opportunities",
    },
    {
        title: "The Lay-Up: Power Lay-Ups, Reverse Lay-Ups and One-Step Lay-Ups",
        thumbnail: "https://i.ytimg.com/vi/Wp3nQOG4D4o/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=Wp3nQOG4D4o&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=33",
        description: "This video teaches three lay-up variations—power, reverse, and one-step—to enhance your basketball skills. It offers practical demonstrations and tips to improve your finishing techniques in various game situations",
    },
    {
        title: "The hook shot",
        thumbnail: "https://i.ytimg.com/vi/uh_Qd2awC9Y/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=uh_Qd2awC9Y&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=34",
        description: "The hook shot is a one-handed basketball technique that’s a game-changer for inside players. In this video, we’ll teach you how to execute it like a pro! Whether you're a beginner or looking to refine your skills."
    },
    {
        title: "The V Cut",
        thumbnail: "https://img.youtube.com/vi/QpSXkMuMf7Q/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=QpSXkMuMf7Q&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=35",
        description: "The V Cut in basketball is a technique used to create separation from a defender. The player makes a sharp, angled cut in the shape of a V to receive the ball. This move is crucial for getting open for passes. For more detailed instruction, you can watch the video",
    },
    {
        title: "The Backdoor Cut",
        thumbnail: "https://i.ytimg.com/vi/O4EX3P76h_U/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=O4EX3P76h_U&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=36",
        description: "The Backdoor Cut in basketball is a strategic move where a player moves behind a defender to receive a pass. This video explains how to effectively execute the cut for creating scoring opportunities",
    },
    {
        title: "The Give-and-Go",
        thumbnail: "https://i.ytimg.com/vi/LOL5ZNuP7vk/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=LOL5ZNuP7vk&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=37",
        description: "The Give-and-Go in basketball refers to a quick two-player offensive play where a player passes the ball to a teammate and immediately cuts towards the basket to receive a return pass. It creates a fast and effective scoring opportunity by exploiting defensive gaps",
    },
    {
        title: "The Fast Break",
        thumbnail: "https://img.youtube.com/vi/FTQ64Vd-NQ8/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=FTQ64Vd-NQ8&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=38",
        description: "The video explains the concept of a fast break in basketball, showcasing strategies for quick transitions from defense to offense. It highlights the importance of speed, teamwork, and decision-making for successful fast breaks",
    },
    {
        title: "Attacking the Low Post",
        thumbnail: "https://i.ytimg.com/vi/OkSbF8g6_v0/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=OkSbF8g6_v0&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=39",
        description: "The video demonstrates techniques for attacking the low post in basketball, including proper footwork, positioning, and how to create scoring opportunities through effective post moves and using body control against defenders.",
    },
    {
        title: "Setting and Using a Screen",
        thumbnail: "https://img.youtube.com/vi/CTnSABsyzIE/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=CTnSABsyzIE&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=40",
        description: "The video explains how to set and use a screen in basketball, demonstrating techniques for creating effective picks to free up teammates for better shot opportunities or driving lanes. It provides tips for both offensive and defensive players.",
    },
    {
        title: "Catching an Offensive Rebounder",
        thumbnail: "https://i.ytimg.com/vi/4_L5s2w-YNo/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=4_L5s2w-YNo&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=41",
        description: "This video explains techniques for catching an offensive rebound in basketball, focusing on positioning, timing, and body control to secure the ball after a missed shot and create additional scoring opportunities.",
    },
    {
        title: "Defense in basketball", thumbnail: "https://img.youtube.com/vi/QhkqMQkY494/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=QhkqMQkY494&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=42", description: "it likely covers defensive strategies and techniques in basketball, focusing on positioning, footwork, and how to effectively guard opponents. Let me know if you'd like any tips on basketball"
    },
    {
        title: "Defend the Ball-Handler in basketball", thumbnail: "https://img.youtube.com/vi/J9KL8YjFMm4/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=J9KL8YjFMm4&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=43", description: "The video likely covers techniques for effectively defending against a ball-handler, focusing on body positioning, footwork, and how to prevent the opponent from making a successful play. It will include tips on defensive stances and common mistakes to avoid"
    },
    {
        title: "How to Guarding a player without the ball", thumbnail: "https://img.youtube.com/vi/6L6QPqrtCGc/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=6L6QPqrtCGc&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=44", description: "The video explains effective techniques for guarding a player without the ball in basketball, focusing on maintaining defensive positioning, anticipation, and footwork to limit offensive opportunities and create turnovers."
    },
    {
        title: "Defending the Low Post", thumbnail: "https://img.youtube.com/vi/pfrlIvz92N4/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=pfrlIvz92N4&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=45", description: "The video 'Defending the Low Post' focuses on techniques for defending against post players in basketball, covering positioning, footwork, and strategies to prevent easy scoring opportunities near the basket."
    },
    {
        title: "Catching an Opponent's Rebound", thumbnail: "https://img.youtube.com/vi/xytOab81wFc/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=xytOab81wFc&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=46", description: "it explains the technique of catching an opponent's rebound in basketball, including positioning, timing, and tips for successful grabs under pressure. You can watch the full video for more detailed insights"
    },
    {
        title: "Man-to-man defense", thumbnail: "https://img.youtube.com/vi/wuWE4T1DHCw/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=wuWE4T1DHCw&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=47", description: "The video explains man-to-man defense in basketball, where each defender is assigned a specific opponent to guard, focusing on positioning, movement, and defensive strategies to prevent the opponent from scoring."
    },
    {
        title: "Zone Defense", thumbnail: "https://img.youtube.com/vi/N5Nsw0WHvX0/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=N5Nsw0WHvX0&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=48", description: "Zone Defense in basketball is a defensive strategy where players cover specific areas or 'zones' of the court rather than guarding individual opponents. This forces the offensive team to adjust their plays, limiting opportunities for easy shots and movement."
    },
    {
        title: "Individual Drills: Pivot", thumbnail: "https://img.youtube.com/vi/csHZsLnD_do/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=csHZsLnD_do&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=49", description: "The video demonstrates the pivot drill in basketball, focusing on footwork, balance, and maintaining control while pivoting in different directions to improve offensive movement and decision-making"
    },
    {
        title: "Individual Exercises: Dribbling", thumbnail: "https://img.youtube.com/vi/OEcySIVd0kM/hqdefault.jpg", url: "https://www.youtube.com/watch?v=OEcySIVd0kM&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=50", description: "The 'Individual Exercises: Dribbling - Beginner' video teaches foundational dribbling skills for basketball, focusing on control, ball handling, and technique, helping beginners improve their dribbling proficiency and coordination on the court"
    },
    {
        title: "Individual Exercise: Dribbling- Advanced", thumbnail: "https://img.youtube.com/vi/_DA6KPHZlJc/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=_DA6KPHZlJc&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=51", description: "The 'Individual Exercise: Dribbling - Advanced' basketball video demonstrates advanced dribbling techniques, focusing on ball control, speed, and agility. It includes drills to enhance skill development for players at higher levels"
    },
    {
        title: "Individual Drills: Crossovers", thumbnail: "https://img.youtube.com/vi/k9-80edKplw/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=k9-80edKplw&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=52", description: "The video demonstrates basketball crossover drills, focusing on improving ball-handling skills. It showcases various techniques to enhance agility, speed, and control, crucial for effective offensive play in basketball."
    },
    {
        title: "Individual Drill: Shooting", thumbnail: "https://img.youtube.com/vi/BgEzaJugxP4/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=BgEzaJugxP4&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=53", description: "The 'Individual Drill: Shooting' video focuses on basketball shooting techniques, demonstrating various drills to improve shooting accuracy, form, and consistency. It provides step-by-step guidance for players at different skill levels."
    },
    {
        title: "Individual Drill: Attacking the Basket", thumbnail: "https://img.youtube.com/vi/f5xpE_HNEkI/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=f5xpE_HNEkI&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=54", description: "The video demonstrates an individual basketball drill focused on attacking the basket, emphasizing footwork, dribbling, and finishing at the rim through various techniques for improving offensive skills."
    },
    {
        title: "Individual Drills: Defense", thumbnail: "https://img.youtube.com/vi/rt550JoXKaM/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=rt550JoXKaM&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=55", description: "The video demonstrates individual defensive drills in basketball, focusing on footwork, positioning, and reaction time to improve defensive skills, agility, and on-ball defense, enhancing overall defensive performance on the court"
    },
    {
        title: "Group Exercise: Zig-Zag and 1-on-1", thumbnail: "https://img.youtube.com/vi/XTSimD364Q8/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=XTSimD364Q8&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=56", description: "The video demonstrates basketball drills focusing on the Zig-Zag and 1-on-1 exercises, helping players improve their dribbling, footwork, and defensive skills through engaging, dynamic movements."
    },
    {
        title: "Group Drill: Escaping your Marker and 1 on 1", thumbnail: "https://img.youtube.com/vi/QgAWXPWbMd8/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=QgAWXPWbMd8&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=57", description: "The video demonstrates basketball drills focused on escaping a defender's marker and improving 1-on-1 skills. It highlights techniques for creating space, quick moves, and effective scoring against a defender."
    },
    {
        title: "Group Drills: Shooting on the Spot", thumbnail: "https://img.youtube.com/vi/GqEKJtWEBxs/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=GqEKJtWEBxs&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=58", description: "The video demonstrates group drills focused on shooting on the spot in basketball, improving shooting accuracy and form through repetitive practice. It emphasizes proper technique and positioning for better scoring consistency"
    },
    {
        title: "Group Drill: Get Past your Opponent", thumbnail: "https://img.youtube.com/vi/jlInsp4k0Uw/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=jlInsp4k0Uw&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=59", description: "The 'Group Drill: Get Past Your Opponent' basketball video demonstrates techniques to improve dribbling and offensive moves, focusing on getting past defenders with speed, agility, and strategic body positioning."
    },
    {
        title: "Group Drill: the Pick and Roll", thumbnail: "https://img.youtube.com/vi/0wQsF_7lzow/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=0wQsF_7lzow&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=60", description: "The video demonstrates a basketball group drill focusing on the 'Pick and Roll' technique, highlighting player movements, screen setting, and timing to create effective offensive plays for better team coordination."
    },
    {
        title: "Group Drills: Attacking Without Dribbling", thumbnail: "https://img.youtube.com/vi/8g0spgm5SoI/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=8g0spgm5SoI&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=61", description: "The video demonstrates group drills focused on attacking the basket without dribbling, emphasizing quick passes, movement, and proper positioning to create scoring opportunities and improve team dynamics in basketball."
    },
    {
        title: "Group Drills: The Rebound", thumbnail: "https://img.youtube.com/vi/X-GZZk8rAVQ/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=X-GZZk8rAVQ&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=62", description: "The video 'Group Drills: The Rebound' focuses on basketball rebound drills, demonstrating techniques and strategies to improve team performance, positioning, and timing for better rebounding in games."
    },
    {
        title: "Group Drill: One-on-One Fast Breaks", thumbnail: "https://img.youtube.com/vi/rPxrC75PaSw/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=rPxrC75PaSw&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=63", description: "The 'Group Drill: One-on-One Fast Breaks' video demonstrates basketball players practicing fast breaks, focusing on offensive and defensive transitions, timing, and quick decision-making in one-on-one scenarios to enhance gameplay efficiency."
    },
    {
        title: "Group Drill: Chase the Ball", thumbnail: "https://img.youtube.com/vi/Cto5xQtl6kA/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=Cto5xQtl6kA&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=64", description: "The 'Group Drill: Chase the Ball' video demonstrates a basketball drill where players work in groups, chasing and retrieving the ball to improve speed, agility, and team coordination during practice."
    },
    {
        title: "Group Drills: Ten Passes", thumbnail: "https://img.youtube.com/vi/5oDEzVnlqF4/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=5oDEzVnlqF4&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=65", description: "The 'Group Drills: Ten Passes' basketball video demonstrates a fast-paced passing drill, focusing on teamwork, accuracy, and quick decision-making, where players complete ten consecutive passes without interruption."
    },
    {
        title: "Group Drills: The Shootout", thumbnail: "https://img.youtube.com/vi/tjsSPqQ4Nn4/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=tjsSPqQ4Nn4&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=66", description: "The video 'Group Drills: The Shootout' demonstrates basketball shooting drills designed to improve accuracy and teamwork, featuring competitive exercises for players to enhance their skills in game-like situations."
    },
    {
        title: "Stretching and Cooling Down", thumbnail: "https://img.youtube.com/vi/Ee1reoBypmY/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=Ee1reoBypmY&list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O&index=67", description: "This video demonstrates essential stretching and cooling down exercises for basketball players to improve flexibility, prevent injuries, and enhance recovery, featuring key techniques and proper form."
    }
];


async function insertData() {
    try {
        await client.connect();
        const database = client.db("basketballDB"); // Change to your database name
        const collection = database.collection("videos"); // Change to your collection name

        const result = await collection.insertMany(videos);
        console.log(`${result.insertedCount} videos inserted`);
    } finally {
        await client.close();
    }
}

insertData().catch(console.error);