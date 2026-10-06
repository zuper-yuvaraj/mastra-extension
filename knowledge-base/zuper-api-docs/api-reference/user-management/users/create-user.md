---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create User

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
    "/user": {
      "post": {
        "summary": "Create User",
        "description": "",
        "operationId": "create-user",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "work_hours"
                ],
                "properties": {
                  "work_hours": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "work_hours.is_enabled": {
                          "type": "string"
                        },
                        "work_hours.work_mins": {
                          "type": "string"
                        },
                        "work_hours.end_time": {
                          "type": "string"
                        },
                        "work_hours.start_time": {
                          "type": "string"
                        },
                        "work_hours.day": {
                          "type": "string"
                        },
                        "work_hours.track_location": {
                          "type": "boolean"
                        }
                      },
                      "type": "object"
                    }
                  },
                  "user": {
                    "properties": {
                      "access_role": {
                        "type": "string"
                      },
                      "email": {
                        "type": "string"
                      },
                      "profile_picture": {
                        "type": "string"
                      },
                      "prefix": {
                        "type": "string"
                      },
                      "external_login_id": {
                        "type": "string"
                      },
                      "designation": {
                        "type": "string"
                      },
                      "emp_code": {
                        "type": "string"
                      },
                      "role_id": {
                        "type": "string"
                      },
                      "last_name": {
                        "type": "string"
                      },
                      "first_name": {
                        "type": "string"
                      },
                      "password": {
                        "type": "string"
                      },
                      "skillsets": {
                        "type": "array",
                        "description": "Skillset Object",
                        "items": {
                          "properties": {
                            "user.skillsets.skillset_uid": {
                              "type": "string"
                            },
                            "user.skillsets.start_date": {
                              "type": "string",
                              "format": "date"
                            },
                            "user.skillsets.end_date": {
                              "type": "string",
                              "format": "date"
                            },
                            "user.skillsets.skill_level": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "team_uid": {
                        "type": "array",
                        "description": "Array of team_uids (upto 10 teams)",
                        "items": {
                          "type": "string"
                        }
                      },
                      "meta_data": {
                        "type": "object",
                        "description": "{ 'default_product_location': 'xxxxxx' }",
                        "properties": {}
                      },
                      "business_unit": {
                        "type": "array",
                        "description": "Array of Trade type UIDs (upto 25 trade types)",
                        "items": {
                          "type": "string"
                        }
                      }
                    },
                    "required": [
                      "email",
                      "designation",
                      "emp_code",
                      "role_id",
                      "last_name",
                      "first_name",
                      "password"
                    ],
                    "type": "object"
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
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"User has been successfully created\",\n    \"message\": \"The user account has been created successfully.\",\n    \"data\": {\n        \"user_uid\": \"user_uid\"\n    }\n}"
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
                      "example": "User has been successfully created"
                    },
                    "message": {
                      "type": "string",
                      "example": "The user account has been created successfully."
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "user_uid": {
                          "type": "string",
                          "example": "user_uid"
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
                    "value": "{\n    \"message\": \"User with same email ID / external login ID already exists\",\n    \"title\": \"User already exists\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "User with same email ID / external login ID already exists"
                    },
                    "title": {
                      "type": "string",
                      "example": "User already exists"
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
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"message\": \"Error in creating work hours for the user\",\n    \"type\": \"error\",\n    \"title\": \"Error in creation\",\n    \"info\": \"Database Error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in creating work hours for the user"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in creation"
                    },
                    "info": {
                      "type": "string",
                      "example": "Database Error"
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