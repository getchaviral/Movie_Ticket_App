# Movie Ticket Reservation System

A full-stack movie ticket booking application built with a modern React frontend and a Node.js/Express backend. The project supports movie browsing, theatre selection, schedule selection, seat booking, checkout, booking confirmation, QR ticket display, and persisted booking state.

## Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Redux Toolkit
- Redux Persist
- Vite

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

## Project Overview

This application simulates a complete movie reservation flow. Users can authenticate, browse movies, view movie details, select a theatre, choose a schedule, select seats, complete checkout, and view booking details with a QR code.

The frontend focuses on a mobile-first UI with a maximum width of 390px, matching the provided Figma screens. The backend provides authentication, movie/theatre APIs, booking APIs, and transaction-based seat allocation for data consistency.

## Features

- Login and signup UI
- JWT-based backend authentication
- Movie listing and movie details pages
- Theatre selection flow
- Schedule and format selection
- Dynamic seat selection
- Maximum seat selection limit
- Booking summary and checkout flow
- QR ticket display
- My Bookings and Past Bookings views
- Redux Toolkit state management
- Redux Persist localStorage persistence
- MongoDB transaction support for booking and seat allocation

## Application Flow

1. User logs in or signs up.
2. User lands on the home page.
3. User selects a movie.
4. User views movie details.
5. User chooses a theatre.
6. User chooses date, format, screen, and showtime.
7. User selects seats.
8. User reviews booking summary.
9. User completes checkout.
10. User receives a success ticket with QR code.
11. User can view tickets in My Bookings.

## Folder Structure

```text
assignment_creative_upaay/
+-- backend/
|   +-- src/
|   |   +-- config/
|   |   |   +-- db.js
|   |   +-- controllers/
|   |   |   +-- bookingController.js
|   |   +-- middleware/
|   |   |   +-- authMiddleware.js
|   |   +-- models/
|   |   |   +-- Booking.js
|   |   |   +-- Movie.js
|   |   |   +-- Show.js
|   |   |   +-- Theatre.js
|   |   |   +-- User.js
|   |   +-- routes/
|   |   |   +-- authRoutes.js
|   |   |   +-- bookingRoutes.js
|   |   |   +-- movieRoutes.js
|   |   |   +-- theatreRoutes.js
|   |   +-- app.js
|   +-- .env.example
|   +-- package.json
|   +-- server.js
|
+-- frontend/
|   +-- src/
|   |   +-- components/
|   |   +-- data/
|   |   +-- pages/
|   |   +-- store/
|   |   +-- App.jsx
|   |   +-- main.jsx
|   |   +-- index.css
|   +-- package.json
|   +-- vite.config.js
|
+-- README.md
```

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd assignment_creative_upaay
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

### 4. Configure Backend Environment

Create a `.env` file inside the `backend` folder:

```bash
cp .env.example .env
```

Update the values in `.env`.

### 5. Start Backend

```bash
cd backend
npm run dev
```

### 6. Start Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

Backend runs on:

```text
http://localhost:5000
```

## Environment Variables

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
JWT_SECRET=your_jwt_secret
DNS_SERVERS=8.8.8.8,1.1.1.1
```

### Variable Details

- `PORT`: Backend server port.
- `MONGO_URI`: MongoDB Atlas connection string.
- `JWT_SECRET`: Secret key used to sign JWT tokens.
- `DNS_SERVERS`: Optional DNS override for MongoDB Atlas SRV lookup issues.

## API Endpoints

### Auth

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user and return JWT |

### Movies

| Method | Endpoint | Description |
|---|---|---|
| GET | `/movies` | Get all movies |

### Theatres

| Method | Endpoint | Description |
|---|---|---|
| GET | `/theatres` | Get all theatres |

### Bookings

| Method | Endpoint | Description |
|---|---|---|
| POST | `/bookings` | Create booking and reserve seats |
| GET | `/bookings` | Get logged-in user's bookings |
| DELETE | `/bookings/:id` | Cancel booking |

Booking routes require:

```http
Authorization: Bearer <token>
```

## State Management Approach

Redux Toolkit is used for booking-related state.

The booking slice stores:

- `selectedMovie`
- `selectedTheatre`
- `selectedDate`
- `selectedFormat`
- `selectedTime`
- `selectedSchedule`
- `selectedSeats`
- `totalPrice`

This keeps the booking flow predictable. Each page updates the part of the booking state it owns, and later pages read from the same centralized Redux store.

## Persistence Strategy

Redux Persist is used to save booking state in browser `localStorage`.

This prevents selected booking data from being lost after refresh, especially on:

- Seat Selection page
- Checkout page
- Booking Summary page

Persisted data is stored under a key similar to:

```text
persist:booking
```

To inspect it:

1. Open browser DevTools.
2. Go to Application.
3. Open Local Storage.
4. Check the `persist:booking` key.

## Data Consistency and ACID Handling

The backend uses Mongoose sessions and MongoDB transactions during booking creation.

When a user books seats:

1. The backend finds or creates the show.
2. It checks if selected seats are already occupied.
3. It marks seats as occupied.
4. It creates the booking record.

All steps run inside one transaction. If any step fails, MongoDB rolls back the entire operation.

This ensures:

- No booking is saved without seat allocation.
- No seats are marked occupied without a booking.
- Two users cannot successfully book the same seats.

## Deployment Instructions

### Frontend Deployment

Recommended platforms:

- Vercel
- Netlify

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

### Backend Deployment

Recommended platforms:

- Render
- Railway
- Cyclic

Start command:

```bash
npm start
```

Required environment variables:

```env
PORT
MONGO_URI
JWT_SECRET
DNS_SERVERS
```

### MongoDB Atlas Setup

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Add your server IP to Network Access.
4. Copy the connection string.
5. Paste it into `MONGO_URI`.

## Future Improvements

- Connect frontend API calls to the backend.
- Add protected frontend routes.
- Add real payment gateway integration.
- Add admin dashboard for movies, theatres, and schedules.
- Add email ticket confirmation.
- Improve seat locking for high-concurrency scenarios.
- Add unit and integration tests.
- Add pagination and search for movies.
- Add role-based access control.
- Add image upload support for movie posters and banners.

## Recruiter Notes

This project demonstrates:

- Full-stack application architecture
- Mobile-first React UI implementation
- Redux Toolkit state management
- Persistent frontend state with Redux Persist
- REST API design with Express.js
- MongoDB data modeling with Mongoose
- JWT authentication
- Transaction-based booking consistency
- Clean folder structure and readable beginner-friendly code
