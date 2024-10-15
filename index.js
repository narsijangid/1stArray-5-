let orderQueue = [
    "Order1: Salmankhan",
    "Order2: bobydiol",
    "Order3: modi",
    "Order4: elonmusk",
    "Order5: narsi"
  ];
  
  
  let newOrders = ["Order6: golu", "Order7: molu", "Order8: motu"];
  for (let i = newOrders.length - 1; i >= 0; i--) {
    orderQueue.unshift(newOrders[i]); 
  }
  
  
  orderQueue.pop(); 
  orderQueue.pop(); 
  
  
  for (let i = 0; i < orderQueue.length; i++) {
    let orderDetails = orderQueue[i].split(": ");
    let orderID = orderDetails[0];
    let customerName = orderDetails[1];
    console.log(`Processing ${orderID} for ${customerName}`);
  }
  
  
  console.log("Final Queue:", orderQueue);
  
  
  let longestName = "";
  for (let i = 0; i < orderQueue.length; i++) {
    let customerName = orderQueue[i].split(": ")[1];
    if (customerName.length > longestName.length) {
      longestName = customerName;
    }
  }
  console.log(`Customer with the longest name is: ${longestName}`);
  