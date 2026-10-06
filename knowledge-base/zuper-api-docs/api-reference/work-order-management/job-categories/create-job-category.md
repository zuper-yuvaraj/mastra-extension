---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Job Category

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
    "/jobs/category": {
      "post": {
        "summary": "Create Job Category",
        "description": "",
        "operationId": "create-job-category",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "category": {
                    "type": "object",
                    "properties": {
                      "category_name": {
                        "type": "string"
                      },
                      "category_description": {
                        "type": "string"
                      },
                      "category_color": {
                        "type": "string"
                      },
                      "estimated_duration": {
                        "type": "object",
                        "properties": {
                          "days": {
                            "type": "integer",
                            "format": "int32"
                          },
                          "hours": {
                            "type": "integer",
                            "format": "int32"
                          },
                          "minutes": {
                            "type": "integer",
                            "format": "int32"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "category": {
                      "category_color": "#000",
                      "auto_create_status": true,
                      "category_name": "Installation",
                      "category_description": "Some Description",
                      "estimated_duration": {
                        "hours": 1,
                        "minutes": 2,
                        "days": 1
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
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Job Category created successfully\",\n  \"data\": {\n    \"category_uid\": \"87632f20-d794-11ee-b324-bfe959e2577f\"\n  }\n}"
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
                      "example": "Job Category created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "category_uid": {
                          "type": "string",
                          "example": "87632f20-d794-11ee-b324-bfe959e2577f"
                        }
                      }
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
                    "value": "{\n  \"message\": \"Category Name Missing\",\n  \"title\": \"Missing Category Name\",\n  \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Category Name Missing"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Category Name"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    }
                  }
                }
              }
            }
          },
          "409": {
            "description": "409",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"message\": \"Category Name Already Exists\",\n  \"title\": \"Duplicate Category Name\",\n  \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Category Name Already Exists"
                    },
                    "title": {
                      "type": "string",
                      "example": "Duplicate Category Name"
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