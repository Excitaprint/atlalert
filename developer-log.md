# ATL Crime Bot Standalone App

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