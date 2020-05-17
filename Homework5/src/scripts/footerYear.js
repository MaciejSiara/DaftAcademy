export default (el) => {
  let currentYear = new Date().getFullYear();
  let copyright = document.querySelector(el.copyright).innerHTML;
  let cprWithYear = copyright.replace("%CurrentYear%", currentYear);
  document.querySelector(el.copyright).innerHTML = cprWithYear;
};
