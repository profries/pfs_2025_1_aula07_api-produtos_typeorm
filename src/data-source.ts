import { DataSource } from "typeorm";
import { Categoria } from "./model/Categoria";
import { Produto } from "./model/Produto";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "api_crud_produtos",
    synchronize: true,
    logging: true,
    // dropSchema: true, //adicionar se quiser limpar o banco
    entities: [Produto, Categoria],
    subscribers: [],
    migrations: [],
})
