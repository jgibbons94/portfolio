import storage from "./localstorage.js";

const [activeItemsCount, filterMain,itemListElement,filterForm,
  addItemForm,newItemInput,addItemButton] =
  ["#active-items-count","#todo-main","#todo-list", "#filter-form",
    "#add-item-form", "#item-text",
    "#add-item-button"].map(document.querySelector.bind(document));

const setDone = ({item, text})=>{
  item.classList.add("done");
  item.classList.remove("active");
  storage.updateItem({text, complete:true});
};

const setActive = ({item, text})=>{
  item.classList.remove("done");
  item.classList.add("active");
  storage.updateItem({text, complete:false});
};

const updateActiveCount = () =>
  activeItemsCount.textContent = storage.getActiveItems().length;

const toggleDone = ({checkbox, item, text})=>()=>{
  checkbox.checked
    ? setDone({item, text}) : setActive({item, text});
  updateActiveCount()
};

const removeItem = ({item,text}) => () => {
  item.remove();
  storage.removeItem({text});
  updateActiveCount();
};

const makeListItem = ({text, complete=false})=>{
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const labelText = document.createTextNode(text);
  const deleteButton = document.createElement("input");
  checkbox.type = "checkbox";
  label.appendChild(checkbox);
  label.appendChild(labelText);
  label.classList.add("todo-text");
  checkbox.checked = complete;
  (toggleDone({
    checkbox,
    item,
    text
  }))();
  checkbox.onchange = toggleDone({
    checkbox,
    item,
    text
  })
  item.appendChild(label);
  deleteButton.type = "button";
  deleteButton.value = "X";
  item.appendChild(deleteButton);
  deleteButton.onclick = removeItem({item, text});
  item.classList.add("todo-item");
  newItemInput.value = "";
  return item;
};

const toodoItemFromElement = item=>({
  chkbox: item.querySelector('"input[type="checkbox"].done-checkbox'),
  deleteButton: item.querySelector('"input[type="button"].delete-button'),
});

const captureCheck = ({chkbox})=>chkbox.onchange = ()=>console.log(chkbox.checked);

const nosubmit = e=>e.preventDefault();

const setupNosubmit = ()=>[...document.querySelectorAll(".nosubmit")].forEach(elem=>elem.onsubmit = nosubmit);

const addItem = text=>itemListElement.appendChild(makeListItem({
  text: text
}));

const loadItems = items=>items.forEach(item=>itemListElement.appendChild(makeListItem(item)));
const loadStoredItems = () => loadItems(storage.getAllItems());
const setupAddElementButton = ()=>{
  addItemButton.onclick = ()=>addItem(newItemInput.value);
  addItemForm.onsubmit = e=>{
    e.preventDefault();
    addItem(newItemInput.value);
  };
};

const getCurrentFilter = ()=>filterForm["filter"].value;

const clearFilter = () => ["filter-all","filter-active","filter-done"].forEach(str =>
  filterMain.classList.remove(str));

const setFilter = str => filterMain.classList.add(str);

const setupFilter = ()=> filterForm.onchange = ()=>{
  clearFilter();
  setFilter(getCurrentFilter());
};

const main = () => {
  updateActiveCount();
  setupNosubmit();
  setupAddElementButton();
  setupFilter();
  loadStoredItems();
}

export default {
  updateActiveCount,
  main,
  captureCheck,
  setupNosubmit,
  addItem,
  loadStoredItems,
  setupAddElementButton,
  setupFilter,
  filterForm
};
