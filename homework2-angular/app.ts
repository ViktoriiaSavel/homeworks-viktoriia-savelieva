interface Converter {
    toSystem(num: number): string;
    fromSystem(num: string): number;
}

class ToBinary implements Converter {
    toSystem(num: number): string {
        //dec -> bin
        let  decCode: number = num;

        let binCode = (+decCode).toString(2);
        return binCode;
    }

    fromSystem(num: string): number {
        //bin -> dec
        let binCode: string = num;

        let decCode = parseInt(binCode, 2);
        return decCode;
    }
}

class ToHex implements Converter {
    toSystem(num: number): string {
        //dec -> hex
        let decCode: number = num;

        let hexCode = (+decCode).toString(8);
        return hexCode;
    }

    fromSystem(num: string): number {
        //hex -> dec
        let hexCode: string = num;

        let decCode = parseInt(hexCode, 8);
        return decCode;
    }
}

class ToHexDec implements Converter {
    toSystem(num: number): string {
        //dec -> hexdec
        let decCode: number = num;

        let hexDecCode = (+decCode).toString(16);
        return hexDecCode;
    }

    fromSystem(num: string): number {
        //hexdec -> dec
        let hexDecCode: string = num;

        let decCode = parseInt(hexDecCode, 16);
        return decCode;
    }
}

let convertToBin = new ToBinary();
let convertToHex = new ToHex();
let convertToHexDec = new ToHexDec();

console.log(convertToBin.toSystem(45));
console.log(convertToBin.fromSystem("101101"));

console.log(convertToHex.toSystem(450));
console.log(convertToHex.fromSystem("702"));

console.log(convertToHexDec.toSystem(45));
console.log(convertToHexDec.fromSystem("2d"));


