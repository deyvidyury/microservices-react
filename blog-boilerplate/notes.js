axios.post('http://localhost:4000/events', event).catch((err) => {
  console.log(err.message);
});
axios.post('http://localhost:4001/events', event).catch((err) => {
  console.log(err.message);
});
axios.post('http://localhost:4002/events', event).catch((err) => {
  console.log(err.message);
});
res.send({ status: 'OK' });





app.listen(4002, async () => {
  console.log("Listening on 4002");
  try {
    const res = await axios.get("http://localhost:4005/events");

    for (let event of res.data) {
      console.log("Processing event:", event.type);

      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error.message);
  }
});