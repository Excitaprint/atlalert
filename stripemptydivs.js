// 'bodies' is object/string I need to do a while loop for. While loop?
// so bodies.firstChild or bodies.childNodes or for each body in bodies?
// Does this remove all empty divs or just leading?
// card = card, right? So I need to place JS there or before it? Mix it in?
// nodeType 1 is ELEMENT_NODE for div or p tags

// OR is card the better target object for stripping? See below


function stripEmptyWrapperDivs(card) {
  // stripEmptyDivs = (html) => { // New code starts in second .then, after let card = ?
  const card = document.createElement('div');
  // Put arrow function above 'let card = ...' line
  // 
  card.innerHTML = `<span class="preview"><h1>${titleText}</h1><p>${bodyText}</p></span>`;
  // Walk forward and remove only empty leading divs
  while (
    card.childNodes && 
    card.childNodes.nodeType === 1 && 
    card.childNodes.tagName === 'DIV' &&
    !card.childNodes.textContent.trim() &&
    !card.childNodes.querySelector('*')  // Secret sauce; no nested elements (emppty)
  ) {
    card.removeChild(card.childNodes); 
  }
  return card.innerHTML; // Is this correct order?
}
// This line is same as const expand = document...
// Do I even need the above? This looks like it will work alone.
// Below doesn't work well, bodyText is string, not element
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    // Check if the div has no class assigned (classList.length === 0)
    // and if its trimmed text content is empty
    if (div.classList.length === 0 && div.textContent.trim() === '')