import mysql from 'mysql2';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

// Create MySQL connection pool
const mySQLCon = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();

console.log("Sanci");

// Define API functions
export async function getapi() {
    const [getresul] = await mySQLCon.query("SELECT * FROM contact_tb");
    return getresul;
}

export async function postinsert(firstName, lastname, phonenumber, email_id) {
    const [postin] = await mySQLCon.query(
        "INSERT INTO contact_tb (firstName, lastname, phonenumber, email_id) VALUES (?, ?, ?, ?)",
        [firstName, lastname, phonenumber, email_id]
    );
    return postin;
}

// Uncomment and use if needed
// export async function postinset(studentname, fathername, photo, studentdop, classsection) {
//     const [insvalue] = await mySQLCon.query(
//         `INSERT INTO endrolment (studentname, fathername, photo, studentdop, classsection) 
//         VALUES (?, ?, ?, STR_TO_DATE(?, "%Y-%m-%d"), ?)`,
//         [studentname, fathername, photo, studentdop, classsection]
//     );
//     return insvalue;
// }

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get("/api/get/contact", async (req, res) => {
    try {
        let result = await getapi();
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post("/api/post/contact", async (req, res) => {
    const { firstName, lastname, phonenumber, email_id } = req.body;
    try {
        let insertval = await postinsert(firstName, lastname, phonenumber, email_id);
        res.status(201).send(insertval);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
