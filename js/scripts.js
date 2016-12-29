
var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var greenElephants = 'Zielone słonie';
var greenElephantsUpperCase = greenElephants.toUpperCase();
var textCharsAfter = text.replace('Papugi', [greenElephantsUpperCase]);
var partOfText = textCharsAfter.slice(0,[textCharsAfter.length/2]);
console.log(partOfText);