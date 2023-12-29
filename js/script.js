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
      // style: {
      //   fontFamily: "Inter",
      //   fontSize: "24px",
      //   color: "black",
      //   fontWeight: "700",
      //   lineHeight: "29px",
      // },
      enabled:false,
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
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 768, // Apply the following options if screen width <= 768px
        },
        chartOptions: {
          chart: {
            marginLeft: 120, // Adjust margins to accommodate for labels
            marginRight: 120,
            width: null,
            height: null,
          },
          xAxis: {
            scrollbar: {
              enabled: true, // Enable scrollbar on X-axis
            },
            labels: {
              step: 1, // Display all labels to prevent overcrowding
            },
          },
        },
      },
    ],
  },
});

// -----------------
window.addEventListener("resize", () => {
  const chart = Highcharts.charts[0]; // Get the chart instance
  const chartContainer = document.querySelector(".chart-container");

  if (chart && chartContainer) {
    const chartWidth = chartContainer.offsetWidth; // Get the container width
    chart.setSize(chartWidth, null); // Set the chart width
  }
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

const btn = document.getElementById("changeSrcBtn");
const menu = document.querySelector(".menu-container");
const body = document.body;

btn.addEventListener("click", function () {
  menu.classList.toggle("active");
  body.classList.toggle("menu-open");

  if (body.classList.contains("menu-open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

// sideber
window.addEventListener("resize", function () {
  const sidebar = document.querySelector(".sidebar");
  const container = document.querySelector(".container");

  if (window.innerWidth >= 1800) {
    const containerRect = container.getBoundingClientRect();
    const sidebarWidth = sidebar.offsetWidth;

    sidebar.style.left = containerRect.left - sidebarWidth + "px";
    sidebar.style.marginRight = "80px"; 
  } else {
    sidebar.style.left = "0";
    sidebar.style.marginRight = "0";
  }
});

window.addEventListener("load", function () {
  window.dispatchEvent(new Event("resize"));
});

