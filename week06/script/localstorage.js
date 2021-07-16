const itemsKey = "todo-items";
let items = JSON.parse(localStorage.getItem(itemsKey) || '[]');
const saveItems = ()=>
  localStorage.setItem(itemsKey, JSON.stringify(items));
const removeItem = ({text})=>{
  items = items.filter(({text:item})=>item !== text);
  saveItems();
};

const addItem = ({text, complete=false})=>{
  removeItem({
    text: text
  });
  items.push({
    text: text,
    complete: complete
  });
  saveItems();
};

const getAllItems = ()=>items
const getActiveItems = ()=>items.filter(({complete})=>!complete)
const getCompleteItems = ()=>items.filter(({complete})=>complete)

const filterKey = "filter";
let filter = localStorage.getItem(filterKey) || "all-items";
const setFilter = newFilter=>{
  filter = newFilter;
  localStorage.setItem(filterKey, filter);
};

const getFilter = ()=>filter;
export default {
  removeItem,
  addItem,
  updateItem: addItem,
  getAllItems,
  getActiveItems,
  getCompleteItems,
  setFilter,
  getFilter
};
