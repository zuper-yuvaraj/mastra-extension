---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Add Job To Route

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
    "/routes/{route_uid}/job": {
      "put": {
        "summary": "Add Job To Route",
        "description": "",
        "operationId": "add-job-to-route",
        "parameters": [
          {
            "name": "route_uid",
            "in": "path",
            "description": "route uid",
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
                "required": [
                  "jobs"
                ],
                "properties": {
                  "jobs": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "job_uid": {
                          "type": "string"
                        },
                        "geo_cords": {
                          "type": "array",
                          "default": [],
                          "items": {
                            "type": "integer",
                            "format": "int32"
                          }
                        }
                      },
                      "type": "object"
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "jobs": [
                      {
                        "job_uid": "499f7d6f-c45a-471c-b9d1-9b936dfeb0be",
                        "geo_cords": [
                          12.9249308,
                          80.1000026
                        ]
                      }
                    ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Job added to route successfully\",\n    \"title\": \"Job added to route successfully\"\n}"
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
                      "example": "Job added to route successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "Job added to route successfully"
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
                    "value": "{\n    \"message\": \"Jobs already assigned\",\n    \"title\": \"Jobs already assigned\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Jobs already assigned"
                    },
                    "title": {
                      "type": "string",
                      "example": "Jobs already assigned"
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