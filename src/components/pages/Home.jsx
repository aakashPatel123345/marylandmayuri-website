import React from 'react'
import '../../index.css'
import '../../Home.css'
import home_page_image from '../../assets/home-page-image.jpg'
import aakash_p from '../../assets/board_member_pictures/aakash_p.jpg'
import aditi_g from '../../assets/board_member_pictures/aditi_g.jpg'
import akash_m from '../../assets/board_member_pictures/akash_m.jpg'
import ishaan_b from '../../assets/board_member_pictures/ishaan_b.jpg'
import jayna_p from '../../assets/board_member_pictures/jayna_p.jpg'
import nitya_v from '../../assets/board_member_pictures/nitya_v.jpg'
import pratiksha_d from '../../assets/board_member_pictures/pratiksha_d.jpg'
import sakshi_s from '../../assets/board_member_pictures/sakshi_s.jpg'
import sanjana_c from '../../assets/board_member_pictures/sanjana_c.jpg'
import sanjana_s from '../../assets/board_member_pictures/sanjana_s.jpg'
import sashu_p from '../../assets/board_member_pictures/sashu_p.jpg'
import shreya_g from '../../assets/board_member_pictures/shreya_g.jpg'
import srinidhi_g from '../../assets/board_member_pictures/srinidhi_g.jpg'
import surya_u from '../../assets/board_member_pictures/surya_u.jpg'
import teja_n from '../../assets/board_member_pictures/teja_n.jpg'

import giridhar_s from '../../assets/board_member_pictures/person_placeholder.jpg'
import saathu_n from '../../assets/board_member_pictures/person_placeholder.jpg'
import arya_g from '../../assets/board_member_pictures/person_placeholder.jpg'
import mahathi_c from '../../assets/board_member_pictures/person_placeholder.jpg'
import dhruvi_k from '../../assets/board_member_pictures/person_placeholder.jpg'
import rushina_p from '../../assets/board_member_pictures/person_placeholder.jpg'
import riyanna_d from '../../assets/board_member_pictures/person_placeholder.jpg'
import jiya_a from '../../assets/board_member_pictures/person_placeholder.jpg'
import aditya_p from '../../assets/board_member_pictures/person_placeholder.jpg'

import tba from '../../assets/board_member_pictures/person_placeholder.jpg'
import snom from "../../assets/sponsor_images/snom-logo.jpeg";
import classical_image from "../../assets/classical-image.jpeg"
import homepage_image from "../../assets/homepage-image.jpg"



