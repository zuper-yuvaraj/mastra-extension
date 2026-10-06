---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Link Job to Project

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
    "/projects/{project_uid}/jobs/{job_uid}": {
      "post": {
        "summary": "Link Job to Project",
        "description": "",
        "operationId": "link-job-to-project",
        "parameters": [
          {
            "name": "project_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "job_uid",
            "in": "path",
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
                  "job_uid": {
                    "type": "string"
                  },
                  "sequence": {
                    "type": "string"
                  },
                  "phase_uid": {
                    "type": "string"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "job_uid": "656c1c70-7f96-11ee-b9fb-b36124bd2e32",
                    "sequence": 1,
                    "phase_uid": "656c1c70-7f96-11ee-b9fb-b36124bd2e32"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Job Linked to the Project successfully\",\n    \"data\": {\n        \"project_uid\": \"3b0a10d0-d541-11ee-a3c1-434f3a424c11\",\n        \"job_uid\": \"6f651e50-ad20-11ed-baf5-b9dd933de9e6\"\n    }\n}"
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
                      "example": "Job Linked to the Project successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "project_uid": {
                          "type": "string",
                          "example": "3b0a10d0-d541-11ee-a3c1-434f3a424c11"
                        },
                        "job_uid": {
                          "type": "string",
                          "example": "6f651e50-ad20-11ed-baf5-b9dd933de9e6"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"message\": \"The Job UID sent is not valid\",\n    \"title\": \"Invalid Job UID\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "example": "error"
                        },
                        "message": {
                          "type": "string",
                          "example": "No Project found for given UID"
                        },
                        "title": {
                          "type": "string",
                          "example": "No Project found for given UID"
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "The Job UID sent is not valid"
                        },
                        "title": {
                          "type": "string",
                          "example": "Invalid Job UID"
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