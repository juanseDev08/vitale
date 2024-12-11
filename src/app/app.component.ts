import { Component, OnInit , AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from 'express';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  autenticado = false;
  nombre?: string;
  items: MenuItem[] = [];
  title = 'gpeuq_frontend';
  sidebarVisible: boolean = false;

  nomTercero?: string;
  rolAutorizado = false;

  estadoSwitch:number = 1;

  /**Lista Renuncia formulas de pago */
  listaEstilos = [
    { label: 'Verde Institucional', value: 1 },
    { label: 'Negro Minimalista', value: 2 },
    { label: 'Azul  Minimalista', value: 3 }
  ];

  estilo: any ;
  placeholderText: string = 'Seleccione';

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.setupMenuItems();
  }


  toggleItem(item: any): void {
    item.expanded = !item.expanded;
  }

  setupMenuItems(): void {

      this.items = [
        {
          label: 'Sobre mi',
          command: () => this.scrollToSection('sobreMi')
        },
        {
          label: 'Marcas',
          command: () => this.scrollToSection('marcas')
        },
        {
          label: 'Contactame',
          command: () => this.scrollToSection('contactame')
        },
      ];
    
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }



}
