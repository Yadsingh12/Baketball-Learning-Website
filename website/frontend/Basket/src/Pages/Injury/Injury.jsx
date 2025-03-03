import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const injuryData = [
    {
        title: "Ankle Sprains",
        content:
            "Occurs when the foot twists unnaturally, stretching or tearing the ligaments. Symptoms: Swelling, pain, difficulty walking.",
    },
    {
        title: "Knee Injuries (ACL/MCL Tears)",
        content:
            "Caused by sudden stops, jumps, or changes in direction. Symptoms: Pain, instability, swelling.",
    },
    {
        title: "Jumper’s Knee (Patellar Tendinitis)",
        content:
            "An overuse injury from repeated jumping. Symptoms: Pain in the front of the knee, swelling, stiffness.",
    },
    {
        title: "Shin Splints",
        content:
            "Pain along the shin bone due to overuse or improper footwear.",
    },
    {
        title: "Fractures & Dislocations",
        content:
            "Finger, wrist, and stress fractures are common from falls or collisions.",
    },
];

const nutritionData = [
    "Omega-3 Rich Foods – Salmon, walnuts, flaxseeds (reduce inflammation).",
    "Calcium & Vitamin D – Dairy, spinach, almonds (improves bone strength).",
    "Collagen-Boosting Foods – Bone broth, citrus fruits, eggs (repairs tendons).",
    "Protein-Rich Foods – Chicken, beans, tofu (muscle recovery).",
    "Antioxidant-Rich Foods – Berries, green tea, turmeric (reduce inflammation).",
];

const exerciseData = [
    { type: "Ankle Sprains", exercises: ["Ankle Circles & Toe Raises", "Resistance Band Exercises"] },
    { type: "Knee Injuries", exercises: ["Straight Leg Raises", "Hamstring Curls"] },
    { type: "Jumper’s Knee", exercises: ["Eccentric Squats", "Foam Rolling"] },
    { type: "Shin Splints", exercises: ["Calf Stretches", "Toe Taps"] },
];

const Injury = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const styles = {
        page: {
            backgroundColor: "black",
            color: "#fff",
            minWidth: "100vw", // Full width
            minHeight: "100vh", // Full height
            padding: "40px 30px",
            fontFamily: "Arial, sans-serif",
            overflowX: "hidden", // Prevents horizontal scrolling
        },
        title: {
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "bold",
            color: "orange",
            marginBottom: "20px",
        },
        section: {
            backgroundColor: "#222",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "10px",
            cursor: "pointer",
        },
        sectionHeader: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: "bold",
        },
        sectionContent: {
            marginTop: "10px",
            color: "#ccc",
        },
        list: {
            paddingLeft: "20px",
            color: "#ccc",
        },
        listItem: {
            marginBottom: "5px",
        },
        subSection: {
            backgroundColor: "#222",
            padding: "15px",
            borderRadius: "10px",
            marginTop: "15px",
        },
    };

    return (
        <div style={styles.page}>
            <h1 style={styles.title}>🏀 Injury Management & Prevention</h1>

            {/* Injury Sections */}
            <div>
                {injuryData.map((injury, index) => (
                    <motion.div
                        key={index}
                        style={styles.section}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => toggleSection(index)}
                    >
                        <div style={styles.sectionHeader}>
                            <span>{injury.title}</span>
                            {openSection === index ? <FaMinus /> : <FaPlus />}
                        </div>
                        {openSection === index && (
                            <motion.p
                                style={styles.sectionContent}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {injury.content}
                            </motion.p>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Exercises Section */}
            <div style={{ ...styles.subSection, position: "relative" }}>
                <h2 style={{ color: "orange", fontSize: "24px", fontWeight: "bold" }}>
                    🏋️‍♂️ Exercises for Faster Recovery
                </h2>
                <img
                    src="src/assets/Images/Injury/first_aid.webp"
                    alt="Dumbbell"
                    style={{
                        position: "absolute",
                        right: "200px",
                        top: "160px",
                        width: "250px",
                        height: "250px",
                        opacity: "0.8",
                    }}
                />

                {exerciseData.map((item, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                        <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>{item.type}</h3>
                        <ul style={styles.list}>
                            {item.exercises.map((exercise, i) => (
                                <li key={i} style={styles.listItem}>{exercise}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


            {/* Nutrition Section */}
            <div style={{...styles.subSection,position: "relative"}}>
                <h2 style={{ color: "orange", fontSize: "24px", fontWeight: "bold" }}>🥦 Nutrition for Stronger Joints</h2>
                <img
                    src="src/assets/Images/Injury/joint.png"
                    alt="joint"
                    style={{
                        position: "absolute",
                        right: "270px",
                        top: "25px",
                        width: "70px",
                        height: "170px",
                        opacity: "0.8",
                    }}
                />
                <ul style={styles.list}>
                    {nutritionData.map((food, index) => (
                        <li key={index} style={styles.listItem}>{food}</li>
                    ))}
                </ul>
            </div>

            {/* R.I.C.E Method */}
            <div style={{...styles.subSection,position: "relative"}}>
                <h2 style={{ color: "orange", fontSize: "24px", fontWeight: "bold" }}>🔺 Immediate Steps After Injury</h2>
                <img
                    src="src/assets/Images/Injury/ice.png"
                    alt="ice"
                    style={{
                        position: "absolute",
                        right: "220px",
                        top: "10px",
                        width: "200px",
                        height: "170px",
                        opacity: "0.8",
                    }}
                />
                <ul style={styles.list}>
                    <li style={styles.listItem}><strong>Rest:</strong> Stop playing immediately to prevent further damage.</li>
                    <li style={styles.listItem}><strong>Ice:</strong> Apply ice packs for 15-20 minutes to reduce swelling.</li>
                    <li style={styles.listItem}><strong>Compression:</strong> Wrap the injury with an elastic bandage.</li>
                    <li style={styles.listItem}><strong>Elevation:</strong> Keep the injured limb elevated to reduce swelling.</li>
                </ul>
            </div>

            {/* Prevention Tips */}
            <div style={{...styles.subSection,position: "relative"}}>
                <h2 style={{ color: "orange", fontSize: "24px", fontWeight: "bold" }}>🚀 Injury Prevention Tips</h2>
                <img
                    src="src/assets/Images/Injury/Adobe Express - file.png"
                    alt="heart"
                    style={{
                        position: "absolute",
                        right: "220px",
                        top: "50px",
                        width: "170px",
                        height: "170px",
                        opacity: "0.8",
                    }}
                />
                <ul style={styles.list}>
                    <li style={styles.listItem}>✅ Warm-up & stretch before games.</li>
                    <li style={styles.listItem}>✅ Wear proper basketball shoes with ankle support.</li>
                    <li style={styles.listItem}>✅ Strengthen muscles through regular training.</li>
                    <li style={styles.listItem}>✅ Stay hydrated and eat a balanced diet.</li>
                    <li style={styles.listItem}>✅ Listen to your body – rest when needed.</li>
                </ul>
            </div>
        </div>
    );
};

export default Injury;
