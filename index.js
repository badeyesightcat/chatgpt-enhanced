const { Configuration, OpenAIApi } = require('openai');
const express = require('express');

const configuration = new Configuration({
  organization: 'org-xsDpA4JqpAo8U4iJOl9GHkR9',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// create a simple express api that calls the function
const app = express();
const port = 3000;

app.post('/', async (req, res) => {
  // const response = await openai.createCompletion({
  //   model: 'text-davinci-003',
  //   prompt: 'Say this is a test',
  //   max_tokens: 7,
  //   temperature: 0,
  // });
  // console.log(response);
  // res.json({
  //   data: response.data,
  // });

  const { message } = req.body;
  console.log(message);
  res.json({
    data: message,
  });
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
