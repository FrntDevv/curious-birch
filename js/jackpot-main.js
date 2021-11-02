      $(function() {
          var jackpot_counter = $("#jackpot-counter");
          if (jackpot_counter.length > 0) {

              jackpot_interval = setInterval(function () {
                  var data = jackpot_counter.data();
                  data.currentValue = data.currentValue + data.difference;
                  jackpot_counter.data({currentValue: data.currentValue, difference: data.difference});
                  jackpot_counter.flipCounter('setNumber', data.currentValue / 100);
              }, 1000);

              jackpot_counter.flipCounter({
                  number: (jackpot_counter.data().currentValue / 100),
                  formatNumberOptions: {format: "#,###.0", locale: "us"},
                  dotWidth: 8,
                  dashWidth: 16,
                  commaWidth: 10,
                  spaceWidth: 11
              });
          }
      });