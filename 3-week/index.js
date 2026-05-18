const fs = require("fs/promises");

async function main() {
  const contents = await fs.readFile("a.txt", "utf-8");
  console.log(contents);

  const contents2 = await fs.readFile("b.txt", "utf-8");
  console.log(contents2);
}

main();
