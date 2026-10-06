---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Milestone

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
    "/projects/{project_uid}/milestone": {
      "post": {
        "summary": "Create Milestone",
        "description": "",
        "operationId": "create-milestone",
        "parameters": [
          {
            "name": "project_uid",
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
                    "description": "Required",
                    "required": [
                      "milestone_title"
                    ],
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
                      "phase_uid": "9963711a-35da-4b58-a063-c38157686c63"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Milestone created successfully\",\n    \"data\": {\n        \"project_uid\": \"6208a620-8a50-4563-9e3a-678217c2fadc\",\n        \"milestone_uid\": \"754199d9-f2b5-4964-817e-d1b5640bec51\"\n    }\n}"
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
                      "example": "Milestone created successfully"
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
                          "example": "754199d9-f2b5-4964-817e-d1b5640bec51"
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
                  "Error on Invalid Milestone title": {
                    "value": "{\n    \"message\": \"The Job UID sent is not valid\",\n    \"title\": \"Invalid Job UID\",\n    \"type\": \"error\"\n}"
                  },
                  "Error on duplicate milestone title": {
                    "value": "{\n  \"message\": 'Milestone Title already exists',\n  \"title\": 'Milestone Title already exists',\n  \"type\": 'error'\n}"
                  },
                  "Error on Invalid due date": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Invalid Due Date\",\n    \"title\": \"Invalid Due Date\"\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Error on Invalid Milestone title",
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
                    },
                    {
                      "title": "Error on Invalid due date",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "example": "error"
                        },
                        "message": {
                          "type": "string",
                          "example": "Invalid Due Date"
                        },
                        "title": {
                          "type": "string",
                          "example": "Invalid Due Date"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404",
            "content": {
              "application/json": {
                "examples": {
                  "Error on invalid project": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Project Not found for given UID\",\n    \"title\": \"Project Not found\"\n}"
                  }
                },
                "schema": {
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