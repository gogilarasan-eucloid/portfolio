import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Camera, Briefcase, Code, Award, Mail, Github, Linkedin, Download, Moon, Sun, ExternalLink, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   alert('Thank you! Your message has been received.');
  //   setFormData({ name: '', email: '', message: '' });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(
      'service_2b6bkv9',
      'template_75c93o6',
      e.target,
      'RxRkMIJyzpsXgZyc_'
    )
    .then(() => {
      setSuccess(true)
    }, (error) => {
        alert('Failed to send message');
        console.log(error);
    });
  
    setFormData({ name: '', email: '', message: '' });
  };
  

  const experiences = [
    {
      title: 'Data Engineer',
      company: 'Eucloid Data Solutions',
      client: 'Bayada Home Health Care (US)',
      period: 'Jul 2025 – Present',
      type: 'Full-time',
      points: [
        'Ingested and integrated data from multiple sources (HubSpot, MuckRack, TalentScout) with automated daily pipelines',
        'Designed end-to-end Medallion Architecture pipelines (Raw → Silver → Gold) using PySpark and Spark SQL',
        'Developed optimized data transformation logic using Python ensuring scalability for large data volumes',
        'AWS Administrator managing IAM, EC2, S3, VPC configuration, and RDS for data platform operations',
        'Collaborated with BI teams to ensure high-quality, validated datasets for Sigma computing dashboards'
      ]
    },
    {
      title: 'Data Engineering Intern',
      company: 'Eucloid Data Solutions',
      client: 'Shippo',
      period: 'Jan 2025 – Jun 2025',
      type: 'Internship',
      points: [
        'Migrated 25+ large Redshift SQL scripts (2000+ lines each) to Spark SQL on Databricks',
        'Resolved data mismatches across billion-row tables and reduced reporting discrepancies',
        'Reduced cloud cost by 75% through strategic NAT Gateway analysis and VPC endpoint recommendations',
        'Administered Databricks workspace for cluster provisioning and role-based access'
      ]
    }
  ];

  const projects = [
    {
      title: 'Inventory Management and Analysis System',
      description: 'Comprehensive inventory management system with authentication and task scheduling for IST department, managing stock worth ₹80 lakhs',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize'],
      highlights: ['User Authentication', 'Automated Stock Tracking', 'Hyperlink Interface']
    },
    {
      title: 'Automated Project Evaluation Process',
      description: 'Robust project evaluation system with multi-level user logins featuring email messaging, file uploads, and role-based authorization',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AWS EC2'],
      highlights: ['Multi-level Auth', 'Batch Scheduling', 'Dynamic Forms']
    }
  ];

  const certifications = [
    { 
      name: 'AWS Cloud Practitioner',
      status: 'completed',
      color: '#10b981',
      url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/d2ba1fdac28149b5a05b6d07c25014ee'
    },
    { name: 'AWS Solutions Architect – Associate', status: 'in-progress', color: '#f59e0b' },
    { name: 'Databricks Data Engineer', status: 'planned', color: '#6b7280' }
  ];

  const techStack = {
    'Languages & SQL': ['Python', 'PySpark', 'SQL', 'Pandas', 'Spark SQL'],
    'Cloud & Infrastructure': ['AWS (IAM, EC2, S3, VPC, RDS)', 'Databricks', 'Terraform', 'CloudWatch'],
    'Data Engineering': ['DBT', 'Delta Lake', 'ELT/ETL', 'SCD Type 2', 'Medallion Architecture'],
    'Orchestration': ['Workato'],
    'Version Control': ['Git', 'GitLab']
  };

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=JetBrains+Mono:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root[data-theme="light"] {
          --bg-primary: #fafaf9;
          --bg-secondary: #ffffff;
          --bg-accent: #f5f5f4;
          --text-primary: #1c1917;
          --text-secondary: #57534e;
          --text-muted: #78716c;
          --border: #e7e5e4;
          --accent: #0369a1;
          --accent-hover: #0284c7;
          --gradient-start: #0ea5e9;
          --gradient-end: #06b6d4;
          --shadow: rgba(0, 0, 0, 0.08);
        }

        :root[data-theme="dark"] {
          --bg-primary: #0a0a0a;
          --bg-secondary: #171717;
          --bg-accent: #262626;
          --text-primary: #fafafa;
          --text-secondary: #d4d4d4;
          --text-muted: #a3a3a3;
          --border: #404040;
          --accent: #38bdf8;
          --accent-hover: #7dd3fc;
          --gradient-start: #0ea5e9;
          --gradient-end: #06b6d4;
          --shadow: rgba(0, 0, 0, 0.4);
        }

        body {
          font-family: 'Crimson Pro', serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          line-height: 1.7;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .portfolio {
          position: relative;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border);
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(20px);
          background: rgba(var(--bg-secondary-rgb), 0.8);
        }

        .nav-logo {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s;
          border: none;
          background: none;
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--accent);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
        }

        .theme-toggle {
          background: var(--bg-accent);
          border: 1px solid var(--border);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .theme-toggle:hover {
          transform: rotate(15deg);
          border-color: var(--accent);
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 4rem 4rem;
          position: relative;
          overflow: hidden;
        }


        .profile-img {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          transition: transform 0.3s ease;
          object-fit: cover;
          border: 4px solid #0ea5e9;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .profile-img:hover {
          transform: scale(1.05);
        }


        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, var(--gradient-start) 0%, transparent 70%);
          opacity: 0.15;
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, 30px) rotate(180deg); }
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 4rem;
          align-items: center;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-text h1 {
          font-size: 4.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .hero-text .subtitle {
          font-size: 1.8rem;
          color: var(--accent);
          font-weight: 300;
          margin-bottom: 1.5rem;
          font-family: 'JetBrains Mono', monospace;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .hero-text .tagline {
          font-size: 1.3rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
          line-height: 1.6;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease-out 0.8s both;
        }

        .btn {
          padding: 0.9rem 2rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: 2px solid var(--border);
          background: transparent;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .btn-primary {
          background: var(--accent);
          border-color: var(--accent);
          color: white;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px var(--shadow);
        }

        .btn-primary:hover {
          background: var(--accent-hover);
          border-color: var(--accent-hover);
        }

        .hero-avatar {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          //background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: fadeInUp 1s ease-out 0.6s both;
          box-shadow: 0 20px 60px var(--shadow);
        }

        .hero-avatar svg {
          width: 150px;
          height: 150px;
          color: white;
          opacity: 0.8;
        }

        /* Section Styles */
        section {
          padding: 6rem 4rem;
          max-width: 1200px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s, transform 0.8s;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 60px;
          height: 3px;
          background: var(--accent);
        }

        .section-subtitle {
          font-family: 'Space Mono', monospace;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-top: 1.5rem;
        }

        /* About Section */
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 2rem;
        }

        .about-text {
          font-size: 1.2rem;
          line-height: 1.8;
        }

        .about-text p {
          margin-bottom: 1.5rem;
        }

        .location-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-accent);
          padding: 0.6rem 1.2rem;
          border-radius: 30px;
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          margin-top: 1rem;
        }

        .about-details {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          padding: 2rem;
          border-radius: 4px;
        }

        .detail-item {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
        }

        .detail-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .detail-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .detail-value {
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        /* Experience Section */
        .experience-timeline {
          position: relative;
          padding-left: 3rem;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
        }

        .experience-item {
          position: relative;
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border);
        }

        .experience-item:last-child {
          border-bottom: none;
        }

        .experience-item::before {
          content: '';
          position: absolute;
          left: -3rem;
          top: 0.5rem;
          width: 12px;
          height: 12px;
          background: var(--accent);
          border-radius: 50%;
          transform: translateX(-5px);
          box-shadow: 0 0 0 4px var(--bg-primary);
        }

        .experience-header {
          margin-bottom: 1.5rem;
        }

        .experience-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .experience-company {
          font-size: 1.2rem;
          color: var(--accent);
          margin-bottom: 0.3rem;
        }

        .experience-meta {
          display: flex;
          gap: 1.5rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
        }

        .experience-meta span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .experience-client {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-style: italic;
          margin-top: 0.3rem;
        }

        .experience-points {
          list-style: none;
          margin-top: 1rem;
        }

        .experience-points li {
          padding-left: 1.5rem;
          margin-bottom: 0.8rem;
          position: relative;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .experience-points li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 1.2rem;
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          padding: 2.5rem;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
          transform: scaleX(0);
          transition: transform 0.4s;
          transform-origin: left;
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px var(--shadow);
          border-color: var(--accent);
        }

        .project-title {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .project-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          padding: 0.4rem 0.9rem;
          background: var(--bg-accent);
          border: 1px solid var(--border);
          color: var(--accent);
          border-radius: 3px;
        }

        .project-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .highlight-badge {
          font-size: 0.75rem;
          padding: 0.3rem 0.7rem;
          background: var(--bg-accent);
          color: var(--text-muted);
          border-radius: 3px;
          font-family: 'Space Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Certifications */
        .certifications-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }

        .cert-item {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s;
        }

        .cert-item:hover {
          border-color: var(--accent);
          transform: translateX(8px);
        }

        .cert-name {
          font-size: 1.2rem;
          font-weight: 500;
        }

        .cert-status {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cert-status.completed {
          background: #10b981;
          color: white;
        }

        .cert-status.in-progress {
          background: #f59e0b;
          color: white;
        }

        .cert-status.planned {
          background: var(--bg-accent);
          color: var(--text-muted);
        }

        /* Tech Stack */
        .tech-stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .tech-category {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          padding: 2rem;
        }

        .tech-category-title {
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent);
          margin-bottom: 1.2rem;
          font-weight: 600;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tech-item {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          padding: 0.5rem 1rem;
          background: var(--bg-accent);
          color: var(--text-secondary);
          border-radius: 3px;
          transition: all 0.3s;
        }

        .tech-item:hover {
          background: var(--accent);
          color: white;
          transform: scale(1.05);
        }

        /* Blog Placeholder */
        .blog-placeholder {
          text-align: center;
          padding: 4rem 2rem;
          background: var(--bg-secondary);
          border: 2px dashed var(--border);
          border-radius: 4px;
          margin-top: 2rem;
        }

        .blog-placeholder h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--text-muted);
        }

        .blog-placeholder p {
          font-size: 1.1rem;
          color: var(--text-muted);
        }

        /* Contact Section */
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          margin-top: 2rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.2rem;
        }

        .contact-item svg {
          color: var(--accent);
        }

        .contact-item a {
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.3s;
        }

        .contact-item a:hover {
          color: var(--accent);
        }

        .contact-form {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          padding: 2.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.9rem;
          background: var(--bg-accent);
          border: 1px solid var(--border);
          color: var(--text-primary);
          font-family: 'Crimson Pro', serif;
          font-size: 1rem;
          transition: all 0.3s;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent);
          background: var(--bg-primary);
        }

        .form-textarea {
          resize: vertical;
          min-height: 150px;
        }

        /* Footer */
        footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          padding: 3rem 4rem;
          text-align: center;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          border: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s;
          color: var(--text-primary);
          text-decoration: none;
        }

        .social-link:hover {
          border-color: var(--accent);
          background: var(--accent);
          color: white;
          transform: translateY(-4px);
        }

        .footer-text {
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Responsive */
        @media (max-width: 968px) {
          .nav-links {
            display: none;
          }

          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-avatar {
            margin: 0 auto;
          }

          .hero-text h1 {
            font-size: 3rem;
          }

          .about-content,
          .contact-content {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .tech-stack-grid {
            grid-template-columns: 1fr;
          }

          section {
            padding: 4rem 2rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="nav-logo">GOGILARASAN</div>
        <div className="nav-links">
          <button className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`} onClick={() => scrollToSection('hero')}>Home</button>
          <button className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</button>
          <button className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => scrollToSection('experience')}>Experience</button>
          <button className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>Projects</button>
          <button className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</button>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={`hero ${isVisible.hero ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Gogilarasan S</h1>
            <div className="subtitle">Data Engineer</div>
            <p className="tagline">
              Building scalable data systems with Databricks, AWS, and ELT pipelines
            </p>
            <div className="hero-buttons">
              <a href="Resume_Gogil.pdf" className="btn btn-primary" download>
                <Download size={18} /> Download Resume
              </a>
              <a href="https://www.linkedin.com/in/gogilarasan" target="_blank" rel="noopener noreferrer" className="btn">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com/gogilarasan" target="_blank" rel="noopener noreferrer" className="btn">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
          <div className="hero-avatar">
            <img 
            src="\gogilarasan.JPG" 
            alt="Gogilarasan S" 
            className="profile-img"
          />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about ${isVisible.about ? 'visible' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Background & Education</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Data Engineer passionate about building robust data pipelines and scalable data systems. 
              Currently working at Eucloid Data Solutions, I specialize in cloud-based data engineering solutions 
              using PySpark, Databricks, and AWS.
            </p>
            <p>
              My journey in technology has been driven by curiosity and a commitment to solving complex data challenges. 
              I thrive in environments where I can architect efficient data solutions and optimize system performance.
            </p>
            <div className="location-badge">
              <MapPin size={16} />
              Thiruvanmiyur, Chennai
            </div>
          </div>
          <div className="about-details">
            <div className="detail-item">
              <div className="detail-label">Education</div>
              <div className="detail-value">B.Tech in Information Technology</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                College of Engineering Guindy, Chennai
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                CGPA: 8.05
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Pronouns</div>
              <div className="detail-value">He/Him</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Certifications Status</div>
              <div className="detail-value">AWS Cloud Practitioner (Certified)</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                Pursuing: AWS Solutions Architect Associate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`experience ${isVisible.experience ? 'visible' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Professional Journey</p>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
                {exp.client && <div className="experience-client">Client: {exp.client}</div>}
                <div className="experience-meta">
                  <span><Calendar size={14} /> {exp.period}</span>
                  <span><Briefcase size={14} /> {exp.type}</span>
                </div>
              </div>
              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`projects ${isVisible.projects ? 'visible' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Featured Work (College level)</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <span key={i} className="highlight-badge">{highlight}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`certifications ${isVisible.certifications ? 'visible' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional Credentials</p>
        </div>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-item">
            <div className="cert-name">
            {cert.url ? (
              <a 
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {cert.name}
                {cert.status === 'completed' && <ExternalLink size={14} />}
              </a>
            ) : (
              cert.name
            )}
             </div>

              <div className={`cert-status ${cert.status}`}>
                {cert.status === 'completed' ? '✓ Completed' : cert.status === 'in-progress' ? '⟳ In Progress' : '◯ Planned'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className={`tech-stack ${isVisible['tech-stack'] ? 'visible' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Tools & Technologies</p>
        </div>
        <div className="tech-stack-grid">
          {Object.entries(techStack).map(([category, items], index) => (
            <div key={index} className="tech-category">
              <div className="tech-category-title">{category}</div>
              <div className="tech-list">
                {items.map((item, i) => (
                  <span key={i} className="tech-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Placeholder */}
      <section id="blog" className={`blog ${isVisible.blog ? 'visible' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">Thoughts & Insights</p>
        </div>
        <div className="blog-placeholder">
          <h3>Coming Soon</h3>
          <p>Writing about data engineering, cloud architecture, and technical projects</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`contact ${isVisible.contact ? 'visible' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's Connect</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={24} />
              <a href="mailto:gogilarasan@gmail.com">gogilarasan@gmail.com</a>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
            <div className="contact-item">
              <Linkedin size={24} />
              <a href="https://www.linkedin.com/in/gogilarasan" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/gogilarasan
              </a>
            </div>
            <div className="contact-item">
              <Github size={24} />
              <a href="https://github.com/gogilarasan" target="_blank" rel="noopener noreferrer">
                github.com/gogilarasan
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message" 
                className="form-textarea"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <Mail size={18} /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/gogilarasan" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/gogilarasan" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gogilarasan@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
          <p className="footer-text">
            © 2026 Gogilarasan S. Built with React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;