function main(): void {
  var No: number = 20;

  Factors(No);
}

function Factors(no: number): void {
  var Cnt: number = 0;

  for (Cnt = 0; Cnt < no; Cnt++) {
    if (no % Cnt == 0) {
      console.log(Cnt);
    }
  }
}

main();
