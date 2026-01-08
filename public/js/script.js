(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((f) => f.classList.remove("active"));
    filter.classList.add("active");
  });
});

const taxSwitch = document.querySelector("#switchCheckReverse");
const taxInfo = document.querySelectorAll(".tax-info");
if (taxSwitch) {
  taxSwitch.addEventListener("change", () => {
    taxInfo.forEach((info) => {
      info.style.display = taxSwitch.checked ? "inline" : "none";
    });
  });
}

const filtersScroll = document.querySelector(".filters-scroll");
const leftBtn = document.getElementById("scrollLeft");
const rightBtn = document.getElementById("scrollRight");

leftBtn?.addEventListener("click", () => {
  filtersScroll.scrollBy({ left: -200, behavior: "smooth" });
});

rightBtn?.addEventListener("click", () => {
  filtersScroll.scrollBy({ left: 200, behavior: "smooth" });
});
