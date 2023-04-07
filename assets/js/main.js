if (typeof document !== 'undefined') {
  const navside = document.getElementById("navbar");

  function navfunction() {
    navside.classList.toggle("shownav");
    // document.body.classList.toggle("overflow_hidden");
  }

  function navclose() {
    navside.classList.remove("shownav");
    document.body.classList.remove("overflow_hidden");
  }
}
