import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ProjectDetails, Project } from '../../pages/project-details/project-details';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectDetails],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  @ViewChild('projectDialog') projectDialog?: ElementRef<HTMLDialogElement>;

  constructor(
    private cd: ChangeDetectorRef,
    public translationService: TranslationService,
  ) {}

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
      img: 'assets/img/join.jpg',
      sticker: 'assets/img/project-sticker.png',
      github: 'https://github.com/Rudibert-Code/join',
      livetest: 'join.felixwinklerdev.de',
    },
    {
      name: 'El Pollo Loco',
      description:
        "a simple 2-D Jump'n Run Game based on object-oriented approach. Jump on enemys and throw salsa bottles at the Boss in the end.",
      details:
        'My focus in this Project was in Logic, physics, and object-oriented programming (OOP). I built a browser-based game using a canvas-based rendering loop with HTML, CSS, and Vanilla JavaScript. Also i designed custom logic for collision detection, gravity physics, and character animations, showcasing the ability to solve complex algorithmic problems independently.',
      duration: 3,
      technologies: 'HTML CSS JavaScript',
      img: 'assets/img/el-pollo.png',
      sticker: 'assets/img/sticker-project-details.png',
      github: 'https://github.com/FelixWinklerDev/el_pollo_loco',
      livetest: 'elpolloloco.felixwinklerdev.de',
    },
    {
      name: 'Pokedex',
      description:
        'a simple Pokedex based on Poke-API and JavaScript. Search and inspect your favorite pokémon from the first to the lastest editions.',
      details:
        'My focus in this Project was Asynchronous programming and data integration. I created a dynamic search tool that fetches and parses data from the RESTful PokéAPI using async/await and the Fetch API. On handling asynchronous data streams and mapping complex JSON objects to a clean, responsive UI, highlighting efficiency in working with external data sources.',
      duration: 2,
      technologies: 'HTML CSS JavaScript REST-API',
      img: 'assets/img/pokedex.png',
      sticker: 'assets/img/sticker-project-details.png',
      github: 'https://github.com/FelixWinklerDev/pokedex',
      livetest: 'pokedex.felixwinklerdev.de',
    },
  ];

  openProject(project: Project) {
    this.selectedProject = project;
    this.cd.detectChanges();
    this.projectDialog?.nativeElement.showModal();
  }

  nextProject() {
    if (!this.selectedProject) return;
    const idx = this.projects.findIndex((p) => p.name === this.selectedProject?.name);
    const nextIdx = (idx + 1) % this.projects.length;
    this.selectedProject = this.projects[nextIdx];
    this.cd.detectChanges();
  }

  closeProject() {
    this.projectDialog?.nativeElement.close();
    this.selectedProject = null;
  }
}
