---
updatedAt: 2026-08-13T10:23:40.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Getting Started with Zuper Pro

This page will help you get started with Zuper Pro. You'll be up and running in a jiffy!

Zuper provides a collection of APIs that enable you to build robust integrations and customize Zuper to the needs of your business. Our APIs accept and return JSON in the HTTP body, and return standard HTTP response codes. You can consume the APIs directly using your favorite HTTP/REST library.&#x20;

> **Note**: All API requests should be sent only through HTTPS.

**Authentication**: All Zuper API endpoints requires API keys sent through header 'x-api-key' with the API key obtained through your account.

**Date format**: All dates in the API use UTC and are strings in the [ISO 8601 "combined date and time representation"](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format: 2015-05-15T15:50:38Z

***

### What is my Base API URL?

Zuper has data centers throughout the globe to meet the performance and data needs of our customers. Your Zuper account is hosted in one of these regions based on your geographical location. You can get your base API URL by making a HTTP call passing your company login name to our Account Service as follows,

```curl curl
curl 'https://accounts.zuperpro.com/api/config' \
  -H 'content-type: application/json;charset=UTF-8' \
  --data-raw '{"company_name":"your-company-login-name"}' \
  --compressed
  
Response:
{
    "type": "success",
    "config": {
        "dc_name": "us-west-1c",
        "dc_provider": "AWS",
        "dc_country": "US WEST",
        "dc_api_url": "https://us-west-1c.zuperpro.com",
        "dc_socket_url": "https://us-west-1c.zuperpro.com:8443",
    }
}
```

The dc\_api\_url from the response above will be the Base API URL of your account.