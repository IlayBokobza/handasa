import fs from "fs";
import { resolve } from "path";


export interface Patient{
    createdAt:number,
    score:number,
    name:string,
    id:string,
}

export class Storage {
    static path = resolve('./patients.json')

    static init(){
        if(!fs.existsSync(this.path)){
            fs.writeFileSync(this.path,"[]")
        }
    }

    static read(){
        const file = fs.readFileSync(this.path).toString()
        return JSON.parse(file) as Patient[]
    }

    static getPatients(){
        return this.read().sort((a,b) => a.score - b.score).reverse()
    }

    static addPatient(patient:Patient){
        const data = this.read()
        data.push(patient)
        fs.writeFileSync(this.path,JSON.stringify(data))
    }

    static removePatient(id:string){
        const data = this.read()
        const index = data.findIndex(p => p.id === id)

        if(index === -1) return;

        data.splice(index,1)
        fs.writeFileSync(this.path,JSON.stringify(data))
    }
}

Storage.init()