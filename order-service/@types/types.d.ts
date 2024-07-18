namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "production" | "development" | "test";
  }
}

namespace Express {
  export interface Request {
    userId: string | undefined;
  }

  export interface Response {
  }
}
