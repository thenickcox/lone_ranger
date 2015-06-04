# LoneRanger

LoneRanger is a simple jQuery plugin that implements a cross-browser `input` HTML element with a styleable lower and upper fill.

Note that to support Mobile Safari, this library requires the [range touch library](https://github.com/docdis/range-touch).

## Rationale

For our app’s UI, we needed a simple input range slider that supported a color fill in the range track. Unfortunately, it seemed that the only browser that implements this is [IE11](https://msdn.microsoft.com/en-us/library/hh771824(v=vs.85).aspx).

This jQuery plugin is a simple, no-bloat implementation of that color fill, with a few extra options.

## Usage

1. Add the included `loneRanger.js` file to your HTML document.
2. Add the included `loneRanger.css` file to your HTML document.
3. HTML: <input type='range' class='my-range' min='0' max='100' step='10' />
   JS: $('.my-range').loneRanger(options);
4. [Disco](https://www.youtube.com/watch?v=T9tbyvwldEE).

Usage with all available options:

```js
$('.my-range').loneRanger({
  fillLower: '#f00',
  fillUpper: '#000',
  textBox: true,
  showRangeGuides: true
});
```

## Roadmap

* Completed options
* Refactored in ES6

## Options:

### fillLower
* __explanation__: color of lower (left) section of range track
* __data type__: string
* __required?__: yes
* __default value__: '#49915D'

### fillUpper
* __explanation__: color of upper (right) section of range track
* __data type__: string
* __required?__: yes
* __default value__: '#CCCCCC'

### textBox
* __explanation__: show a box that allows a manual update of the range; the range and the textbox change each other (i.e., setting a value in the textbox updates the range and vice versa)
* __data type__: boolean
* __required?__: no
* __default value__: false

### showRangeGuides
* __explanation__: show guides that are dynamically calculated from the `min`, `max`, and `step` attributes, and are evenly spaced below the range track
* __data type__: boolean
* __required?__: no
* __default value__: false

