import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TareaService } from '../service/tarea-service.service'; 
import { ClienteDialogComponent } from '../component/cliente-dialog/cliente-dialog.component';

@Component({
  selector: 'app-edit-note-dialog',
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
  templateUrl: './edit-note-dialog.component.html',
  styleUrl: './edit-note-dialog.component.scss'
})
export class EditNoteDialogComponent {
  titulo: string;
  descripcion: string;
  fecha_creacion: string;

  constructor(
    private tareaService: TareaService,  public dialogRef: MatDialogRef<ClienteDialogComponent> ,
    @Inject(MAT_DIALOG_DATA) public data: { id: number } 
  ) {
    this.tareaService.getNotaById(data.id).subscribe(response => {
    this.titulo = response.titulo; 
    this.descripcion = response.descripcion; 
    this.fecha_creacion = response.fecha_creacion;
    });  
  }

  editar() {
    this.tareaService.editarNota(this.data.id, this.titulo, this.descripcion).subscribe({
      next: () => {
        console.log('Nota actualizada con éxito');
        this.dialogRef.close(true); 
        window.location.reload();
      },
      error: (error) => {
        console.error('Error al actualizar la nota:', error);
        this.dialogRef.close(false); 
      }
    });
  }
}
