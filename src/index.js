/*

// 2 important cheezein related to database :-
// 1. Database se jab bhi baat karne ki koshish karenge toh problem aa sakti hai => TRY-CATCH mein wrap karo ya fir PROMISES ka use karo - RESOLVE/REJECT se
// 2. DATABASE IS ALWAYS IN ANOTHER CONTINENT => DB se jab bhi baat karoge toh time lagega => ASYNC_AWAIT use karna padega
// IIFE(Immediately Invoked Function Expression)(iffy) ka use - function that runs as soon as it is defined

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT , () => {
        console.log(`App is listening on port ${process.env.PORT}`);
        
    })

  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
})();

// AN APPROACH TO CONNECT TO THE DATABASE BY LINKING EVERYTHING IN A SINGLE FILE NAMELY INDEX.JS

// iss approach mein TRY-CATCH bhi kia hai ERROR bhi handle kiye hain and since DB dusre continent mein hai toh ASYNC-AWAIT ka use bhi kiya hai
*/

// SECOND APPROACH => DB/Connection folder mein ek file lein, vahan pe saara code likhein, vahan se function export karayein aur Index file mein uss function ko import karake execute kardein => ZYADA BETTER

// require('dotenv').config({path: './env'})    => aise kar sakte hain but consistency kharab karta hai code ki
import connectDB from "./db/index.js";      // ye path likhte time .js ya jo bhi extension hoga vo lagana zaruri hai nahi toh error aayega ; agar error aa raha hai toh laga dena else Nahi
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})


connectDB();
