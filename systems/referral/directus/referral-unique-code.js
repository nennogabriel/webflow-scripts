module.exports = async function(data) {
  const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-";

  const nanoid = (length = 21) => {
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };
  const uniqueCode = nanoid(10);
  return { uniqueCode };
}