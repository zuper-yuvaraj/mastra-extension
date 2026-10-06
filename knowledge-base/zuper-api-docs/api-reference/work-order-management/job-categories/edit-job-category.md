---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Edit Job Category

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
    "/jobs/category": {
      "put": {
        "summary": "Edit Job Category",
        "description": "",
        "operationId": "edit-job-category",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "category": {
                    "type": "object",
                    "properties": {
                      "category_uid": {
                        "type": "string"
                      },
                      "category_name": {
                        "type": "string"
                      },
                      "category_color": {
                        "type": "string"
                      },
                      "category_description": {
                        "type": "string"
                      },
                      "estimated_duration": {
                        "type": "object",
                        "properties": {
                          "days": {
                            "type": "integer",
                            "format": "int32"
                          },
                          "hours": {
                            "type": "integer",
                            "format": "int32"
                          },
                          "minutes": {
                            "type": "integer",
                            "format": "int32"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "category": {
                      "category_name": "Installation",
                      "category_uid": "c506e890-015e-11eb-99a8-e7fcc50f879e",
                      "category_color": "#e67e22",
                      "category_description": "<p>Category Description</p>",
                      "estimated_duration": {
                        "days": 1,
                        "hours": 3,
                        "minutes": 1
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
                    "value": "{\n  \"type\": \"success\",\n  \"title\": \"Category Updated\",\n  \"message\": \"The Category has been updated successfully\"\n}"
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
                      "example": "Category Updated"
                    },
                    "message": {
                      "type": "string",
                      "example": "The Category has been updated successfully"
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
                    "value": "{\n    \"message\": \"Category Name / UID Missing\",\n    \"title\": \"Missing Category Name / UID\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Category Name / UID Missing"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Category Name / UID"
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
                    "value": "{\n    \"message\": \"No Category found for given Category UID\",\n    \"title\": \"No Category found\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "No Category found for given Category UID"
                    },
                    "title": {
                      "type": "string",
                      "example": "No Category found"
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
          "409": {
            "description": "409",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"message\": \"Category Name Already Exists\",\n    \"title\": \"Duplicate Category Name\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Category Name Already Exists"
                    },
                    "title": {
                      "type": "string",
                      "example": "Duplicate Category Name"
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