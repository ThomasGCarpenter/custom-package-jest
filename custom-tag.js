function customTag(string) {
  const matches = string.matchAll(/<ddb> (.*?) <ddb>/g);
  const monster = Array.from(matches, (x) => x[1]);

  let i = 0;

  while (i < monster.length) {
    var monsterUrl = `https://www.dndbeyond.com/monsters/${monster[i]}`;
    i++;
    //   var link = document.createElement("a");
    //   link.appendChild(monsterUrl);
    //   console.log(monsterUrl);
    //   return;
    return monsterUrl;
  }
}

// let link = document.createElement("a");

// document.documentElement.replace;

customTag("We were attacked by a <ddb> lich <ddb> and a <ddb> goblin <ddb>");

module.exports = { customTag };
