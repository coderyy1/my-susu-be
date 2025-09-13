# 🧱 Prisma Development & Deployment Workflow Guide

### 👥 For teams using Git and Prisma ORM

---

## ✅ 1. Initial Setup (First Developer Only)

1. Create the initial schema in `schema.prisma`
2. Create the first migration:

```bash
npx prisma migrate dev --name init
```

This will:

- Create the database (if it doesn't exist)
- Generate the SQL migration
- Apply it to the DB
- Generate Prisma Client

3. Commit the following to Git:
   - `schema.prisma`
   - `prisma/migrations/`
   - `.env.example` (without credentials)

  ```bash
  NODE_ENV=development
  DB_URL="mysql://user:password@host:port/dbname"
  ```
---

## 🔁 2. Making Changes During Development

### Step-by-step:

1. Modify your Prisma schema (`schema.prisma`)
2. Create a new migration:

```bash
npx prisma migrate dev --name <change-name>
```

> Example:
>
> ```bash
> npx prisma migrate dev --name add-user-profile
> ```

3. Test the changes locally

4. Commit your changes:
   - Updated `schema.prisma`
   - New `prisma/migrations/` folder

---

## 📦 3. Deploying to Another Environment (e.g. Staging or Production)

1. Pull latest code

2. Make sure `.env` contains the correct `DATABASE_URL`

3. Create the database manually (if it doesn't exist):

   ```bash
   mysql -u root -p -e "CREATE DATABASE your_db;"
   ```

4. Apply all migrations:

```bash
npx prisma migrate deploy
```

This will run all `migration.sql` files **in order**.

5. (Optional) Regenerate Prisma Client:

```bash
npx prisma generate
```

---

## 🧪 4. Temporary Sync for Fast Testing (No Migration)

> ⚠️ Not for production or team environments!

```bash
npx prisma db push
```

- Syncs schema directly to DB (without `migrations/`)
- Use for prototypes or local testing only

---

## 🛡 5. Best Practices

| Practice          | Recommendation                                         |
| ----------------- | ------------------------------------------------------ |
| ✔ Version control | Always commit `schema.prisma` and `prisma/migrations/` |
| ❌ Avoid           | Manual DB changes outside Prisma                       |
| 🔒 Secrets         | Store `DATABASE_URL` only in `.env` (never commit)     |
| 🔄 Consistency     | Always use `migrate dev` to evolve the schema          |
| 🚀 Deployment      | Use `migrate deploy` in CI/CD or staging/prod          |