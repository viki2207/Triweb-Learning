async function giveMeName() {
  return "CodeByheart";
}
async function main() {
  const name = await giveMeName();
  console.log(name);
}
main();
