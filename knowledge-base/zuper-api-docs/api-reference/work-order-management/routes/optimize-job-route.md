---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Optimize Job Route

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
    "/routes/{route_uid}/optimize": {
      "post": {
        "summary": "Optimize Job Route",
        "description": "",
        "operationId": "optimize-job-route",
        "parameters": [
          {
            "name": "route_uid",
            "in": "path",
            "description": "uid of route",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "start_location": {
                    "type": "object",
                    "properties": {
                      "city": {
                        "type": "string"
                      },
                      "state": {
                        "type": "string"
                      },
                      "street": {
                        "type": "string"
                      },
                      "country": {
                        "type": "string"
                      },
                      "landmark": {
                        "type": "string"
                      },
                      "zip_code": {
                        "type": "string"
                      },
                      "geo_cordinates": {
                        "type": "array",
                        "items": {
                          "type": "number",
                          "format": "double"
                        }
                      },
                      "first_name": {
                        "type": "string"
                      },
                      "last_name": {
                        "type": "string"
                      },
                      "phone_number": {
                        "type": "string",
                        "description": "Customer phone number"
                      },
                      "email": {
                        "type": "string",
                        "description": "Customer email"
                      },
                      "label": {
                        "type": "string",
                        "description": "Label"
                      }
                    }
                  },
                  "end_location": {
                    "type": "object",
                    "properties": {
                      "city": {
                        "type": "string"
                      },
                      "state": {
                        "type": "string"
                      },
                      "street": {
                        "type": "string"
                      },
                      "country": {
                        "type": "string"
                      },
                      "landmark": {
                        "type": "string"
                      },
                      "zip_code": {
                        "type": "string"
                      },
                      "geo_cordinates": {
                        "type": "array",
                        "items": {
                          "type": "number",
                          "format": "double"
                        }
                      },
                      "first_name": {
                        "type": "string"
                      },
                      "last_name": {
                        "type": "string"
                      },
                      "phone_number": {
                        "type": "string",
                        "description": "Customer phone number"
                      },
                      "email": {
                        "type": "string",
                        "description": "Customer email"
                      },
                      "label": {
                        "type": "string",
                        "description": "Label"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Routes optimized successfully\",\n    \"title\": \"Routes optimized successfully\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "message": {
                      "type": "string",
                      "example": "Routes optimized successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "Routes optimized successfully"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"message\": \"Job route already optimized\",\n    \"title\": \"Job route already optimized\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Job route already optimized"
                    },
                    "title": {
                      "type": "string",
                      "example": "Job route already optimized"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false
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