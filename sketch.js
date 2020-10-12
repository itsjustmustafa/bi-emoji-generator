let pinks = ["💖",  "🐙",  "🧠",  "👄",  "👛",  "👚",  "👙",  "🎒",  "🐷",  "🦑",  "🦩",  "🌸",  "🌺",  "🌹",  "🌷",  "🚗",  "🏩",  "🎆",  "🎀",  "📕",  "💕",  "💞",  "💓",  "💗",  "💖",  "💘",  "💝",  "💒"];

let purps = ["👾",  "☔️",  "☂️",  "🍆",  "🍇",  "🔮",  "💜",  "☮️",  "♋️",  "⚛️",  "🟣",  "🟪"];

let blues = ["🧵",  "🧢",  "🐬",  "🐳",  "🐟",  "🐋",  "🌏",  "❄️",  "💧",  "💦",  "🧊",  "🎽",  "🌌",  "🌃",  "💎",  "🧿",  "📘",  "💙",  "🚹",  "💤",  "🌐",  "🔵",  "🔷"];
function setup() {
  bi_msg = createElement('h2', '💖💜💙');
  bi_msg.position(20, 5);
  
  button = createButton('generate');
  button.position(bi_msg.x, 65);
  button.mousePressed(generate);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generate() {
  bi_msg.value('');
  let pink_i = getRandomInt(pinks.length);
  let purp_i = getRandomInt(purps.length);
  let blue_i = getRandomInt(blues.length);
  bi_msg.html(pinks[pink_i] + purps[purp_i]+ blues[blue_i]);
  
}
