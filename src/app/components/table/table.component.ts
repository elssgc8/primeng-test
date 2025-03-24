import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HarryPotterService } from '../../services/harry-potter.service';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, TagModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  private readonly HarryPotterService = inject(HarryPotterService);

  staff: any[] = [];
  cols: any[] = [
    { field: 'name', header: 'Nombre' },
    { field: 'image', header: 'Foto' },
    { field: 'gender', header: 'Genero' },
    { field: 'species', header: 'Especie' },
    { field: 'house', header: 'Casa' },
    { field: 'patronus', header: 'Patronus'},
    { field: 'alive', header: 'Estado' }
  ];

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.HarryPotterService.getStaff().subscribe(
      data => {
        this.staff = data;
        console.log(this.staff);

      },
      error => {
        console.error("Error consultando el staff", error);

      }
    )
  }
}

