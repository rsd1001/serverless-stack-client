export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-rs1",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://m4v0sqyw4g.execute-api.us-east-1.amazonaws.com/prod/",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_IOaTNh9cX",
    APP_CLIENT_ID: "55gd9178lje0ckq131qf2b50ce",
    IDENTITY_POOL_ID: "us-east-1:9381dee2-032d-4f08-99d8-75616c76b3db",
  },
};
