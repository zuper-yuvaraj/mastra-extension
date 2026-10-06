---
updatedAt: 2026-06-15T07:13:16.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Expense Details

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
      "get": {
        "summary": "Get Expense Details",
        "description": "",
        "operationId": "get-expense-details",
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
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"success\",\n    \"data\": {\n        \"is_reimbursable\": true,\n        \"is_billable\": true,\n        \"is_deleted\": false,\n        \"attachments\": [\n            {\n                \"attachment_uid\": \"7cfa15d8-a81d-4c79-8545-a72ed6f83328\",\n                \"file_name\": \"test file new\",\n                \"url\": \"kjbk\",\n                \"file_size\": 200,\n                \"visible_to_customer\": false,\n                \"created_by\": 9,\n                \"_id\": \"66f3d688f2242e2f40c834f3\",\n                \"created_at\": \"2024-09-25T09:23:20.560Z\"\n            }\n        ],\n        \"expense_uid\": \"93b7db05-b687-45a8-ac5d-10bcf89bb735\",\n        \"expense_title\": \"Updated expense 1\",\n        \"expense_category\": {\n            \"expense_category_uid\": \"3aa05de4-358c-4769-b518-e4bf67df1bff\",\n            \"category_name\": \"Category 1\",\n            \"category_color\": \"#000000\"\n        },\n        \"expense_date\": \"2024-10-20T09:00:45.000Z\",\n        \"description\": \"new description\",\n        \"expense_amount\": 25,\n        \"reimbursable_to\": {\n            \"first_name\": \"Zayn\",\n            \"last_name\": \"Malik\",\n            \"user_uid\": \"548f253d-29f2-4419-9abc-07eb1e5e7154\"\n        },\n        \"created_by\": {\n            \"first_name\": \"Delvin\",\n            \"last_name\": \"joseph\",\n            \"user_uid\": \"0af4f566-aa7a-4fdb-839a-ee42821a87a0\"\n        },\n        \"job\": null,\n        \"project\": {\n            \"project_uid\": \"4737c8a3-65cb-4dc7-97d0-1370edd35622\",\n            \"project_name\": \"Expense Category\",\n            \"project_due_date\": \"2024-10-31T12:59:59.000Z\",\n            \"project_number\": 2\n        },\n        \"created_at\": \"2024-09-25T08:51:32.012Z\",\n        \"updated_at\": \"2024-09-25T09:24:03.864Z\"\n    }\n}"
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
                      "example": "success"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "is_reimbursable": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "is_billable": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "is_deleted": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "attachments": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "attachment_uid": {
                                "type": "string",
                                "example": "7cfa15d8-a81d-4c79-8545-a72ed6f83328"
                              },
                              "file_name": {
                                "type": "string",
                                "example": "test file new"
                              },
                              "url": {
                                "type": "string",
                                "example": "kjbk"
                              },
                              "file_size": {
                                "type": "integer",
                                "example": 200,
                                "default": 0
                              },
                              "visible_to_customer": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "created_by": {
                                "type": "integer",
                                "example": 9,
                                "default": 0
                              },
                              "_id": {
                                "type": "string",
                                "example": "66f3d688f2242e2f40c834f3"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2024-09-25T09:23:20.560Z"
                              }
                            }
                          }
                        },
                        "expense_uid": {
                          "type": "string",
                          "example": "93b7db05-b687-45a8-ac5d-10bcf89bb735"
                        },
                        "expense_title": {
                          "type": "string",
                          "example": "Updated expense 1"
                        },
                        "expense_category": {
                          "type": "object",
                          "properties": {
                            "expense_category_uid": {
                              "type": "string",
                              "example": "3aa05de4-358c-4769-b518-e4bf67df1bff"
                            },
                            "category_name": {
                              "type": "string",
                              "example": "Category 1"
                            },
                            "category_color": {
                              "type": "string",
                              "example": "#000000"
                            }
                          }
                        },
                        "expense_date": {
                          "type": "string",
                          "example": "2024-10-20T09:00:45.000Z"
                        },
                        "description": {
                          "type": "string",
                          "example": "new description"
                        },
                        "expense_amount": {
                          "type": "integer",
                          "example": 25,
                          "default": 0
                        },
                        "reimbursable_to": {
                          "type": "object",
                          "properties": {
                            "first_name": {
                              "type": "string",
                              "example": "Zayn"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "Malik"
                            },
                            "user_uid": {
                              "type": "string",
                              "example": "548f253d-29f2-4419-9abc-07eb1e5e7154"
                            }
                          }
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "first_name": {
                              "type": "string",
                              "example": "Delvin"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "joseph"
                            },
                            "user_uid": {
                              "type": "string",
                              "example": "0af4f566-aa7a-4fdb-839a-ee42821a87a0"
                            }
                          }
                        },
                        "job": {},
                        "project": {
                          "type": "object",
                          "properties": {
                            "project_uid": {
                              "type": "string",
                              "example": "4737c8a3-65cb-4dc7-97d0-1370edd35622"
                            },
                            "project_name": {
                              "type": "string",
                              "example": "Expense Category"
                            },
                            "project_due_date": {
                              "type": "string",
                              "example": "2024-10-31T12:59:59.000Z"
                            },
                            "project_number": {
                              "type": "integer",
                              "example": 2,
                              "default": 0
                            }
                          }
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2024-09-25T08:51:32.012Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2024-09-25T09:24:03.864Z"
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
                    "value": "{\n    \"message\": \"Expense UID is invalid.\",\n    \"title\": \"Expense UID is invalid.\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Expense UID is invalid."
                    },
                    "title": {
                      "type": "string",
                      "example": "Expense UID is invalid."
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