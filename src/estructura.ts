/**
 * Clase genérica Estructura de datos
 * @param data array de elementos @type T
 * @param size número de elementos actuales en la estructura
 * @param maxSize tamaño máximo de la estructura.
 * Al construir la estructura se incializa vacía y de tamaño @param maxSize
*/

namespace estructuras {

export class Estructura<T> {
    protected data: T[];
    protected size: number;
    protected readonly maxSize: number;
    
    public constructor(maxLong: number) {

        this.size = 0;
        this.maxSize = maxLong;
        this.data = new Array<T>(this.maxSize);
    
    }
    
    /**
     * Función getSize(): Devuelve el número de elementos 
     * @returns @param counter nº de elementos
    */

    public getSize(): number {
        let counter: number = 0;
        for (let i=0; i<this.size; i++){
            if (this.data[i] !== null)
                counter++;
        } 
        
        return counter;

    }
    /**
     * Función print(): Imprime la cola
     * @returns cadena con el contenido actual de la cola
    */
    public print(): string {
        return this.data.join(', ');
        };
    }
}
