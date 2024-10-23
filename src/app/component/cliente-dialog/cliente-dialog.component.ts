import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { TareaService } from '../../service/tarea-service.service'; 



@Component({
  selector: 'app-cliente-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './cliente-dialog.component.html',
  styleUrl: './cliente-dialog.component.scss'
})
export class ClienteDialogComponent {
  titulo: string = '';
  descripcion: string = '';

  constructor( private tareaService: TareaService,  public dialogRef: MatDialogRef<ClienteDialogComponent> ) {}

  guardarNota() {
    const fechaCreacion = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');

    const nuevaNota = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      fecha_creacion: fechaCreacion,
    };

    this.tareaService.crearNota(nuevaNota).subscribe({
      next: (response) => {
        console.log('Nota creada:', response);
        this.dialogRef.close(); 
        window.location.reload();
      },
      error: (error) => {
        console.error('Error al crear la nota:', error);
      }
    });
  }
}