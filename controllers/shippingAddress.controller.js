// Import the shipping address model
const ShippingAddressModel = require("../models/address.model");

// Function to add a shipping address to the database
exports.addShippingAddress = async (req, res) => {
  // Create a new address object with the data sent in the request
  const addressObj = {
    name: req.body.name,
    contactNumber: req.body.contactNumber,
    street: req.body.street,
    landmark: req.body.landmark,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    eshopUser: req.id, // Add the user ID to the address object
  };

  try {
    // Add the address object to the database
    const shippingAddressAdded = await ShippingAddressModel.create(addressObj);

    // Find the added address by ID and populate it with the user object
    const postResponse = await ShippingAddressModel.findById(
      shippingAddressAdded.id
    )
      .populate("eshopUser")
      .exec();

    res.status(200).send(postResponse);
  } catch (err) {
    console.log(
      "Some error while adding the Shipping Address in db",
      err.message
    );
    res.status(500).send({
      message: "Some internal error while inserting the Shipping Address",
    });
  }
};
