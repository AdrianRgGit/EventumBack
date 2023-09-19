const { Op } = require("sequelize");
const ServiceCompany = require("../models/Service_company");

const ServiceCompanyController = {
  async getAllServiceCompanies(req, res) {
    try {
      const getAllServiceCompanies = await ServiceCompany.findAll();
      res.status(200).send(getAllServiceCompanies);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Hay un problema con el servidor", error });
    }
  },

  async getServiceCompanyById(req, res) {
    try {
      const serviceCompany = await ServiceCompany.findByPk(req.params.id);

      if (!serviceCompany) {
        res
          .status(404)
          .send({ message: "Compañía de servicios no encontrada" });
      }

      res.status(200).send(serviceCompany);
    } catch (error) {
      res.status(500).send({
        message: "Hubo un problema con el servidor",
        error,
      });
    }
  },

  async getAllServiceCompaniesByName(req, res) {
    try {
      const serviceCompanies = await ServiceCompany.findAll({
        where: { name: { [Op.like]: `%${req.params.name}%` } },
      });

      if (!serviceCompanies) {
        res
          .status(404)
          .send({ message: "Compañía de servicios no encontrada" });
      }

      res.status(200).send(serviceCompanies);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Hubo un problema con el servidor",
        error,
      });
    }
  },

  async createServiceCompany(req, res) {
    try {
      const serviceCompany = await ServiceCompany.create(...req.body);
      res.status(201).send({
        message: "Compañía de servicios registrada con éxito",
        serviceCompany,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Hubo un problema con el servidor", error });
    }
  },

  async updateServiceCompany(req, res) {
    try {
      const serviceCompanyId = req.params.id;
      const serviceCompanyUpdated = req.body;

      await ServiceCompany.update(serviceCompanyUpdated, {
        where: { id: serviceCompanyId },
      });

      if (!serviceCompanyId) {
        res
          .status(404)
          .send({ message: "Compañía de servicios no encontrada" });
      }

      res
        .status(200)
        .send(
          { message: "Compañía de servicios actualizada con éxito" },
          serviceCompanyUpdated
        );
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Hubo un problema con el servidor", error });
    }
  },

  async deleteServiceCompany(req, res) {
    try {
      const serviceCompany = await ServiceCompany.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (!serviceCompany) {
        res
          .status(404)
          .send({ message: "Compañía de servicios no encontrada" });
      }

      res
        .status(204)
        .send({ message: "Compañía de servicios eliminada con éxito" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Hubo un problema con el servidor", error });
    }
  },
};

module.exports = ServiceCompanyController;
