//ブロッキング処理(この処理を終えるまで次の処理にいかない)
var start = new Date().getTime();
console.log("Hello");
while (new Date().getTime() < start + 1000);
console.log("World");
