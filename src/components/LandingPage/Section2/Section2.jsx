import "./Section2.css";
import Section2SubBoxImg1 from "../../../img/landingpage_section2_subbox1.png"
import Section2SubBoxImg2 from "../../../img/landingpage_section2_subbox2.png"
import Section2SubBoxImg3 from "../../../img/landingpage_section2_subbox3.png"


const Section2 = () => {
  return (
    <>
      <div className="section2_box">
        <div className="section2_title_style">Why choose us</div>

        <div className="section_2_bottom_box">
          <div className="section2_sub_box1">
            <img src={Section2SubBoxImg1} alt="" className="section2_subbox_img1"/>

            <div className="section2_subbox_title_black">
              Serious Protection
            </div>

            <div className="section2_subbox_content_black">
              We protect your funds and sensitive personal data with encryption
              in-flight and at-rest.
            </div>
          </div>

          <div className="section2_sub_box2">
            <img src={Section2SubBoxImg2} alt="" className="section2_subbox_img"/>

            <div className="section2_subbox_title_white">Biometric Access</div>

            <div className="section2_subbox_content_white">
              Use fingerprint or Face ID for quick and easy access to your
              account information.
            </div>
          </div>

          <div className="section2_sub_box3">
            <img src={Section2SubBoxImg3} alt="" className="section2_subbox_img" style={{width:"28%"}}/>

            <div className="section2_subbox_title_black" style={{width:"45%", padding:"4.5% 0"}}>
              AI Fraud Detection
            </div>

            <div className="section2_subbox_content_black" style={{width:"95%"}}>
              We've implemented best-in-class fraud detection systems to keep
              your money safe.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
