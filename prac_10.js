 /* Q.10] Write program using Switch-case statement for days of months.  */
let ch = 'y', day;
while (ch == 'y') {
  let day = prompt("\nEnter a no for day of month:");
  day = Number.parseInt(day);
  switch (day) {
    case 1:
      console.log("\n It's monday.");
      break;
    case 2:
      console.log("\n It's tuesday.");
      break;
    case 3:
      console.log("\n It's wednesday.");
      break;
    case 4:
      console.log("\n It's thursday.");
      break;
    case 5:
      console.log("\n It's friday.");
      break;
    case 6:
      console.log("\n It's saturday");
      break;
    case 7:
      console.log("\n It's sunday.");
      break;
}
ch = prompt("\n Do you want to continue? m/n = ");
}