const User = require("../model/user");

// Get all users
const getUsers = async (request, response) => {
  try {
    const users = await User.find();
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// Save data of the user in database
const addUser = async (request, response) => {
  const user = request.body;
  console.log("inside");

  const newUser = new User(user);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// Get a user by id
const getUserById = async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// Save edited user in database
const editUser = async (request, response) => {
  const user = request.body;

  const editUser = new User(user);

  try {
    await User.updateOne(
      { _id: request.params.id },
      editUser
    );

    response.status(201).json(editUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// Delete user from database
const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });

    response.status(201).json("User deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  addUser,
  getUserById,
  editUser,
  deleteUser,
};
