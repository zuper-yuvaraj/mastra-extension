---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Asset Status

Updates an asset's status. Automatically inserts a STATUS_UPDATE Asset History row.

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
    "/assets/{asset_uid}/status": {
      "put": {
        "summary": "Update Asset Status",
        "description": "Updates an asset's status. Automatically inserts a STATUS_UPDATE Asset History row.",
        "operationId": "update-asset-status",
        "parameters": [
          {
            "name": "asset_uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Asset Status Updated successfully\",\n    \"data\": { \"asset_uid\": \"\" }\n}\n"
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
                      "example": "Asset Status Updated successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "asset_uid": {
                          "type": "string",
                          "example": ""
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
                    "value": "{\n    \"message\": \"\",\n    \"title\": \"\",\n    \"type\": \"error\"\n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
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
                  "Result": {
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Invalid Asset UID\",\n    \"message\": \"\"\n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": "Invalid Asset UID"
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
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Error In Updating Asset Status\",\n    \"title\": \"Error In Updating Asset Status\",\n    \"data\": \"your_error_data_here\"\n}\n"
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
                      "example": "Error In Updating Asset Status"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error In Updating Asset Status"
                    },
                    "data": {
                      "type": "string",
                      "example": "your_error_data_here"
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "asset_status"
                ],
                "properties": {
                  "asset_status": {
                    "type": "string",
                    "enum": [
                      "READY_TO_INSTALL",
                      "INSTALLED",
                      "UNDER_SERVICE",
                      "REMOVED",
                      "OBSOLETE",
                      "ONLINE",
                      "OFFLINE",
                      "NEED_REPAIR"
                    ]
                  },
                  "remove_from_customer": {
                    "type": "boolean",
                    "default": false
                  },
                  "remarks": {
                    "type": "string"
                  },
                  "serial_number": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
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