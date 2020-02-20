/*
  Najprościej będzie napisać tę funkcję w czystym js. Jeśli metoda querySelector nie znajdzie elementu z takim selektorem zwróci null, a jesli znajdzie właściwość textContent zwróci zawartość tekstową
*/

function getTargetContent() {
  const targetEl = document.querySelector('.foo .bar #target')

  if (!targetEl) {
    return false
  }

  return targetEl.textContent
}


// funkcję można skrócić jeszcze bardziej, ale uważam że traci wtedy na czytelności

const getTargetContentShorter = () => document.querySelector('.foo .bar #target') ? document.querySelector('.foo .bar #target').textContent : null


// rezult widoczny w konsoli
console.log('getTargetContent ' + getTargetContent())
console.log('getTargetContentShorter ' + getTargetContentShorter())