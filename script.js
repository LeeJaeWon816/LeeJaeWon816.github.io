const restaurants = [
  "김치찌개 맛집",
  "삼겹살 전문점",
  "초밥집",
  "파스타 맛집",
  "치킨 맛집"
];

function recommend() {
  const randomIndex = Math.floor(Math.random() * restaurants.length);
  document.getElementById("result").innerText =
    "오늘 추천: " + restaurants[randomIndex];
}
