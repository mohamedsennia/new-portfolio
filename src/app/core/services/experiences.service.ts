import { Injectable } from "@angular/core";
import { Experience } from "../models/experience.model";
import { Technologie } from "../models/technologie.model";

@Injectable({providedIn:'root'})
export class ExperiencesService{
    experiences:Experience[]=[
        new Experience("Bachelor's degree","Software and Information Systems Engineering",'./assets/images/usthb.png',`
            A highly practical, project-oriented degree focused on the full Software Development Life Cycle (SDLC). The ISIL track is designed to produce industry-ready engineers capable of architecting robust information systems and scalable software solutions.
            Key Competencies:
                <ul>
                            <li> -Software Engineering (Génie Logiciel): Applying Agile methodologies, design patterns, and UML modeling to build maintainable and modular applications.</li>
                            <li> -Full-Stack Development: Proficient in modern web technologies, managing both front-end reactivity and back-end logic (Java/Spring Boot, Python, and JavaScript frameworks).</li>
                            <li> -Database Management: Designing and optimizing relational databases (SQL) and understanding the fundamentals of large-scale information system architecture</li>
                            <li> -Systems & Networking: Solid foundation in Operating Systems, network protocols, and distributed systems to ensure high availability and performance.</li>
                </ul>
            `,[
                new Technologie("html","./assets/images/html.png"),
                new Technologie("css","./assets/images/css.png"),
                new Technologie("js","./assets/images/js.png"),
                new Technologie("spring","./assets/images/spring.png"),
               
            ]),
        new Experience("Master's degree","Visual computing",'./assets/images/usthb.png',`
            A research and development-focused program specializing in the lifecycle of visual data—from acquisition and processing to analysis and synthesis. This Master’s degree bridges the gap between high-level mathematics and practical software implementation, providing a deep understanding of how machines perceive and interact with the physical world.
                Key Competencies:
                <ul>
                            <li> -Computer Vision & Image Processing: Implementing advanced algorithms for object detection, pattern recognition, and scene understanding using frameworks like OpenCV and Deep Learning architectures.</li>
                            <li> -Computer Graphics & Visualization: Mastering 3D modeling, rendering pipelines, and data visualization techniques to transform complex datasets into intuitive visual interfaces.</li>
                            <li> -Artificial Intelligence: Leveraging Machine Learning and Neural Networks to solve complex problems in gesture recognition, video indexing, and medical imaging.</li>
                            <li> -Human-Computer Interaction (HCI): Designing immersive experiences through Augmented Reality (AR) and Virtual Reality (VR) environments.</li>
                </ul>
            `,[]),
        new Experience("Assistant engineer level 2","Algerian supreme court",'./assets/images/cs.png',`
            <ul>
            <li>
            - Developed and maintained an HR management web
                application used internally by court staff.</li>
            <li>- Designed and implemented a legal case document
                archiving system using Spring Boot, improving traceability and organization of case files</li>
            <li>
            - Built event
                scheduling features for official events (e.g., minister visits), including guest management and agenda
                planning.
            </li>
            </ul>

            `,[]),
        new Experience("Full stack developper","Yaldinine",'./assets/images/yalidine.png',`
            <ul>
            <li> -Participated in the functional and technical design of a SaaS platform (UML, database modeling, definition of business workflows).</li>
            <li> -Developed warehouse and fulfillment management modules: inventory, movements, client requests, and operational tracking.</li>
            <li> -Implemented a multi-tenant architecture enabling the sharing and rental of warehouse spaces between companies.</li>
            <li> -Developed dedicated spaces for e-commerce merchants: product and order management, and synchronization with Shopify.</li>
            <li> -Contributed to architecture decisions and best practices (performance, scalability, maintainability).</li>
            </ul>
          




            `,[
                new Technologie("html","./assets/images/html.png"),
                new Technologie("css","./assets/images/css.png"),
                new Technologie("ts","./assets/images/ts.png"),
                new Technologie("angular","./assets/images/angular.png"),
                new Technologie("tailwind","./assets/images/tailwind.png"),
               
            ])
    ]
}