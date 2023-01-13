function detectType(data) {
  // your code here
  console.log(data);
  console.log(data.constructor.name);
  if (data === null) return "null";
  if (data === undefined) return "undefined";
  if (data.constructor === FileReader) return "object";
  // return data.constructor.name.toLowerCase();
}

detectType(new Map());
detectType(1);
detectType("string");
detectType(1n);
detectType([]);
detectType(new ArrayBuffer());
