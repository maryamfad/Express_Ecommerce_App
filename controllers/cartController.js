import userModel from "../models/userModel";
// add products to user cart
const addToCart = async (req, res) => {
	const { userId, itemId, size } = req.body;
	try {
		const userData = await userModel.findById(userId);
		const cartData = await userData.cartData;

		if (cartData[itemId]) {
			if (cartData[itemId][size]) {
				cartData[itemId][size] += 1;
			} else {
				cartData[itemId][size] = 1;
			}
		} else {
			cartData[itemId] = {};
			cartData[itemId][size] = 1;
		}

		await userModel.findByIdAndUpdate(userId, { cartData });
		res.json({ success: true, message: "Added TO Cart." });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

// update user cart
const updateCart = async (req, res) => {};

// get user cart data
const getUserCart = async (req, res) => {};

export { addToCart, updateCart, getUserCart };
