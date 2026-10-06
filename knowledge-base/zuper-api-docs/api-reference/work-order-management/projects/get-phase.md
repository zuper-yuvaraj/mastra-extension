---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get All Phases

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
      "get": {
        "summary": "Get All Phases",
        "description": "",
        "operationId": "get-phase",
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
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"phase_uid\": \"78b8f497-0956-4728-ac79-25d9b15375a5\",\n            \"phase_name\": \"Phase-5\",\n            \"phase_color\": \"#ffffff\",\n            \"default\": false,\n            \"sequence\": 1,\n            \"phase_items\": [\n                {\n                    \"phase_item_uid\": \"47d9cb12-9eed-4ce5-832f-410ba4da748b\",\n                    \"milestone_uid\": \"f5362783-7c14-421d-8013-29681baaef79\",\n                    \"sequence\": 1,\n                    \"_id\": \"6662b5bdd7dc4099f34d934b\"\n                },\n                {\n                    \"phase_item_uid\": \"990d9cb12-343-4ce5-832f-98390\",\n                    \"job_uid\": \"334434-7c14-421d-8013-6rg64g43\",\n                    \"sequence\": 2,\n                    \"_id\": \"9962b5bdd7dc4099f34d934b\"\n                }\n            ],\n            \"created_at\": \"2024-06-07T07:24:45.694Z\",\n            \"updated_at\": \"2024-06-07T07:24:45.694Z\",\n            \"_id\": \"6662b5bdd7dc4099f34d9348\"\n        }\n    ]\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "phase_uid": {
                            "type": "string",
                            "example": "78b8f497-0956-4728-ac79-25d9b15375a5"
                          },
                          "phase_name": {
                            "type": "string",
                            "example": "Phase-5"
                          },
                          "phase_color": {
                            "type": "string",
                            "example": "#ffffff"
                          },
                          "default": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "sequence": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
                          },
                          "phase_items": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "phase_item_uid": {
                                  "type": "string",
                                  "example": "47d9cb12-9eed-4ce5-832f-410ba4da748b"
                                },
                                "milestone_uid": {
                                  "type": "string",
                                  "example": "f5362783-7c14-421d-8013-29681baaef79"
                                },
                                "sequence": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                },
                                "_id": {
                                  "type": "string",
                                  "example": "6662b5bdd7dc4099f34d934b"
                                }
                              }
                            }
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2024-06-07T07:24:45.694Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2024-06-07T07:24:45.694Z"
                          },
                          "_id": {
                            "type": "string",
                            "example": "6662b5bdd7dc4099f34d9348"
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