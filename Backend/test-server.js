// Quick test script to verify server can start
import dotenv from "dotenv";
dotenv.config();

console.log("🔍 Environment Variables Check:");
console.log("================================");
console.log("PORT:", process.env.PORT || "NOT SET");
console.log("FRONTEND_URL:", process.env.FRONTEND_URL || "NOT SET");
console.log("NODE_ENV:", process.env.NODE_ENV || "NOT SET");
console.log("PGHOST:", process.env.PGHOST ? "✅ SET" : "❌ NOT SET");
console.log("PGDATABASE:", process.env.PGDATABASE ? "✅ SET" : "❌ NOT SET");
console.log("PGUSER:", process.env.PGUSER ? "✅ SET" : "❌ NOT SET");
console.log("PGPASSWORD:", process.env.PGPASSWORD ? "✅ SET" : "❌ NOT SET");
console.log("ARCJET_KEY:", process.env.ARCJET_KEY ? "✅ SET" : "❌ NOT SET");
console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME ? "✅ SET" : "❌ NOT SET");
console.log("================================\n");

// Test database connection
console.log("🔍 Testing Database Connection...");
import { sql } from "./config/db.js";

try {
  const result = await sql`SELECT NOW() as time`;
  console.log("✅ Database connection successful!");
  console.log("   Server time:", result[0].time);
} catch (error) {
  console.error("❌ Database connection failed!");
  console.error("   Error:", error.message);
  process.exit(1);
}

console.log("\n✅ All checks passed! Server should start successfully.");
console.log("   Run: npm start");
