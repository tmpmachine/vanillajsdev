let app = (function() {
  
  let $ = document.querySelector.bind(document);
  
  let SELF = {
    HandleClickItems,
    AddNewItem,
  };
  
  function handleClickAction(action, itemEl) {
    switch (action) {
      case 'edit': edit(itemEl); break;
      case 'remove': remove(itemEl); break;
    }
  }
  
  function edit(itemEl) {
    let titleEl = itemEl.querySelector('[data-slot="title"]');
    let title = titleEl.textContent;
    
    let userVal = window.prompt('Rename', title);
    if (userVal === null) return;
    
    titleEl.replaceChildren(userVal);
  }
  
  function remove(itemEl) {
    let isConfirm = window.confirm('Delete this item?');
    if (!isConfirm) return;
    
    itemEl.remove();
  }
  
  function HandleClickItems(evt) {
    let targetEl = evt.target;
    let itemEl = targetEl.closest('[data-kind="item"]');
    let actionEl = targetEl.closest('[data-action]');
    let action = actionEl?.dataset.action;
    
    handleClickAction(action, itemEl);
  }
  
  function AddNewItem() {
    let userVal = window.prompt('Item name');
    if (userVal === null) return;
    
    let template = $('#tmp-item').content.cloneNode(true);
    template.querySelector('[data-slot="title"]').replaceChildren(userVal);
    
    $('._containerItems').append(template);
    
  }
  
  return SELF;
  
})();