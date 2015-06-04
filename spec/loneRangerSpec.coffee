describe 'LoneRanger', ->
  beforeAll ->
    @page = $('body')
    @range = $('<input type="range" class="lone-ranger" />')
    @range.appendTo @page
    $('input').loneRanger
      populateRangeGuides: true
    @textInput = @page.find('input[type=text]')

  #describe 'exceptions', ->
    #beforeEach ->
      #$('input').remove()
      #$('p').remove()

    #it 'throws an error if not called on a range input', ->
      #@p = $('<p>')
      #@p.appendTo @page
      #callOnP = ->
        #$('p').eq(0).loneRanger()
      #expect(callOnP).toThrowError(TypeError, 'loneRanger() must be called on an input of type "range"')

    #it 'throws an error if called on an input not of range type', ->
      #@text = $('<input type="text" class="myTextInput" />')
      #@text.appendTo @page
      #callOnText = ->
        #$('.myTextInput').loneRanger()
      #expect(callOnText).toThrowError(TypeError, 'loneRanger() must be called on an input of type "range"')

  describe 'inputs', ->
    it 'creates a text input', ->
      expect((@textInput).length).toEqual 1

    it 'adds the correct value to the text input based on the value of the range', ->
      expect(@textInput.val()).toEqual @range.attr('value')


  describe 'updating textbox', ->

    describe 'on change', ->
      beforeEach ->
        @range.attr('value', 20)
        @range.trigger('change')

      it 'updates the textbox when the slider is moved', ->
        expect(@textInput.val()).toEqual @range.attr('value')

    describe 'on input (slider is dragged)', ->
      beforeEach ->
        @range.attr('value', 60)
        @range.trigger('input')

      it 'updates the textbox when the slider is moved', ->
        expect(@textInput.val()).toEqual @range.attr('value')

  describe 'populating range guides', ->
    beforeEach ->
      $('.ranger-container').remove()
      @range = $('<input type="range" class="lone-ranger" min="20" max="120" step="10" />')
      @range.appendTo @page
      $('input').loneRanger
        populateRangeGuides: true

    it 'creates a list of guides', ->
      expect(@page.find('ol').length).toEqual 1

    it 'calculates the guides based on the steps', ->
      expect(@page.find('ol li').length).toEqual 11

  describe 'updating "fill-lower" css', ->
    beforeEach ->
      $('.ranger-container').remove()
      @range = $('<input type="range" class="lone-ranger" min="0" max="100" step="10" />')
      @range.appendTo @page
      $('input').loneRanger
        populateRangeGuides: true
      @range.attr('value', 20)
      @range.trigger('change')

    it 'fills the css property with the correct values', ->
      expect(@range[0].style.cssText).toContain('20%')

    it 'contains the gradient property', ->
      expect(@range[0].style.cssText).toMatch new RegExp(/-.*-linear-gradient/)

