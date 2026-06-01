import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Project {
  name: string;
  description: string;
  details: string;
  duration: number;
  technologies: string;
  img: string;
  sticker: string;
  github: string;
  livetest: string;
}

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
}
