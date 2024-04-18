let DOMEvents = (function() {
    
  let eventsMap = {
      onclick: {
        'handle-click-items': (evt) => app.HandleClickItems(evt),
      	'add-new-item': () => app.AddNewItem(),
      },
  };
  
  let listening = function(selector, dataKey, eventType, callbacks) {
    let elements = document.querySelectorAll(selector);
    for (let el of elements) {
      let callbackFunc = callbacks[el.dataset[dataKey]];
      el.addEventListener(eventType, callbackFunc);
    }
  };
  
  function Init() {
    listening('[data-onclick]', 'onclick', 'click', eventsMap.onclick);
  }
  
  return {
    Init,
  };

})();
