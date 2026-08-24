/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
const svgNS = "http://www.w3.org/2000/svg";

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const range = (value, start, end) => clamp((value - start) / (end - start));
const smooth = (value) => value * value * (3 - 2 * value);
const mix = (from, to, amount) => from + (to - from) * amount;

function seeded(index) {
  const value = Math.sin(index * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
}

function svgElement(name, attributes = {}) {
  const element = document.createElementNS(svgNS, name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function buildGrass() {
  const grass = document.querySelector("#grassBlades");

  for (let index = 0; index < 92; index += 1) {
    const x = -20 + index * 11.5;
    const height = 42 + seeded(index) * 118;
    const lean = (seeded(index + 20) - 0.5) * 42;
    const width = 0.7 + seeded(index + 40) * 2.1;
    const blade = svgElement("path", {
      class: "grass-blade",
      d: `M ${x} 1010 Q ${x + lean * 0.25} ${1005 - height * 0.55} ${x + lean} ${1010 - height}`,
      "stroke-width": width.toFixed(2),
    });
    grass.appendChild(blade);
  }
}

function buildYellowFlower() {
  const petals = document.querySelector("#yellowPetals");
  const petalCount = 38;

  for (let index = 0; index < petalCount; index += 1) {
    const ring = index % 2;
    const angle = (index / petalCount) * 360 + (seeded(index) - 0.5) * 8;
    const signedAngle = angle > 180 ? angle - 360 : angle;
    const length = 92 + ring * 22 + seeded(index + 5) * 22;
    const width = 12 + seeded(index + 11) * 9;
    const wrapper = svgElement("g", {
      class: "petal-wrap",
    });
    wrapper.dataset.angle = signedAngle.toFixed(2);
    wrapper.dataset.length = length.toFixed(2);
    wrapper.dataset.width = width.toFixed(2);
    wrapper.dataset.delay = (seeded(index + 45) * 0.08).toFixed(3);

    const d = `M0 7 C${(-width * 0.72).toFixed(2)} ${(-length * 0.28).toFixed(2)} ${(-width).toFixed(2)} ${(-length * 0.76).toFixed(2)} ${(-width * 0.12).toFixed(2)} ${(-length).toFixed(2)} C${(width * 0.72).toFixed(2)} ${(-length * 0.86).toFixed(2)} ${(width * 0.94).toFixed(2)} ${(-length * 0.34).toFixed(2)} 0 7 Z`;
    const veinLean = (seeded(index + 70) - 0.5) * width * 0.7;
    const vein = `M0 4 Q${veinLean.toFixed(2)} ${(-length * 0.42).toFixed(2)} ${(veinLean * 0.45).toFixed(2)} ${(-length * 0.8).toFixed(2)} M${(veinLean * 0.35).toFixed(2)} ${(-length * 0.35).toFixed(2)} L${(width * 0.48).toFixed(2)} ${(-length * 0.48).toFixed(2)}`;
    wrapper.appendChild(svgElement("path", { class: "yellow-petal", d }));
    wrapper.appendChild(svgElement("path", { class: "yellow-petal-wash", d }));
    if (index % 2 === 0) {
      const poolX = (seeded(index + 104) - 0.5) * width * 0.42;
      const poolY = -length * (0.08 + seeded(index + 118) * 0.16);
      wrapper.appendChild(svgElement("path", {
        class: "yellow-petal-pool",
        d,
        transform: `translate(${poolX.toFixed(2)} ${poolY.toFixed(2)}) scale(0.58 0.68)`,
      }));
    }
    if (index % 3 === 0 || seeded(index + 86) > 0.86) {
      wrapper.appendChild(svgElement("path", { class: "petal-outline", d }));
    }
    if (index % 4 === 1) {
      wrapper.appendChild(svgElement("path", { class: "petal-sketch", d: vein }));
    }
    petals.appendChild(wrapper);
  }
}

function addPappus(group, length, spread = 9) {
  const fuzz = [-spread, -spread * 0.5, 0, spread * 0.5, spread]
    .map((offset) => `M${length} 0 Q ${length + 8} ${offset * 0.35} ${length + 14} ${offset}`)
    .join(" ");
  group.appendChild(svgElement("path", {
    class: "seed-mark",
    d: `M0 0 Q ${length * 0.45} -2 ${length} 0 ${fuzz}`,
  }));
}

function buildSeedHead() {
  const seedHead = document.querySelector("#seedHead");
  const seedCount = 72;
  seedHead.appendChild(svgElement("circle", {
    id: "seedReceptacle",
    class: "seed-receptacle",
    cx: "0",
    cy: "0",
    r: "9",
  }));

  for (let index = 0; index < seedCount; index += 1) {
    const angle = (index / seedCount) * 360 + (seeded(index + 90) - 0.5) * 5;
    const length = 59 + seeded(index + 110) * 36;
    const seed = svgElement("g", { class: "attached-seed" });
    const rotor = svgElement("g", {
      class: "seed-rotor",
      transform: `rotate(${angle.toFixed(2)})`,
    });

    seed.dataset.delay = (seeded(index + 330) * 0.5).toFixed(3);
    seed.dataset.opacity = (0.55 + seeded(index + 170) * 0.35).toFixed(3);
    seed.dataset.dx = String(650 + seeded(index + 270) * 520);
    seed.dataset.dy = String(-290 + seeded(index + 290) * 510);
    seed.dataset.turn = String(-50 + seeded(index + 310) * 170);
    addPappus(rotor, length, 6 + seeded(index + 150) * 6);
    seed.appendChild(rotor);
    seedHead.appendChild(seed);
  }
}

buildGrass();
buildYellowFlower();
buildSeedHead();

const journey = document.querySelector(".journey");
const stem = document.querySelector("#flowerStem");
const flowerHead = document.querySelector("#flowerHead");
const yellowPetals = document.querySelector("#yellowPetals");
const petals = [...document.querySelectorAll(".petal-wrap")];
const bud = document.querySelector("#bud");
const budPetalLeft = document.querySelector(".bud-petal--left");
const budPetalRight = document.querySelector(".bud-petal--right");
const budSepalLeft = document.querySelector(".bud-sepal--left");
const budSepalRight = document.querySelector(".bud-sepal--right");
const budSketch = document.querySelector(".bud-sketch");
const seedHead = document.querySelector("#seedHead");
const seedReceptacle = document.querySelector("#seedReceptacle");
const attachedSeeds = [...document.querySelectorAll(".attached-seed")];
const core = document.querySelector(".flower-core");
const stemWash = document.querySelector(".flower-stem--wash");
const stemSketch = document.querySelector(".flower-stem-sketch");
const leafGroups = [...document.querySelectorAll(".leaf-growth")];
const leafSketchGroups = leafGroups.map((group) => group.querySelector(".leaf-sketch"));
const leafSketchPaths = leafSketchGroups.map((group) => [...group.querySelectorAll("path")]);
const leafSketchLengths = leafSketchPaths.map((paths) => paths.map((path) => path.getTotalLength()));
const coreSketch = document.querySelector(".flower-core-sketch");
const chapters = [...document.querySelectorAll(".chapter")];
const scrollCue = document.querySelector(".scroll-cue");
const stemLength = stem.getTotalLength();
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const narrowViewport = window.matchMedia("(max-width: 40rem)");

stem.style.strokeDasharray = String(stemLength);
stemWash.style.strokeDasharray = String(stemLength);
leafSketchPaths.forEach((paths, groupIndex) => {
  paths.forEach((path, pathIndex) => {
    const length = leafSketchLengths[groupIndex][pathIndex];
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
  });
});

function prepareHandwriting() {
  chapters.forEach((chapter, chapterIndex) => {
    const letters = [];
    const textElements = [...chapter.querySelectorAll("h2, p")];

    textElements.forEach((element) => {
      const text = element.textContent.trim();
      element.textContent = "";

      text.split(/\s+/).forEach((wordText, wordIndex, wordList) => {
        const word = document.createElement("span");
        const tilt = (seeded(letters.length + chapterIndex * 31) - 0.5) * 0.6;
        word.className = "ink-word";
        word.style.transform = `rotate(${tilt.toFixed(3)}deg)`;

        [...wordText].forEach((character) => {
          const letter = document.createElement("span");
          letter.className = "ink-letter";
          letter.textContent = character;
          word.appendChild(letter);
          letters.push(letter);
        });

        element.appendChild(word);

        if (wordIndex < wordList.length - 1) {
          element.appendChild(document.createTextNode(" "));
        }
      });
    });

    chapter.inkLetters = letters;
    chapter.revealedLetters = 0;
  });
}

function setChapterWriting(chapter, progress) {
  const start = Number(chapter.dataset.start);
  const end = Number(chapter.dataset.end);
  const writeEnd = start + (end - start) * 0.62;
  const written = smooth(range(progress, start, writeEnd));
  const revealCount = Math.round(written * chapter.inkLetters.length);
  const active = progress >= start && progress <= end;

  chapter.hidden = !active;

  if (revealCount > chapter.revealedLetters) {
    for (let index = chapter.revealedLetters; index < revealCount; index += 1) {
      chapter.inkLetters[index].style.visibility = "visible";
    }
  } else if (revealCount < chapter.revealedLetters) {
    for (let index = revealCount; index < chapter.revealedLetters; index += 1) {
      chapter.inkLetters[index].style.visibility = "hidden";
    }
  }

  chapter.revealedLetters = revealCount;
}

function revealStaticWriting() {
  chapters.forEach((chapter) => {
    chapter.inkLetters.forEach((letter) => {
      letter.style.visibility = "visible";
    });
    chapter.revealedLetters = chapter.inkLetters.length;
  });
}

prepareHandwriting();

function render(progress) {
  const grow = smooth(range(progress, 0.05, 0.26));
  const budRise = smooth(range(progress, 0.16, 0.28));
  const bloom = smooth(range(progress, 0.34, 0.56));
  const becomeSeed = smooth(range(progress, 0.62, 0.78));
  const release = smooth(range(progress, 0.81, 0.98));
  const stemTip = stem.getPointAtLength(stemLength * grow);

  stem.style.strokeDashoffset = String(stemLength * (1 - grow));
  stemWash.style.strokeDashoffset = String(stemLength * (1 - smooth(range(progress, 0.07, 0.29))));
  stemSketch.style.opacity = String(smooth(range(progress, 0.18, 0.32)) * (1 - release) * 0.22);
  leafGroups.forEach((group, index) => {
    const start = 0.11 + index * 0.05;
    const lengthGrowth = smooth(range(progress, start, start + 0.14));
    const widthGrowth = smooth(range(progress, start + 0.045, start + 0.2));
    const unfurl = smooth(range(progress, start + 0.06, start + 0.2));
    const curl = (index === 0 ? -5 : 5) * (1 - unfurl);
    const veinGrowth = smooth(range(progress, start + 0.11, start + 0.22));
    const leafOpacity = smooth(range(progress, start + 0.025, start + 0.12));

    group.style.transform = `rotate(${curl.toFixed(2)}deg) scale(${Math.max(0.018, widthGrowth).toFixed(3)}, ${Math.max(0.025, lengthGrowth).toFixed(3)})`;
    group.style.opacity = leafOpacity.toFixed(3);
    leafSketchGroups[index].style.opacity = String(veinGrowth * (1 - becomeSeed * 0.12) * 0.28);
    leafSketchPaths[index].forEach((path, pathIndex) => {
      path.style.strokeDashoffset = String(leafSketchLengths[index][pathIndex] * (1 - veinGrowth));
    });
  });

  const headScale = 0.16 + budRise * 0.98;
  flowerHead.style.opacity = String(budRise);
  flowerHead.style.transform = `translate(${stemTip.x.toFixed(2)}px, ${stemTip.y.toFixed(2)}px) scale(${headScale.toFixed(3)}) rotate(${(-2.5 + bloom * 2.5).toFixed(2)}deg)`;
  bud.style.opacity = "1";
  bud.style.transform = `scale(${(0.78 + budRise * 0.22).toFixed(3)})`;

  const releaseCollapse = mix(1, 0, release);
  const budPetalScale = mix(1, 0.01, becomeSeed) * releaseCollapse;
  budPetalLeft.style.transform = `translate(${(-19 * bloom).toFixed(2)}px, ${(8 * bloom).toFixed(2)}px) rotate(${(-64 * bloom).toFixed(2)}deg) scale(${budPetalScale.toFixed(3)})`;
  budPetalRight.style.transform = `translate(${(19 * bloom).toFixed(2)}px, ${(8 * bloom).toFixed(2)}px) rotate(${(64 * bloom).toFixed(2)}deg) scale(${budPetalScale.toFixed(3)})`;
  const spentSepal = smooth(range(release, 0.04, 0.88));
  const openSepalAngle = mix(54 * bloom, 135, becomeSeed);
  const leftSepalAngle = mix(openSepalAngle, 169, spentSepal);
  const rightSepalAngle = mix(openSepalAngle, 175, spentSepal);
  const sepalBaseScale = mix(1, 0.62, bloom);
  const sepalWidth = mix(sepalBaseScale, 0.34, spentSepal);
  const sepalLength = mix(sepalBaseScale, 0.78, spentSepal);
  const sepalX = mix(7 * bloom, 2.5, spentSepal);
  const sepalY = mix(13 * bloom, 27, spentSepal);
  budSepalLeft.style.transform = `translate(${(-sepalX).toFixed(2)}px, ${sepalY.toFixed(2)}px) rotate(${(-leftSepalAngle).toFixed(2)}deg) scale(${sepalWidth.toFixed(3)}, ${sepalLength.toFixed(3)})`;
  budSepalRight.style.transform = `translate(${sepalX.toFixed(2)}px, ${sepalY.toFixed(2)}px) rotate(${rightSepalAngle.toFixed(2)}deg) scale(${sepalWidth.toFixed(3)}, ${sepalLength.toFixed(3)})`;
  budSketch.style.transform = `scale(${mix(1, 0.04, bloom).toFixed(3)})`;

  petals.forEach((petal, index) => {
    const localBloom = smooth(range(bloom, Number(petal.dataset.delay), 0.9 + Number(petal.dataset.delay)));
    const targetAngle = Number(petal.dataset.angle);
    const budAngle = (seeded(index + 400) - 0.5) * 18;
    const angle = mix(budAngle, targetAngle, localBloom) + becomeSeed * (seeded(index + 510) - 0.5) * 24;
    const widthScale = mix(0.025, 1, localBloom) * mix(1, 0.002, becomeSeed);
    const lengthScale = mix(0.18, 1, localBloom) * mix(1, 0.006, becomeSeed);
    petal.style.opacity = String(0.72 + seeded(index + 520) * 0.22);
    petal.setAttribute("transform", `rotate(${angle.toFixed(2)}) scale(${widthScale.toFixed(3)} ${lengthScale.toFixed(3)})`);
  });

  yellowPetals.style.opacity = "1";
  yellowPetals.style.transform = `rotate(${(becomeSeed * 3).toFixed(2)}deg)`;

  const coreGrowth = smooth(range(bloom, 0.34, 0.78));
  const coreScale = mix(0.04, 1, coreGrowth) * mix(1, 0.01, becomeSeed) * releaseCollapse;
  core.style.opacity = "1";
  core.style.transform = `scale(${coreScale.toFixed(3)})`;
  coreSketch.style.opacity = "0.18";
  coreSketch.style.transform = `scale(${coreScale.toFixed(3)})`;

  seedHead.style.opacity = "0.76";
  seedHead.style.transform = "none";
  seedReceptacle.style.transform = `scale(${(becomeSeed * releaseCollapse).toFixed(3)})`;
  attachedSeeds.forEach((seed, index) => {
    const seedGrowth = smooth(range(becomeSeed, Number(seed.dataset.delay) * 0.24, 0.76 + Number(seed.dataset.delay) * 0.24));
    const localRelease = smooth(range(release, Number(seed.dataset.delay), 1));
    const drift = Math.sin(localRelease * Math.PI * 2 + index) * 18 * localRelease;
    const x = Number(seed.dataset.dx) * localRelease;
    const y = Number(seed.dataset.dy) * localRelease + drift;
    const turn = Number(seed.dataset.turn) * localRelease;
    const scale = Math.max(0.018, seedGrowth);

    seed.style.opacity = seed.dataset.opacity;
    seed.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotate(${turn.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
  });

  chapters.forEach((chapter) => setChapterWriting(chapter, progress));
  scrollCue.style.opacity = String(clamp(1 - progress * 9));
}

function getProgress() {
  const rect = journey.getBoundingClientRect();
  const scrollable = journey.offsetHeight - window.innerHeight;
  return scrollable > 0 ? clamp(-rect.top / scrollable) : 0;
}

let frameRequested = false;
function update() {
  frameRequested = false;

  if (reducedMotion.matches || narrowViewport.matches) {
    render(0.6);
    chapters.forEach((chapter) => {
      chapter.style.removeProperty("opacity");
      chapter.style.removeProperty("transform");
    });
    revealStaticWriting();
    return;
  }

  render(getProgress());
}

function requestUpdate() {
  if (frameRequested) return;
  frameRequested = true;
  window.requestAnimationFrame(update);
}

window.addEventListener("scroll", requestUpdate, { passive: true });
window.addEventListener("resize", requestUpdate);
reducedMotion.addEventListener("change", requestUpdate);
narrowViewport.addEventListener("change", requestUpdate);
requestUpdate();
