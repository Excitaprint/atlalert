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