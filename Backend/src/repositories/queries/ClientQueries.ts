import { IClientQueries } from '../IClientQueries';
import { Client } from '../../entities/Client';

import { QueryTypes } from 'sequelize';
import { sequelize } from '../../repositories/sequelize/models';

require('dotenv').config();

export class ClientQueries implements IClientQueries
{
  async getAllClients(): Promise<Client[]>
  {
    try
    {
      const query = `SELECT * FROM public."Clients"`

      const clients = await sequelize.query<Client>(query, {
        type: QueryTypes.SELECT
      });
      return clients;
    }
    catch (error)
    {
      throw error;
    }
  }

  async getClientByID(id: string): Promise<Client[]>
  {
    try
    {
      const clients = await sequelize.query<Client>(this.select("id", id), {
        replacements: { id },
        type: QueryTypes.SELECT
      });
      return clients;
    }
    catch (error)
    {
      throw error;
    }
  }

  async getClientByName(name: string): Promise<Client[]>
  {
    try
    {
      const clients = await sequelize.query<Client>(this.select("name", name), {
        replacements: { name },
        type: QueryTypes.SELECT
      });
      return clients;
    }
    catch (error)
    {
      throw error;
    }
  }

  async getClientByEmail(email: string)
  {
    const clients = await sequelize.query<Client>(this.select("email", email),
      {
        replacements: { email },
        type: QueryTypes.SELECT
      });
  
      return clients.length > 0 ? clients[0] : null;
  }

  async getClientByPhone(phone: string): Promise<Client[]>
  {
    try
    {
      const clients = await sequelize.query<Client>(this.select("phone", phone),
      {
        replacements: { phone },
        type: QueryTypes.SELECT
      });
  
      return clients;
    }
    catch (error)
    {
      throw error;
    }
  }

  async addClient(client: Client): Promise<void>
  {
    try
    {
      const query = `
          INSERT INTO public."Clients" ("id", "name", "email", "phone", "coordinateX", "coordinateY") VALUES ($1, $2, $3, $4, $5, $6)
      `;

      const values = [client.ID, client.name, client.email, client.phone, client.coordinateX, client.coordinateY];

      console.log("values: " + values);
      await sequelize.query(query,
      {
        bind: values,
        type: QueryTypes.INSERT
      });
    }
    catch (error)
    {
      throw error;
    }
  }

  select = (column: string, value: string) => `SELECT * FROM public."Clients" WHERE "${column}" = '${value}'`;
}