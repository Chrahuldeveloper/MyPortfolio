class RateLimiter {
  private requests: Map<string, { count: number; startTime: number }>;

  constructor() {
    this.requests = new Map();
  }

  limiter(userKey: string): boolean {
    if (!this.requests.has(userKey)) {
      this.requests.set(userKey, { count: 1, startTime: Date.now() });
      return true;
    }

    const currentTime = Date.now();
    const userTime = this.requests.get(userKey)?.startTime!;
    const userReqCount = this.requests.get(userKey)?.count!;
    const windowTimer = 1 * 60 * 1000;
    if (
      this.requests.has(userKey) &&
      currentTime - userTime < windowTimer &&
      userReqCount! < 5
    ) {
      this.requests.set(userKey, {
        count: userReqCount + 1,
        startTime: userTime,
      });
      return true;
    }

    if (this.requests.has(userKey) && currentTime - userTime >= windowTimer) {
      this.requests.delete(userKey);
      this.requests.set(userKey, { count: 1, startTime: Date.now() });
      return true;
    }

    return false;
  }
}

const rateLimiter = new RateLimiter();
export default rateLimiter;
