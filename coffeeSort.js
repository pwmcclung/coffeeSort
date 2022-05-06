function search(budget, prices) {
   
   let stores = prices.filter(price => price <= budget)
  
   let stores2 = stores.sort((a, b) => a-b)
   
   return stores2.join()

}
