---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Dependency

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
    "/projects/{project_uid}/dependencies/{dependency_uid}": {
      "put": {
        "summary": "Update Dependency",
        "description": "",
        "operationId": "update-dependency",
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
            "name": "dependency_uid",
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
                    "properties": {
                      "dependency_type": {
                        "type": "string",
                        "enum": [
                          "finish_to_start",
                          "start_to_finish",
                          "start_to_start",
                          "finish_to_finish"
                        ]
                      },
                      "parent": {
                        "type": "object",
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
                        "job_uid": "30a42000-02ea-11ef-ba18-bdafd706092b"
                      },
                      "successor": {
                        "type": "MILESTONE",
                        "milestone_uid": "c4956fb7-33b5-4cfc-ad17-24b00d89f029"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Dependency updated successfully\",\n    \"data\": {\n        \"project_uid\": \"6208a620-8a50-4563-9e3a-678217c2fadc\",\n        \"dependency_uid\": \"676c92c7-8e14-4b89-9f8f-b26ccc217000\"\n    }\n}"
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
                      "example": "Dependency updated successfully"
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
                  "Error on no project": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Project Not found for given UID\",\n    \"title\": \"Project Not found\"\n}"
                  },
                  "Error on no dependency": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Dependency Not found for given UID\",\n    \"title\": \"Dependency Not found\"\n}"
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
                      "title": "Error on no dependency",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "example": "error"
                        },
                        "message": {
                          "type": "string",
                          "example": "Dependency Not found for given UID"
                        },
                        "title": {
                          "type": "string",
                          "example": "Dependency Not found"
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