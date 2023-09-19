const express = require("express");

const router = express.Router();

const ServiceProvisionController = require("../controllers/ServiceProvisionController");
const { authentication } = require("../middleware/authentication");

router.get(
  "/getall",
  authentication,
  ServiceProvisionController.getAllServices
);
router.get(
  "/getbyid/:id",
  authentication,
  ServiceProvisionController.getServiceById
);
router.get(
  "/getbyname/:name",
  authentication,
  ServiceProvisionController.getServiceByName
);

router.post(
  "/create",
  authentication,
  ServiceProvisionController.createService
);

router.put(
  "/update/:id",
  authentication,
  ServiceProvisionController.updateService
);

router.delete(
  "/delete/:id",
  authentication,
  ServiceProvisionController.deleteService
);

module.exports = router;
