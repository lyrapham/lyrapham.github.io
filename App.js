const { motion, AnimatePresence } = window.Motion;

function Navigation({ activeSection, setActiveSection }) {
    return (
        <nav>
            <motion.div 
                className="nav-content"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div 
                    className="nav-links" 
                    role="tablist"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    <NavButton
                        section="projects"
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                        label="Projects"
                    />
                    <NavButton
                        section="experiences"
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                        label="Experiences"
                    />
                    <NavButton
                        section="contact"
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                        label="Contact"
                    />
                </motion.div>
            </motion.div>
        </nav>
    );
}

function NavButton({ section, activeSection, setActiveSection, label }) {
    return (
        <motion.button 
            className={`nav-btn ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
            role="tab"
            aria-selected={activeSection === section}
            whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
            }}
            whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
            }}
            layout
        >
            <motion.span
                initial={false}
                animate={{
                    color: activeSection === section ? '#ffffff' : '#1f2937',
                }}
                transition={{ duration: 0.3 }}
            >
                {label}
            </motion.span>
        </motion.button>
    );
}

function App() {
    const [activeSection, setActiveSection] = React.useState('projects');

    return (
        <React.Fragment>
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
            <main className="main-content">
                <IntroSection />
                <AnimatePresence mode="wait">
                    {activeSection === 'projects' && (
                        <ProjectsSection key="projects" />
                    )}
                    {activeSection === 'experiences' && (
                        <ExperiencesSection key="experiences" />
                    )}
                    {activeSection === 'contact' && (
                        <ContactSection key="contact" />
                    )}
                </AnimatePresence>
            </main>
            <footer>
                <div className="footer-content">
                    <p>© 2024 Lyra Pham. All rights reserved.</p>
                </div>
            </footer>
        </React.Fragment>
    );
}

function IntroSection() {
    return (
        <section className="intro-section">
            <motion.div 
                className="intro-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>Lyra Pham</h1>
                <div className="subtitle">Computer Instructor & Data Engineer</div>
                <div className="about-summary">
                    <p>I am a Data Engineer, and Computer Instructor passionate about building intelligent data solutions, automating workflows, and empowering others through technical education. With a strong background in Python, SQL, Selenium, and Data Analytics, I specialize in data engineering, software automation, real-time system monitoring, and AI-driven solutions.</p>
                    <div className="skill-tags">
                        <span>Data Engineering & Analytics</span>
                        <span>Python</span>
                        <span>SQL</span>
                        <span>Power BI</span>
                        <span>Tableau</span>
                        <span>Apache Superset</span>
                        <span>Metabase</span>
                        <span>AWS</span>
                        <span>Azure Cloud</span>
                        <span>Docker</span>
                        <span>Project Management</span>
                        <span>Team Leadership</span>
                        <span>Agile & Scrum</span>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:lyrapham1@gmail.com">lyrapham1@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <i className="fab fa-github"></i>
                        <a href="https://github.com/lyrapham" target="_blank">github.com/lyrapham</a>
                    </div>
                    <div className="contact-item">
                        <i className="fab fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/lyra-pham/" target="_blank">linkedin.com/in/lyra-pham</a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function ProjectsSection() {
    return (
        <motion.section 
            className="projects-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2 
                className="section-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Featured Projects
            </motion.h2>
            <div className="project-grid">
                <motion.div 
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="project-image">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <img src="bank-dashboard-preview.png" alt="Bank Interest Rate Dashboard" />
                    </div>
                    <div className="project-content">
                        <h3>Vietnam Bank Interest Rate Dashboard</h3>
                        <p>Welcome to my Interactive Vietnamese Bank Interest Rate Dashboard! This interactive tool helps you compare interest rates across major banks in Vietnam. Whether you're looking for the best savings rates or analyzing market trends, this dashboard has got you covered!</p>
                        <div className="project-links">
                            <div className="tooltip-container">
                                <a href="https://bank-interest-rate-dashboard-lyrapham.streamlit.app/" className="btn demo-btn" target="_blank">
                                    <i className="fas fa-external-link-alt"></i> Live Demo
                                </a>
                                <div className="tooltip">This action will open a new tab</div>
                            </div>
                            <a href="https://github.com/lyrapham/bank-interest-rate-dashboard" className="btn" target="_blank">
                                <i className="fab fa-github"></i> View Code
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

function ExperiencesSection() {
    return (
        <motion.section 
            className="projects-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2 
                className="section-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Professional Experience
            </motion.h2>
            <div className="project-grid">
                <motion.div 
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="project-content">
                        <div className="construction-notice">
                            <div className="construction-image">
                                <img src="images/construction.jpg" alt="Under Construction" className="construction-img" />
                            </div>
                            <h3>🏗️ Under Construction!</h3>
                            <p>Hey there! 👋 I'm currently building something awesome in this section. Check back soon to explore my professional journey and achievements! In the meantime, feel free to visit my LinkedIn profile for a complete overview of my experience.</p>
                            <div className="project-links">
                                <div className="tooltip-container">
                                    <a href="https://www.linkedin.com/in/lyra-pham/" className="btn demo-btn" target="_blank">
                                        <i className="fab fa-linkedin"></i> View LinkedIn
                                    </a>
                                    <div className="tooltip">This action will open a new tab</div>
                                </div>
                                <a href="https://github.com/lyrapham" className="btn" target="_blank">
                                    <i className="fab fa-github"></i> View GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

function ContactSection() {
    return (
        <motion.section 
            className="projects-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2 
                className="section-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Let's Connect
            </motion.h2>
            <div className="project-grid">
                <motion.div 
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="project-content">
                        <h3>Get in Touch!</h3>
                        <div className="contact-message">
                            <p><span className="emoji">👋</span> Hey there! I'd love to connect, collaborate, and chat about all things tech, AI, and data! <span className="emoji">🚀</span></p>
                            <p><span className="emoji">💡</span> Whether you have an exciting project idea, need career advice, or just want to geek out over cool tech, feel free to reach out!</p>
                            <p>Looking forward to hearing from you! <span className="emoji">🤩</span><span className="emoji">🚀</span></p>
                        </div>
                        <div className="project-links">
                            <div className="tooltip-container">
                                <a href="mailto:lyrapham1@gmail.com" className="btn demo-btn">
                                    <i className="fas fa-envelope"></i> Email Me
                                </a>
                                <div className="tooltip">Open Email Application</div>
                            </div>
                            <a href="https://www.linkedin.com/in/lyra-pham/" className="btn" target="_blank">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 