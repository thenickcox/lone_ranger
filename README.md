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


## Roadmap

* Completed options
* Refactored in ES6

Options:

### fillLower
* _explanation_: color of lower (left) section of range track
* _data type_: string
* _required?_: yes
* _default value_: #49915D'

### fillUpper
* _explanation_: color of upper (right) section of range track
* _data type_: string
* _required?_: yes
* _default value_: '#CCCCCC'

### textBox
* _explanation_: show a box that allows a manual update of the range; the range and the textbox change each other (i.e., setting a value in the textbox updates the range and vice versa)
* _data type_: boolean
* _required?_: no
* _default value_: false

### showRangeGuides
* _explanation_: show guides that are dynamically calculated from the `min`, `max`, and `step` attributes, and are evenly spaced below the range track
* _data type_: boolean
* _required?_: no
* _default value_: false

