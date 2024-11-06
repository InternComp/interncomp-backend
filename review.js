// review.js
const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(express.json());

// GET: Fetch all reviews for a specific company
app.get('/companies/:companyId/reviews', async (req, res) => {
  const { companyId } = req.params;
  try {
    const reviews = await prisma.reviews.findMany({
      where: { companyId: companyId },
    });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// POST: Add a new review for a company
app.post('/companies/:companyId/reviews', async (req, res) => {
  const { companyId } = req.params;
  const { reviewerId, review, rating } = req.body;
  try {
    const newReview = await prisma.reviews.create({
      data: {
        companyId: companyId,
        reviewerId: reviewerId,
        review: review,
        rating: rating,
      },
    });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create review' });
  }
});

// Export the app
module.exports = app;
