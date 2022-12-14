/* internal import */
const storeService = require("../services/store.service");

/* insert new store */
exports.insertNewStore = async (req, res, next) => {
  try {
    const result = await storeService.insertNewStore(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "New store insert successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all store */
exports.displayAllStore = async (req, res, next) => {
  try {
    const result = await storeService.displayAllStore();

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      count: result.length,
      description: "Successfully fetch all stores",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific store */
exports.displaySpecificStore = async (req, res, next) => {
  try {
    const result = await storeService.displaySpecificStore(req.params);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetch specific store",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific store */
exports.updateSpecificStore = async (req, res, next) => {
  try {
    const result = await storeService.updateSpecificStore(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully update specific store",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific store */
exports.removeSpecificStore = async (req, res, next) => {
  try {
    const result = await storeService.removeSpecificStore(req.params);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully remove specific store",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
