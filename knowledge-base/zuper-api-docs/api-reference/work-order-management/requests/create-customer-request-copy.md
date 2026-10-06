---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Request

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
    "/request/{request_uid}": {
      "put": {
        "summary": "Update Request",
        "description": "",
        "operationId": "create-customer-request-copy",
        "parameters": [
          {
            "name": "request_uid",
            "in": "path",
            "description": "request uid",
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
                  "request"
                ],
                "properties": {
                  "request": {
                    "type": "object",
                    "description": "Request object",
                    "required": [
                      "request_title"
                    ],
                    "properties": {
                      "request_title": {
                        "type": "string"
                      },
                      "customer_uid": {
                        "type": "string"
                      },
                      "organization_uid": {
                        "type": "string"
                      },
                      "attachments": {
                        "type": "object",
                        "required": [
                          "file_name",
                          "url"
                        ],
                        "properties": {
                          "file_name": {
                            "type": "string"
                          },
                          "url": {
                            "type": "string"
                          },
                          "file_size": {
                            "type": "integer",
                            "format": "int32"
                          },
                          "visible_to_customer": {
                            "type": "boolean",
                            "default": false
                          }
                        }
                      },
                      "request_due_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "request_preferred_date1": {
                        "type": "object",
                        "properties": {}
                      },
                      "request_preferred_date2": {
                        "type": "object",
                        "required": [
                          "start_time",
                          "end_time"
                        ],
                        "properties": {
                          "start_time": {
                            "type": "string",
                            "format": "date"
                          },
                          "end_time": {
                            "type": "string",
                            "format": "date"
                          }
                        }
                      },
                      "service_address": {
                        "type": "object",
                        "properties": {
                          "city": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "landmark": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number",
                              "format": "double"
                            }
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string",
                            "description": "Customer phone number"
                          },
                          "email": {
                            "type": "string",
                            "description": "Customer email"
                          },
                          "label": {
                            "type": "string",
                            "description": "Label"
                          }
                        }
                      },
                      "billing_address": {
                        "type": "object",
                        "properties": {
                          "landmark": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          }
                        }
                      },
                      "request_priority": {
                        "type": "string",
                        "enum": [
                          "LOW",
                          "MEDIUM",
                          "HIGH",
                          "URGENT"
                        ]
                      },
                      "request_status": {
                        "type": "string",
                        "description": "request status uid"
                      },
                      "asset_uid": {
                        "type": "string"
                      },
                      "property_uid": {
                        "type": "string"
                      },
                      "contract_uid": {
                        "type": "string"
                      },
                      "request_source": {
                        "type": "string",
                        "description": "request source uid"
                      },
                      "request_service": {
                        "type": "string",
                        "description": "request service uid"
                      },
                      "assigned_to": {
                        "type": "object",
                        "properties": {
                          "user_uid": {
                            "type": "string"
                          },
                          "team_uid": {
                            "type": "string"
                          }
                        }
                      },
                      "request_description": {
                        "type": "string"
                      },
                      "": {
                        "type": "string"
                      }
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Customer Request  Updated successfully\",\n    \"data\": {\n        \"request_uid\": \"08b6bb50-222d-11ee-97be-4f30d4c89c9d\"\n    }\n}"
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
                      "example": "Customer Request  Updated successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "request_uid": {
                          "type": "string",
                          "example": "08b6bb50-222d-11ee-97be-4f30d4c89c9d"
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
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
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