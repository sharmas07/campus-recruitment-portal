import React from 'react';
import '../../assets/styles/StudentProfileView.css';
// import userimage from '../../assets/user-pic.png'

const StudentProfileView = () => {
    const studentData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        contact: '123-456-7890',
        location: 'New York, NY',
        degree: 'Bachelor of Science in Computer Science',
        institute: 'New York University',
        gpa: 3.8,
        coursework: 'Data Structures, Algorithms, Operating Systems, Databases',
        jobTitle: 'Software Engineer Intern',
        companyName: 'Google',
        employmentDates: 'Summer 2022',
        keyResponsibilities:
          'Developed and tested new features for the Google Chrome browser',
        technicalSkills: ['JavaScript', 'Python', 'React', 'Node.js'],
        softSkills: 'Teamwork, Communication, Time Management',
        projectTitle: 'Online Marketplace',
        description:
          'Built an online marketplace using React, Node.js, and MongoDB. Implemented features such as user authentication, product search and filtering, and shopping cart functionality.',
        scope: 'Solo project',
        impact: 'Received an A+ grade in the course',
        certificationName: 'AWS Certified Developer - Associate',
        issuingOrg: 'Amazon Web Services',
        dateEarned: 'June 2021',
        awardTitle: 'Dean’s List',
        awardingOrg: 'New York University',
        dateReceived: 'Spring 2021',
        volunteerOrg: 'Habitat for Humanity',
        volunteerDates: 'Summer 2021',
        volunteerResponsibilities:
          'Assisted with building homes and organizing community events',
        language: 'Spanish',
        fluencyLevel: 'Intermediate'
      };
      const userimage = 'https://images.unsplash.com/photo-1611880147493-7542bdb0f024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80'
  return (
    <div className="profile-container">
      <div className="personal-info">
        <h2>Personal Information</h2>
        <div className="info-row">
          <div className="user-name-image">
          <div className="user-name">
                
                <span className="info-label">Name:</span>
                <span className="info-value">{studentData.name}</span>
                  </div>
                  <img className='user-image' src={userimage} alt="user-image" />
          </div>
        </div>
        <div className="info-row">
          <span className="info-label">Email:</span>
          <span className="info-value">{studentData.email}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Contact Number:</span>
          <span className="info-value">{studentData.contact}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Location:</span>
          <span className="info-value">{studentData.location}</span>
        </div>
      </div>

      <div className="education">
        <h2>Education</h2>
        <div className="info-row">
          <span className="info-label">Degree:</span>
          <span className="info-value">{studentData.degree}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Institute:</span>
          <span className="info-value">{studentData.institute}</span>
        </div>
        <div className="info-row">
          <span className="info-label">GPA:</span>
          <span className="info-value">{studentData.gpa}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Relevant Coursework:</span>
          <span className="info-value">{studentData.coursework}</span>
        </div>
      </div>

      <div className="work-experience">
        <h2>Work Experience</h2>
        <div className="info-row">
          <span className="info-label">Job Title:</span>
          <span className="info-value">{studentData.jobTitle}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Company Name:</span>
          <span className="info-value">{studentData.companyName}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Employment Dates:</span>
          <span className="info-value">{studentData.employmentDates}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Key Responsibilities:</span>
          <span className="info-value">{studentData.keyResponsibilities}</span>
        </div>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <div className="info-row">
          <span className="info-label">Technical Skills:</span>
          <div className="techskills">
          {studentData.technicalSkills.map((skill)=><span className="info-value">{skill} </span>)}
          </div>
        </div>
        <div className="info-row">
          <span className="info-label">Soft Skills:</span>
          <span className="info-value">{studentData.softSkills}</span>
        </div>
      </div>

      <div className="projects">
        <h2>Projects</h2>
        <div className="info-row">
          <span className="info-label">Project Title:</span>
          <span className="info-value">{studentData.projectTitle}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Description:</span>
          <span className="info-value">{studentData.projectDescription}</span>
        </div>
      </div>
    <div className="editprofile-btn">
    <button>Edit Profile</button>
    </div>
    </div>
  );
};

export default StudentProfileView;

