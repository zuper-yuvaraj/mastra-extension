---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Check Dependency

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
    "/projects/{project_uid}/dependencies/check": {
      "post": {
        "summary": "Check Dependency",
        "description": "",
        "operationId": "check-dependency",
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
                    "required": [
                      "type"
                    ],
                    "properties": {
                      "type": {
                        "type": "string",
                        "enum": [
                          "START",
                          "FINISH"
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
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "dependency": {
                      "milestone_uid": "2efd856d-b39d-41d8-b47d-c41d4ae9f6ab",
                      "job_uid": "2efd856d-b39d-41d8-b47d-c41d4ae9f6ab",
                      "type": "FINISH"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Dependency checked successfully\",\n    \"data\": {\n        \"job_uid\": \"c4956fb7-33b5-4cfc-ad17-24b00d89f029\",\n        \"milestone_uid\": \"c4956fb7-33b5-4cfc-ad17-24b00d89f029\",\n        \"can_proceed\": false,\n        \"message\": \"Job 'job 2' is not completed yet\",\n        \"dependencies\": [\n            {\n                \"parent\": {\n                    \"type\": \"JOB\",\n                    \"job_uid\": \"30a42000-02ea-11ef-ba18-bdafd706092b\"\n                },\n                \"successor\": {\n                    \"type\": \"MILESTONE\",\n                    \"milestone_uid\": \"c4956fb7-33b5-4cfc-ad17-24b00d89f029\"\n                },\n                \"dependency_uid\": \"676c92c7-8e14-4b89-9f8f-b26ccc217000\",\n                \"dependency_type\": \"finish_to_start\",\n                \"created_at\": \"2024-06-07T10:24:47.709Z\",\n                \"updated_at\": \"2024-06-07T10:24:47.709Z\",\n                \"_id\": \"6662dfef0bd17f857b6e896f\"\n            }\n        ]\n    }\n}"
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
                      "example": "Dependency checked successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "job_uid": {
                          "type": "string",
                          "example": "c4956fb7-33b5-4cfc-ad17-24b00d89f029"
                        },
                        "milestone_uid": {
                          "type": "string",
                          "example": "c4956fb7-33b5-4cfc-ad17-24b00d89f029"
                        },
                        "can_proceed": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "message": {
                          "type": "string",
                          "example": "Job 'job 2' is not completed yet"
                        },
                        "dependencies": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "parent": {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "example": "JOB"
                                  },
                                  "job_uid": {
                                    "type": "string",
                                    "example": "30a42000-02ea-11ef-ba18-bdafd706092b"
                                  }
                                }
                              },
                              "successor": {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "example": "MILESTONE"
                                  },
                                  "milestone_uid": {
                                    "type": "string",
                                    "example": "c4956fb7-33b5-4cfc-ad17-24b00d89f029"
                                  }
                                }
                              },
                              "dependency_uid": {
                                "type": "string",
                                "example": "676c92c7-8e14-4b89-9f8f-b26ccc217000"
                              },
                              "dependency_type": {
                                "type": "string",
                                "example": "finish_to_start"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2024-06-07T10:24:47.709Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-06-07T10:24:47.709Z"
                              },
                              "_id": {
                                "type": "string",
                                "example": "6662dfef0bd17f857b6e896f"
                              }
                            }
                          }
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
                      "example": "No Project found for given UID"
                    },
                    "title": {
                      "type": "string",
                      "example": "No Project found for given UID"
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