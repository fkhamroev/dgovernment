const years = ["2010", "2012", "2014", "2016", "2018", "2020", "2022"];
const values = [87, 91, 100, 80, 81, 87, 69];

Highcharts.chart("myChart", {
  chart: {
    type: "line",
    backgroundColor: "transparent",
    marginLeft: 80,
    marginRight: 80,
    width: null,
    height: null,
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: years,
    labels: {
      style: {
        fontFamily: "Inter",

        fontSize: "24px",
        color: "black",
        fontWeight: "700",
        lineHeight: "29px",
      },
    },
    gridLineWidth: 0,
    lineColor: "transparent",
  },
  yAxis: {
    title: {
      text: "",
    },
    labels: {
      style: {
        fontFamily: "Inter",

        fontSize: "24px",
        color: "black",
        fontWeight: "700",
        lineHeight: "29px",
      },
    },
    gridLineWidth: 0,
    lineColor: "transparent",
    overflow: "scroll",
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: `{y} <span>место</span>`,
        style: {
          fontFamily: "Inter",
          fontSize: "20px",
          fontWeight: "400",
          color: "#808181",
          textOutline: "none",
        },
      },
      enableMouseTracking: false,
    },
  },
  series: [
    {
      name: "",
      data: values,
      marker: {
        enabled: true,
        symbol: "circle",
        radius: 4,
      },
      lineWidth: 2,
      color: "rgba(0, 148, 203, 1)",
      states: {
        hover: {
          lineWidth: 3,
        },
      },
    },
  ],
});

// -----------------
window.addEventListener("resize", function () {
  const sidebar = document.querySelector(".sidebar");
  const container = document.querySelector(".container");

  if (window.innerWidth >= 1800) {
    const containerRect = container.getBoundingClientRect();
    sidebar.style.left = containerRect.left - 140 + "px";
    sidebar.style.marginRight = "80px";
  } else {
    sidebar.style.left = "0";
    sidebar.style.marginRight = "0";
  }
});

window.addEventListener("load", function () {
  window.dispatchEvent(new Event("resize"));
});

// ----------------- menu
const changeSrcBtn = document.getElementById("changeSrcBtn");
const menuContainer = document.querySelector(".menu-container");

changeSrcBtn.addEventListener("click", () => {
  const img = changeSrcBtn.querySelector("img");
  if (img.src.includes("Shape.png")) {
    img.src = "./img/close.png";
    menuContainer.style.display = "block";
  } else {
    img.src = "./img/Shape.png";
    menuContainer.style.display = "none";
  }
});



const btn = document.getElementById('changeSrcBtn');
const menu = document.querySelector('.menu-container');
const body = document.body;

btn.addEventListener('click', function() {
  menu.classList.toggle('active');
  body.classList.toggle('menu-open');

  if (body.classList.contains('menu-open')) {
    // Disable scrolling
    body.style.overflow = 'hidden';
  } else {
    // Enable scrolling
    body.style.overflow = 'auto';
  }
});
