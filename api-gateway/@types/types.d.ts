namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "production" | "development" | "test";
    SECRET_KEY: string;
  }
}

namespace Express {
  export interface Request {
    userId: string | undefined;
    useragent: {
      platform: string;
      browser: string;
      version: string;
    };
  }

  export interface Response {
  }
}
