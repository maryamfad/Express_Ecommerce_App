//placing orders using COD Method
const placeOrder = (async = (req, res) => {});

//placing orders using Stripe Method
const placeOrderStripe = (async = (req, res) => {});

//placing orders using Razorpay Method
const placeOrderRazorpay = (async = (req, res) => {});

//All Orders data for Admin Panel
const allOrders = async (req, res) => {};

//User order data for frontend
const userOrders = async (req, res) => {};

//update order status from Admin Panel
const updateStatus = async (req, res) => {};

export {
	placeOrder,
	placeOrderRazorpay,
	placeOrderStripe,
	allOrders,
	userOrders,
	updateStatus,
};
