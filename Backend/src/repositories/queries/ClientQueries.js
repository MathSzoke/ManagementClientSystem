import { QueryTypes } from "sequelize";
import { db } from "../sequelize/models/index.js";

export class ClientQueries
{
  async getAllClients() {
    try {
      const query = `SELECT * FROM public."Clients"`

      const clients = await db.sequelize.query(query, {
        type: QueryTypes.SELECT
      })

      return clients
    } catch (error) {
      throw error
    }
  }

  async getClientByID(id) {
    try {
      const clients = await db.sequelize.query(this.select("id", id), {
        replacements: { id },
        type: QueryTypes.SELECT
      })
      return clients
    } catch (error) {
      throw error
    }
  }

  async getClientByName(name) {
    try {
      const clients = await db.sequelize.query(this.select("name", name), {
        replacements: { name },
        type: QueryTypes.SELECT
      })
      return clients
    } catch (error) {
      throw error
    }
  }

  async getClientByEmail(email) {
    const clients = await db.sequelize.query(this.select("email", email), {
      replacements: { email },
      type: QueryTypes.SELECT
    })

    return clients.length > 0 ? clients[0] : null
  }

  async getClientByPhone(phone) {
    try {
      const clients = await db.sequelize.query(this.select("phone", phone), {
        replacements: { phone },
        type: QueryTypes.SELECT
      })

      return clients
    } catch (error) {
      throw error
    }
  }

  async addClient(client) {
    try {
      const query = `
          INSERT INTO public."Clients" ("id", "name", "email", "phone", "coordinateX", "coordinateY") VALUES ($1, $2, $3, $4, $5, $6)
      `

      const values = [
        client.ID,
        client.name,
        client.email,
        client.phone,
        client.coordinateX,
        client.coordinateY
      ]

      console.log("values: " + values)
      await db.sequelize.query(query, {
        bind: values,
        type: QueryTypes.INSERT
      })
    } catch (error) {
      throw error
    }
  }

  select = (column, value) =>
    `SELECT * FROM public."Clients" WHERE "${column}" LIKE '${value}'`
}