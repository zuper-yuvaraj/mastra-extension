---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Measurement

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "zuper-pro-api",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{dc-region}.zuperpro.com/api",
      "variables": {
        "dc-region": {
          "default": "dc-region"
        }
      }
    }
  ],
  "components": {
    "securitySchemes": {
      "sec0": {
        "type": "apiKey",
        "in": "header",
        "name": "x-api-key"
      }
    }
  },
  "security": [
    {
      "sec0": []
    }
  ],
  "paths": {
    "/measurements": {
      "post": {
        "description": "",
        "operationId": "post_measurements",
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "measurement_uid": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "request_data": {
                    "type": "object",
                    "properties": {
                      "job_uid": {
                        "type": "string",
                        "description": "Job UID"
                      },
                      "measurement_address": {
                        "type": "object",
                        "properties": {
                          "street": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "string"
                          }
                        }
                      },
                      "measurement_data": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "category_uid": {
                              "type": "string"
                            },
                            "token_uid": {
                              "type": "string"
                            },
                            "token_value": {
                              "type": "string"
                            }
                          },
                          "type": "object",
                          "required": [
                            "category_uid",
                            "token_uid",
                            "token_value"
                          ]
                        }
                      },
                      "measurement_name": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "job_uid",
                      "measurement_name"
                    ]
                  },
                  "request_type": {
                    "type": "string",
                    "enum": [
                      "MANUAL_ENTRY"
                    ]
                  }
                },
                "required": [
                  "request_data",
                  "request_type"
                ]
              }
            }
          }
        },
        "summary": "Create Measurement"
      }
    }
  },
  "x-readme": {
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": false
  },
  "x-readme-fauxas": true
}
```