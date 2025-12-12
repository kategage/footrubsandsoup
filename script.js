// List of soup recipe websites
const soupRecipes = [
  'https://www.seriouseats.com/avgolemono-soup-greek-lemon-egg-chicken-soup',
  'https://www.seriouseats.com/masa-ball-soup-corn-matzo-recipe',
  'https://www.bonappetit.com/recipe/fenugreek-turmeric-chicken-soup',
  'https://www.epicurious.com/recipes/food/views/ba-syn-potato-soup-recipe',
  'https://www.thekitchn.com/easy-pumpkin-soup-261960',
  'https://food52.com/recipes/89042-best-vegan-creamy-artichoke-soup',
  'https://food52.com/recipes/87022-chicken-soup-ginger-lentils-potatoes-recipe',
  'https://www.seriouseats.com/korean-chicken-and-rice-porridge-dak-juk'
];

// Foot rub and spa resources
const footRubResources = [
  'https://www.healthline.com/health/pain-relief/massages-for-pressure-points-on-feet',
  'https://www.spafinder.com/find/reflexology/',
  'https://www.dreamstime.com/photos-images/feet-pics.html',
  'https://www.youtube.com/watch?v=SFrc1EvQ80k',
  'https://www.youtube.com/shorts/g8M9eTqAcDo',
  'https://www.massageenvy.com/massage/personalized-experience/reflexology'
];

function getRandomSoup() {
  const randomIndex = Math.floor(Math.random() * soupRecipes.length);
  window.location.href = soupRecipes[randomIndex];
}

function getFootRubResources() {
  const randomIndex = Math.floor(Math.random() * footRubResources.length);
  window.location.href = footRubResources[randomIndex];
}
