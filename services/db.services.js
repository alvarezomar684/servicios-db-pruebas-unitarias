import fs from "fs/promises";
import path from "path";
import faker from "faker";

const dbPath = path.resolve('db', 'db.json');

class AcademloDb {

    static dbPath = path.resolve("db", "db.json");

    static findAll = async() => {
        try{
            let data = await fs.readFile(this.dbPath, "utf8");
            return JSON.parse(data);
        }catch(error){
            throw new Error("Hubo un error al tratar de obtener todos los registros de la DB");
        }
    }

    static async findById (id) {    
        const users = await this.findAll();    
        const userObj = users.find((user) => user.id === id);    
        return userObj;
    }

    static async create (obj) {
        try {            
            const users = await this.findAll();      
            const nextId = users.length + 1;
      
            obj = {
              ...obj,
              id: nextId,
            };     
            
            users.push(obj);            
            await fs.writeFile(dbPath, JSON.stringify(users));
            return obj;

        } catch (error) {
            console.error(error);
        }
    }

    static async update  (obj, id)  {
        try {            
            const users = await this.findAll();            
            const index = users.findIndex((user) => user.id === id);

            if (index === -1) {
              throw new Error();
            }         
               
            users[index] = obj;
            return obj;

          } catch (error) {
            throw new Error('No existe el usuario en la DB');
          }
    }

    static async delete (id)  {
        try {
            
            const users = await this.findAll();            
            const index = users.findIndex((user) => user.id === id);

            if (index === -1) {
              throw new Error();
            }
            
            users.splice(index, 1);
            return true;

          } catch (error) {
            return false;
          }
    }

    static clear = async() => {
        try{
            await fs.writeFile(this.dbPath, JSON.stringify([]));
        }catch(error){
            throw new Error("Hubo un error al tratar de vaciar la DB");
        }
    }

    static populateDB = async(size) => {
        let userArr = [];
        for(let i = 0; i<size; i++){
            let userObj = {
                id: i + 1,
                firstname: faker.name.firstName(),
                lastname: faker.name.lastName(),
                email: faker.internet.email().toLowerCase()
            };

            userArr.push(userObj);
        }

        try{
            await fs.writeFile(this.dbPath, JSON.stringify(userArr));
            return userArr;
        }catch(error){
            throw new Error("Hubo un error al insertar en la base de datos");
        }
    }

}

export default AcademloDb;