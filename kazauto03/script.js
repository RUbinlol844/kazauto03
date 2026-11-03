/* =========================================================
   KAZAUTO 03 — авто маркет в Кокшетау
   ========================================================= */

(function () {
  "use strict";

  /* ---------- НАСТРОЙКИ ЗАЯВОК ----------
     По умолчанию заявка уходит в WhatsApp KAZAUTO 03: посетитель заполняет
     форму, нажимает «Отправить» — открывается чат с готовым текстом,
     остаётся нажать «Отправить сообщение».

     Чтобы заявки приходили ещё и на почту, зарегистрируйтесь на
     formspree.io (бесплатно) и вставьте ссылку формы сюда:
     var LEAD_ENDPOINT = "https://formspree.io/f/xxxxxxxx";
     Тогда заявка будет отправляться на почту, а WhatsApp останется запасным
     вариантом на случай ошибки.
  ---------------------------------------- */

  var LEAD_ENDPOINT = "";

  /* ---------- ДАННЫЕ АВТОМОБИЛЕЙ ----------
     Чтобы обновить каталог — правьте этот массив.
     status: "stock" — в наличии, "order" — под заказ.
     img: путь к фото в папке img/.
  ------------------------------------------ */

  var CARS = [
    {
      brand: "Nissan", model: "Primera P11", year: 1998,
      price: 2000000, mileage: 380255,
      engine: "1.6 л · бензин", transmission: "Механика",
      body: "Седан", drive: "Передний",
      status: "stock", img: "img/car-1.jpg"
    },
    {
      brand: "ВАЗ", model: "2110", year: 2006,
      price: 1600000, mileage: 606000,
      engine: "1.6 л · бензин", transmission: "Механика",
      body: "Седан", drive: "Передний",
      status: "stock", img: "img/car-3.jpg"
    },
    {
      brand: "Chevrolet", model: "Aveo", year: 2011,
      price: 3000000, mileage: 225332,
      engine: "1.4 л · бензин", transmission: "Автомат",
      body: "Седан", drive: "Передний",
      status: "stock", img: "img/car-4.jpg"
    },
    {
      brand: "Hyundai", model: "Tucson", year: 2018,
      price: 9400000, mileage: 97878,
      engine: "2.0 л · бензин", transmission: "Автомат",
      body: "Кроссовер", drive: "Передний",
      status: "stock", img: "img/car-5.jpg"
    },
    {
      brand: "Renault", model: "Duster", year: 2014,
      price: 4900000, mileage: 247729,
      engine: "2.0 л · бензин-газ", transmission: "Механика",
      body: "Кроссовер", drive: "Полный",
      status: "stock", img: "img/car-6.jpg"
    },
    {
      brand: "Audi", model: "80", year: 1992,
      price: 1350000, mileage: 262000,
      engine: "2.0 л · бензин", transmission: "Механика",
      body: "Седан", drive: "Передний",
      status: "stock", img: "img/car-7.jpg"
    },
    {
      brand: "Audi", model: "A6", year: 2010,
      price: 5600000, mileage: 264377,
      engine: "2.0 л · бензин", transmission: "Автомат",
      body: "Седан", drive: "Передний",
      status: "stock", img: "img/car-8.jpg"
    },
    {
      brand: "Opel", model: "Meriva", year: 2006,
      price: 2400000, mileage: 215895,
      engine: "1.4 л · бензин", transmission: "Механика",
      body: "Минивэн", drive: "Передний",
      status: "stock", img: "img/car-9.jpg"
    },
    {
      brand: "Audi", model: "A6", year: 1998,
      price: 3100000, mileage: 216190,
      engine: "2.4 л · бензин", transmission: "Автомат",
      body: "Седан", drive: "Передний",
      status: "stock", img: "img/car-10.jpg"
    },
    {
      brand: "Toyota", model: "Mark II", year: 1995,
      price: 2200000, mileage: 496149,
      engine: "2.0 л · бензин", transmission: "Автомат",
      body: "Седан", drive: "Задний",
      status: "stock", img: "img/car-11.jpg"
    },
    {
      brand: "Daewoo", model: "Matiz", year: 2011,
      price: 2000000, mileage: 162000,
      engine: "0.8 л · бензин", transmission: "Автомат",
      body: "Хэтчбек", drive: "Передний",
      status: "stock", img: "img/car-12.jpg"
    },
    {
      brand: "Lada", model: "Granta", year: 2021,
      price: 3900000, mileage: 78900,
      engine: "1.6 л · бензин", transmission: "Механика",
      body: "Седан", drive: "Передний",
      status: "stock", img: "img/car-13.jpg"
    },
    {
      brand: "Lexus", model: "RX350", year: 2007,
      price: 6500000, mileage: 441893,
      engine: "3.5 л · бензин", transmission: "Автомат",
      body: "Кроссовер", drive: "Полный",
      status: "stock", img: "img/car-14.jpg"
    }
  ];

  /* ---------- УТИЛИТЫ ---------- */

  var WA_PHONE = "77775907777";

  /* ---------- ЯЗЫК ---------- */

  var KZ = window.KZ || {
    t: function (key) { return key; },
    getLang: function () { return "ru"; }
  };

  function t(key, vars) {
    return KZ.t(key, vars);
  }

  function locale() {
    return KZ.getLang() === "en" ? "en-US" : "ru-RU";
  }

  function formatPrice(value) {
    return value.toLocaleString(locale()).replace(/\u00A0/g, " ") + " ₸";
  }

  function formatMileage(value) {
    return value.toLocaleString(locale()).replace(/\u00A0/g, " ") + " " + t("unit.km");
  }

  /* Перевод значений из карточки авто (КПП, кузов, привод) */
  function tx(value) {
    if (!value) return value;
    var key = "val." + value;
    var out = t(key);
    return out === key ? value : out;
  }

  /* «1.6 л · бензин» → «1.6 L · petrol» */
  function formatEngine(value) {
    if (!value) return value;
    return String(value)
      .replace("бензин-газ", t("fuel.petrolGas"))
      .replace("бензин", t("fuel.petrol"))
      .replace("дизель", t("fuel.diesel"))
      .replace("л", t("unit.liter"));
  }

  function fullName(car) {
    return car.brand + " " + car.model;
  }

  function waLink(text) {
    return "https://wa.me/" + WA_PHONE + "?text=" + encodeURIComponent(text);
  }

  /* ---------- ХЕДЕР ---------- */

  var header = document.getElementById("header");

  function onScroll() {
    if (window.scrollY > 10) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- МОБИЛЬНОЕ МЕНЮ ---------- */

  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");

  function closeNav() {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", t("header.menuOpen"));
    document.body.style.overflow = "";
  }

  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? t("header.menuClose") : t("header.menuOpen"));
    document.body.style.overflow = open ? "hidden" : "";
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) closeNav();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) closeNav();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) closeNav();
  });

  /* ---------- ПОЯВЛЕНИЕ БЛОКОВ ---------- */

  var revealObserver = null;

  if ("IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
  }

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      if (revealObserver) revealObserver.observe(el);
      else el.classList.add("is-visible");
    });
  }
  observeReveals();

  /* ---------- КАТАЛОГ ---------- */

  var grid = document.getElementById("carsGrid");
  var empty = document.getElementById("carsEmpty");
  var sortSelect = document.getElementById("sort");
  var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
  var fTrans = document.getElementById("fTrans");
  var fPrice = document.getElementById("fPrice");
  var fBody = document.getElementById("fBody");
  var fDrive = document.getElementById("fDrive");
  var fReset = document.getElementById("fReset");
  var fCount = document.getElementById("fCount");
  var chipFavCount = document.getElementById("chipFavCount");
  var favToggle = document.getElementById("favToggle");
  var favCount = document.getElementById("favCount");
  var currentFilter = "all";

  /* ---------- ИЗБРАННОЕ ---------- */

  var FAV_KEY = "kazauto03_favorites";

  function escapeAttr(text) {
    return String(text).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function readFavorites() {
    try {
      var raw = window.localStorage.getItem(FAV_KEY);
      var list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list : [];
    } catch (e) {
      return [];
    }
  }

  var favorites = readFavorites();

  function isFavorite(key) {
    return favorites.indexOf(key) > -1;
  }

  function saveFavorites() {
    try {
      window.localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    } catch (e) {}
  }

  function syncFavorites() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-fav]"), function (btn) {
      var on = isFavorite(btn.getAttribute("data-fav"));
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.setAttribute("aria-label", on ? t("fav.remove") : t("fav.add"));
    });

    if (favCount) {
      favCount.textContent = favorites.length;
      favCount.hidden = favorites.length === 0;
    }
    if (chipFavCount) {
      chipFavCount.textContent = favorites.length;
      chipFavCount.hidden = favorites.length === 0;
    }
    if (favToggle) favToggle.classList.toggle("has-items", favorites.length > 0);

    var modalFav = document.getElementById("modalFav");
    if (modalFav && modalFav.getAttribute("data-fav")) {
      var inFav = isFavorite(modalFav.getAttribute("data-fav"));
      var label = modalFav.querySelector("span");
      if (label) label.textContent = inFav ? t("fav.in") : t("fav.add");
    }
  }

  function toggleFavorite(key) {
    var index = favorites.indexOf(key);
    if (index > -1) favorites.splice(index, 1);
    else favorites.push(key);
    saveFavorites();
    syncFavorites();
    if (currentFilter === "fav") render();
  }

  function cardMarkup(car) {
    var badgeClass = car.status === "stock" ? "car__badge--stock" : "car__badge--order";
    var badgeText = car.status === "stock" ? t("status.stock") : t("status.order");
    var favKey = fullName(car) + "|" + car.year;
    var isFav = isFavorite(favKey);

    return '' +
      '<article class="car reveal" data-status="' + car.status + '" data-key="' + escapeAttr(favKey) + '">' +
        '<div class="car__media">' +
          '<img src="' + car.img + '" alt="' + fullName(car) + ', ' + car.year + '" loading="lazy" width="800" height="600">' +
          '<span class="car__badge ' + badgeClass + '">' + badgeText + '</span>' +
          '<button class="car__fav' + (isFav ? ' is-active' : '') + '" type="button" data-fav="' + escapeAttr(favKey) + '" aria-label="' + escapeAttr(t("fav.add")) + '"><svg class="icon" aria-hidden="true"><use href="#i-heart"/></svg></button>' +
        '</div>' +
        '<div class="car__body">' +
          '<div class="car__top">' +
            '<h3>' + fullName(car) + '</h3>' +
            '<span class="car__year">' + car.year + '</span>' +
          '</div>' +
          '<div class="car__specs">' +
            '<div><span>' + t("card.engine") + '</span><b>' + formatEngine(car.engine) + '</b></div>' +
            '<div><span>' + t("card.trans") + '</span><b>' + tx(car.transmission) + '</b></div>' +
            '<div><span>' + t("card.mileage") + '</span><b>' + formatMileage(car.mileage) + '</b></div>' +
            '<div><span>' + t("card.body") + '</span><b>' + tx(car.body) + '</b></div>' +
          '</div>' +
          '<div class="car__bottom">' +
            '<span class="car__price">' + formatPrice(car.price) + '</span>' +
            '<button class="car__more" type="button" data-open="' + escapeAttr(favKey) + '">' +
              t("card.more") +
              '<svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  /* ---------- ФИЛЬТРЫ ---------- */

  function priceRange() {
    var value = fPrice.value;
    if (!value) return null;
    var parts = value.split("-");
    return { min: Number(parts[0]), max: Number(parts[1]) };
  }

  function matchesFilters(car) {
    if (currentFilter === "stock" && car.status !== "stock") return false;
    if (currentFilter === "order" && car.status !== "order") return false;
    if (currentFilter === "fav" && !isFavorite(fullName(car) + "|" + car.year)) return false;
    if (fTrans.value && car.transmission !== fTrans.value) return false;
    if (fBody.value && car.body !== fBody.value) return false;
    if (fDrive.value && car.drive !== fDrive.value) return false;

    var range = priceRange();
    if (range && (car.price < range.min || car.price > range.max)) return false;

    return true;
  }

  function render() {
    var list = CARS.filter(matchesFilters);

    var sort = sortSelect.value;
    if (sort === "price-asc") list.sort(function (a, b) { return a.price - b.price; });
    if (sort === "price-desc") list.sort(function (a, b) { return b.price - a.price; });
    if (sort === "year-desc") list.sort(function (a, b) { return b.year - a.year; });

    grid.innerHTML = list.map(cardMarkup).join("");
    empty.hidden = list.length > 0;

    if (!list.length) {
      empty.textContent = currentFilter === "fav" ? t("empty.fav") : t("empty");
    }

    if (fCount) fCount.textContent = t("count", { n: list.length });

    var hasExtra = Boolean(fTrans.value || fPrice.value || fBody.value || fDrive.value);
    if (fReset) fReset.hidden = !hasExtra;
    [fTrans, fBody, fDrive, fPrice].forEach(function (select) {
      select.classList.toggle("is-active", Boolean(select.value));
    });

    syncFavorites();
    observeReveals();
  }

  function setFilter(value) {
    currentFilter = value;
    chips.forEach(function (chip) {
      chip.classList.toggle("is-active", chip.getAttribute("data-filter") === value);
    });
    render();
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      setFilter(chip.getAttribute("data-filter"));
    });
  });

  [fTrans, fPrice, fBody, fDrive].forEach(function (select) {
    select.addEventListener("change", render);
  });

  if (fReset) {
    fReset.addEventListener("click", function () {
      fTrans.value = "";
      fPrice.value = "";
      fBody.value = "";
      fDrive.value = "";
      setFilter("all");
    });
  }

  if (favToggle) {
    favToggle.addEventListener("click", function () {
      if (currentFilter === "fav") {
        setFilter("all");
        return;
      }
      setFilter("fav");
      var catalog = document.getElementById("cars");
      if (catalog) {
        var top = catalog.getBoundingClientRect().top + window.scrollY - (window.innerWidth > 860 ? 96 : 86);
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
  }

  sortSelect.addEventListener("change", render);

  /* ---------- МОДАЛЬНОЕ ОКНО ---------- */

  var modal = document.getElementById("carModal");
  var modalImg = document.getElementById("modalImg");
  var modalBadge = document.getElementById("modalBadge");
  var modalKicker = document.getElementById("modalKicker");
  var modalTitle = document.getElementById("modalTitle");
  var modalPrice = document.getElementById("modalPrice");
  var modalSpecs = document.getElementById("modalSpecs");
  var modalWa = document.getElementById("modalWa");
  var lastFocused = null;
  var modalCar = null;

  function findCar(key) {
    var parts = key.split("|");
    return CARS.filter(function (car) {
      return fullName(car) === parts[0] && String(car.year) === parts[1];
    })[0];
  }

  function openModal(car) {
    lastFocused = document.activeElement;
    modalCar = car;

    modalImg.src = car.img;
    modalImg.alt = fullName(car) + ", " + car.year;

    modalBadge.textContent = car.status === "stock" ? t("status.stock") : t("status.order");
    modalBadge.className = "modal__badge" + (car.status === "order" ? " is-order" : "");

    modalKicker.textContent = tx(car.body) + " · " + tx(car.drive) + " " + t("modal.drive");
    modalTitle.textContent = fullName(car) + ", " + car.year;
    modalPrice.textContent = formatPrice(car.price);

    var specs = [
      [t("modal.year"), car.year],
      [t("card.engine"), formatEngine(car.engine)],
      [t("card.trans"), tx(car.transmission)],
      [t("card.mileage"), formatMileage(car.mileage)],
      [t("card.body"), tx(car.body)],
      [t("modal.color"), car.color]
    ].filter(function (pair) { return pair[1]; });

    modalSpecs.innerHTML = specs.map(function (pair) {
      return '<div><dt>' + pair[0] + '</dt><dd>' + pair[1] + '</dd></div>';
    }).join("");

    modalWa.href = waLink(t("msg.car", { car: fullName(car), year: car.year }));

    if (modalFavBtn) {
      modalFavBtn.setAttribute("data-fav", fullName(car) + "|" + car.year);
      syncFavorites();
    }

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal__close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  grid.addEventListener("click", function (e) {
    var favBtn = e.target.closest("[data-fav]");
    if (favBtn) {
      toggleFavorite(favBtn.getAttribute("data-fav"));
      return;
    }
    var btn = e.target.closest("[data-open]");
    if (!btn) return;
    var car = findCar(btn.getAttribute("data-open"));
    if (car) openModal(car);
  });

  var modalFavBtn = document.getElementById("modalFav");
  if (modalFavBtn) {
    modalFavBtn.addEventListener("click", function () {
      var key = modalFavBtn.getAttribute("data-fav");
      if (key) toggleFavorite(key);
    });
  }

  modal.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ---------- ФОРМА ---------- */

  var form = document.getElementById("leadForm");
  var interest = document.getElementById("interest");

  document.querySelectorAll("[data-preset]").forEach(function (link) {
    link.addEventListener("click", function () {
      interest.value = link.getAttribute("data-preset");
    });
  });

  if (form) {
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var agreeInput = document.getElementById("agree");
    var successBox = form.querySelector(".form__success");
    var formNote = form.querySelector(".form__note");

      if (formNote) {
        formNote.textContent = LEAD_ENDPOINT ? t("lead.noteEndpoint") : t("lead.note");
      }

      function setError(input, message) {
        var errorEl = form.querySelector('[data-error-for="' + input.id + '"]');
        if (errorEl) errorEl.textContent = message || "";
        input.classList.toggle("is-invalid", Boolean(message));
      }

      function validateName() {
        if (nameInput.value.trim().length < 2) {
          setError(nameInput, t("err.name2"));
          return false;
        }
        setError(nameInput, "");
        return true;
      }

      function validatePhone() {
        var digits = phoneInput.value.replace(/\D/g, "");
        if (digits.length < 10) {
          setError(phoneInput, t("err.phone"));
          return false;
        }
        setError(phoneInput, "");
        return true;
      }

    nameInput.addEventListener("blur", validateName);
    phoneInput.addEventListener("blur", validatePhone);
    nameInput.addEventListener("input", function () {
      if (nameInput.classList.contains("is-invalid")) validateName();
    });
    phoneInput.addEventListener("input", function () {
      if (phoneInput.classList.contains("is-invalid")) validatePhone();
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var ok = validateName();
      ok = validatePhone() && ok;

      if (!agreeInput.checked) {
        setError(agreeInput, t("err.agree"));
        ok = false;
      } else {
        setError(agreeInput, "");
      }

      if (!ok) {
        var firstInvalid = form.querySelector(".is-invalid") || agreeInput;
        if (firstInvalid && firstInvalid.focus) firstInvalid.focus();
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      var messageInput = document.getElementById("message");
      var successText = successBox.querySelector("[data-success-text]");
      var waButton = successBox.querySelector("#waLink");

      var lead = {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        interest: interest && interest.value
          ? interest.options[interest.selectedIndex].textContent.trim()
          : t("msg.notSpecified"),
        message: (messageInput && messageInput.value.trim()) || "—",
        source: "Форма на сайте",
        page: location.href,
        date: new Date().toLocaleString(locale())
      };

      var text = [
        t("msg.leadHeader"),
        t("msg.name") + ": " + lead.name,
        t("msg.phone") + ": " + lead.phone,
        t("msg.interest") + ": " + lead.interest,
        t("msg.comment") + ": " + lead.message
      ].join("\n");

      var waUrl = waLink(text);
      if (waButton) waButton.href = waUrl;

      function showSuccess() {
        successBox.hidden = false;
      }

      function fallbackToWhatsApp() {
        if (successText) {
          successText.textContent = t("lead.fallback");
        }
        if (waButton) waButton.hidden = false;
        showSuccess();
      }

      submitBtn.disabled = true;
      submitBtn.textContent = t("send.sending");

      if (LEAD_ENDPOINT) {
        fetch(LEAD_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(lead)
        })
          .then(function (res) {
            if (!res.ok) throw new Error("HTTP " + res.status);
            if (successText) {
              successText.textContent = t("lead.sent");
            }
            showSuccess();
          })
          .catch(fallbackToWhatsApp);
      } else {
        if (waButton) waButton.hidden = false;
        showSuccess();
        window.open(waUrl, "_blank", "noopener");
      }
    });
  }

  /* ---------- ФОРМА «ПРОДАТЬ АВТО» ---------- */

  var sellForm = document.getElementById("sellForm");

  if (sellForm) {
    var sellPhoto = document.getElementById("sellPhoto");
    var uploadPreview = document.getElementById("uploadPreview");
    var uploadEmpty = document.getElementById("uploadEmpty");
    var uploadClear = document.getElementById("uploadClear");
    var photoFile = null;
    var photoUrl = "";

    function setPhotoError(message) {
      var box = sellForm.querySelector(".upload");
      if (!box) return;
      box.classList.toggle("is-invalid", Boolean(message));
      var note = sellForm.querySelector("[data-photo-error]");
      if (note) note.textContent = message || "";
    }

    function applyPhoto(file) {
      if (!file) return;
      if (!/^image\//.test(file.type)) {
        setPhotoError(t("err.photoType"));
        return;
      }
      if (file.size > 15 * 1024 * 1024) {
        setPhotoError(t("err.photoSize"));
        return;
      }
      setPhotoError("");

      if (photoUrl) URL.revokeObjectURL(photoUrl);
      photoFile = file;
      photoUrl = URL.createObjectURL(file);

      uploadPreview.src = photoUrl;
      uploadPreview.hidden = false;
      uploadEmpty.hidden = true;
      uploadClear.hidden = false;
    }

    function resetPhoto() {
      if (photoUrl) URL.revokeObjectURL(photoUrl);
      photoUrl = "";
      photoFile = null;
      if (sellPhoto) sellPhoto.value = "";
      uploadPreview.hidden = true;
      uploadPreview.removeAttribute("src");
      uploadEmpty.hidden = false;
      uploadClear.hidden = true;
      setPhotoError("");
    }

    if (sellPhoto) {
      sellPhoto.addEventListener("change", function () {
        if (sellPhoto.files && sellPhoto.files[0]) applyPhoto(sellPhoto.files[0]);
      });
    }
    if (uploadClear) {
      uploadClear.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        resetPhoto();
      });
    }

    var sellSuccess = sellForm.querySelector(".form__success");
    var sellWaBtn = sellForm.querySelector("[data-wa-link]");
    var sellPhotoBtn = sellForm.querySelector("[data-photo-link]");
    var sellSuccessText = sellForm.querySelector("[data-success-text]");

    function sellError(el, message) {
      var slot = sellForm.querySelector('[data-error-for="' + el.id + '"]');
      if (slot) slot.textContent = message || "";
      el.classList.toggle("is-invalid", Boolean(message));
    }

    sellForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var brandEl = document.getElementById("sBrand");
      var modelEl = document.getElementById("sModel");
      var nameEl = document.getElementById("sName");
      var phoneEl = document.getElementById("sPhone");
      var agreeEl = document.getElementById("sAgree");

      var ok = true;

      if (brandEl.value.trim().length < 1) {
        sellError(brandEl, t("err.brand"));
        ok = false;
      } else sellError(brandEl, "");

      if (modelEl.value.trim().length < 1) {
        sellError(modelEl, t("err.model"));
        ok = false;
      } else sellError(modelEl, "");

      if (nameEl.value.trim().length < 2) {
        sellError(nameEl, t("err.name"));
        ok = false;
      } else sellError(nameEl, "");

      if (phoneEl.value.replace(/\D/g, "").length < 10) {
        sellError(phoneEl, t("err.phone"));
        ok = false;
      } else sellError(phoneEl, "");

      if (!agreeEl.checked) {
        sellError(agreeEl, t("err.agree"));
        ok = false;
      } else sellError(agreeEl, "");

      if (!ok) {
        var firstInvalid = sellForm.querySelector(".is-invalid") || agreeEl;
        if (firstInvalid && firstInvalid.focus) firstInvalid.focus();
        return;
      }

      function value(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : "";
      }

      var car = [value("sBrand"), value("sModel")].filter(Boolean).join(" ");
      var year = value("sYear");
      var lines = [
        t("msg.sellHeader"),
        t("msg.carLabel") + ": " + car + (year ? ", " + year : "")
      ];

      if (value("sMileage")) lines.push(t("msg.mileage") + ": " + value("sMileage") + " " + t("unit.km"));
      if (value("sEngine")) lines.push(t("msg.engine") + ": " + value("sEngine"));
      if (value("sTrans")) lines.push(t("msg.trans") + ": " + value("sTrans"));
      if (value("sDrive")) lines.push(t("msg.drive") + ": " + value("sDrive"));
      if (value("sBody")) lines.push(t("msg.body") + ": " + value("sBody"));
      if (value("sPrice")) lines.push(t("msg.price") + ": " + value("sPrice") + " ₸");
      if (value("sCity")) lines.push(t("msg.city") + ": " + value("sCity"));

      lines.push(t("msg.name") + ": " + value("sName"));
      lines.push(t("msg.phone") + ": " + value("sPhone"));

      if (value("sComment")) lines.push(t("msg.comment") + ": " + value("sComment"));
      if (photoFile) lines.push(t("msg.photo"));

      var text = lines.join("\n");
      var waUrl = waLink(text);

      if (sellWaBtn) sellWaBtn.href = waUrl;

      if (sellPhotoBtn) {
        if (photoUrl) {
          sellPhotoBtn.href = photoUrl;
          sellPhotoBtn.setAttribute("download", "auto-" + Date.now() + ".jpg");
          sellPhotoBtn.hidden = false;
        } else {
          sellPhotoBtn.hidden = true;
        }
      }

      function showSellSuccess(shared) {
        if (sellSuccessText) {
          sellSuccessText.textContent = shared ? t("sell.shared") : t("sell.addPhoto");
        }
        if (sellSuccess) sellSuccess.hidden = false;
      }

      var canSharePhoto =
        photoFile &&
        navigator.canShare &&
        navigator.share &&
        navigator.canShare({ files: [photoFile] });

      if (canSharePhoto) {
        navigator
          .share({ files: [photoFile], text: text })
          .then(function () {
            showSellSuccess(true);
          })
          .catch(function () {
            showSellSuccess(false);
            window.open(waUrl, "_blank", "noopener");
          });
      } else {
        showSellSuccess(false);
        window.open(waUrl, "_blank", "noopener");
      }
    });
  }

  /* ---------- АКТИВНЫЙ ПУНКТ МЕНЮ ---------- */

  var sections = document.querySelectorAll("main section[id]");
  var navLinks = nav.querySelectorAll('a[href^="#"]');

  if ("IntersectionObserver" in window && sections.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  /* ---------- FAQ: открыт только один ---------- */

  var faqItems = document.querySelectorAll(".faq__item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ---------- ПЛАВНАЯ ПРОКРУТКА ---------- */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      var offset = window.innerWidth > 860 ? 76 : 68;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
      if (history.replaceState) history.replaceState(null, "", id);
    });
  });

  /* ---------- СМЕНА ЯЗЫКА ---------- */

  document.addEventListener("kazauto:lang", function () {
    if (nav.classList.contains("is-open")) {
      burger.setAttribute("aria-label", t("header.menuClose"));
    }

    var note = form ? form.querySelector(".form__note") : null;
    if (note) note.textContent = LEAD_ENDPOINT ? t("lead.noteEndpoint") : t("lead.note");

    render();

    if (modalCar && !modal.hidden) openModal(modalCar);
  });

  /* ---------- СТАРТ ---------- */

  var heroCount = document.getElementById("heroCount");
  if (heroCount) {
    heroCount.textContent = CARS.filter(function (car) {
      return car.status === "stock";
    }).length;
  }

  render();
})();
