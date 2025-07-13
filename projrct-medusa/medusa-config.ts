import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL || "postgres://postgres:password@localhost:5432/medusa",
    redisUrl: process.env.REDIS_URL || "redis://localhost:6379",
    http: {
      // #️⃣ #Change_from_localhost_to_EC2_URLs
      storeCors: process.env.STORE_CORS || "http://your-ec2-public-ip:8000,https://your-domain.com",
      adminCors: process.env.ADMIN_CORS || "http://your-ec2-public-ip:9000,http://your-ec2-public-ip:7001,https://your-admin-domain.com",
      authCors: process.env.AUTH_CORS || "http://your-ec2-public-ip:9000,http://your-ec2-public-ip:7001,https://your-domain.com",
      jwtSecret: process.env.JWT_SECRET || "your-strong-jwt-secret-here",
      cookieSecret: process.env.COOKIE_SECRET || "your-strong-cookie-secret-here",
    }
  },
  modules: [
    {
