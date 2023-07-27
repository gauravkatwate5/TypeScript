function main(): void {
  var iNo1: number = 22;
  var iNo2: number = 55;
  var iNo3: number = 33;
  var ret: number = 0;

  ret = Maximum(iNo1, iNo2, iNo3);

  console.log("Maximum Number of Given Numbers is :" + ret);
}

function Maximum(iNo1: number, iNo2: number, iNo3: number): number {
  var max: number = iNo1;

  if (iNo2 > max) {
    max = iNo2;
  }

  if (iNo3 > max) {
    max = iNo3;
  }

  return max;
}

main();
