const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const UserModel = require("../models/UserModel");

module.exports = {
  async index(req, res) {
    try {
      const { page, title } = req.query;
      const attributes = { exclude: ["password"] };
      let where = {};
      if (title) {
        where = {
          [Op.or]: [
            {
              name: {
                [Op.like]: `%${title}%`,
              },
            },
            {
              username: {
                [Op.like]: `%${title}%`,
              },
            },
          ],
        };
      }
      const users = await UserModel.paginate(page, where, attributes, null);
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.findByPk(id, {
        attributes: { exclude: ["password"] },
      });
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async store(req, res) {
    try {
      const params = req.body;
      const user = await UserModel.create({ ...params, password: params.password });
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const params = req.body;
      if (params.password) {
        const hash = await bcrypt.hash(params.password, 10);
        params.password = hash;
      }
      await UserModel.update(params, {
        where: { id },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      await UserModel.destroy({ where: { id } });
      return res.status(200).json();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
