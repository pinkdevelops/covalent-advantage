import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'covalent-app',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  APP_TITLE = 'ADVANTAGE';

  // Current date
  year: any = new Date().getFullYear();

  // Sidenav routes
  routes: Object[] = [];
  engines: Object[] = [];
  developer: Object[] = [];

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this.routes = [
      {
        title: 'Homepage',
        route: '/',
        icon: 'home',
        show: true,
      },
      {
        title: 'Browse',
        route: '/browse',
        icon: 'store',
        show: true,
      },
      {
        title: 'Monitoring',
        route: '/monitoring',
        icon: 'insert_chart',
        show: true,
      },
      {
        title: 'Deployments',
        route: '/deployments',
        icon: 'cloud_upload',
        show: true,
      },
      {
        title: 'APIs & Services',
        route: '/apis',
        icon: 'cast_connected',
        show: true,
      },
      {
        title: 'SSO & IAM',
        route: '/identify',
        icon: 'person_pin',
        show: true,
      },
    ];
    this.engines = [
      {
        title: 'SQL Engine',
        route: '/',
        icon: 'developer_board',
        show: true,
      },
      {
        title: 'Machine Learning Engine',
        route: '/browse',
        icon: 'memory',
        show: true,
      },
      {
        title: 'Graph Engine',
        route: '/monitoring',
        icon: 'group_work',
        show: true,
      },
      {
        title: 'Deep Learning Engine',
        route: '/deployments',
        icon: 'local_library',
        show: true,
      },
    ];
    this.developer = [
      {
        title: 'Developer Homepage',
        route: '/',
        icon: 'desktop_mac',
        show: true,
      },
      {
        title: 'SQL Editor',
        route: '/browse',
        icon: 'code',
        show: true,
      },
      {
        title: 'API Catalog',
        route: '/monitoring',
        icon: 'widgets',
        show: true,
      },
    ];
  }
  // Theme toggle
  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }
  
}