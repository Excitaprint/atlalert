// 'bodies' is object/string I need to do a while loop for. While loop?
// so bodies.firstChild or bodies.childNodes or for each body in bodies?
// Does this remove all empty divs or just leading?
// temp = card, right? So I need to place JS there or before it? Mix it in?
// nodeType 1 is ELEMENT_NODE for div or p tags

// OR is card the better target object for stripping? See below


function stripEmptyWrapperDivs(card) {
  // stripEmptyDivs = (html) => { // New code starts in second .then, after let card = ?
  const temp = document.createElement('div');
  temp.innerHTML = html;
  // Walk forward and remove only empty leading divs
  while (
    temp.childNodes && 
    temp.childNodes.nodeType === 1 && 
    temp.childNodes.tagName === 'DIV' &&
    !temp.childNodes.textContent.trim() &&
    !temp.childNodes.querySelector('*')  // no nested elements
  ) {
    temp.removeChild(temp.childNodes);
  }
  return temp.innerHTML;
}
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    // Check if the div has no class assigned (classList.length === 0)
    // and if its trimmed text content is empty
    if (div.classList.length === 0 && div.textContent.trim() === '')