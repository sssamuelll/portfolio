// src/pages/CVPage.tsx
import React from 'react';
import Header from '../../components/header/Header';
import ProfilePic from '../../components/ProfilePic/ProfilePic';
import '../../components/ProfilePic/ProfilePic.css';
import styles from './CVPage.module.css';
import CollapsibleSection from './components/CollapsibleSection/CollapsibleSection';
import { techStacks, stack } from '../../data/techStacks';




const CVPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className={styles.cvpage}>
                <div className={styles.cvheader}>
                    <div className={styles.cvheaderrow}>
                        <div className={styles.cvheaderLeft}>
                            <div className={styles.cvphoto}>
                                <ProfilePic scaleTo={0.6}/>
                            </div>
                            <div className={styles.cvheadercontent}>
                                <div className={styles.cvname}>Samuel Darío</div>
                                <div className={styles.cvtitle}>Frontend Specialist | Electronics Background | Digital Nomad</div>
                                <div className={styles.cvcontact}>
                                    <a href="mailto:contact@sdar.dev">contact@sdar.dev</a> · +34 691 78 5692 · Bayern, Germany · <a href="https://samueldar.io" target="_blank" rel="noopener noreferrer">Portfolio</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cvicons}>
                            donwload icon
                        </div> 
                    </div>
                    <div className={styles.cvheaderrow}>
                        {/* Professional Summary */}
                        <p className={styles.cvsummary}>
                            I build frontend products that actually ship—fast, clean, and pixel-perfect. With 5 years delivering real features in React and TypeScript, I’m the guy teams call when things need to work, not just look pretty. I learn new tech on the fly (Flutter, Node.js, CI/CD, whatever), mock backends when needed, and always ship.
                        </p>
                    </div>
                </div>
                
                <div className={styles.cvcontent}>
                    <div className={styles.cvleft}>
                        {/* Skills */}
                        <div className={styles.cvsection}>
                            <CollapsibleSection title="Skills">
                                {techStacks.map((category) => (
                                  <div key={category.title} className={styles.techRow}>
                                    {/* Título de la categoría (va siempre visible, por ej. con defaultSubtitle=true) */}
                                    <CollapsibleSection
                                      title={category.title}
                                      defaultSubtitle={true}
                                    >
                                      {/* Aquí dentro, en vez de <li>, mostramos un grid de "cards" */}
                                      <div className={styles.cardGrid}>
                                        {category.items.map((tech: stack) => (
                                          <div className={styles.card}>
                                            <div className={styles.icon}>
                                                {tech.icon}
                                            </div>
                                            <div className={styles.name}>
                                                {tech.name}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </CollapsibleSection>
                                  </div>
                                ))}
                            </CollapsibleSection>
                        </div>
                    
                        {/* Experience */}
                        <div className={styles.cvsection}>
                            <CollapsibleSection title="Experience">
                                <div>
                                    <strong>Frontend Lead</strong> – Pathways Health Partners (Remote) <br/>
                                    <span>2023 – 2024</span>
                                    <ul>
                                        <li>Led the design and implementation of a real-time healthcare dashboard using React, TypeScript, and WebSockets.</li>
                                        <li>Introduced rapid prototyping with Figma, iterating on UX/UI with minimal resources.</li>
                                        <li>Set up CI/CD with Jenkins and Nginx, reducing manual deploy time by 80%.</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong>Frontend Developer & UI Designer</strong> – Zeumatic (Remote) <br/>
                                    <span>2022 – 2023</span>
                                    <ul>
                                        <li>Developed a collaborative platform from scratch using React, Redux, and Next.js.</li>
                                        <li>Managed API integrations and state management for seamless, high-traffic UX.</li>
                                    </ul>
                                </div>
                            </CollapsibleSection>
                        </div>
                        {/* Projects */}
                        <div className={styles.cvsection}>
                            <CollapsibleSection title="Personal Projects">

                                <ul>
                                    <li>
                                        <strong>Analog Modular Synthesizer (Thesis):</strong> Designed and built an analog modular synth, controlled via MIDI and Raspberry Pi (Python firmware).
                                    </li>
                                    <li>
                                        <strong>BioCanvas:</strong> Biomedical image annotation tool (React/TS).
                                    </li>
                                </ul>
                            </CollapsibleSection>
                            
                        </div>
                        
                        {/* Education */}
                        <div className={styles.cvsection}>
                            <CollapsibleSection title="Education">
                                <ul>
                                    <li>B.Sc. Electronic Engineering, Universidad Yacambú, Venezuela</li>
                                </ul>
                            </CollapsibleSection>
                        </div>
                    </div>
                    <div className={styles.cvright}>
                        {/* Extra info, badges, certificates, languages, etc */}
                        <div className={styles.cvsection}>
                            <CollapsibleSection title="Languages">
                                <ul>
                                    <li>Spanish (Native)</li>
                                    <li>English (C1)</li>
                                    <li>German (A1, improving)</li>
                                </ul>
                            </CollapsibleSection>
                        </div>
                        <div className={styles.cvsection}>
                            <CollapsibleSection title="Certificates">
                                <ul>
                                    <li>Frontend Masters: Advanced React Patterns</li>
                                    <li>Scrimba: Responsive Web Design</li>
                                    {/* y los que quieras agregar */}
                                </ul>
                            </CollapsibleSection>
                        </div>
                        <div className={styles.cvsection}>
                            <CollapsibleSection title="Availability">
                                <span>Open to full remote or Europe onsite. Freelance: Yes.</span>
                            </CollapsibleSection>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CVPage;
