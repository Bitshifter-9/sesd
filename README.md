# Contacts App Backend

A full-featured CRUD backend for contacts management built with TypeScript, Express, and MongoDB using clean OOP architecture.

## Features

- ✅ Complete CRUD operations for contacts
- ✅ User authentication with JWT
- ✅ Search, filter, sort, and pagination
- ✅ Tag management
- ✅ Favorite contacts
- ✅ Input validation
- ✅ Clean error handling
- ✅ OOP architecture (Controllers → Services → Repositories)

## Project Structure

```
src/
├── controllers/     # Handle HTTP requests/responses
├── services/        # Business logic
├── repositories/    # Database operations
├── models/          # Mongoose schemas
├── routes/          # API routes
├── middlewares/     # Auth, validation, error handling
├── validators/      # Joi validation schemas
├── interfaces/      # TypeScript interfaces
├── utils/           # Helper functions and errors
├── app.ts          # Express app setup
└── server.ts       # Entry point
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update MongoDB URI and JWT secret in `.env`

4. Run development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
npm start
```

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `GET /auth/profile` - Get user profile (protected)

### Contacts
- `POST /contacts` - Create contact (protected)
- `GET /contacts` - Get all contacts with filters (protected)
- `GET /contacts/:id` - Get single contact (protected)
- `PUT /contacts/:id` - Update contact (protected)
- `DELETE /contacts/:id` - Delete contact (protected)
- `POST /contacts/bulk-delete` - Delete multiple contacts (protected)

### Extra Features
- `GET /contacts/favorites` - Get favorite contacts
- `PATCH /contacts/:id/favorite` - Toggle favorite
- `POST /contacts/:id/tags` - Add tag to contact
- `DELETE /contacts/:id/tags` - Remove tag from contact
- `GET /contacts/stats` - Get contact statistics
- `GET /contacts/tags` - Get all tags
- `GET /contacts/companies` - Get all companies

### Query Parameters (for GET /contacts)
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `search` - Search in name, email, phone, company
- `isFavorite` - Filter by favorite status
- `tags` - Filter by tags
- `company` - Filter by company
- `sortBy` - Sort field (firstName, lastName, email, company, createdAt)
- `sortOrder` - Sort order (asc, desc)

## Technologies

- **TypeScript** - Type safety
- **Express** - Web framework
- **MongoDB/Mongoose** - Database
- **JWT** - Authentication
- **Joi** - Validation
- **Bcrypt** - Password hashing
# sesd
