interface Converter {
    toSystem(num: number): string;
    fromSystem(num: string): number;
}

class ToBinary implements Converter {
    toSystem(num: number): string {
        //dec -> bin
        return (+num).toString(2);
    }

    fromSystem(num: string): number {
        //bin -> dec
        return parseInt(num, 2);
    }
}

class ToHex implements Converter {
    toSystem(num: number): string {
        //dec -> hex
        return (+num).toString(8);
    }

    fromSystem(num: string): number {
        //hex -> dec
        return parseInt(num, 8);
    }
}

class ToHexDec implements Converter {
    toSystem(num: number): string {
        //dec -> hexdec
        return (+num).toString(16);
    }

    fromSystem(num: string): number {
        //hexdec -> dec
        return parseInt(num, 16);
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


