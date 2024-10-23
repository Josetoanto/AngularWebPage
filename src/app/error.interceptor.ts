import { HttpInterceptorFn } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        switch (error.status) {
          case 400:
            errorMessage = 'La solicitud no es válida. Verifica los datos ingresados.';
            break;
          case 404:
            errorMessage = 'El recurso solicitado no fue encontrado.';
            break;
          case 500:
            errorMessage = 'Error en el servidor. Intenta nuevamente más tarde.';
            break;
          default:
            errorMessage = `Error inesperado: ${error.status}. Intenta nuevamente.`;
        }
      }

      // Retorna el error como un mensaje amigable
      return throwError(() => new Error(errorMessage));
    })
  );
};
