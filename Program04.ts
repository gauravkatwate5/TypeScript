function main(): void {
  var no: number = 10;
  var ret: boolean;

  ret = CheckPrime(no);

  if (ret == true) {
    console.log("given number are prime");
  } else {
    console.log("given number are not prime");
  }
}

function CheckPrime(no: number): boolean {
  var Cnt: number = 0;
  var ans: boolean = true;

  for (Cnt = 2; Cnt < no; Cnt++) {
    if (no % Cnt == 0) {
      return false;
    }
  }
  return ans;
}

main();
