---
updatedAt: 2026-06-15T07:12:33.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Expense

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
    "/expenses": {
      "post": {
        "summary": "Create Expense",
        "description": "",
        "operationId": "createexpense",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "expense": {
                    "type": "object",
                    "required": [
                      "expense_date",
                      "expense_title",
                      "expense_category",
                      "expense_amount"
                    ],
                    "properties": {
                      "expense_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "expense_title": {
                        "type": "string"
                      },
                      "expense_category": {
                        "type": "string",
                        "description": "expense category uid"
                      },
                      "description": {
                        "type": "string"
                      },
                      "expense_amount": {
                        "type": "string"
                      },
                      "job": {
                        "type": "string",
                        "description": "Job uid"
                      },
                      "project": {
                        "type": "string",
                        "description": "Project Uid"
                      },
                      "reimbursable_to": {
                        "type": "string",
                        "description": "The UID of the user to whom the expense is reimbursable"
                      },
                      "is_reimbursable": {
                        "type": "boolean",
                        "default": false
                      },
                      "is_billable": {
                        "type": "boolean",
                        "default": false
                      },
                      "attachments": {
                        "type": "array",
                        "items": {
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
                          },
                          "required": [
                            "file_name",
                            "url"
                          ],
                          "type": "object"
                        }
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Created Successfully\",\n    \"message\": \"Created Successfully\",\n    \"data\": {\n        \"expense_uid\": \"uid\"\n    }\n}"
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
                      "example": "Created Successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Created Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "expense_uid": {
                          "type": "string",
                          "example": "uid"
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
                    "value": "{\n    \"message\": \"Expense category uid is invalid.\",\n    \"title\": \"Expense category uid is invalid.\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Expense category uid is invalid."
                    },
                    "title": {
                      "type": "string",
                      "example": "Expense category uid is invalid."
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
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