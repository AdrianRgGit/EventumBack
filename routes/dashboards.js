const express = require("express");
const router = express.Router();
const DashboardController = require("../controllers/DashboardController");
const { authentication, isAdmin } = require("../middleware/authentication");

router.get("/event/:id", DashboardController.getEventById);
router.get("/event/:id/getTimes", DashboardController.getTimes);
router.get('/event/:id/getType', DashboardController.getType);
router.get('/event/:id/getAttendees', DashboardController.getAttendees);

router.get("/event/:id/users/getCountry", DashboardController.getCountry);

module.exports = router;
