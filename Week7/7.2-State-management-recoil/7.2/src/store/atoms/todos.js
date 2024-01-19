import {atom, selector} from "recoil";

export const todosAtom = atom({
  key : "todosAtom",
  default : [],
});

export const titleAtom = atom({
  key : "titleAtom",
  default : "",
});

export const descriptionAtom = atom({
  key : "descriptionAtom",
  default : "",
});

export const filterAtom = atom({
  key : "filterAtom",
  default : "",
});

//! Selector to filter todos based on the filter text

export const filterTodosSelector = selector({
  key : "filteredTodos",
  get : ({get}) => {
    const todos = get(todosAtom);
    const filter = get(filterAtom).toLowerCase();
    return todos.filter((x) => x.title.toLowerCase().includes(filter) ||
                               x.description.toLowerCase().includes(filter));
  },
});
