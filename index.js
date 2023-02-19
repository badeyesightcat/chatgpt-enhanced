const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const configuration = new Configuration({
  organization: 'org-xsDpA4JqpAo8U4iJOl9GHkR9',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// create a simple express api that calls the function
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;

app.post('/', async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  res.json({
    message: response.data.choices[0].text,
  });

  // const { message } = req.body;
  // console.log(message);
  // res.json({
  //   data: message,
  // });
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
