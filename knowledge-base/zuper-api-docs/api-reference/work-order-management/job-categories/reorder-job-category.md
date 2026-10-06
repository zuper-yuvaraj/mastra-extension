---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Reorder Job Category

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
    "/jobs/category/reorder": {
      "put": {
        "summary": "Reorder Job Category",
        "description": "",
        "operationId": "reorder-job-category",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "categories": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "category_uid": {
                          "type": "string"
                        },
                        "display_order": {
                          "type": "string"
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
                    "categories": [
                      {
                        "category_uid": "66567c70-7f96-11ee-b9fb-b36124bd2e32",
                        "display_order": 1
                      },
                      {
                        "category_uid": "66bf9e80-7f96-11ee-b9fb-b36124bd2e32",
                        "display_order": 2
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
                    "value": "{\n  \"type\": \"success\",\n  \"title\": \"Job Category Order Updated Successfully\",\n  \" message\": \"Job Category Order Updated Successfully\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "title": {
                      "type": "string",
                      "example": "Job Category Order Updated Successfully"
                    },
                    " message": {
                      "type": "string",
                      "example": "Job Category Order Updated Successfully"
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
                    "value": "{\n    \"message\": \"Invalid Category UIDs\",\n    \"title\": \"Invalid Category UIDs\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Invalid Category Order Number"
                        },
                        "title": {
                          "type": "string",
                          "example": "Invalid Category Order Number"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Invalid Category UIDs"
                        },
                        "title": {
                          "type": "string",
                          "example": "Invalid Category UIDs"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    }
                  ]
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