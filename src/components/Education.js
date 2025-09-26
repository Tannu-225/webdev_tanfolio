import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-header">
        <h2>
          Education <span>& Certifications</span>
        </h2>
        <p>
          As a passionate Webdev Developer, I focus on building dynamic, responsive,
          and user-friendly websites. With a strong grasp of both front-end and
          back-end technologies, I aim to create seamless digital experiences
          that merge design with functionality.
        </p>
      </div>

      <div className="education-cards">
        {/* Card 1 */}
        <div className="education-card">
          <div className="education-icon">
               <FaGraduationCap />
          </div>
          <h3>Bachelor of Commerce</h3>
          <p className="institute">Delhi University</p>
          <p className="duration">2022 - 2026</p>
          <p className="description">
            Comprehensive business education with focus on management and
            technology integration.
          </p>
        </div>

        {/* Card 2 */}
        <div className="education-card">
          <div className="education-icon">
              <MdOutlineVerifiedUser />
          </div>
          <h3>Full Stack Development Course</h3>
          <p className="institute">Oxford Software Institute</p>
          <p className="duration">2024 - 2025</p>
          <p className="description">
             Specialized training in web development practices, front-end and back-end
  integration, and building responsive, user-friendly applications.
          </p>
        </div>

        {/* Card 3 */}
        <div className="education-card">
          <div className="education-icon">
              <LiaCertificateSolid />
          </div>
          <h3>Certificate in Web Development</h3>
          <p className="institute">Technical Institute</p>
          <p className="duration">2025</p>
          <p className="description">
              Hands-on training in HTML, CSS, JavaScript, and modern frameworks, 
  focusing on creating responsive websites and interactive web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
