window.onload = function() {
  const textElement = document.getElementById("text");
const changingTextElement = document.getElementById("changing-text");

const words = [
"mathematics",
"cactus spines grown in time ordered sequence", 
"spined things, in particular sea urchins", 
"mites and ticks", 
"word or phrase stress and accentuation in language", 
"remedies or therapeutics",
"grasshoppers and locusts",
"diseases affecting limbs",
"the effects of radiation upon living organisms",
"the effect of light on chemicals",
"the incorrect use of language",
"medicine dealing with the development, structure, function, and diseases of glands",
"taste",
"organic particles which are passively transported by the air",
"meteorites",
"geological features by aerial observation and aerophotography",
"air and of the atmosphere",
"pollen grains and spores (palynomorphs) in the atmosphere",
"or investigation of the causes of disease",
"or theory of the good or goodness",
"medical science that studies fractures",
"things of which humans are by nature ignorant, or of things which cannot be known",
"culturally induced ignorance or doubt",
"agriculture",
"plant nutrition and growth in relation to soil conditions",
"meteorological conditions significant to agriculture",
"ecological processes that operate in agricultural production systems",
"the origins of minerals known as agrominerals and their applications",
"study of the grasses (family Poaceae)",
"the causes of diseases or pathologies (medicine)",
"the application of modern technology to agriculture",
"the nature of truth",
"algae",
"nutrition",
"the causes and treatment of allergies",
"alphabetic systems of writing",
"amphibians",
"prosthetic rehabilitation",
"anarchy",
"friction as a remedy in medicine",
"the male reproductive system",
"the wind",
"anesthesia and anesthetics",
"angels",
"the anatomy of blood and lymph vascular systems",
"the pathology of diseased blood vessels"
];
let currentWordIndex = 0;

function updateText() {
  const currentWord = words[currentWordIndex];
  let i = 0;
  
  const typeWriterInterval = setInterval(() => {
    changingTextElement.textContent = currentWord.slice(0, i);
    i++;

    if (i > currentWord.length) {
      clearInterval(typeWriterInterval);
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }
  }, 50);
}

setInterval(updateText, 5000);
}
