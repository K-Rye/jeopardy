
for (let i = 1; i < 6; i++) {
  $('.gameboard').append(
    `<div class='question-card-container'>
    <div class='container-style question-card'>
      <p class='question-category'>Category ${i}</p>
    </div>
  </div>`
  )
}

for (let i = 1; i < 21; i++) {
  $('.gameboard').append(
    `<div class='question-card-container'>
    <div class='container-style question-card'>
      <p class='question-value'>${100*(Math.ceil(i/5))}</p>
    </div>
  </div>`
  )
}