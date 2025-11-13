# ATL Crime Bot Standalone App

* Docs:
> [Page Transitions! SPA/PWA Secret Sauce](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
> [Software animation speed best practices](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
> [word-spacing/tracking in CSS]() https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing
> [letter-spacing/kerning in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/letter-spacing)
> [Making PWAs installable](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)

#### 9/26/26

* Try this for "active" on mobile, also works on desktop?
```
   const button = document.getElementById('myButton');

    button.addEventListener('touchstart', function() {
        this.classList.add('pressed');
    });

    button.addEventListener('touchend', function() {
        this.classList.remove('pressed');
    });
```
# 10/3/25

* Notes & made following attempts at on tap (mobile) card highlight:
> Set div to tabindex="0" which allows for css 'focus' psuedo-class
> Webkit causes issues as Webkit used on Chrome iOS & Blink used on Chrome Android & Desktop
>> Active not working specifically on Webkit
> Had trouble with CSS cros platform 'active' psuedo-class, b/c of Webkit vs Blink &,
>> How 'active' translates on mobile

# 10/8/25

* Connect UI to JSON file w fs read & for loop, autolayout:
> 
```
`${./titles.json[0]}`
```
* What's with flickering on load?

# 10/10/25

* Fetch in JS https://developer.mozilla.org/en-US/docs/Web/API/Response/json
* Touchstart & touchend events in JS https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event
* Add: post.style.transition = 'background-color 100ms ease';

# 10/13/25

* Try auto-fill & auto-fit for cards to stretch across screen or not?
* If card expanded, use .post not .post.fade-in to keep bg white on touchstart/click

# 10/18/25

* Try this this.style.height = 'fit-content' ? '90px' : 'fit-content';
* Back in other repo, fixing scraping logic  to add bodies; finish that then back here
* Once you fix scraping, rewrite main repo yaml to push to atlalert repo to fetch new json each time

# 10/26/25

* Script to clean up text in header, call it in body pass it to `template literal` for good typography! Key to app!
* Fix spacing, see mockup vs prototype PNG

# 10/27/25

* Typography script in header:
> Remove underlines
> Remove "Preliminary information" in headlines if body starts w that
> Split header at first colon: put rest on line beneath & drop line height?
> Remove Z1_3 or any police codes in header: it starts w ceratin number
> Capitalization for first letter in each word except (conjunctions, etc)

# 10/29/25

* Fix paragraph spacing. Skips ppg but no spacing in between looks like run on ppg.
> Ceck and see if website has correct spacing 
> Scrape as HTML to fix, or write fix into Typography script (10/27/25 dev notes) 
* For example:
> Person Shot: Cleveland Avenue SW & I-75 Northbound Expressway SW 
>> Has space on site, but not on scraped data
> Officer Involved Shooting (OIS): 41 Irby Avenue NE
>> Has bold and italics, also has spaces, but scraped data doesn't. 
* Looks like I need to scrape HTML of page, like bold, p tags, etc. 
> Dev tools to find out how?
*`At this time, the investigation is ongoing.\n' +
      ' \n' +
      'Press Conference: IMG_0148.mov \n' +
-NOT -
The responding officer was not injured.\n' +
      'Please remember that the information released is limited...'`

# 10/30/25

* Ellipsis not working, why not? Wrap in another div? Is post not a wrapper div?
* Removed height property from post fade in/fade out.
> It may have been causing funny animations/glitching.
>> Think about it! Height on click causes expand, but css says fixed height? Wonky!

# 11/2/25

* Fix img src showing up like this "/home/showpublishedimage/4544/638971855728270000"
> Needs the correct prefix added via RegEx
>> Find it via Inspect Element
* Still getting strange gaps, paragraph breaks & in-line breaks, in HTML
> How to fix?
> Some gaps are written in by Moderator. 
> Can write script to remove extra breaks between paragraphs  
> Remove String() constructor on scrape?   
> Stringifying before RegEx causing it?  
> Remove something in scrape? Scrape inner div only?
* Example:
> Person Shot: 367 Edgewood AVE. SE & Person Shot: 448 Boulevard SE have extra line breaks in APP UI 

# 11/3/25

* Use JS to calculate preview clamp for each item:
> https://codepen.io/vsync/pen/eYbGgGL

# 

* Tried: Animations height: auto; not fit-content' w/ transition: 100ms? Fixed?
* IMPORTANT: Is cubic bezier not showing up on iOS/webkit?! 
> Looks like it works on Windows/Chrome
> Looks nice if I see it correctly on Windows/Chrome
* Rewrite animations so they're not wonky
* Animation touch end thing
* Bezier curve for easing? How will it affect expand?
* Try this for removing empty divs/extra ppg breaks:
> `
function stripEmptyWrapperDivs(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  // Walk forward and remove only empty leading divs
  while (
    temp.firstChild && 
    temp.firstChild.nodeType === 1 && 
    temp.firstChild.tagName === 'DIV' &&
    !temp.firstChild.textContent.trim() &&
    !temp.firstChild.querySelector('*')  // no nested elements
  ) {
    temp.removeChild(temp.firstChild);
  }
  return temp.innerHTML;
}
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    // Check if the div has no class assigned (classList.length === 0)
    // and if its trimmed text content is empty
    if (div.classList.length === 0 && div.textContent.trim() === '')
`

# 11/9/25

* Fixed empty P tags w/ regex in click toggle event listener:
> `card.innerHTML = card.innerHTML.replace(/<p[^>]*>(\s|&nbsp;)*<\/p>/gi, '').trim();`
* Fix preview via:
> https://codepen.io/vsync/pen/eYbGgGL
* Next begin drawer, search & toggles.
* Remove report #s (253_) & dates that precede titles?
* Fix JPGs from scraped site root not working:
> `card.innerHTML = src.replace(/^\/+/, 'https://www.example.com/');`
* Increased preview card from 90 to 110. Keep?
* Preview works w/ line-clamp/-webkit-line-clamp but:
> Need to toggle class *.expanded on off on click 

# 11/10/25

* Only H1 in preview? 
* How are divs nesting? 
> Figure this out before drawer container to know where to put it

# 11/11/25

* Fix underline under auto-detected addresses.
> Can change to same color as BG, on light & dark mode, to hide,
> but keep clickable.

# 11/12/25

* Fixed img urls w/ regex.
* Built drawer w/ toggle & bar.
* Did iPhone map dots get fixed too?

# 11/13/25

* Added click second time to collapse on expanded cards but:
> Card is not expanding on first click
> Need to add that asap!
> // if no cards in dom expanded, on first click expand to auto