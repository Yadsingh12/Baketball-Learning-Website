import React, { useState ,useEffect} from 'react';

const questions = [
  {
    text: "What is your height?",
    options: [
        { text: "Below 5'8\" (173 cm)", scores: [5, 3, 1, 0, 0] },
        { text: "5'8\" to 6'0\" (173 cm to 183 cm)", scores: [4, 4, 2, 1, 0] },
        { text: "6'0\" to 6'6\" (183 cm to 198 cm)", scores: [2, 3, 4, 3, 1] },
        { text: "6'6\" to 7'0\" (198 cm to 213 cm)", scores: [0, 1, 3, 4, 4] },
        { text: "Above 7'0\" (213 cm)", scores: [0, 0, 1, 3, 5] }
    ]
},
{
    text: "What is your wingspan compared to your height?",
    options: [
        { text: "Shorter than my height", scores: [3, 2, 1, 0, 0] },
        { text: "About the same as my height", scores: [4, 3, 2, 1, 0] },
        { text: "Slightly longer than my height", scores: [3, 4, 4, 3, 2] },
        { text: "Significantly longer than my height", scores: [0, 1, 3, 4, 5] }
    ]
},
{
    text: "How would you describe your speed and agility?",
    options: [
        { text: "Very fast and agile", scores: [5, 4, 3, 1, 0] },
        { text: "Above average speed and agility", scores: [4, 3, 4, 2, 1] },
        { text: "Average speed and agility", scores: [2, 3, 3, 3, 2] },
        { text: "Below average speed and agility", scores: [0, 1, 2, 4, 3] },
        { text: "Slow but strong", scores: [0, 0, 1, 3, 5] }
    ]
},
{
    text: "What is your strength level?",
    options: [
        { text: "Very strong, can dominate physically", scores: [1, 2, 3, 5, 5] },
        { text: "Above average strength", scores: [2, 3, 4, 4, 3] },
        { text: "Average strength", scores: [3, 3, 3, 2, 1] },
        { text: "Below average strength", scores: [4, 4, 2, 1, 0] },
        { text: "Lean and not very strong", scores: [5, 3, 1, 0, 0] }
    ]
},
{
    text: "How do you prefer to score?",
    options: [
        { text: "Driving to the basket and finishing at the rim", scores: [4, 3, 4, 2, 1] },
        { text: "Shooting mid-range jumpers", scores: [3, 4, 3, 2, 1] },
        { text: "Shooting three-pointers", scores: [4, 5, 3, 1, 0] },
        { text: "Posting up and scoring close to the basket", scores: [1, 2, 3, 5, 5] },
        { text: "Creating plays for others", scores: [5, 3, 2, 1, 0] }
    ]
},
{
    text: "How do you handle the ball?",
    options: [
        { text: "Excellent ball-handling skills, can dribble in traffic", scores: [5, 4, 3, 1, 0] },
        { text: "Good ball-handling skills, but prefer to pass", scores: [4, 3, 2, 1, 0] },
        { text: "Average ball-handling skills", scores: [2, 3, 3, 2, 1] },
        { text: "Poor ball-handling skills, prefer to avoid dribbling", scores: [0, 1, 2, 4, 5] }
    ]
},
{
    text: "What is your passing ability?",
    options: [
        { text: "Excellent passer, can make creative assists", scores: [5, 3, 2, 1, 0] },
        { text: "Good passer, but not my primary skill", scores: [3, 4, 3, 2, 1] },
        { text: "Average passer", scores: [2, 3, 3, 3, 2] },
        { text: "Poor passer, prefer to score", scores: [0, 1, 2, 4, 5] }
    ]
},
{
    text: "How do you perform in rebounding?",
    options: [
        { text: "Excellent rebounder, both offensive and defensive", scores: [1, 2, 3, 5, 5] },
        { text: "Good rebounder, but not my main focus", scores: [2, 3, 4, 4, 3] },
        { text: "Average rebounder", scores: [3, 3, 3, 2, 1] },
        { text: "Poor rebounder, prefer to stay outside", scores: [4, 4, 2, 1, 0] }
    ]
},
{
    text: "How do you defend?",
    options: [
        { text: "Quick and can guard smaller, faster players", scores: [5, 4, 3, 1, 0] },
        { text: "Strong and can guard bigger players in the post", scores: [1, 2, 3, 5, 5] },
        { text: "Versatile, can guard multiple positions", scores: [3, 4, 5, 3, 2] },
        { text: "Average defender, prefer to focus on offense", scores: [2, 3, 2, 1, 0] }
    ]
},
{
    text: "What is your endurance level?",
    options: [
        { text: "Very high, can play intense minutes without tiring", scores: [5, 4, 3, 2, 1] },
        { text: "Above average, but need occasional breaks", scores: [4, 3, 4, 3, 2] },
        { text: "Average, can play moderately", scores: [3, 3, 3, 3, 3] },
        { text: "Below average, tire quickly", scores: [1, 2, 2, 4, 5] }
    ]
},
{
    text: "How do you handle pressure situations?",
    options: [
        { text: "Thrive under pressure, want the ball in clutch moments", scores: [5, 4, 3, 2, 1] },
        { text: "Perform well under pressure, but prefer to share the load", scores: [4, 3, 4, 3, 2] },
        { text: "Average, can handle some pressure", scores: [3, 3, 3, 3, 3] },
        { text: "Struggle under pressure, prefer to avoid it", scores: [1, 2, 2, 4, 5] }
    ]
},
{
    text: "What is your basketball IQ?",
    options: [
        { text: "Very high, understand advanced strategies and plays", scores: [5, 4, 3, 2, 1] },
        { text: "Above average, can read the game well", scores: [4, 3, 4, 3, 2] },
        { text: "Average, understand basic plays", scores: [3, 3, 3, 3, 3] },
        { text: "Below average, still learning the game", scores: [1, 2, 2, 4, 5] }
    ]
}
  // Add the rest of the questions here...
];

