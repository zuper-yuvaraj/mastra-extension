---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Phase

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
    "/projects/{project_uid}/phases": {
      "post": {
        "summary": "Create Phase",
        "description": "",
        "operationId": "create-phase",
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
                  "phase"
                ],
                "properties": {
                  "phase": {
                    "type": "object",
                    "description": "Required",
                    "required": [
                      "phase_name"
                    ],
                    "properties": {
                      "phase_name": {
                        "type": "string"
                      },
                      "phase_color": {
                        "type": "string"
                      },
                      "sequence": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "phase_items": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "job_uid": {
                              "type": "string"
                            },
                            "milestone_uid": {
                              "type": "string"
                            },
                            "sequence": {
                              "type": "integer",
                              "format": "int32"
                            }
                          },
                          "type": "object"
                        }
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "phase": {
                      "phase_name": "Phase-1",
                      "phase_color": "#ffffff",
                      "sequence": 1,
                      "phase_items": [
                        {
                          "milestone_uid": "f5362783-7c14-421d-8013-29681baaef79",
                          "sequence": 1
                        },
                        {
                          "job_uid": "30a42000-02ea-11ef-ba18-bdafd706092b",
                          "sequence": 2
                        }
                      ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Phase created successfully\",\n    \"data\": {\n        \"project_uid\": \"6208a620-8a50-4563-9e3a-678217c2fadc\",\n        \"phase_uid\": \"ba36740e-5d06-47ef-9b1d-fb70fab2ed59\"\n    }\n}"
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
                      "example": "Phase created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "project_uid": {
                          "type": "string",
                          "example": "6208a620-8a50-4563-9e3a-678217c2fadc"
                        },
                        "phase_uid": {
                          "type": "string",
                          "example": "ba36740e-5d06-47ef-9b1d-fb70fab2ed59"
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