const Home = () => {
  const handleSmoothScroll = () => {
    const bottomSection = document.querySelector('.bottom-section');
    bottomSection.scrollIntoView({ behavior: 'smooth' });
  }

  const boardMembers = [
    { name: "Aakash Patel", position: "Director", image: aakash_p },
    { name: "Pratiksha Das", position: "Director", image: pratiksha_d },
    { name: "Sanjana Chimaladinne", position: "Director", image: sanjana_c },

    { name: "Teja Nallagorla", position: "Event Ops", image: teja_n },
    { name: "Shreya Gavarapattu", position: "Event Ops", image: shreya_g },

    { name: "Giridhar Sawhney", position: "Registration", image: giridhar_s },
    { name: "Saathu Nagareddy", position: "Registration", image: saathu_n },


    { name: "Sakshi Shetty ", position: "Hospitality", image: sakshi_s },
    { name: "Nitya Venkatiagari", position: "Hospitality", image: nitya_v },
    { name: "Arya Ghorpade", position: "Hospitality", image: arya_g },
    { name: "TBA", position: "Hospitality", image: tba },

    { name: "Sashu Prakash", position: "Technology", image: sashu_p },
    { name: "Mahathi Chintapalli", position: "Technology", image: mahathi_c },
    { name: "Ishaan Bhardvaj", position: "Technology", image: ishaan_b },

    { name: "Srinidhi Gubba", position: "Judging", image: srinidhi_g },
    { name: "TBA", position: "Judging", image: tba },

    { name: "Akash Marakath", position: "Sponsorship", image: akash_m },
    { name: "Sanjana Shankar", position: "Sponsorship", image: sanjana_s },
    { name: "Aditya Patel", position: "Sponsorship", image: aditya_p },
    { name: "Dhruvi Kadhiwala", position: "Sponsorship", image: dhruvi_k },

    { name: "Rushina Patel", position: "Public Relations", image: rushina_p },
    { name: "TBA", position: "Public Relations", image: tba },
    { name: "TBA", position: "Public Relations", image: tba },

    { name: "Jayna Patel", position: "Liaison Head", image: jayna_p },
    { name: "Riyanna Desai", position: "Liaison Head", image: riyanna_d },

    { name: "Jiya Amin", position: "Social Chair", image: jiya_a },

    { name: "Aditi Gubba", position: "Mixer", image: aditi_g },
    { name: "Surya UdayShankar", position: "Mixer", image: surya_u }
  ];

  const groupByPosition = (members) => {
    return members.reduce((acc, member) => {
      if (!acc[member.position]) {
        acc[member.position] = [];
      }
      acc[member.position].push(member);
      return acc;
    }, {});
  };

  const groupedMembers = groupByPosition(boardMembers);


  return (
    <div className='homepage-main-container'>
      <div className='home-container'
            style={{'--homepage-image': `url(${homepage_image})`}}
      >
        <div className='heading-container'>
          <h1 className='homepage-heading'>Maryland Mayuri</h1>
        </div>
      </div>


      <div id="about-us" className="section-container">
        <div className="section-content-wrapper">
          <div className="section-content">
            <h1 className="section-heading">Who We Are</h1>
            <p className="section-text">
              Founded in 2013, Maryland Mayuri is Maryland's premier intercollegiate classical Indian dance competition.
              As a registered 501(c)(3) organization, we are dedicated to promoting the art of classical Indian dance.
              Mayuri is proudly hosted and run by passionate students at the University of Maryland, College Park.
            </p>
          </div>
        </div>
        <img src={home_page_image} alt="Maryland Mayuri" className="section-image" />
      </div>

      <div className="section-container reverse">
        <div className="section-content-wrapper">
          <div className="section-content">
            <h1 className="section-heading">Classical Dance</h1>
            <p className="section-text">
              Classical Indian dance is a timeless art form, deeply rooted in Indian culture for thousands of years.
              It's a captivating blend of storytelling, music, and drama. India boasts eight distinct classical dance forms,
              each with its unique style and technique. Among the most renowned are Bharatanatyam, Kathak, Odissi, and Kuchipudi,
              each telling stories of tradition, mythology, and emotion through graceful movements and expressive gestures.
            </p>
          </div>
        </div>
        <img src={classical_image} alt="Classical Dance" className="section-image" />
      </div>

      <div className="divider"></div>


      <div id="board" className="board-section">
        <h2 className="board-title">Our Board</h2>
        <div className="board-grid">
          {boardMembers.map((member) => (
            <div key={member.name} className="member-card">
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>
              <div className="member-info">
                <h4 className="member-name">{member.name}</h4>
                <p className="member-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="philanthropy" className="philanthropy-section">
        <h2>Our Charity Partner</h2>
        <div className="charity-info">
          <img src={snom} alt="Sankara Nethralaya OM Trust" />
          <div className="charity-content">
            <h3>Sankara Nethralaya OM Trust</h3>
            <p>
              SNOM is a registered non-profit organization in the United States of America.
              The charity was established in 1988 with the main goal of supporting Sankara Nethralaya,
              a nonprofit ophthalmic hospital in Chennai, India. Sankara Nethralaya is a leading super specialty
              institution for ophthalmic care in India.
            </p>
            <a href="https://www.sankaranethralayausa.org/" target="_blank" rel="noopener noreferrer">
              Learn more about their cause
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home