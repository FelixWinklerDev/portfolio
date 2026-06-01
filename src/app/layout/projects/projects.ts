import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ProjectDetails, Project } from '../../pages/project-details/project-details';

@Component({
  selector: 'app-projects',
  imports: [ProjectDetails],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  @ViewChild('projectDialog') projectDialog?: ElementRef<HTMLDialogElement>;

  constructor(private cd: ChangeDetectorRef) {}

  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      name: 'Join',
      description:
        'a task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      details:
        "My focus in this Project was in state management and UI interactivity. This is a group Project and developed a functional task management system using Angular and TypeScript to handle dynamic 'To-Do,' 'In Progress,' and 'Done' states. Also we implemented drag-and-drop functionality and used LocalStorage to ensure data persistence, demonstrating a structured approach to user data and workflow organization.",
      duration: 5,
      technologies: 'HTML CSS Angular TypeScript',
      img: '/assets/img/laptop.png',
      sticker: '/assets/img/project-sticker.png',
    },
    {
      name: 'El Pollo Loco',
      description:
        "a simple 2-D Jump'n Run Game based on object-oriented approach. Jump on enemys and throw salsa bottles at the Boss in the end.",
      details:
        'My focus in this Project was in Logic, physics, and object-oriented programming (OOP). I built a browser-based game using a canvas-based rendering loop with HTML, CSS, and Vanilla JavaScript. Also i designed custom logic for collision detection, gravity physics, and character animations, showcasing the ability to solve complex algorithmic problems independently.',
      duration: 5,
      technologies: 'HTML CSS JavaScript',
      img: '/assets/img/el-pollo.png',
      sticker: '/assets/img/sticker-project-details.png',
    },
    {
      name: 'Pokedex',
      description:
        'a simple Pokedex based on Poke-API and JavaScript. Search and inspect your favorite pokémon from the first to the lastest editions.',
      details:
        'My focus in this Project was Asynchronous programming and data integration. I created a dynamic search tool that fetches and parses data from the RESTful PokéAPI using async/await and the Fetch API. On handling asynchronous data streams and mapping complex JSON objects to a clean, responsive UI, highlighting efficiency in working with external data sources.',
      duration: 5,
      technologies: 'HTML CSS JavaScript REST-API',
      img: '/assets/img/pokedex.png',
      sticker: '/assets/img/sticker-project-details.png',
    },
  ];

  openProject(project: Project) {
    this.selectedProject = project;
    // ensure Angular has rendered the child before opening the native dialog
    this.cd.detectChanges();
    this.projectDialog?.nativeElement.showModal();
  }

  closeProject() {
    this.projectDialog?.nativeElement.close();
    this.selectedProject = null;
  }
}
