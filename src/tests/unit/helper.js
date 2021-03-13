const express=require("express");


const server = express().listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on ${process.env.PORT}`);
  });

module.exports={server};