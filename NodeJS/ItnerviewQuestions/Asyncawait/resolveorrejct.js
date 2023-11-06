const getName = async () => {
  return "CodeByheart";
};
async function main() {
  const name = await getName();
  console.log("Got the name: " + name);
}
main();
