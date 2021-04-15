/**
 * Clase Cola que extiende a la clase Estructura, implementando
 * las funciones específicas de la misma
 * @param maxSize valor de inicialización que define el tamaño máximo
*/

/// <reference path="estructura.ts"/>

namespace estructuras {

export class Cola extends Estructura<number> {
        
        constructor(maxSize:number) {
            super(maxSize)
        } 

        /**
         * Función push(): Inserta un elemento al final 
         * @param item elemento a insertar
        */
        public push(item: number) {
            if (this.size === this.maxSize ) {
                throw new Error('Error, cola llena');
            } 
            else {
                this.data[this.size++] = item; 
            }
        }
        
        /**
         * Función pop(): Saca al primer elemento de la cola 
         * @returns @param item primer elemento de la cola
        */
        public pop(): number {
            if (this.size === 0 ) {
                throw new Error('Error, cola vacía');
            }
            const item = this.data[0];    
            
            for (let i = 0; i < this.size; i++) {
                this.data[i] = this.data[i+1];
            }
            this.size--;
            return item;
        }
        /**
         * Función pseek(): Devuelve el primer elemento de la cola
         * @returns elemento en el primer lugar de la cola
        */
        public pseek(): number {
            return this.data[0];
        }
    }
}