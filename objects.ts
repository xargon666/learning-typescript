function printName(person: { first: string; last: string}) {
    return `${person.first} ${person.last}`;
}

console.log(printName({ first: "Chris", last: "Pucknell" }));

function randomCoords(): { x: number; y: number } {
    return { x: Math.random(), y: Math.random() };
}

console.log(randomCoords());
