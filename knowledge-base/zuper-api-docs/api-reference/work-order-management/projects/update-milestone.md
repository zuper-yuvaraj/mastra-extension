---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Milestone

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
    "/projects/{project_uid}/milestone/{milestone_uid}": {
      "put": {
        "summary": "Update Milestone",
        "description": "",
        "operationId": "update-milestone",
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
            "name": "milestone_uid",
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
                "required": [
                  "milestone"
                ],
                "properties": {
                  "milestone": {
                    "type": "object",
                    "properties": {
                      "milestone_title": {
                        "type": "string"
                      },
                      "milestone_description": {
                        "type": "string"
                      },
                      "due_date": {
                        "type": "string"
                      },
                      "phase_uid": {
                        "type": "string"
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "milestone": {
                      "milestone_title": "Milestone-1",
                      "milestone_description": "Milestone-1",
                      "due_date": "2024-05-10",
                      "phase_uid": "6208a620-8a50-4563-9e3a-678217c2fadc"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Milestone updated successfully\",\n    \"data\": {\n        \"project_uid\": \"6208a620-8a50-4563-9e3a-678217c2fadc\",\n        \"milestone_uid\": \"2efd856d-b39d-41d8-b47d-c41d4ae9f6ab\"\n    }\n}"
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
                      "example": "Milestone updated successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "project_uid": {
                          "type": "string",
                          "example": "6208a620-8a50-4563-9e3a-678217c2fadc"
                        },
                        "milestone_uid": {
                          "type": "string",
                          "example": "2efd856d-b39d-41d8-b47d-c41d4ae9f6ab"
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
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Project Not found for given UID\",\n    \"title\": \"Project Not found\"\n}"
                  },
                  "Error on no milestone": {
                    "value": "{\n    \"message\": \"Milestone Not found\",\n    \"title\": \"Invalid Job UID\",\n    \"type\": \"error\"\n}"
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
                          "example": "Project Not found for given UID"
                        },
                        "title": {
                          "type": "string",
                          "example": "Project Not found"
                        }
                      }
                    },
                    {
                      "title": "Error on no milestone",
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Milestone Not found"
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