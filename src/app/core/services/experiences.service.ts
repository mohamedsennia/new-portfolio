import { Injectable } from "@angular/core";
import { Experience } from "../models/experience.model";
import { ExperienceType } from "../enums/experienceType.model";
@Injectable({providedIn:'root'})
export class ExperiencesService{
   private experiences: Experience[] = [
        new Experience(1, "Bachelor's degree","Software and Information Systems Engineering",'usthb.webp',`
            This degree gave me a solid foundation in programming and how software is built.
            I learned the basics of programming, object-oriented design (OOP), and UML to structure applications properly.
            Through different academic projects, I started understanding how to design, build, and organize complete applications from scratch.
        `,ExperienceType.MAIN,"Septembre 2018-September 2021"),

        new Experience(2, "Master's degree","Visual computing",'usthb.webp',`
            During my Master's, I focused on Artificial Intelligence, Machine Learning, and Visual Computing.
            I worked on projects involving image processing and data analysis, learning how systems can interpret and use visual information.
            This experience helped me better understand how to apply intelligent techniques to real-world problems.
        `,ExperienceType.MAIN,"October 2021-July-2023"),

        new Experience(3, "Assistant engineer level 2","Algerian supreme court",'cs.webp',`
            I worked on internal web applications used daily by court staff.
            I contributed to tools for managing HR processes and organizing legal documents, making them easier to store and access.
            I also helped build features for managing official events, improving how information is handled and shared internally.
        `,ExperienceType.MAIN,"May 2023-January-2025"),

        new Experience(4, "Full stack developper","Yaldinine",'yalidine.webp',`
            Projects still under NDA,More details coming soon
        `,ExperienceType.MAIN,"January 2025-Present"),

        new Experience(5, "Real-Time Messaging Application","","yapper.webp",`
            <ul>
                <li>Built a real-time chat application allowing users to exchange messages instantly.</li>
                <li>Stack: Spring Boot, Angular, WebSockets.</li>
                <li>Implemented user authentication and persistent chat history.</li>
                <li>Focused on creating a smooth and responsive messaging experience.</li>
            </ul>`,
            ExperienceType.SIDE,"https://yapper.mohamedsennia.tech/"),

        new Experience(6, "Price Tracker Platform","","tracker.webp",`
            <ul>
                <li>Developed a platform that allows users to track product prices over time.</li>
                <li>Stack: Spring Boot, Angular.</li>
                <li>Implemented automated scraping to collect price data and display its evolution.</li>
                <li>Helps users make better decisions based on price changes.</li>
            </ul>`,
            ExperienceType.SIDE,"https://pricetracker.mohamedsennia.tech/"),

        new Experience(7, "Multiplayer Blackjack Game","","blackjack.webp",`
            <ul>
                <li>Created a real-time multiplayer Blackjack game playable directly in the browser.</li>
                <li>Stack: Spring Boot, Angular, WebSockets.</li>
                <li>Implemented game rooms and synchronized gameplay between players.</li>
                <li>Focused on delivering a fun and interactive real-time experience.</li>
            </ul>`,
            ExperienceType.SIDE,"https://blackjack.mohamedsennia.tech/"),
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