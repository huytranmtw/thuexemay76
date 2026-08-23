document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking-form");
  const status = document.getElementById("form-status");
  const year = document.getElementById("year");
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const backTop = document.querySelector(".back-top");

  // ==============================
  // CẤU HÌNH GOOGLE SHEETS
  // ==============================

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxSHwIzO37kkAOJ1GAQA-cYBeJdm1Db4omiVN7O3V68gdHZG9fpY-xmkz-eMS_cV9c/exec";


  // ==============================
  // NĂM HIỆN TẠI
  // ==============================

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // ==============================
  // MENU MOBILE
  // ==============================

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const expanded =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", String(!expanded));
      mainNav.classList.toggle("is-open");
    });

    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("is-open");
      });
    });
  }


  // ==============================
  // FORM ĐẶT XE
  // ==============================

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const nameInput = document.getElementById("name");
      const phoneInput = document.getElementById("phone");

      const nameError = document.getElementById("name-error");
      const phoneError = document.getElementById("phone-error");

      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();

      nameError.textContent = "";
      phoneError.textContent = "";
      status.textContent = "";

      let valid = true;

      // Kiểm tra họ tên
      if (name.length < 2) {
        nameError.textContent =
          "Vui lòng nhập họ và tên.";
        valid = false;
      }

      // Kiểm tra số điện thoại
      const phoneRegex = /^[0-9+ ()-]{9,16}$/;

      if (!phoneRegex.test(phone)) {
        phoneError.textContent =
          "Vui lòng nhập số điện thoại hợp lệ.";
        valid = false;
      }

      if (!valid) {
        return;
      }

      const submitButton = form.querySelector(
        'button[type="submit"]'
      );

      const originalText = submitButton.textContent;

      submitButton.disabled = true;
      submitButton.textContent = "Đang gửi...";

      status.textContent = "";

      try {
        const data = {
          name: name,
          phone: phone,
          source: "Website thuê xe Măng Đen"
        };

        /*
         * no-cors được sử dụng vì Google Apps Script
         * không cho website khác đọc trực tiếp response.
         */
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(data)
        });

        status.textContent =
          "Đã gửi yêu cầu thành công. Anh Huy sẽ liên hệ lại sớm.";

        status.classList.add("success");

        form.reset();

      } catch (error) {

        console.error(error);

        status.textContent =
          "Không thể gửi yêu cầu. Vui lòng gọi 0972 726 999.";

        status.classList.add("error");

      } finally {

        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    });
  }


  // ==============================
  // NÚT VỀ ĐẦU TRANG
  // ==============================

  if (backTop) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 500) {
        backTop.classList.add("show");
      } else {
        backTop.classList.remove("show");
      }

    });

    backTop.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });
  }
});
