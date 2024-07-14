function sleep(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    // Busy-wait loop
  }
}

while (true) 
{
  console.log("Yes");
  sleep(1000);
}
