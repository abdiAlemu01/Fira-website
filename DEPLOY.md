# 🚀 Deploy to Render.com

## The Issue:
Your backend shows `Cannot GET /` because **the deployed version on Render is outdated**. You need to push your latest changes.

## ✅ Changes Made (Ready to Deploy):
- Health check endpoints moved before Arcjet middleware
- Better error handling
- Dynamic CORS configuration
- All fixes tested locally ✅

---

## 📋 Deployment Steps:

### Step 1: Commit Your Changes

```bash
# Check what's changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Fix: Add health checks and improve CORS handling"

# Push to GitHub (or your git provider)
git push origin main
```

> **Note:** Replace `main` with your branch name if different (could be `master`)

### Step 2: Configure Render.com Backend

1. Go to https://dashboard.render.com
2. Click on your backend service (`fira-website`)
3. Go to **Settings** tab

#### ⚠️ Critical: Set Root Directory
Scroll down to **Root Directory** and set it to:
```
Backend
```

#### Set Build & Start Commands
- **Build Command:** `npm install`
- **Start Command:** `npm start`

4. Go to **Environment** tab
5. Click **Add Environment Variable** and add these:

```bash
PORT=10000
NODE_ENV=production
FRONTEND_URL=https://fira-6ihp.onrender.com

# Database
PGHOST=ep-silent-firefly-atpgctmc-pooler.c-9.us-east-1.aws.neon.tech
PGDATABASE=neondb
PGUSER=neondb_owner
PGPASSWORD=npg_0OQnPCkhZl1q
PGSSLMODE=require

# Admin
ADMIN_NAME=System Admin
ADMIN_PHONE=+251900000000
ADMIN_USERNAME=system-admin
ADMIN_PASSWORD=admin123

# Security
ARCJET_KEY=ajkey_01kattdms9f1grj021hspbb90n
ARCJET_ENV=production

# Cloudinary
CLOUDINARY_CLOUD_NAME=dmxakt20n
CLOUDINARY_API_KEY=667162699549666
CLOUDINARY_API_SECRET=pOS8agizNRPnfiO2Gu1BsXQvw3c
```

6. Click **Save Changes**

### Step 3: Deploy

Option A: **Auto Deploy** (if connected to GitHub)
- Render will automatically deploy when you push

Option B: **Manual Deploy**
- Click **Manual Deploy** → **Deploy latest commit**

### Step 4: Watch the Logs

1. Go to **Logs** tab
2. Wait for deployment to complete
3. Look for these success messages:
```
Server is running on port 10000
Allowed CORS origins: [...]
Database initialized successfully
```

### Step 5: Test Backend

Visit: **https://fira-website.onrender.com/**

You should see:
```json
{
  "status": "ok",
  "message": "Fira API is running",
  "timestamp": "2026-06-25T...",
  "environment": "production"
}
```

✅ If you see this, your backend is working!

### Step 6: Configure Frontend

1. Go to your frontend service (`fira-6ihp`)
2. Go to **Environment** tab
3. Add:
```
VITE_API_URL=https://fira-website.onrender.com
```
4. **Save Changes** (will trigger redeploy)

### Step 7: Test Your App

Visit: **https://fira-6ihp.onrender.com/**

- Products should load ✅
- No CORS errors ✅
- Authentication works ✅

---

## 🐛 Troubleshooting:

### "Cannot GET /" persists
- ✅ Check Root Directory is set to `Backend`
- ✅ Verify latest code is pushed to GitHub
- ✅ Clear Render cache: Manual Deploy → Clear build cache & deploy

### "Build failed"
- Check logs for specific error
- Verify `package.json` exists in `Backend` folder
- Ensure all dependencies are in `package.json`

### "Database connection failed"
- Verify all `PG*` environment variables are correct
- Check your Neon database is active
- Test connection string in Neon dashboard

### Still getting CORS errors
- Verify `FRONTEND_URL` is set correctly
- Check logs to see "Allowed CORS origins: [...]"
- Make sure both services are redeployed

---

## 📝 Quick Checklist:

Backend:
- [ ] Code committed and pushed to GitHub
- [ ] Root Directory = `Backend`
- [ ] All environment variables added
- [ ] Service deployed successfully
- [ ] Health check returns JSON (not "Cannot GET /")

Frontend:
- [ ] `VITE_API_URL` environment variable set
- [ ] Service deployed successfully
- [ ] No CORS errors in browser console
- [ ] Products load correctly

---

## 🎯 Expected Timeline:

- Git push: 10 seconds
- Render build: 2-3 minutes
- Total: ~5 minutes

After 5 minutes, your app should be fully working!

---

## Need Help?

Share:
1. What you see at https://fira-website.onrender.com/
2. Screenshot of Render service settings
3. Last 50 lines from deployment logs
