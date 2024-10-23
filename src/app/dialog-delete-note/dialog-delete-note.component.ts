import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TareaService } from '../service/tarea-service.service'; 
import { ClienteDialogComponent } from '../component/cliente-dialog/cliente-dialog.component';


@Component({
  selector: 'app-dialog-delete-note',
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
  templateUrl: './dialog-delete-note.component.html',
  styleUrls: ['./dialog-delete-note.component.scss'],
})


export class DialogDeleteNoteComponent {
  constructor(
    private tareaService: TareaService,  public dialogRef: MatDialogRef<ClienteDialogComponent>  , @Inject(MAT_DIALOG_DATA) public data: { id: number } 
  ) {}

  borrar() {
    this.tareaService.deleteNota(this.data.id).subscribe({
      next: () => {
        console.log('Nota eliminada con éxito');
        this.dialogRef.close(true);
        window.location.reload();
      },
      error: (error) => {
        console.error('Error al eliminar la nota:', error);
        this.dialogRef.close(false); 
      }
    });
  }
}
