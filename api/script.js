const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

//find complexity
app.post("/find-complexity", async (req, res) => {

  try {
    const  {prompt}  = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
              ${prompt} 
              """ The time complexity of this function is \n and discribe why is that
              
            `,
            temperature: 0,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
    });

    console.log(prompt)

    return res.status(200).json({      
      success: true,
      data: response.data.choices[0].text,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : "There was an issue on the server",
    });
  }
});

//explin code
app.post("/explin-code", async (req, res) => {

  try {
    const  {prompt}  = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
              ${prompt} 
              """ give good explanation what is the given code is doing, what is the output of the code? , explan in a concise way with examples :
              """
              
            `,
            temperature: 0.5,
            max_tokens: 600,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
    });

    console.log(prompt)

    return res.status(200).json({      
      success: true,
      data: response.data.choices[0].text,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : "There was an issue on the server",
    });
  }
});

//translate code
app.post("/translator", async (req, res) => {

  try {
    const  {prompt, selectedValue, translatedValue}  = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
      ##### Translate this function  from ${selectedValue} into ${translatedValue}\n### ${selectedValue}\n    \n    ${prompt}  \n### ${translatedValue}

              
            `,
            temperature: 0,
            max_tokens: 600,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["###"],
    });

    console.log(prompt)

    return res.status(200).json({      
      success: true,
      data: response.data.choices[0].text,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : error,
    });
  }
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});