import { Injectable } from "@angular/core";
import { Experience } from "../models/experience.model";
import { ExperienceType } from "../enums/experienceType.model";

@Injectable({providedIn:'root'})
export class ExperiencesService{
   private experiences: Experience[] = [
        new Experience(1, "Bachelor's degree","Software and Information Systems Engineering",'usthb.webp',`
            A highly practical, project-oriented degree focused on the full Software Development Life Cycle (SDLC). The ISIL track is designed to produce industry-ready engineers capable of architecting robust information systems and scalable software solutions.
            Key Competencies:
                <ul>
                    <li> -Software Engineering (Génie Logiciel): Applying Agile methodologies, design patterns, and UML modeling to build maintainable and modular applications.</li>
                    <li> -Full-Stack Development: Proficient in modern web technologies, managing both front-end reactivity and back-end logic (Java/Spring Boot, Python, and JavaScript frameworks).</li>
                    <li> -Database Management: Designing and optimizing relational databases (SQL) and understanding the fundamentals of large-scale information system architecture</li>
                    <li> -Systems & Networking: Solid foundation in Operating Systems, network protocols, and distributed systems to ensure high availability and performance.</li>
                </ul>
            `,ExperienceType.MAIN,"Septembre 2018-September 2021"),

        new Experience(2, "Master's degree","Visual computing",'usthb.webp',`
            A research and development-focused program specializing in the lifecycle of visual data—from acquisition and processing to analysis and synthesis. This Master's degree bridges the gap between high-level mathematics and practical software implementation, providing a deep understanding of how machines perceive and interact with the physical world.
            Key Competencies:
                <ul>
                    <li> -Computer Vision & Image Processing: Implementing advanced algorithms for object detection, pattern recognition, and scene understanding using frameworks like OpenCV and Deep Learning architectures.</li>
                    <li> -Computer Graphics & Visualization: Mastering 3D modeling, rendering pipelines, and data visualization techniques to transform complex datasets into intuitive visual interfaces.</li>
                    <li> -Artificial Intelligence: Leveraging Machine Learning and Neural Networks to solve complex problems in gesture recognition, video indexing, and medical imaging.</li>
                    <li> -Human-Computer Interaction (HCI): Designing immersive experiences through Augmented Reality (AR) and Virtual Reality (VR) environments.</li>
                </ul>
            `,ExperienceType.MAIN,"October 2021-July-2023"),

        new Experience(3, "Assistant engineer level 2","Algerian supreme court",'cs.webp',`
            <ul>
                <li>- Developed and maintained an HR management web application used internally by court staff.</li>
                <li>- Designed and implemented a legal case document archiving system using Spring Boot, improving traceability and organization of case files.</li>
                <li>- Built event scheduling features for official events (e.g., minister visits), including guest management and agenda planning.</li>
            </ul>
            `,ExperienceType.MAIN,"May 2023-January-2025"),

        new Experience(4, "Full stack developper","Yaldinine",'yalidine.webp',`
            <ul>
                <li> -Participated in the functional and technical design of a SaaS platform (UML, database modeling, definition of business workflows).</li>
                <li> -Developed warehouse and fulfillment management modules: inventory, movements, client requests, and operational tracking.</li>
                <li> -Implemented a multi-tenant architecture enabling the sharing and rental of warehouse spaces between companies.</li>
                <li> -Developed dedicated spaces for e-commerce merchants: product and order management, and synchronization with Shopify.</li>
                <li> -Contributed to architecture decisions and best practices (performance, scalability, maintainability).</li>
            </ul>
            `,ExperienceType.MAIN,"January 2025-Present"),

        new Experience(5, "Real-Time Messaging Application","","yapper.webp",`
            <ul>
                <li>Built a real-time chat application using Spring Boot, Angular, and WebSockets.</li>
                <li>Implemented bi-directional communication, user authentication, and authorization using JWT.</li>
                <li>Designed persistent chat history storage using a relational database.</li>
            </ul>`,
            ExperienceType.SIDE),

        new Experience(6, "Price Tracker Platform","","tracker.webp",`
            <ul>
                <li>Full-stack application allowing users to track price changes for products on eBay.fr.</li>
                <li>Backend built with Spring Boot for data scraping, processing, and scheduling.</li>
                <li>Frontend built with Angular for managing tracked items and visualizing price changes.</li>
                <li>Deployed on Railway and Netlify.</li>
                <li>Live demo: <a href="https://trackprices.netlify.app" target="_blank">trackprices.netlify.app</a></li>
            </ul>`,
            ExperienceType.SIDE),

        new Experience(7, "Multiplayer Blackjack Game","","blackjack.webp",`
            <ul>
                <li>Developed a real-time multiplayer Blackjack game using Spring Boot, Angular, and WebSockets.</li>
                <li>Implemented game rooms, session management, and synchronized game state across players.</li>
                <li>Designed complete game logic including card dealing, hit/stand actions, and scoring.</li>
            </ul>`,
            ExperienceType.SIDE),
    ];

    getMainQuests(): Experience[] {
        return this.experiences.filter(e => e.experienceType === ExperienceType.MAIN);
    }

    getSideQuests(): Experience[] {
        return this.experiences.filter(e => e.experienceType === ExperienceType.SIDE);
    }

    getQuestById(id: number): Experience | undefined {
        return this.experiences.find(e => e.id === id);
    }
}