const { useState } = React;

// Navbar Component
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#home">
                    <i className="fas fa-code"></i> Kawsar Islam
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

// Hero Section Component
function HeroSection() {
    return (
        <section id="home" className="hero-section py-5 text-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5 text-center mb-4 mb-md-0">
                        <img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ydn5KjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWm5ydn5KjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vHy8/T19vf4+fr/2gAMAwEAAhEDEQA/APf/ANslgSx8Xad8EhQDPJ+7iP8A4DHf1rxDT/AAS9W0sb3T/wBojSvEFlB4hHg3x/BYeH/ABNfaXrHiWJDfHV0iEh1C5e7hEhvLbx/wCApb+6uPh+dG1m8QsIL4zam/hLQPjZ8TdA8VWMuiWMGkXsVzcw6fe3UJOB+NegeLv2hdD/bL9onWP2Z/Dkd88ENr4Jk+AMdvp8Oq+IvjV8OPiP4b+P/ii+ozP4h+DXhn8AuHhrV/ABwYL+EeKfCF78eIxeKJEVEWVQQo+7UhKmKpGpN2VoSXHOaqr3+kWlxbWSXV+qxQRxNLLNLIIo0RI1LMxIUKoJAA9AK4DwP2YfBPi34qeM/hzZ+LfAnxF+Pn/CQWWpWsj+IdJvrKWWZW0TX7CyEsNusl8b+DhPEOpWrFJJLSIRy3t8VkCQ/AH4Z/Gfxl+Efif8/wBtr4lweAvA1kLKPwjrXiT4nXWkeIdXXU/iB8fLrQ9bvHB0Bbixa0tLS1V/HljbW/hnU9dXS7O8K48uXJ1CzFyP+o/2Y/hf8ADT4lfEHxb8b/iZpvgTSPjJ4QvdSvINAudB0TWjBYvZ3clumrXEWu+GLKDzlmCzXzKBwLKxSQqHDfqFQD0pKKKAPQqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q=="
                            alt="Kawsar Islam"
                            className="profile-img rounded-circle border-5 border-light shadow-lg"
                        />
                    </div>
                    <div className="col-md-7">
                        <h1 className="display-3 fw-bold mb-3 text-white">Kawsar Islam</h1>
                        <h2 className="h2 text-light mb-4">Full Stack Web Developer</h2>
                        <p className="lead mb-4 fs-5 text-light" style={{lineHeight: '1.8'}}>
                            I'm a passionate and dedicated web developer with expertise in front-end and back-end technologies. 
                            I specialize in creating beautiful, responsive, and high-performance websites using modern technologies. 
                            With a strong foundation in computer science, I'm committed to delivering exceptional digital solutions.
                        </p>
                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary btn-lg me-2 mb-2">
                                <i className="fas fa-projects"></i> View My Work
                            </a>
                            <a href="#contact" className="btn btn-outline-light btn-lg mb-2">
                                <i className="fas fa-envelope"></i> Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// About Section Component
function AboutSection() {
    return (
        <section id="about" className="about-section py-5">
            <div className="container">
                <h2 className="section-title text-center mb-5">About Me</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <h3 className="card-title">
                                    <i className="fas fa-graduation-cap text-primary"></i> Education
                                </h3>
                                <p className="card-text">
                                    <strong>Diploma in Engineering</strong> - Computer Science and Technology
                                </p>
                                <p className="text-muted mb-0">
                                    <strong>CGPA:</strong> 3.66 / 4.0
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <h3 className="card-title">
                                    <i className="fas fa-info-circle text-info"></i> About
                                </h3>
                                <p className="card-text">
                                    I'm a dedicated web developer passionate about building web applications 
                                    that solve real-world problems. With a strong foundation in computer science 
                                    and hands-on experience in modern web technologies, I'm committed to continuous 
                                    learning and growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Skills Section Component
function SkillsSection() {
    const skillCategories = [
        {
            category: 'Frontend',
            skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
            icon: 'fas fa-laptop-code'
        },
        {
            category: 'Backend',
            skills: ['PHP', 'MySQL', 'REST APIs'],
            icon: 'fas fa-server'
        },
        {
            category: 'Tools & Platforms',
            skills: ['Git', 'GitHub', 'VS Code', 'Responsive Design'],
            icon: 'fas fa-tools'
        },
        {
            category: 'Soft Skills',
            skills: ['Problem Solving', 'Communication', 'Team Work', 'Time Management'],
            icon: 'fas fa-handshake'
        }
    ];

    return (
        <section id="skills" className="skills-section py-5 bg-light">
            <div className="container">
                <h2 className="section-title text-center mb-5">My Skills</h2>
                <div className="row">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="col-md-6 col-lg-3 mb-4">
                            <div className="card border-0 shadow-sm h-100 skill-card">
                                <div className="card-body text-center">
                                    <i className={`${category.icon} fa-3x text-primary mb-3`}></i>
                                    <h5 className="card-title fw-bold">{category.category}</h5>
                                    <div className="skill-list">
                                        {category.skills.map((skill, i) => (
                                            <span key={i} className="badge bg-primary me-2 mb-2">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Projects Section Component
function ProjectsSection() {
    const projects = [
        {
            title: 'To-Do List App',
            description: 'A fully functional to-do list application with add, delete, and filter features. Built with vanilla JavaScript with persistent localStorage.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            link: '#',
            icon: 'fas fa-list-check'
        },
        {
            title: 'Calculator',
            description: 'A simple yet functional calculator with basic arithmetic operations. Clean UI with responsive design.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            link: '#',
            icon: 'fas fa-calculator'
        },
        {
            title: 'React To-Do App',
            description: 'Advanced to-do application built with React featuring component-based architecture and state management.',
            technologies: ['React', 'Bootstrap', 'CSS'],
            link: '#',
            icon: 'fas fa-tasks'
        },
        {
            title: 'Login Form',
            description: 'A responsive login form with validation and modern design using Bootstrap and custom CSS styling.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            link: '#',
            icon: 'fas fa-lock'
        },
        {
            title: 'Drag & Drop Image',
            description: 'Interactive drag and drop functionality for images with smooth animations and intuitive UI.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            link: '#',
            icon: 'fas fa-image'
        },
        {
            title: 'This Portfolio',
            description: 'Professional portfolio website showcasing my skills, projects, and experience. Built with React and Bootstrap.',
            technologies: ['React', 'Bootstrap', 'CSS'],
            link: '#',
            icon: 'fas fa-briefcase'
        }
    ];

    return (
        <section id="projects" className="projects-section py-5">
            <div className="container">
                <h2 className="section-title text-center mb-5">My Projects</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div className="card border-0 shadow-sm h-100 project-card">
                                <div className="card-body">
                                    <div className="project-icon mb-3">
                                        <i className={`${project.icon} fa-2x text-primary`}></i>
                                    </div>
                                    <h5 className="card-title fw-bold">{project.title}</h5>
                                    <p className="card-text text-muted">{project.description}</p>
                                    <div className="mb-3">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="badge bg-info text-dark me-2 mb-2">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent border-0 text-center">
                                    <a href={project.link} className="btn btn-primary btn-sm">
                                        <i className="fas fa-external-link-alt"></i> View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Contact Section Component
function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.subject && formData.message) {
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    return (
        <section id="contact" className="contact-section py-5 bg-light">
            <div className="container">
                <h2 className="section-title text-center mb-5">Get In Touch</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Contact Information</h5>
                                <div className="mb-4">
                                    <h6 className="fw-bold mb-2">
                                        <i className="fas fa-envelope text-primary"></i> Email
                                    </h6>
                                    <a href="mailto:kawsarmd1013@gmail.com" className="text-decoration-none">
                                        kawsarmd1013@gmail.com
                                    </a>
                                </div>
                                <div className="mb-4">
                                    <h6 className="fw-bold mb-2">
                                        <i className="fas fa-phone text-primary"></i> Phone
                                    </h6>
                                    <a href="tel:01988588588" className="text-decoration-none">
                                        +880 1988 588 588
                                    </a>
                                </div>
                                <div className="mb-4">
                                    <h6 className="fw-bold mb-3">Follow Me</h6>
                                    <div className="social-links">
                                        <a href="#" className="btn btn-primary btn-sm me-2">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="#" className="btn btn-info btn-sm me-2">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="#" className="btn btn-danger btn-sm">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Send Me a Message</h5>
                                {submitted && (
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <i className="fas fa-check-circle"></i> Message sent successfully!
                                        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        <i className="fas fa-paper-plane"></i> Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container text-center">
                <p className="mb-0">
                    &copy; 2024 Kawsar Islam. All rights reserved. | Designed & Built with
                    <i className="fas fa-heart text-danger mx-1"></i> using React & Bootstrap
                </p>
            </div>
        </footer>
    );
}

// Main App Component
function Portfolio() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </>
    );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);