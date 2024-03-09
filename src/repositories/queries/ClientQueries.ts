import { IClientQueries } from '../IClientQueries';
import { Client } from '../../entities/Client';

import { QueryTypes } from 'sequelize';
import { sequelize } from '../../repositories/sequelize/models';

require('dotenv').config();

export class ClientQueries implements IClientQueries
{
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
      const query = `INSERT INTO public."Clients" ("id", "name", "email", "phone") VALUES (:id, :name, :email, :phone)`;
  
      const { ID, name, email, phone } = client;
  
      await sequelize.query(query,
      {
        replacements: { id: ID, name, email, phone },
        type: QueryTypes.INSERT
      });
    }
    catch (error)
    {
      throw error;
    }
  }

  select = (column: string, value: string) => `SELECT * FROM public."Clients" WHERE "${column}" = :${value})`;
}