$(document).ready(function () {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    numbers.forEach(function (number) {
      $("#number-" + number).click(function () {
        let currentValue = $("#text_input").val();
        $("#text_input").val(currentValue + number);
      });
  
      // document
      //   .getElementById("number-" + number)
      //   .addEventListener("click", function () {
      //     let currentValue = document.getElementById("text_input").value;
      //     document.getElementById("text_input").value = currentValue + number;
      //   });
    });
  
    $("#c_id_button").click(function () {
      $("#text_input").val("");
    });
  
    // document.getElementById("c_id_button").addEventListener("click", function () {
    //   document.getElementById("text_input").value = "";
    // });
  
    let savedNumber = 0;
    $("#add_button").click(function () {
      let currentValue = $("#text_input").val();
      savedNumber = parseInt(currentValue) + parseInt(savedNumber);
      $("#text_input").val("");
    });
  
    $("#equals_button").click(function () {
      let currentValue = $("#text_input").val();
      $("#text_input").val(parseInt(currentValue) + parseInt(savedNumber));
    });
  
    new Chart(document.getElementById("acquisitions"), {
      type: "line",
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [
          {
            data: [186, 205, 1321, 1516, 2107, 2191, 3133, 3221, 4783, 5478],
            label: "America",
            borderColor: "#3cba9f",
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Chart JS Line Chart Example",
        },
      },
    });
  });
  
  // // add operation
  // let savedNumber = 0;
  // document.getElementById("add_button").addEventListener("click", function () {
  //   let currentValue = document.getElementById("text_input").value;
  //   savedNumber = parseInt(currentValue) + parseInt(savedNumber);
  //   document.getElementById("text_input").value = "";
  // });
  
  // document.getElementById("equals_button").addEventListener("click", function () {
  //   let currentValue = document.getElementById("text_input").value;
  //   document.getElementById("text_input").value =
  //     parseInt(currentValue) + parseInt(savedNumber);
  // });
  
  // multiply operation
  // let savedNumber = 1;
  // document
  //   .getElementById("multiply_button")
  //   .addEventListener("click", function () {
  //     let currentValue = document.getElementById("text_input").value;
  //     savedNumber = parseInt(currentValue) * parseInt(savedNumber);
  //     document.getElementById("text_input").value = "";
  //   });
  
  // document
  //   .getElementById("equals_button")
  //   .addEventListener("click", function () {
  //     let currentValue = document.getElementById("text_input").value;
  //     document.getElementById("text_input").value =
  //       parseInt(currentValue) * parseInt(savedNumber);
  //   });
  