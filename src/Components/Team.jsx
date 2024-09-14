import team1 from "../assets/user-cover-1.png";
import team2 from "../assets/user-cover-2.png";
import team3 from "../assets/user-cover-3.png";
import team4 from "../assets/user-cover-4.png";
import TeamCards from "./TeamCards";
import '../assets/css/team.css'
import { useState, useEffect } from 'react';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardCount = teamsData.length;

  const visibleCards = () => {
    if (window.innerWidth <= 768) return 2; 
    if (window.innerWidth <= 992) return 3; 
    return 4; 
  };

  const [cardsPerView, setCardsPerView] = useState(visibleCards);

  useEffect(() => {
    const handleResize = () => setCardsPerView(visibleCards);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < cardCount - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="team-container">
      <div className="team">
        <h6>Team</h6>
        <h3>Get Quality Education</h3>
        <p>Problems trying to resolve the conflict between</p>
        <p>the two major realms of Classical physics: Newtonian mechanics</p>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-arrow left" onClick={prevSlide}>{"<"}</button>

        <div className="team-card-container" style={{ transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)` }}>
          {teamsData.map((data, index) => (
            <TeamCards
              key={index}
              imgSrc={data.imgSrc}
              name={data.title}
              profession={data.profession}
            />
          ))}
        </div>

        <button className="carousel-arrow right" onClick={nextSlide}>{">"}</button>
      </div>
    </div>
  );
};

export default Team;



const teamsData = [
  { imgSrc: team2, title: "Julian Jameson", profession: "Engineer" },
  { imgSrc: team3, title: "Julian Jameson", profession: "Engineer" },
  { imgSrc: team1, title: "Julian Jameson", profession: "Engineer" },
  { imgSrc: team2, title: "Julian Jameson", profession: "Engineer" },
  { imgSrc: team3, title: "Julian Jameson", profession: "Engineer" },
  { imgSrc: team4, title: "Julian Jameson", profession: "Engineer" },
  { imgSrc: team2, title: "Julian Jameson", profession: "Engineer" },
  { imgSrc: team3, title: "Julian Jameson", profession: "Engineer" },
  { imgSrc: team1, title: "Julian Jameson", profession: "Engineer" },
  { imgSrc: team2, title: "Julian Jameson", profession: "Engineer" },
  { imgSrc: team3, title: "Julian Jameson", profession: "Engineer" },
  { imgSrc: team1, title: "Julian Jameson", profession: "Engineer" },
  { imgSrc: team2, title: "Julian Jameson", profession: "Engineer" },
];

// export default Team;
