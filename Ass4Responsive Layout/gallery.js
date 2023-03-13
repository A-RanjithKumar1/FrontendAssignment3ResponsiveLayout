let details = {
  straberry:
    " Strawberry is a small conical fruit. It grows on a very small plant. The ripen strawberries are bright red in color and are very tasty.Strawberries are a good source of vitamins especially Vitamin C as they are a little bit sour in taste.",
  Butterfly:
    "A butterfly is an insect with wings that are very beautiful and mesmerizing. We can observe different colors and patterns in the wings. A butterfly generally consists of 6 thin legs along with two antennas. There are three parts of the body in a butterfly, typically the head, the main body, and the tail",
  eggs: "From a nutritional perspective, eggs are simply an incredible food. Eggs are an excellent source of iron and are a nutritious source of protein, fat, Vitamins A, D, E, and B12 and choline. Eggs offer so much to our children. They are at the core of a diet that will help them grow up healthy, strong and smart.",
  thub: "T-Hub (Technology Hub) is a premier innovation hub and ecosystem enabler based out of Hyderabad, India. T-Hub leads India's pioneering innovation ecosystem and strives to create impact for startups, corporations and other ecosystem stakeholders. It's mission is to enable and empower an ecosystem hungry for innovation.",
  RRR: "This Indian action-drama offers viewers about as much fun as you can have with a movie. RRR is pure cinema, at times completely over-the-top and ridiculous, but remaining grounded by its historical context. The credit must go to director S.S. Rajamouli for this ambitious undertaking.",
  TM: "Teamwork is working in a group of two and more people to achieve a common goal. Teamwork builds your identity and gives you purpose. It helps you set clear goals and work towards them in a group. The problem with working alone is you can get easily derailed or demotivated.",
  SR: " Sita Ramam Movie is based on a real story. A Lieutenant Ram is an orphan Indian army officer serving at the Kashmir border. He gets the unknown love letters from Sita Mahalakshmi. Ram is on a quest mission to identify Sita and propose his love. This movie's announcement made people admire whether it was a real story. Though it is a true story, it is shown by fictional characters. However, this fictional drama contains excellent ideas in it. ",
  pineapple:
    "Pineapple is a type of fruit in which many types of medicinal properties are found. The shape of the pineapple is round and slightly elongated. The taste of pineapple is sour-sweet. Pineapple plant is small in size.",
  notes:
    "Sticky Notes is an instructional strategy where students use small slips of paper to organize ideas and process information. Students use these slips to record key ideas, mark points of confusion in a text, and note connections to previously learned content.",
  imgdragons:
    "Imagine Dragons' musical style has mainly been described as pop rock, electropop, pop, indie pop, indie rock, arena rock, and alternative rock. Their music also contains influences from synth-pop, dance-pop, trip hop, folk, drum and bass, dubstep, industrial, EDM, R&B, and hip hop.",
  chatGpt:
    "Introducing ChatGPT they trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.",
  Github:
    "GitHub is an increasingly popular programming resource used for code sharing. It's a social networking site for programmers that many companies and organizations use to facilitate project management and collaboration. According to statistics collected in October 2020, it is the most prominent source code host, with over 60 million new repositories created in 2020 and boasting over 56 million total developers.",
};
function openModal(img) {
  console.log(img.alt);
  console.log(details[img.alt]);
  document.querySelector(".modal").style.display = "flex";
  document.querySelector(".modal-content").src = img.src;
  document.getElementById("imgcontent").innerHTML = details[img.alt];
}

function closeModal() {
  document.querySelector(".modal").style.display = "none";
  document.getElementsByClassName("box").style.removeProperty("opacity");
}
