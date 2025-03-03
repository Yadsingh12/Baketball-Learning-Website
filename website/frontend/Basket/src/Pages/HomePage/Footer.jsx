import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#ea9215",
      color: "white",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-start",
      padding: "30px 10px",
      flexWrap: "wrap", 
          
    },
    column: {
      flex: "1",
      minWidth: "250px",
      margin: "10px",
      marginLeft :"20px" 
    },
    heading: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      marginBottom: "8px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "14px",
    },
    contact: {
      lineHeight: "1.6",
      fontSize: "14px",
    },
    about: {
      fontSize: "14px",
      textAlign: "justify",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.footer}>
      {/* Useful Links */}
      <div style={styles.column}>
        <h4 style={styles.heading}>Useful Links</h4>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            
          </li>
          <li style={styles.listItem}>
            <a href="#" style={styles.link}>Traininig</a>
          </li>
          <li style={styles.listItem}>
            <a href="#" style={styles.link}>Posture</a>
          </li>
          <li style={styles.listItem}>
            <a href="#" style={styles.link}>Position</a>
          </li>
          <li style={styles.listItem}>
            <a href="#" style={styles.link}>Recommendation</a>
          </li>
          <li style={styles.listItem}>
            <a href="#" style={styles.link}>ChatBot</a>
          </li>
        </ul>
      </div>


      {/* Contact Us Section */}
      <div style={styles.column}>
        <h4 style={styles.heading}>Contact Us</h4>
        <p style={styles.contact}>
          Banda Singh Bahadar Hostel<br />
          UOCE Department<br />
          Punjabi University, Patiala (Pb)<br /><br />
          <strong>Phone:</strong> +91-9781905257 <br />
          +91-7901811136, +91-9914209267 <br /><br />
          <strong>Email:</strong> Ashishvs605@gmail.com <br />
          princebawa9267@gmail.ocm
        </p>
      </div>

      {/* About Section */}
      <div style={styles.column}>
        <h3 style={styles.heading}>About Basket</h3>
        <p style={styles.about}>
        The aim of this website is to provide basketball enthusiasts with an innovative and interactive platform that enhances their game experience. It offers features such as posture detection for shooting, position discovery, and an AI-powered chatbot to answer queries related to basketball techniques and training. By leveraging technology, this platform helps players improve their skills, understand their game better, and get real-time guidance to refine their performance.
        </p>
      </div>
    </div>
  );
};

export default Footer;