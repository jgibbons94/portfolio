/*
 * Copyright (c) 2021 Jesse Gibbons
 * All rights reserved
 * 
 * Note: I am using functional programming tricks to make it difficult for
 *       less experienced programmers to explain what I'm doing.
 *
 *      I also want to avoid object-oriented programming when possible in
 *      this course, just to get a challenge.
  */
data = [
  {
    section: "Block 1",
    links: [
      {
        label: "Week 1",
        url: "week01/"
      },
      {
        label: "Week 2",
        url: "week02/"
      },
      {
        label: "Week 3",
        url: "week03/"
      },
      {
        label: "Week 4",
        url: "week04/"
      },
      {
        label: "Week 5",
        url: "week05/"
      },
      {
        label: "Week 6",
        url: "week06/"
      }
      ]
  },

  {
    section: "Block 2",
    links: [
      {
        label: "Week 7",
        url: "week07/"
      },
      {
        label:'Week 8',
        url: 'week08/'
      },
      {
        label:'Week 9',
        url: 'week09/'
      },
      {
        label:'Week 10',
        url: 'week10/'
      },
      {
        label:'Week 11',
        url: 'week11/'
      },
      {
        label:'Week 12',
        url: 'week12/'
      },
    ]
  }
]
makeli = document.createElement.bind(document, "li");
makea = document.createElement.bind(document, "a");
makediv = document.createElement.bind(document, "div");
makeh2 = document.createElement.bind(document, "h2");
makeul = document.createElement.bind(document, "ul");
makeTextNode = document.createTextNode.bind(document);
query = document.querySelector.bind(document);
function makeTOCEntry(link){
  const item = makeli();
  const anchor = makea();
  anchor.setAttribute("href", `${link.url}`);
  anchor.appendChild(makeTextNode(`${link.label}`));
  item.appendChild(anchor);
  return item;
}
function makeTOCSection(section){
  const sect = makediv();
  const sect_title = makeh2();
  sect_title.appendChild(document.createTextNode(`${section.section}`));
  sect.appendChild(sect_title);
  const list = makeul();
  section.links.forEach( (link) => list.appendChild(makeTOCEntry(link)));
  sect.appendChild(list);
  return sect;
}
function makeTOC(toc, data)
{
  data.forEach((section) => toc.appendChild(makeTOCSection(section)));
}
const toc = query("#contents");
makeTOC(toc,data);
