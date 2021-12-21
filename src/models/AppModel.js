const { Model } = require("sequelize")
const { getPagination, getPagingData } = require("../utils")

class AppModel extends Model {
  static async paginate(
    page = 1,
    where = null,
    attributes = null,
    include = null
  ) {
    const { limit, offset } = getPagination(page)
    const data = await this.findAndCountAll({
      where,
      attributes,
      include,
      limit,
      offset,
    })
    return getPagingData(data, page, limit)
  }
}

module.exports = AppModel
