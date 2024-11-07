const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    try {
        const reviews = await prisma.review.findMany();
        res.status(200).json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});

router.post('/', async (req, res) => {
    const { reviewer, rating, text, companyName } = req.body;
    console.log(reviewer);
    // Validate required fields
    if (!reviewer || !rating || !text || !companyName) {
        return res.status(400).json({ error: 'All fields, including companyName, are required' });
    }

    try {
        // Find the company by name
        const company = await prisma.companies.findFirst({
            where: { name: companyName },
        });
        console.log(reviewer);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }

        // Create a new review with the found company ID
        const newReview = await prisma.review.create({
            data: {
                reviewer,
                rating,
                text,
                companyId: company.id,
            },
        });

        res.status(201).json(newReview);
    } catch (error) {
        console.error('Error creating review:', error);
        res.status(500).json({ error: 'Failed to create review' });
    }
});

console.log('Review routes initialized');

module.exports = router;