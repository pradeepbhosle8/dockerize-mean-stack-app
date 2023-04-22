import departmentModel from "../models/departmentModel.js";

export const createDepartmentController = async (req, res) => {
  try {
    const { depcode, depname, location } = req.body;

    // validation
    if (!depcode) {
      return res.send({ message: "Department code is required" });
    }
    if (!depname) {
      return res.send({ message: "Department name is required" });
    }
    if (!location) {
      return res.send({ message: "Location is required" });
    }

    const department = await new departmentModel({
      depcode,
      depname,
      location,
    }).save();
    res.status(200).send({
      success: true,
      message: "Department created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Create Department failed",
      error: error,
    });
  }
};

export const getAllDepartmentController = async (req, res) => {
  try {
    const department = await departmentModel.find({});
    res.status(200).send({
      success: true,
      message: "Department Fetched successfully",
      department: department,
      total: department.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Sorry, Something went wrong getting All department",
      error: error,
    });
  }
};

export const getSingleDepartmentController = async (req, res) => {
  try {
    const department = await departmentModel.findById(req.params.id);
    res.status(200).send({
      success: true,
      message: "Department  fetched successfully",
      department: department,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Sorry, Something went wrong getting Single department",
      error: error,
    });
  }
};

export const updateDepartmentController = async (req, res) => {
  try {
    const { depcode, depname, location } = req.body;
    const { id } = req.params;

    // validation
    if (!depcode) {
      return res.send({ message: "Department code is required" });
    }
    if (!depname) {
      return res.send({ message: "Department name is required" });
    }
    if (!location) {
      return res.send({ message: "Location is required" });
    }

    // save
    const department = await departmentModel.findByIdAndUpdate(id, {
      depcode,
      depname,
      location,
    });

    res.status(200).send({
      success: true,
      message: "Department updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Sorry, Something went wrong updating department",
      error: error,
    });
  }
};

export const deleteDepartmentController = async (req, res) => {
  try {
    await departmentModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Department deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Sorry, Something went wrong deleting department",
      error: error,
    });
  }
};
