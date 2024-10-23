import { Component, inject, OnInit } from '@angular/core';
import { TareaService } from '../../service/tarea-service.service';
import { NgFor } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ClienteDialogComponent } from '../cliente-dialog/cliente-dialog.component';
import { DialogDeleteNoteComponent } from '../../dialog-delete-note/dialog-delete-note.component';
import { EditNoteDialogComponent } from '../../edit-note-dialog/edit-note-dialog.component';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { DescriptionPipePipe } from '../../pipe/description-pipe.pipe';

interface Nota {
  id: number;
  titulo: string
  descripcion: string
  fecha_creacion: string
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor,DatePipe,TitleCasePipe,DescriptionPipePipe],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  notas: Nota[] = [];
  readonly dialog = inject(MatDialog);


  constructor(private tareaService: TareaService) {}
  ngOnInit(): void {
    this.tareaService.getNotas().subscribe(response => {
      this.notas = response.notas;
    });
  }
  
  addNota(): void {
    this.dialog.open(ClienteDialogComponent, {
      data: {},
    });
  }

  deleteNota(id: number): void {
    this.dialog.open(DialogDeleteNoteComponent, {
      data: {id : id},
    });
  }

  editNote(nota: Nota): void{
    this.dialog.open(EditNoteDialogComponent, {
      data: {
        id: nota.id
      },
    });
  }
}


