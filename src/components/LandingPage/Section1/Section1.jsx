import "./Section1.css";
import Section1Graphic from "../../../img/landingpage_section1_graphic.png"

const Section1 = () => {
  return (
    <>
      <div className="section1_big_box">
        <div className="section1_left_box">
          <div className="section1_title_style">
            <span style={{color:"#021A60"}}>Mark</span> - Your Financial Super App is here now!
          </div>

          <div className="section1_subtitle_style">Bringing the World & Banking into your hands.</div>

          <button className="section1_btn_style">Send - Receive - Store</button>
        </div>

        <div className="section_1_right_box">
            <img src={Section1Graphic} alt="Phone" style={{height:"110%"}}/>
        </div>
      </div>
    </>
  );
};

export default Section1;
