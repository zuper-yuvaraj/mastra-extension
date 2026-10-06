---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Reorder Service Tasks

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
    "/service_tasks/reorder": {
      "post": {
        "summary": "Reorder Service Tasks",
        "description": "",
        "operationId": "reorder-service-tasks",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "service_task_uid": {
                          "type": "string"
                        },
                        "sequence_no": {
                          "type": "integer",
                          "format": "int32"
                        }
                      },
                      "type": "object"
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": [
                    {
                      "service_task_uid": "f088bc50-f2ec-11ed-99bb-1392cd29ead4",
                      "sequence_no": 1
                    },
                    {
                      "service_task_uid": "f088bc51-f2ec-11ed-99bb-1392cd29ead4",
                      "sequence_no": 2
                    },
                    {
                      "service_task_uid": "c17553e0-f2f3-11ed-99bb-1392cd29ead4",
                      "sequence_no": 3
                    },
                    {
                      "service_task_uid": "c17553e1-f2f3-11ed-99bb-1392cd29ead4",
                      "sequence_no": 4
                    }
                  ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Service Task Sequence Updated\",\n    \"message\": \"Service Task Sequence has been updated successfully\",\n    \"data\": {\n        \"service_task_uid\": [\n            \"f088bc50-f2ec-11ed-99bb-1392cd29ead4\",\n            \"f088bc51-f2ec-11ed-99bb-1392cd29ead4\",\n            \"c17553e0-f2f3-11ed-99bb-1392cd29ead4\",\n            \"c17553e1-f2f3-11ed-99bb-1392cd29ead4\"\n        ]\n    }\n}"
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
                      "example": "Service Task Sequence Updated"
                    },
                    "message": {
                      "type": "string",
                      "example": "Service Task Sequence has been updated successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "service_task_uid": {
                          "type": "array",
                          "items": {
                            "type": "string",
                            "example": "f088bc50-f2ec-11ed-99bb-1392cd29ead4"
                          }
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
                    "value": "{\n    \"type\": \"\",\n    \"title\": \"\",\n    \"message\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "401",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"\",\n    \"message\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
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