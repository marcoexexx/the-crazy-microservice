import { Queue, QueueOptions } from "bullmq";

const opts: QueueOptions = {
  connection: {
    host: "crazy-ms-redis",
    port: 6379,
  },
};

export const productQueue = new Queue("product", opts);
