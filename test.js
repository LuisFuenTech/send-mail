var leds = [
  { id: 1, name: "led1", isOn: false },
  { id: 2, name: "led2", isOn: false },
  { id: 3, name: "led3", isOn: false }
];

console.log(leds);

leds.map(led => {
  if (led["id"] == 3) led.isOn = true;
});

console.log(leds);
