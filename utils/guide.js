/************************* CENTRO NEURALGICO (HEROKU) ****************************/

let currentStatus = {
  led1: "apagado",
  led2: "encendido",
  led3: "apagado",
  sensor1: 0,
  sensoe2: 0
};

app.get("/", async (req, res) => {
  res.sendFile(__dirname, "front/index.html");
});

app.get("/api/getStatusFromDatabase", async (req, res) => {
  res.status(200).json(currentStatus);
});

app.post("/api/updateStatus", async (req, res) => {
  currentStatus = req.body.newStatus;
  res.status(200).json({});
});

io.on("connection", socket => {
  socket.on("updateStatus", newStatus => {
    currentStatus = newStatus;
  });
});

/************************* CLIENTE VISUAL ****************************/

let currentStatus = {
  led1: "apagado",
  led2: "encendido",
  led3: "apagado",
  sensor1: 0,
  sensoe2: 0
};

const getCurrentStatus = async () => {
  try {
    let response = await axios.get(
      "https://centroNeuralgico.com/api/getStatusFromDatabase"
    );
    await upadteView(response.data); //mostrar la data en el DOM
  } catch (e) {}
};

Socket.emit("updateStatus", currentStatus);

const updateStatus = async () => {
  try {
    let response = await axios.post(
      "https://centroNeuralgico.com/api/updateStatus",
      currentStatus
    );
  } catch (e) {}
};

setInterval(getCurrentStatus, 500);

/************************* CLIENTE BOARD ****************************/

let currentStatus = {
  led1: "apagado",
  led2: "encendido",
  led3: "apagado",
  sensor1: 0,
  sensoe2: 0
};

const getCurrentStatus = async () => {
  try {
    let response = await axios.get(
      "https://centroNeuralgico.com/api/getStatusFromDatabase"
    );
    await upadteBoard(response.data); //Mostrar resultados en la Placa de Desarrollo
  } catch (e) {}
};

const updateStatus = async () => {
  try {
    let response = await axios.post(
      "https://centroNeuralgico.com/api/updateStatus",
      currentStatus
    );
  } catch (e) {}
};

setInterval(getCurrentStatus, 500);
