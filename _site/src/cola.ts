/// <reference path="estructura.ts"/>

namespace estructuras {

export class Cola extends Estructura<number> {
        
        constructor(maxSize:number) {
            super(maxSize)
        } 

        public push(item: number) {
            if (this.size === this.maxSize ) {
                throw new Error('Error, cola llena');
            } 
            else {
                this.data[this.size++] = item; 
            }
        }
        
    
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

        public pseek(): number {
            return this.data[0];
        }
    }
}