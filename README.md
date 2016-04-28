# jQuery Widget
[![Build Status](https://secure.travis-ci.org/viclm/jquery-widget.png?branch=master)](http://travis-ci.org/viclm/jquery-widget)

[jQuery UI Widget Factory](http://api.jqueryui.com/jQuery.widget/) is a tiny but powerfull framework for building UI components.

For working with flux/redux or other similar tools, extend it with the support of jsx and virtual dom,
so it can be used as an independent view component, just like React.

## Difference to the original implementation

- Remove the namespace
- Remove the global reference such as `jQuery.ui`
- Remove the feature of class redefining
- Make the widget class local
- Add the support of jsx and virtual dom

## Example from flux-todomvc

```javascript
var Footer = require('./Footer');
var Header = require('./Header');
var MainSection = require('./MainSection');
var $ = require('jquery-widget');
var TodoStore = require('../stores/TodoStore');

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

var TodoApp = $.widget('TodoApp', {
    
  _getCreateOptions: getTodoState,

  _create: function() {
    this._on(TodoStore, {
        'change': '_onChange'
    });
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <Header />
        <MainSection
          allTodos={this.options.allTodos}
          areAllComplete={this.options.areAllComplete}
        />
        <Footer allTodos={this.options.allTodos} />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.option(getTodoState());
  }

});
```

## Reference

- [virtual-dom](https://github.com/Matt-Esch/virtual-dom/)
- [flux-todomvc](https://github.com/facebook/flux/tree/master/examples/flux-todomvc)

## License

Copyright (c) 2016 viclm

Licensed under the MIT license.
