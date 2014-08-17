var a51 = a51 || {};

a51.dollar = function( selector ) {
    var self = {};

    self.selector = selector;
    self.element = document.querySelector( self.selector );

    // self.self = function() {
    //     return self;
    // };

    self.el = function() {
        return self.element;
    };

    // self.end = function() {
    //     return this.prevObject || this.constructor( null );
    // };

    // function for getting the innerHTML of an element
    self.html = function( value ) {
        return !value ? self.getHTML() : self.setHTML( value );
    };

    self.getHTML = function() {
        return self.element.innerHTML;
    };

    self.setHTML = function( value ) {
        self.element.innerHTML = value;
        return self;
    }

    // function for getting and setting an attribute from an element
    self.attr = function( name, value ) {
        return !value ? self.getAttr( name ) : self.setAttr( name, value );
    };

    // function for getting and setting a data-attribute from an element
    self.data = function( name, value ) {
        return !value ? self.getAttr( 'data-' + name ) : self.setAttr( 'data-' + name, value );
    };

    // function for getting an attribute from an element
    self.getAttr = function( name ) {
        return self.element.getAttribute( name );
    };

    // function for setting a value on an attribute on an elemant
    self.setAttr = function( name, value ) {
        self.element.setAttribute( name, value );
        return self;
    };

    // function for setting events on an element
    self.on = function( type, callback ) {
        self.element[ 'on' + type ] = callback;
        return self;
    };

    // function to bind an click-event to an element
    self.click = function( callback ) {
        // self.element.onclick = callback;
        self.on( 'click', callback );
        return self;
    };

    return self;
};