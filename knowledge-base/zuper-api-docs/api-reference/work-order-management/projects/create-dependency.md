---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Dependency

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
    "/projects/{project_uid}/dependencies": {
      "post": {
        "summary": "Create Dependency",
        "description": "",
        "operationId": "create-dependency",
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
                  "dependency"
                ],
                "properties": {
                  "dependency": {
                    "type": "object",
                    "description": "Required",
                    "required": [
                      "dependency_type"
                    ],
                    "properties": {
                      "parent": {
                        "type": "object",
                        "required": [
                          "type"
                        ],
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "JOB",
                              "MILESTONE"
                            ]
                          },
                          "milestone_uid": {
                            "type": "string"
                          },
                          "job_uid": {
                            "type": "string"
                          }
                        }
                      },
                      "successor": {
                        "type": "object",
                        "required": [
                          "type"
                        ],
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "JOB",
                              "MILESTONE"
                            ]
                          },
                          "milestone_uid": {
                            "type": "string"
                          },
                          "job_uid": {
                            "type": "string"
                          }
                        }
                      },
                      "dependency_type": {
                        "type": "string",
                        "enum": [
                          "finish_to_start",
                          "start_to_finish",
                          "start_to_start",
                          "finish_to_finish"
                        ]
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "dependency": {
                      "parent": {
                        "type": "JOB",
                        "job_uid": "db221af0-02e0-11ef-a2c2-d110da6e6993"
                      },
                      "successor": {
                        "type": "MILESTONE",
                        "milestone_uid": "754199d9-f2b5-4964-817e-d1b5640bec51"
                      },
                      "dependency_type": "finish_to_start"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Dependency created successfully\",\n    \"data\": {\n        \"project_uid\": \"6208a620-8a50-4563-9e3a-678217c2fadc\",\n        \"dependency_uid\": \"676c92c7-8e14-4b89-9f8f-b26ccc217000\"\n    }\n}"
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
                      "example": "Dependency created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "project_uid": {
                          "type": "string",
                          "example": "6208a620-8a50-4563-9e3a-678217c2fadc"
                        },
                        "dependency_uid": {
                          "type": "string",
                          "example": "676c92c7-8e14-4b89-9f8f-b26ccc217000"
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