const positions = ["point guard", "shooting guard", "small forward", "power forward", "center"];

const QuizPage = () => {
    const [scores, setScores] = useState([0, 0, 0, 0, 0]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto"; // Reset when component unmounts
        };
    }, []);
    

    const handleAnswer = (scoreArray) => {
        setScores(prevScores => prevScores.map((score, index) => score + scoreArray[index]));
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinished(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const bestPosition = positions[scores.indexOf(Math.max(...scores))];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'center',  // Centers horizontally
            alignItems: 'center',  // Centers vertically
            height: '100vh',  // Makes it full height of the viewport
            width: '100vw',   // Ensures it spans the full width
            position:'relative',
            overflow:"hidden",
            backgroundColor :'black'
          }}>
<div className="container mt-5" style={{
            display: 'flex', 
            justifyContent: 'center',  // Centers horizontally
            alignItems: 'center',  // Centers vertically
            height: '100vh',  // Makes it full height of the viewport
            width: '100vw',   // Ensures it spans the full width
            position:'relative',
            overflow:"hidden"
          }}>
            <div className="card p-4 shadow-lg rounded" style={{border: "2px solid #ea9215"}}>
                {finished ? (
                    <div className="text-center">
                        <h2 className="text-orange">Your Best Position is: <span>{bestPosition}</span></h2>
                        <p className="mt-3">We determined your position by adding up your responses and choosing the highest-scoring category.</p>
                        <img style={{width:"20vw"}} src="src/assets/ground.jpg" alt="" />
                    </div>
                ) : (
                    <div>
                        <h4 className="mb-3">{questions[currentQuestion].text}</h4>
                        <div className="progress mb-3">
                            <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                            key={index}
                            className="btn d-block w-100 my-2 py-2"
                            style={{
                                transition: '0.3s',
                                fontSize: '18px',
                                border: '2px solid #ea9215',
                                color: '#ea9215',
                                backgroundColor: 'transparent'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#ea9215';
                                e.target.style.color = 'white';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#ea9215';
                            }}
                            onClick={() => handleAnswer(option.scores)}
                        >
                            {option.text}
                        </button>
                        
                        ))}
                        <div className="d-flex justify-content-between mt-3">
                            <button className="btn btn-secondary" onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</button>
                            <button className="btn" style={{backgroundColor :" #ea9215",color:"white"}} onClick={handleNext} disabled={currentQuestion + 1 === questions.length}>Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
        
    );
};

export default QuizPage;