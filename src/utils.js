module.exports = {
  getPagination(page = 1, size = 15) {
    const limit = size ? +size : 3
    const offset = page && page > 1 ? page * limit : 0
    return { limit, offset }
  },
  getPagingData(response, page = 1, limit = 15) {
    return {
      current_page: page ? +page : 0,
      data: response.rows,
      per_page: limit,
      total: response.count,
      lastPage: Math.ceil(response.count / limit),
    }
  },
}
