require("dotenv").config();
import "reflect-metadata";

import express from "express";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { GreetingResolver } from "./resolver/greeting";

const main = async () => {
    await createConnection({
        type: "postgres",
        database: "phuocnhat",
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        logging: true,
        synchronize: true,
        entities: [User],
    });
    const app = express();
    const httpServer = createServer(app);
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            validate: false,
            resolvers: [GreetingResolver],
        }),
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageGraphQLPlayground,
        ],
    });
    await apolloServer.start();

    apolloServer.applyMiddleware({ app });
    const PORT = process.env.PORT || 4000;
    await new Promise((resolve) =>
        httpServer.listen({ port: PORT }, resolve as () => void)
    );
    // Typically, http://localhost:4000/graphql
    console.log(
        `SERVER STARTED ON PORT ${PORT}. GRAPHQL ENDPOINT ON http://localhost:${PORT}${apolloServer.graphqlPath}`
    );
};
main().catch((error) => console.log("ERROR STARTING SERVER: ", error));
