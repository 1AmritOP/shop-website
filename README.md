# Shop Website

A clean, modern e-commerce platform built with Next.js. Keeping things casual and cool, this project provides a solid foundation for a digital storefront with built-in product management.

## Tech Stack

*   **Frontend:** Next.js (App Router), TypeScript, React, Tailwind CSS
*   **Backend:** Next.js API Routes
*   **Database:** MongoDB (Mongoose)
*   **Media Storage:** Cloudinary

## Features

*   **Product Catalog:** Display products using a clean, modern UI layout.
*   **Add Products:** A dedicated interface (`/product/add`) for adding new items to the store.
*   **Image Management:** Seamless Cloudinary integration for uploading and serving product images.
*   **API Integration:** Custom backend routes handling product data operations.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory and add the necessary connection strings and API keys:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

## Directory Structure

*   `app/api/` - Backend endpoints for database operations.
*   `app/components/` - Reusable UI elements (`Navbar`, `Footer`, `ProductCard`).
*   `app/lib/` - Utility scripts (`db.ts`, `cloudinary.ts`).
*   `app/models/` - Database schemas and models.
*   `app/product/` - Product-specific pages and routing.