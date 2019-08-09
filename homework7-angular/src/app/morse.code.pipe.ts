import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'morseCode'
})

export class MorseCodePipe implements PipeTransform {
    transform (value: string) {
        let alphabet = {
            'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
            'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
            'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
            'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
            'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
            'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
            'y': '-.--',  'z': '--..',  ' ': '/',
            '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
            '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
            '9': '----.', '0': '-----'
        }
        
        return value
            .split('')            // Transform the string into an array: ['T', 'h', 'i', 's'...
            .map(function(e){     // Replace each character with a morse "letter"
                return alphabet[e.toLowerCase()] || ''; // Lowercase only, ignore unknown characters.
            })
            .join(' ')            // Convert the array back to a string.
            .replace(/ +/g, ' '); // Replace double spaces that may occur when unknow characters were in the source string.
    };
};