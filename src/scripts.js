"use-strict";

function headerClick (headerTextId, itemBodyId, itemHeaderArrow) {
  //Accordion headers
  const headersText = document.querySelectorAll(".header-text");
  const clickedHeaderText = headerTextId;

  //Accordion bodies
  const accordionBodies = document.querySelectorAll(".item-body");
  const clickedItemBody = itemBodyId;
  
  //Accordion arrows
  const accordionArrows = document.querySelectorAll(".arrow")
  const clickedItemArrow = itemHeaderArrow;

  headersText.forEach((header) => {
    if (header != headerTextId) {
      header.classList.remove("bold");
    }
  })

  accordionBodies.forEach((body) => {
    if (body != itemBodyId) {
      body.classList.add("hidden");
    }
  })

  accordionArrows.forEach((arrow) => {
    if (arrow != itemHeaderArrow) {
      arrow.classList.remove("rotate");
    }
  })

  if (clickedItemBody.classList.contains("hidden")) {
    clickedHeaderText.classList.add("bold");
    clickedItemBody.classList.remove("hidden");
    clickedItemArrow.classList.add("rotate");
  } else {
    clickedHeaderText.classList.remove("bold");
    clickedItemBody.classList.add("hidden"); 
    clickedItemArrow.classList.remove("rotate");
  }
}