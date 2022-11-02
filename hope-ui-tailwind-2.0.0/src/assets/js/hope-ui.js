document.addEventListener('alpine:init', () => {
  Alpine.data('sidebar', () => ({
    selected: null,
    toggle(value) {
      if (value !== this.selected) {
        this.selected = value
      } else {
        this.selected = null
      }
    },
    init() {
      if (document.querySelector('.active') !== null) {
        const active = document.querySelector('.active').dataset.sidebarParent
        if (active !== undefined) {
          this.selected = active
        }
      }
    }
  }))
})


/* ---------------------------------------------------------------------
 carousel
  ---------------------------------------------------------------------*/
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
/* ---------------------------------------------------------------------
 sidebar-toggle
 ---------------------------------------------------------------------*/
const sidebarToggle = document.querySelectorAll('[data-toggle="sidebar"]')
Array.from(sidebarToggle, (sidebarTogglebtn) => {
  sidebarTogglebtn.addEventListener("click", () => {
    const sidebar = document.querySelector('.sidebar')
    if (sidebar.classList.contains('sidebar-mini')) {
      sidebar.classList.remove('sidebar-mini')
    } else {
      sidebar.classList.add('sidebar-mini')
    }
  })
})


function toggleNavbar(collapseID, cID, sID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("flex");
  document.getElementById(cID).classList.toggle("hidden");
  document.getElementById(cID).classList.toggle("block");
  document.getElementById(sID).classList.toggle("hidden");
  document.getElementById(sID).classList.toggle("block");
}

/*---------------------------------------------------------------------
              LoaderInit
-----------------------------------------------------------------------*/

const loaderInit = () => {
  const loader = document.querySelector('.loader')
  setTimeout(() => {
    loader.classList.add('hidden')
  }, 200)
}

document.addEventListener('DOMContentLoaded', (event) => {
  loaderInit()
})
/* ---------------------------------------------------------------------
 scrollbar
  ---------------------------------------------------------------------*/
let Scrollbar
if (typeof Scrollbar !== typeof null) {
  if (document.querySelectorAll(".data-scrollbar").length) {
    Scrollbar = window.Scrollbar

    Scrollbar.init(document.querySelector('.data-scrollbar'), {
      continuousScrolling: false,
    })
  }
}

/*---------------------------------------------------------------------
Circle Progress
-----------------------------------------------------------------------*/

const progressBar = document.getElementsByClassName('circle-progress')
if (typeof progressBar !== typeof undefined) {
  Array.from(progressBar, (elem) => {
    const minValue = elem.getAttribute('data-min-value')
    const maxValue = elem.getAttribute('data-max-value')
    const value = elem.getAttribute('data-value')
    const type = elem.getAttribute('data-type')
    if (elem.getAttribute('id') !== '' && elem.getAttribute('id') !== null) {
      new CircleProgress('#' + elem.getAttribute('id'), {
        min: minValue,
        max: maxValue,
        value: value,
        textFormat: type,
      });
    }
  })
}



/*---------------------------------------------------------------------
              CounterUp 2 Plugin
-----------------------------------------------------------------------*/
if (window.counterUp !== undefined) {
  const counterUp = window.counterUp["default"];
  const counterUp2 = document.querySelectorAll('.counter')
  Array.from(counterUp2, (el) => {
    if (typeof Waypoint !== typeof undefined) {
      const waypoint = new Waypoint({
        element: el,
        handler: function () {
          counterUp(el, {
            duration: 1000,
            delay: 10,
          });
          this.destroy();
        },
        offset: "bottom-in-view",
      });
    }
  })
}

/*---------------------------------------------------------------------
Flatpickr
-----------------------------------------------------------------------*/
const date_flatpickr = document.querySelectorAll('.date_flatpicker')
Array.from(date_flatpickr, (elem) => {
  // console.log(elem, flatpickr);
  if (typeof flatpickr !== typeof undefined) {
    flatpickr(elem, {
      minDate: "today",
      dateFormat: "Y-m-d",
    })
  }
})

/*---------------------------------------------------------------------
Range Flatpickr
-----------------------------------------------------------------------*/
const range_flatpicker = document.querySelectorAll('.range_flatpicker')
Array.from(range_flatpicker, (elem) => {
  if (typeof flatpickr !== typeof undefined) {
    flatpickr(elem, {
      mode: "range",
      minDate: "today",
      dateFormat: "Y-m-d",
    })
  }
})
/*---------------------------------------------------------------------
Inline Flatpickr
-----------------------------------------------------------------------*/
const inline_flatpickr = document.querySelectorAll('.inline_flatpickr')
Array.from(inline_flatpickr, (elem) => {
  if (typeof flatpickr !== typeof undefined) {
    flatpickr(elem, {
      inline: true,
      minDate: "today",
      dateFormat: "Y-m-d",
    })
  }
})



