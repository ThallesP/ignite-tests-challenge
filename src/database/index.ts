import { createConnection, getConnectionOptions } from "typeorm";

(async () => {
  const options = await getConnectionOptions();

  Object.assign(options, {
    database:
      process.env.NODE_ENV === "test" ? "fin_api_tests" : options.database,
  });

  await createConnection(options);
})();
