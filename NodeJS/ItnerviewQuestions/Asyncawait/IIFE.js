async function getName() {
  return "CodebyHeart";
}
(async () => {
  const name = await getName();
  console.log(name);
})();
