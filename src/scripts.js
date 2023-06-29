"use strict";

const accordionItems = document.querySelectorAll(".accordion-item");
const boxImg = document.querySelector(".box-container")
accordionItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    boxImg.style.left = "-14.9%";
  });

  item.addEventListener("mouseout", () => {
    boxImg.style.left = "-10.5%";
  });
})

function headerClick (headerTextId, itemBodyId, itemHeaderArrow, itemHeader) {
  //Accordion headers
  const accordionHeaders = document.querySelectorAll(".item-header");
  const clickedHeader = itemHeader;

  //Headers text
  const headersText = document.querySelectorAll(".header-text");
  const clickedHeaderText = headerTextId;

  //Accordion bodies
  const accordionBodies = document.querySelectorAll(".item-body");
  const clickedItemBody = itemBodyId;
  
  //Accordion arrows
  const accordionArrows = document.querySelectorAll(".arrow")
  const clickedItemArrow = itemHeaderArrow;

  headersText.forEach((headerText) => {
    if (headerText != headerTextId) {
      headerText.classList.remove("bold");
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

  accordionHeaders.forEach((header) => {
    if (header != itemHeader) {
      header.classList.add("hoverable");
    }
  })

  if (clickedItemBody.classList.contains("hidden")) {
    clickedHeaderText.classList.add("bold");
    clickedItemBody.classList.remove("hidden");
    clickedItemArrow.classList.add("rotate");
    clickedHeader.classList.remove("hoverable")
  } else {
    clickedHeaderText.classList.remove("bold");
    clickedItemBody.classList.add("hidden"); 
    clickedItemArrow.classList.remove("rotate");
    clickedHeader.classList.add("hoverable");
  }
}