---
updatedAt: 2026-06-15T07:12:54.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Expense

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
    "/expenses/{expense_uid}": {
      "put": {
        "summary": "Update Expense",
        "description": "",
        "operationId": "update-expense",
        "parameters": [
          {
            "name": "expense_uid",
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
                "properties": {
                  "expense": {
                    "type": "object",
                    "properties": {
                      "expense_title": {
                        "type": "string"
                      },
                      "expense_category": {
                        "type": "string",
                        "description": "Expense Category UID"
                      },
                      "expense_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "description": {
                        "type": "string"
                      },
                      "expense_amount": {
                        "type": "string"
                      },
                      "job": {
                        "type": "string",
                        "description": "Job UID"
                      },
                      "project": {
                        "type": "string",
                        "description": "Project UID"
                      },
                      "reimbursable_to": {
                        "type": "string",
                        "description": "The UID of the User to whom the expense is reimbursable"
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Updated Successfully\",\n    \"message\": \"Updated Successfully\"\n}"
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
                      "example": "Updated Successfully"
                    },
                    "message": {
                      "type": "string",
                      "example": "Updated Successfully"
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
                    "value": "{\n    \"message\": \"Expense amount is greater than max amount.\",\n    \"title\": \"Expense amount is greater than max amount.\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Expense amount is greater than max amount."
                    },
                    "title": {
                      "type": "string",
                      "example": "Expense amount is greater than max amount."
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