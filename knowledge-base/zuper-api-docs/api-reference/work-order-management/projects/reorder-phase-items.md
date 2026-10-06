---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Reorder Phase Items

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
    "/projects/{project_uid}/phases/{phase_uid}/reorder": {
      "put": {
        "summary": "Reorder Phase Items",
        "description": "",
        "operationId": "reorder-phase-items",
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
            "name": "phase_uid",
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
                  "phase_items"
                ],
                "properties": {
                  "phase_items": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "phase_item_uid": {
                          "type": "string"
                        },
                        "sequence": {
                          "type": "integer",
                          "format": "int32"
                        }
                      },
                      "required": [
                        "phase_item_uid"
                      ],
                      "type": "object"
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "phase_items": [
                      {
                        "phase_item_uid": "f4007748-de11-4a6f-bb02-b6fd6d6cb4fe",
                        "sequence": 1
                      },
                      {
                        "phase_item_uid": "da906279-c1e3-4589-98f7-1004cee85cc8",
                        "sequence": 2
                      }
                    ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Phase items reordered successfully\",\n    \"data\": {\n        \"project_uid\": \"6208a620-8a50-4563-9e3a-678217c2fadc\",\n        \"phase_uid\": \"cbd03555-e004-4653-afc4-a03a2b5808fc\"\n    }\n}"
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
                      "example": "Phase items reordered successfully"
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
                          "example": "cbd03555-e004-4653-afc4-a03a2b5808fc"
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
                  "Error on no phase": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Phase Not found for given UID\",\n    \"title\": \"Phase Not found\"\n}"
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
                      "title": "Error on no phase",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "example": "error"
                        },
                        "message": {
                          "type": "string",
                          "example": "Phase Not found for given UID"
                        },
                        "title": {
                          "type": "string",
                          "example": "Phase Not found"
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