---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Bulk Action Quote

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
    "/estimate/bulk_action": {
      "post": {
        "summary": "Bulk Action Quote",
        "description": "",
        "operationId": "bulk-action-quote",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "enum": [
                      "update_field",
                      "update_status",
                      "send_email"
                    ]
                  },
                  "estimate_uid": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "action_options": {
                    "type": "object",
                    "properties": {
                      "estimate_status": {
                        "type": "string",
                        "enum": [
                          "DRAFT",
                          "AWAIT_RESPONSE",
                          "APPROVED",
                          "DECLINED",
                          "ARCHIVED",
                          "CLOSED",
                          "CANCELED",
                          "REQUEST_CHANGE"
                        ]
                      },
                      "estimate_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "expiry_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "template": {
                        "type": "string",
                        "format": "date"
                      },
                      "remarks": {
                        "type": "string"
                      },
                      "custom_field": {
                        "type": "object",
                        "properties": {
                          "label": {
                            "type": "string"
                          },
                          "value": {
                            "type": "string"
                          }
                        }
                      },
                      "email_body": {
                        "type": "string"
                      },
                      "email_subject": {
                        "type": "string"
                      },
                      "from_email": {
                        "type": "string"
                      },
                      "user_uid": {
                        "type": "string"
                      }
                    }
                  },
                  "filter": {
                    "type": "object",
                    "properties": {
                      "estimate_date_filter": {
                        "type": "string"
                      },
                      "expiry_date_filter": {
                        "type": "string"
                      },
                      "estimate_from_date": {
                        "type": "string"
                      },
                      "estimate_to_date": {
                        "type": "string"
                      },
                      "expiry_from_date": {
                        "type": "string"
                      },
                      "expiry_to_date": {
                        "type": "string"
                      }
                    }
                  }
                }
              },
              "examples": {
                "update_status": {
                  "value": {
                    "action": "update_status",
                    "action_options": {
                      "invoice_status": "DRAFT"
                    },
                    "invoice_uid": [
                      "40877f50-9b1e-11ee-8051-e94c9637bc02"
                    ],
                    "filter": {
                      "invoice_date_filter": "ANY",
                      "due_date_filter": "ANY",
                      "invoice_from_date": "",
                      "invoice_to_date": "",
                      "due_from_date": "",
                      "due_to_date": "",
                      "status": "DRAFT",
                      "job": "",
                      "customer": "",
                      "estimate": "",
                      "organization": "",
                      "created_by": "",
                      "team_uid": ""
                    }
                  }
                },
                "update_field": {
                  "value": {
                    "action": "update_status",
                    "action_options": {
                      "estimate_status": "DRAFT"
                    },
                    "estimate_uid": [
                      "21debe00-a4ac-11ee-8e9d-1d728fadda90"
                    ],
                    "filter": {
                      "estimate_date_filter": "ANY",
                      "expiry_date_filter": "ANY",
                      "estimate_from_date": "",
                      "estimate_to_date": "",
                      "expiry_from_date": "",
                      "expiry_to_date": ""
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
                    "value": "{\n  \"type\": \"success\",\n  \"title\": \"Field updated in Estimates successfully\",\n  \"message\": \"Field updated in Estimates successfully\"\n}"
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
                      "example": "Field updated in Estimates successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Field updated in Estimates successfully"
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