---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /business_units/{business_unit_uid}

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
    "/business_units/{business_unit_uid}": {
      "put": {
        "description": "",
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "type": "success",
                      "title": "Trade Type updated successfully",
                      "message": "Trade Type updated successfully",
                      "data": {
                        "bu_uid": "07063c94-6163-44ea-b126-87ac64a7c0f4"
                      }
                    }
                  }
                }
              }
            }
          },
          "500": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {}
                },
                "examples": {
                  "Internal Server Error": {
                    "summary": "Internal Server Error",
                    "value": {
                      "type": "error",
                      "title": "Error in Updating Trade Type",
                      "message": "Error in Updating Trade Type"
                    }
                  }
                }
              }
            },
            "description": "Internal Server Error"
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "business_unit_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "operationId": "put_business-units-business-unit-uid",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "business_unit": {
                    "type": "object",
                    "properties": {
                      "bu_logo": {
                        "type": "string"
                      },
                      "bu_name": {
                        "type": "string"
                      },
                      "bu_email": {
                        "type": "string"
                      },
                      "bu_phone": {
                        "type": "string"
                      },
                      "bu_license_number": {
                        "type": "string"
                      },
                      "bu_address": {
                        "type": "object",
                        "properties": {
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "landmark": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "county": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          }
                        }
                      },
                      "monthly_goal": {
                        "type": "number"
                      }
                    },
                    "required": [
                      "bu_name"
                    ]
                  }
                },
                "required": [
                  "business_unit"
                ]
              }
            }
          }
        }
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