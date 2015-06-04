/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

;(function ($, window, document, undefined) {

  var loneRanger = 'loneRanger';

  var defaults = {
        startingValue: 50,
        fillLower: '#49915D',
        fillUpper: '#CCCCCC'
      };

  // The actual plugin constructor
  function LoneRanger(element, options) {
    this.element = element;

    this.options = $.extend({}, defaults, options) ;

    this._defaults = defaults;
    this._name = loneRanger;

    this.$el = $(this.element);

    //if (!this.$el.is('input')    ||
        //!(this.$el.attr('type')) ||
        //!(this.$el.attr('type') === 'range')) {
          //throw new TypeError('loneRanger() must be called on an input of type "range"')
        //}

    this.init();
  }

  LoneRanger.prototype = {

    init: function() {

      var self = this,
          $el  = $(this.element);

      this.initDOM();
      this.setRangeValue(this.element);
      this.setTextValue(this.element);

      this.step = parseInt($el.attr('step'), 10);
      this.min  = parseInt($el.attr('min'),  10);
      this.max  = parseInt($el.attr('max'),  10);

      if (this.options.populateRangeGuides){
        this.populateRangeGuides(this.element);
      }

      $(this.element).on('input change', function(){
        self.updateTextboxValue($(this)[0]);
        self.updateFillLower($(this));
      });
    },

    initDOM: function(){
      $(this.element).wrap('<div class="ranger-container" />')
      $(this.element).parent().append('<input type="text" class="rangerVal" />');
      this.$textBox = $(this.element).siblings('input[type=text]');
    },

    setRangeValue: function(el){
      $(el).attr('value', defaults.startingValue);
    },

    setTextValue: function(el){
      this.$textBox.val( $(el).attr('value') );
    },

    populateRangeGuides: function(el){
      var $el  = $(el),
          $ol  = $el.parent().append('<ol class="rangeGuides"></ol>').find('ol'),
          numGuides = ( (this.max - this.min) / this.step ),
          guidesInc = 0,
          stepInc = this.step;

      while (guidesInc <= numGuides) {
        $ol.append('<li>' + stepInc + '</li>')
        guidesInc += 1;
        stepInc += this.step;
      }
    },

    updateTextboxValue: function(el){
      this.$textBox.val(el.value);
    },

    updateFillLower: function(el){
      var el = el[0],
          percent = (el.value / this.max) * 100,
          fillLower = defaults.fillLower,
          fillUpper = defaults.fillUpper,
          gradientStr = "(left, " + fillLower +
                        " 1%, " + fillLower + " " +
                        percent + "%, " +
                        fillUpper + " " +
                        percent + "%, " +
                        fillUpper + " 100%)",
          webkitBg  = "-webkit-linear-gradient" + gradientStr,
          firefoxBg = "-moz-linear-gradient" + gradientStr;

      $(el)
        .css({ backgroundImage: webkitBg  })
        .css({ backgroundImage: firefoxBg })
    }


  };

  $.fn.loneRanger = function(options) {
    return this.each(function() {
      if (!$.data(this, "plugin_" + loneRanger)) {
        $.data(this, "plugin_" + loneRanger,
        new LoneRanger(this, options));
      }
    });
  };

})(jQuery, window, document);
