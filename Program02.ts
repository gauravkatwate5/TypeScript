function main(): void {
  var rad: number = 5;
  var ret: number = 0;

  ret = AreaOfCircle(rad);

  console.log("Area Of Circle is :" + ret);
}

function AreaOfCircle(rad: number): number {
  var area: number = 0;
  var PI: number = 3.14;

  area = PI * rad * rad;

  return area;
}

main();
