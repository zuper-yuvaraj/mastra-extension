---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Remove Job from Project

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
      "delete": {
        "summary": "Remove Job from Project",
        "description": "",
        "operationId": "remove-job-from-project",
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
          },
          {
            "name": "delete_job",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
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
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "job_uid": "656c1c70-7f96-11ee-b9fb-b36124bd2e32"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Job Deleted from the Project successfully\",\n    \"data\": {\n        \"project_uid\": \"2417abf0-d55d-11ee-85b8-f531d3adbde8\"\n    }\n}"
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
                      "example": "Job Deleted from the Project successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "project_uid": {
                          "type": "string",
                          "example": "2417abf0-d55d-11ee-85b8-f531d3adbde8"
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
                  "Error on no project": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"No Project found for given UID\",\n    \"title\": \"No Project found for given UID\"\n}"
                  },
                  "Error on no job": {
                    "value": "{\n    \"message\": \"The Job UID sent is not valid\",\n    \"title\": \"Invalid Job UID\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Error on no project",
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
                      "title": "Error on no job",
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