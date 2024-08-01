import mysql from 'mysql2';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const mySQLCon = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();

console.log("Sanci");

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
