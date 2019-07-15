// Создать класс User у которого будут поля name, age, achivments
// Клaссу User добавить следующее методы AddYearOfLife(), AddAchvement(achevemnt);
// Создать класс Achivement в котором будут следующие поля type, heroical, description
// Поместить данные класс в неймспейс SuperHero

// Создать инстансты классов - SpiderMan и IronMan
// + Создать базовые интерфейсы для классов User и Achivement.

namespace SuperHero {

    export interface Hero {
        name: string;
        age: number;
        achivements: Array<Achivement>;

        AddYearOfLife(): void;
        AddAchivement(achivement: Achivement): void;
        
    }

    export interface Power {
        type: string;
        heroical: number;
        description: string;
    }

    export class User implements Hero {
        name: string;
        age: number;
        achivements: Array<Achivement>;
        
        constructor (name: string, age: number, achivements: Array<Achivement>) {
            this.name = name,
            this.age = age;
            this.achivements = achivements;
        }
        
        AddYearOfLife(): void {
            this.age++;
            return;
        }
        
        AddAchivement(achivement: Achivement): Array<Achivement> {
            this.achivements.push(achivement);
            return;
        }
    }  
    
    export class Achivement implements Power {
        type: string;
        heroical: number;
        description: string;

        constructor (type: string, heroical: number, description: string) {
            this.type = type,
            this.heroical = heroical;
            this.description = description;
        }
    }
}

const SpiderManAchivements: SuperHero.Power = new SuperHero.Achivement("Super Power", 1000, "Some description of Super Power");
const IronManAchivements: SuperHero.Power = new SuperHero.Achivement("Super Speed", 100500, "Some description of Super Speed");

const SpiderMan: SuperHero.Hero = new SuperHero.User("SpiderMan", 32, [SpiderManAchivements]);
const IronMan: SuperHero.Hero = new SuperHero.User("IronMan", 32, [IronManAchivements]);

