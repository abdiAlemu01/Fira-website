# Render.com Deployment Guide

## 🚨 CRITICAL: Your Backend Service Is Not Running!

The 404 error means your backend at `https://fira-website.onrender.com` is either:
1. Not deployed correctly
2. Crashed on startup
3. Looking in the wrong directory

## Quick Fix Steps:

### Step 1: Check Your Render Dashboard

1. Go to https://dashboard.render.com
2. Find your backend service (`fira-website`)
3. Click on it and check the **Logs** tab
4. Look for errors during startup

### Step 2: Verify Service Settings

Your backend service should have:

**Build Command:**
```
npm install
```

**Start Command:**
```
npm start
```

**Root Directory:** (Important!)
```
Backend
```
☝️ If this is empty or wrong, Render can't find your server.js file!

### Step 3: Set Environment Variables

In your backend service settings, add these environment variables:

```
PORT=3000
FRONTEND_URL=https://fira-6ihp.onrender.com

# Database (Neon PostgreSQL)
PGHOST=ep-silent-firefly-atpgctmc-pooler.c-9.us-east-1.aws.neon.tech
PGDATABASE=neondb
PGUSER=neondb_owner
PGPASSWORD=npg_0OQnPCkhZl1q
PGSSLMODE=require

# Admin User Seeding
ADMIN_NAME=System Admin
ADMIN_PHONE=+251900000000
ADMIN_USERNAME=system-admin
ADMIN_PASSWORD=admin123

# Arcjet Security
ARCJET_KEY=ajkey_01kattdms9f1grj021hspbb90n
ARCJET_ENV=production
NODE_ENV=production

# Cloudinary
CLOUDINARY_CLOUD_NAME=dmxakt20n
CLOUDINARY_API_KEY=667162699549666
CLOUDINARY_API_SECRET=pOS8agizNRPnfiO2Gu1BsXQvw3c
```

### Build Command:
```
npm install
```

### Start Command:
```
npm start
```

---

## Frontend Deployment (https://fira-6ihp.onrender.com)

### Environment Variables to Set on Render:

```
VITE_API_URL=https://fira-website.onrender.com
```

### Build Command:
```
npm install && npm run build
```

### Start Command (Static Site):
```
Serve the dist folder
```

---

## Steps to Fix CORS Issue:

1. **Go to Render Dashboard** → Backend Service (`fira-website`)
2. **Click "Environment"** in the left sidebar
3. **Add all the backend environment variables** listed above
4. **Save Changes** - This will trigger a redeploy

5. **Go to Frontend Service** (`fira-6ihp`)
6. **Click "Environment"** in the left sidebar
7. **Add `VITE_API_URL=https://fira-website.onrender.com`**
8. **Save Changes** - This will rebuild the frontend

9. **Wait for both services to finish deploying** (usually 2-5 minutes)

10. **Test your site** at https://fira-6ihp.onrender.com

---

## Troubleshooting:

### If CORS errors persist:
- Check that FRONTEND_URL is set correctly in backend environment
- Verify both services have redeployed successfully
- Check Render logs for any startup errors

### If 404 errors on frontend routes:
- Ensure you have a `_redirects` or `vercel.json` file for SPA routing
- Or configure Render to serve index.html for all routes

### If database connection fails:
- Verify all PG* environment variables are correct
- Check that PGSSLMODE=require is set
- Ensure your Neon database is running
