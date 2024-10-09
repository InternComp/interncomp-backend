const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require("./db/companies");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/companies", async (req, res) => {
    const results = await db.createCompany(req.body);
    res.status(201).json({id: results[0]});
});

app.get("/companies", async (req, res) => {
    const companies = await db.getAllCompanies();
    res.status(200).json({ companies });
});


app.patch("/companies/:id", async (req, res) => {
    const id = await db.updateCompany(req.params.id, req.body);
    res.status(200).json({id});
});

app.delete("/companies/:id", async (req, res) => {
    await db.deleteCompany(req.params.id);
    res.status(200).json({success: true});
});

app.get("/companies/:id/website", async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await db.getCompanyById(companyId);

        if (company) {
            res.status(200).json({
                
                websiteLink: company.websiteLink || "No link available"
            });
        } else {
            res.status(404).json({ error: "Company not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(1337, () => console.log("server is running on port 1337"));