/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function calculateTotalSpentByCategory(transactions) {
	
	function check(ans, category){
		for (let i = 0; i < ans.length; i++) {
			if(ans[i].category==category){
				return ans[i];
			}
		}
		return null;
	}

	let ans = [];
	for (let i = 0; i < transactions.length; i++) {
		const category = transactions[i].category;
		const price = transactions[i].price;
		const obj = check(ans, category);
		
		if (obj!=null) {
			obj.totalSpent += price; 
		}else{
			ans.push({'category':category, 'totalSpent':price});
		}
	}
	return ans;
}


module.exports = calculateTotalSpentByCategory;
