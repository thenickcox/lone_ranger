// Generated by CoffeeScript 1.9.0
(function() {
  describe('LoneRanger', function() {
    beforeAll(function() {
      this.page = $('body');
      this.range = $('<input type="range" class="lone-ranger" />');
      this.range.appendTo(this.page);
      $('input').loneRanger({
        populateRangeGuides: true
      });
      return this.textInput = this.page.find('input[type=text]');
    });
    describe('inputs', function() {
      it('creates a text input', function() {
        return expect(this.textInput.length).toEqual(1);
      });
      return it('adds the correct value to the text input based on the value of the range', function() {
        return expect(this.textInput.val()).toEqual(this.range.attr('value'));
      });
    });
    describe('updating textbox', function() {
      describe('on change', function() {
        beforeEach(function() {
          this.range.attr('value', 20);
          return this.range.trigger('change');
        });
        return it('updates the textbox when the slider is moved', function() {
          return expect(this.textInput.val()).toEqual(this.range.attr('value'));
        });
      });
      return describe('on input (slider is dragged)', function() {
        beforeEach(function() {
          this.range.attr('value', 60);
          return this.range.trigger('input');
        });
        return it('updates the textbox when the slider is moved', function() {
          return expect(this.textInput.val()).toEqual(this.range.attr('value'));
        });
      });
    });
    describe('populating range guides', function() {
      beforeEach(function() {
        $('.ranger-container').remove();
        this.range = $('<input type="range" class="lone-ranger" min="0" max="100" step="10" />');
        this.range.appendTo(this.page);
        return $('input').loneRanger({
          populateRangeGuides: true
        });
      });
      it('creates a list of guides', function() {
        return expect(this.page.find('ol').length).toEqual(1);
      });
      return it('calculates the guides based on the steps', function() {
        return expect(this.page.find('ol li').length).toEqual(11);
      });
    });
    return describe('updating "fill-lower" css', function() {
      beforeEach(function() {
        $('.ranger-container').remove();
        this.range = $('<input type="range" class="lone-ranger" min="0" max="100" step="10" />');
        this.range.appendTo(this.page);
        $('input').loneRanger({
          populateRangeGuides: true
        });
        this.range.attr('value', 20);
        return this.range.trigger('change');
      });
      it('fills the css property with the correct values', function() {
        return expect(this.range[0].style.cssText).toContain('20%');
      });
      return it('contains the gradient property', function() {
        return expect(this.range[0].style.cssText).toMatch(new RegExp(/-.*-linear-gradient/));
      });
    });
  });

}).call(this);
