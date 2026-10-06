---
updatedAt: 2026-06-29T18:16:50.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Getting Started with Zuper API

This page will help you get started with Zuper Pro API.

Zuper provides a collection of APIs that enable you to build robust integrations and customize Zuper to the needs of your business. Our APIs accept and return JSON in the HTTP body, and return standard HTTP response codes. You can consume the APIs directly using your favorite HTTP/REST library.

> **Note**: All API requests should be sent only through HTTPS.

**Authentication**: All Zuper API endpoints requires API keys sent through header 'x-api-key' with the API key obtained through your account.

**Date format**: All dates in the API use UTC and are strings in the [ISO 8601 "combined date and time representation"](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format: 2015-05-15T15:50:38Z

***

### What is my Base API URL?

Zuper has data centers throughout the globe to meet the performance and data needs of our customers. Your Zuper account is hosted in one of these regions based on your geographical location. You can get your base API URL by making a HTTP call passing your company login name to our Account Service as follows,

```curl curl
curl 'https://accounts.zuperpro.com/api/config' \
  -X POST \
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

***

### Rate Limits

To ensure reliable performance and fair usage across all customers, the Zuper API enforces rate limits on API requests. The rate limit varies based on your subscription plan, ranging from 200 requests per minute to 700 requests per minute.

If your application exceeds the allowed request limit within a one-minute window, the API temporarily rejects additional requests until the rate limit resets.

You can monitor your current rate limit and remaining requests using the following response headers:

`X-Rate-Limit: 700`\
`X-Rate-Limit-Remaining: 450`

<br />

X-Rate-Limit – The maximum number of requests allowed per minute for your account.\
X-Rate-Limit-Remaining – The number of requests remaining in the current rate limit window.

If the rate limit is exceeded, the API returns a 429 Too Many Requests response. The response includes a Retry-After header indicating the number of seconds to wait before sending additional requests.

`HTTP/1.1 429 Too Many Requests`\
`Retry-After: 15`

We recommend implementing retry logic with exponential backoff or respecting the Retry-After header before retrying failed requests. This helps prevent repeated rate limit violations and ensures your application can recover gracefully.