/* Persian (Farsi) localization layer for the MovSim traffic simulator.
 * The upstream simulator is intentionally kept intact; this file translates
 * interface text added by the original scripts as well as canvas labels.
 */
(function () {
  "use strict";

  var translations = {
    "Microsimulation of Traffic Flow: Onramp": "شبیه‌سازی جریان ترافیک: رمپ ورودی",
    "Microsimulation of Traffic Flow: Offramp": "شبیه‌سازی جریان ترافیک: رمپ خروجی",
    "Microsimulation of Traffic Flow: RoadWorks": "شبیه‌سازی جریان ترافیک: عملیات راه‌سازی",
    "Microsimulation of Traffic Flow: Uphill": "شبیه‌سازی جریان ترافیک: سربالایی",
    "Microsimulation of Traffic Flow: Navigation": "شبیه‌سازی جریان ترافیک: مدیریت مسیر",
    "Microsimulation of Traffic Flow: Roundabout": "شبیه‌سازی جریان ترافیک: میدان",
    "Microsimulation of Traffic Flow": "شبیه‌سازی جریان ترافیک",
    "Intersection": "تقاطع",
    "Traffic Flow and General": "جریان ترافیک و تنظیمات کلی",
    "Car-Following Behavior": "رفتار دنبال‌کردن خودرو",
    "Lane-Changing Behavior": "رفتار تغییر خط",
    "Inflow": "جریان ورودی",
    "Onramp Flow": "جریان رمپ ورودی",
    "Offramp Use": "سهم خودروهای خروجی",
    "Deviation Use": "درصد استفاده از مسیر جایگزین",
    "Total Inflow": "جریان کل ورودی",
    "Main Inflow": "جریان ورودی مسیر اصلی",
    "Secondary Inflow": "جریان ورودی مسیر فرعی",
    "Main flow (info)": "جریان مسیر اصلی (نمایشی)",
    "Ramp flow (info)": "جریان رمپ (نمایشی)",
    "Inflow (info)": "جریان ورودی (نمایشی)",
    "Truck Perc": "درصد کامیون‌ها",
    "Timelapse": "سرعت شبیه‌سازی",
    "Time-lapse factor": "سرعت شبیه‌سازی",
    "Max Speed v": "سرعت مطلوب v",
    "Max Speed v0": "سرعت مطلوب v₀",
    "Max Speed v₀": "سرعت مطلوب v₀",
    "Max Speed": "سرعت مطلوب",
    "Max Accel a": "بیشینه شتاب a",
    "Max Accel": "بیشینه شتاب",
    "Time Gap T": "فاصله زمانی T",
    "Min Gap s": "فاصله ایستایی s",
    "Comf Decel b": "کاهش سرعت آسوده b",
    "Politeness": "ضریب ملاحظه‌گری",
    "LC Threshold": "آستانه تغییر خط",
    "Right Bias Cars": "تمایل خودروها به سمت راست",
    "Right Bias Trucks": "تمایل کامیون‌ها به سمت راست",
    "Density/lane": "تراکم در هر خط",
    "Speed Limit": "محدودیت سرعت",
    "Uphill Truck v": "سرعت کامیون در سربالایی",
    "Enforce Truck Overtaking Ban": "اعمال ممنوعیت سبقت کامیون",
    "Mainroad Perc": "سهم مسیر اصلی",
    "Left Turn Bias": "تمایل به گردش چپ",
    "Focus Outgoing": "سهم خروجی هدف",
    "Percentage Right": "درصد گردش به راست",
    "Percentage Left": "درصد گردش به چپ",
    "Open traffic-light control panel": "باز کردن پنل کنترل چراغ راهنمایی",
    "Show road IDs": "نمایش شناسهٔ راه‌ها",
    "Do not show road IDs": "پنهان‌کردن شناسهٔ راه‌ها",
    "Show vehicle IDs": "نمایش شناسهٔ خودروها",
    "Do not show vehicle IDs": "پنهان‌کردن شناسهٔ خودروها",
    "Lift Truck Overtaking Ban": "برداشتن ممنوعیت سبقت کامیون",
    "The game ends after all vehicles have left the simulation": "بازی پس از خروج همهٔ خودروها از شبیه‌سازی پایان می‌یابد",
    "traffic-simulation.de": "شبیه‌ساز ترافیک",
    "Ring has Priority": "اولویت با مسیر حلقه‌ای",
    "Arms have Priority": "اولویت با ورودی‌های میدان",
    "Only Straight Ahead": "فقط حرکت مستقیم",
    "Only to the Right": "فقط گردش به راست",
    "Only to the Left": "فقط گردش به چپ",
    "All Directions": "همهٔ جهت‌ها",
    "Traffic Rules": "قوانین حق‌تقدم",
    "Horizontal Priority": "اولویت با مسیر افقی",
    "Right Priority": "اولویت با خودروی سمت راست",
    "Signalized": "تقاطع چراغ‌دار",
    "Number of Lanes": "تعداد خط‌ها",
    "1 main, 1 secondary lane": "۱ خط اصلی، ۱ خط فرعی",
    "2 main, 1 secondary lanes": "۲ خط اصلی، ۱ خط فرعی",
    "2 main, 2 secondary lanes": "۲ خط اصلی، ۲ خط فرعی",
    "3 main, 1 secondary lanes": "۳ خط اصلی، ۱ خط فرعی",
    "3 main, 2 secondary lanes": "۳ خط اصلی، ۲ خط فرعی",
    "3 main, 3 secondary lanes": "۳ خط اصلی، ۳ خط فرعی",
    "Play Ramp-Metering Game": "بازی کنترل ورود به بزرگراه",
    "Play Routing Game": "بازی مدیریت مسیر",
    "Go to Routing Game": "رفتن به بازی مدیریت مسیر",
    "Go to Ramp-Metering Game": "رفتن به بازی کنترل رمپ",
    "Clear Highscores": "پاک‌کردن رکوردها",
    "Tests": "آزمایش‌ها",
    "Your browser does not support the HTML5 canvas tag.": "مرورگر شما از بوم HTML5 پشتیبانی نمی‌کند.",
    "Offline: sources at GitHub": "نسخهٔ آفلاین: کد منبع در GitHub",
    "Play offline: sources at GitHub": "اجرای آفلاین: کد منبع در GitHub",
    "Sources at GitHub": "کد منبع در GitHub",
    "Book \"Traffic Flow Dynamics\"": "کتاب «پویایی جریان ترافیک»",
    "Buch \"Verkehrsdynamik\"": "کتاب «پویایی حمل‌ونقل»",
    "Please enter your nick": "نام نمایشی خود را وارد کنید:",
    "Game Finished!": "بازی به پایان رسید!",
    "Highscore list:": "جدول رکوردها:",
    "rank": "رتبه",
    "name": "نام",
    "score [s]": "زمان [ثانیه]",
    "Your time is": "زمان شما:",
    "Intersection\nStandard scenario": "تقاطع",
    "Standard scenario: not signalized priority and secondary road, only straight-ahead traffic": "سناریوی پیش‌فرض: تقاطع بدون چراغ، با مسیر اصلی و فرعی؛ حرکت خودروها فقط مستقیم است.",
    "Change the traffic rules and the number of lanes with the pulldown menus": "با منوهای کشویی، قوانین حق‌تقدم و تعداد خط‌ها را تغییر دهید.",
    "Change the size of the intersecting roads with the second menu": "با منوی دوم، اندازهٔ راه‌های متقاطع را تغییر دهید.",
    "Change the traffic and the origin-destination relations with the sliders": "با لغزنده‌ها، حجم ترافیک و نسبت حرکت به مقصدهای مختلف را تنظیم کنید.",
    "Observe that, with Right Priority, traffic gets in a gridlock unless demand is very light. Resolve it by changing the traffic rules (right priority only makes sense for single-lane directional roads)": "توجه کنید که با قانون اولویت از راست، در صورت زیاد بودن تقاضا ممکن است گرهٔ ترافیکی ایجاد شود. برای رفع آن، قانون حق‌تقدم را تغییر دهید؛ اولویت از راست بیشتر برای راه‌های یک‌خطه مناسب است.",
    "In the mainroad and signalized scenarios, any remaining ambiguities (left-turning mainroad vehicles encounter mainroad vehicles in the opposite drection, left turns if there are traffic lights) is resolved by the Right Priority rule": "در سناریوهای مسیر اصلی و تقاطع چراغ‌دار، موارد مبهم—مانند برخورد خودروی گردش‌کننده به چپ با ترافیک روبه‌رو—با قانون اولویت از راست حل می‌شوند.",
    "Common cycle time:": "زمان چرخهٔ مشترک:",
    "Activate": "فعال‌سازی",
    "free": "آزاد",
    "Road": "جاده",
    "Flow:": "جریان:",
    "Speed:": "سرعت:",
    "Dens.:": "تراکم:",
    "Time=": "زمان: ",
    "Your time is ": "زمان شما: ",
    "Seconds": "ثانیه",
    "Highscore list": "جدول رکوردها",
    "Game Finished!": "بازی به پایان رسید!"
  };

  function translateText(input) {
    if (typeof input !== "string" || input.length === 0) return input;
    var trimmed = input.trim();
    var translated = Object.prototype.hasOwnProperty.call(translations, trimmed)
      ? translations[trimmed]
      : trimmed;

    translated = translated
      .replace(/\bveh\/h\b/gi, "خودرو/ساعت")
      .replace(/\bveh\/km\b/gi, "خودرو/کیلومتر")
      .replace(/\bFz\/h\b/gi, "خودرو/ساعت")
      .replace(/\bFz\/km\b/gi, "خودرو/کیلومتر")
      .replace(/\bpix\/m\b/gi, "پیکسل/متر")
      .replace(/\btimes\b/gi, "برابر")
      .replace(/\bSeconds\b/gi, "ثانیه")
      .replace(/\bfree\b/gi, "آزاد")
      .replace(/Your time is/gi, "زمان شما:")
      .replace(/wrote files/gi, "فایل‌های زیر ذخیره شدند:")
      .replace(/to default folder \(Downloads\)/gi, "در پوشهٔ پیش‌فرض دانلودها")
      .replace(/\bTime=/g, "زمان: ")
      .replace(/\bFlow:/g, "جریان:")
      .replace(/\bSpeed:/g, "سرعت:")
      .replace(/\bDens\.:/g, "تراکم:");

    var roadCoords = translated.match(/^Road\s+(\d+):\s*u=([^,]+),\s*lane=(.+)$/i);
    if (roadCoords) {
      translated = "جادهٔ " + roadCoords[1] + "، موقعیت: " + roadCoords[2] + " متر، خط: " + roadCoords[3];
    } else {
      translated = translated.replace(/^road\s+(\d+)$/i, "جادهٔ $1");
      translated = translated.replace(/\blane=/gi, "خط=");
    }

    return input.slice(0, input.length - input.trimStart().length) + translated + input.slice(input.trimEnd().length);
  }

  function isSkippableTextNode(node) {
    var parent = node && node.parentElement;
    while (parent) {
      if (/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|CANVAS|CODE|PRE)$/.test(parent.tagName)) return true;
      parent = parent.parentElement;
    }
    return false;
  }

  function translateNode(node) {
    if (!node) return;
    if (node.nodeType === 3) {
      if (!isSkippableTextNode(node)) {
        var value = translateText(node.nodeValue);
        if (value !== node.nodeValue) node.nodeValue = value;
      }
      return;
    }
    if (node.nodeType !== 1 && node.nodeType !== 9 && node.nodeType !== 11) return;

    if (node.nodeType === 1) {
      ["title", "alt", "aria-label", "placeholder"].forEach(function (attribute) {
        var value = node.getAttribute(attribute);
        if (value) {
          var translated = translateText(value);
          if (translated !== value) node.setAttribute(attribute, translated);
        }
      });
      if (node.tagName === "IMG" && node.id === "startStop") updateStartStopLabel(node);
    }
    for (var child = node.firstChild; child; child = child.nextSibling) translateNode(child);
    if (node.nodeType === 1) syncRangeValue(node);
  }

  function rangeLabel(input) {
    var row = input.closest ? input.closest("tr") : null;
    var cell = row && row.querySelector("td:first-child");
    var label = cell ? cell.textContent.trim() : "";
    if (!label && document.getElementById("gameSliderTitle")) {
      label = document.getElementById("gameSliderTitle").textContent.trim();
    }
    return label || "تنظیم شبیه‌سازی";
  }

  function syncRangeValue(valueNode) {
    if (!valueNode || !valueNode.id || !/Val$/.test(valueNode.id)) return;
    var slider = document.getElementById(valueNode.id.slice(0, -3));
    if (slider && slider.type === "range") {
      slider.setAttribute("aria-valuetext", valueNode.textContent.trim() || slider.value);
    }
  }

  function updateStartStopLabel(image) {
    var isPaused = /buttonGo/i.test(image.getAttribute("src") || "");
    var label = isPaused ? "ادامهٔ شبیه‌سازی" : "توقف شبیه‌سازی";
    if (image.getAttribute("alt") !== label) image.setAttribute("alt", label);
    if (image.getAttribute("title") !== label) image.setAttribute("title", label);
    if (image.getAttribute("aria-label") !== label) image.setAttribute("aria-label", label);
    if (image.getAttribute("role") !== "button") image.setAttribute("role", "button");
    if (image.getAttribute("tabindex") !== "0") image.setAttribute("tabindex", "0");
  }

  function translateCanvasText(value) {
    var text = String(value);
    text = text.replace(/^Time=/, "زمان: ")
      .replace(/^Flow:/, "جریان:")
      .replace(/^Speed:/, "سرعت:")
      .replace(/^Dens\.:/, "تراکم:")
      .replace(/\bveh\/h\b/gi, "خودرو/ساعت")
      .replace(/\bveh\/km\b/gi, "خودرو/کیلومتر")
      .replace(/\bfree\b/gi, "آزاد")
      .replace(/^Common cycle time:/, "زمان چرخهٔ مشترک:")
      .replace(/^Activate$/, "فعال‌سازی");
    var coords = text.match(/^Road\s+(\d+):\s*u=([^,]+),\s*lane=(.+)$/i);
    if (coords) return "جادهٔ " + coords[1] + "، موقعیت: " + coords[2] + " متر، خط: " + coords[3];
    return text.replace(/^road\s+(\d+)$/i, "جادهٔ $1");
  }

  // Text such as flow units is written repeatedly by the upstream controls.
  // Observe DOM additions and updates so those values remain localized.
  function installDomLocalization() {
    if (document.documentElement) {
      document.documentElement.lang = "fa";
      document.documentElement.dir = "rtl";
    }
    if (document.title) document.title = translateText(document.title);
    translateNode(document.body);

    if (window.MutationObserver && document.documentElement) {
      var observer = new MutationObserver(function (records) {
        records.forEach(function (record) {
          if (record.type === "characterData") {
            translateNode(record.target);
            syncRangeValue(record.target.parentElement);
          } else if (record.type === "attributes") {
            translateNode(record.target);
          } else {
            record.addedNodes.forEach(translateNode);
            syncRangeValue(record.target);
          }
        });
      });
      observer.observe(document.documentElement, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: ["title", "alt", "aria-label", "placeholder", "src"]
      });
    }

    // Give range controls an accessible Persian name and a readable live value.
    document.querySelectorAll('input[type="range"]').forEach(function (input) {
      input.setAttribute("aria-label", rangeLabel(input));
      var valueNode = document.getElementById(input.id + "Val");
      if (valueNode) syncRangeValue(valueNode);
      input.addEventListener("input", function () {
        if (valueNode) syncRangeValue(valueNode);
      });
    });
    document.querySelectorAll("select").forEach(function (select) {
      var label = select.id === "prioritySelect"
        ? "قانون حق‌تقدم"
        : select.id === "ODSelect"
          ? "تعداد خط‌ها یا جهت حرکت"
          : (select.options[0] ? translateText(select.options[0].textContent.trim()) : "گزینه‌ها");
      select.setAttribute("aria-label", label);
    });

    // Make image controls keyboard-operable as well as mouse/touch-operable.
    document.querySelectorAll('img[role="button"][tabindex]').forEach(function (image) {
      image.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          image.click();
        }
      });
    });
    ["restart", "download"].forEach(function (id) {
      var image = document.getElementById(id);
      if (image) {
        image.setAttribute("role", "button");
        image.setAttribute("tabindex", "0");
      }
    });
    var startStop = document.getElementById("startStop");
    if (startStop) {
      updateStartStopLabel(startStop);
      new MutationObserver(function () { updateStartStopLabel(startStop); })
        .observe(startStop, { attributes: true, attributeFilter: ["src"] });
    }
  }

  // Translate native browser dialogs used by the optional games/downloads.
  if (typeof window.alert === "function") {
    var nativeAlert = window.alert.bind(window);
    window.alert = function (message) { return nativeAlert(translateText(String(message))); };
  }
  if (typeof window.prompt === "function") {
    var nativePrompt = window.prompt.bind(window);
    window.prompt = function (message, defaultValue) {
      var localizedMessage = translateText(String(message));
      var localizedDefault = (defaultValue === "controlMaster" || defaultValue === "routingMaster")
        ? "کاربر"
        : defaultValue;
      return nativePrompt(localizedMessage, localizedDefault);
    };
  }

  // Canvas labels (time, detector readings, speed limits) are drawn by the
  // original renderer, so translate at the drawing boundary without changing
  // simulation logic or numeric values.
  if (window.CanvasRenderingContext2D) {
    var canvasPrototype = CanvasRenderingContext2D.prototype;
    var originalFillText = canvasPrototype.fillText;
    canvasPrototype.fillText = function (text, x, y, maxWidth) {
      var localized = translateCanvasText(text);
      var priorDirection = this.direction;
      var hasPersian = /[\u0600-\u06ff\u0750-\u077f\u08a0-\u08ff]/.test(localized);
      if (hasPersian) this.direction = "rtl";
      try {
        if (arguments.length > 3) return originalFillText.call(this, localized, x, y, maxWidth);
        return originalFillText.call(this, localized, x, y);
      } finally {
        if (hasPersian) this.direction = priorDirection || "inherit";
      }
    };
    var fontDescriptor = Object.getOwnPropertyDescriptor(canvasPrototype, "font");
    if (fontDescriptor && fontDescriptor.get && fontDescriptor.set && fontDescriptor.configurable) {
      Object.defineProperty(canvasPrototype, "font", {
        configurable: true,
        enumerable: fontDescriptor.enumerable,
        get: function () { return fontDescriptor.get.call(this); },
        set: function (value) {
          // Ask for an Arabic-capable local font first; keep the original size/style.
          fontDescriptor.set.call(this, String(value).replace(/\bArial\b/g, 'Tahoma, "Noto Naskh Arabic", Arial, sans-serif'));
        }
      });
    }
  }

  // Replace the English help-page rotation with Persian help documents.
  window.showInfo = function () {
    var target = document.getElementById("infotext");
    if (!target) return;
    var scenarioFiles = {
      OnRamp: "info/info_OnRamp_fa.html",
      Ring: "info/info_Ring_fa.html",
      OffRamp: "info/info_OffRamp_fa.html",
      RoadWorks: "info/info_RoadWorks_fa.html",
      Uphill: "info/info_Uphill_fa.html",
      Deviation: "info/info_Deviation_fa.html",
      Roundabout: "info/info_Roundabout_fa.html",
      Intersection: "info/info_Intersection_fa.html"
    };
    var files = [
      "info/info_gui_fa.html",
      scenarioFiles[window.scenarioString] || "info/info_OnRamp_fa.html",
      "info/info_IDM_fa.html",
      "info/info_MOBIL_fa.html",
      "info/info_BC_fa.html",
      "info/info_Numerics_fa.html"
    ];
    var level = Number(window.infoLevel || 0) % files.length;
    if (window.jQuery) {
      window.jQuery(target).load(files[level]);
    } else {
      fetch(files[level]).then(function (response) { return response.text(); })
        .then(function (html) { target.innerHTML = html; })
        .catch(function () { target.textContent = "راهنما بارگذاری نشد؛ صفحه را دوباره بارگذاری کنید."; });
    }
    window.infoLevel = (level + 1) % files.length;
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installDomLocalization, { once: true });
  } else {
    installDomLocalization();
  }
})();
