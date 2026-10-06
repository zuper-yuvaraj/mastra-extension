---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update User Details

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
    "/user/{user_uid}/update": {
      "put": {
        "summary": "Update User Details",
        "description": "",
        "operationId": "update-user-details",
        "parameters": [
          {
            "name": "user_uid",
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
                  "user": {
                    "properties": {
                      "user_uid": {
                        "type": "string"
                      },
                      "first_name": {
                        "type": "string"
                      },
                      "last_name": {
                        "type": "string"
                      },
                      "email": {
                        "type": "string"
                      },
                      "external_login_id": {
                        "type": "string"
                      },
                      "home_phone_number": {
                        "type": "string"
                      },
                      "designation": {
                        "type": "string"
                      },
                      "emp_code": {
                        "type": "string"
                      },
                      "prefix": {
                        "type": "string"
                      },
                      "work_phone_number": {
                        "type": "string"
                      },
                      "mobile_phone_number": {
                        "type": "string"
                      },
                      "profile_picture": {
                        "type": "string"
                      },
                      "hourly_labor_charge": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "is_active": {
                        "type": "boolean"
                      },
                      "is_deleted": {
                        "type": "boolean"
                      },
                      "access_role": {
                        "type": "string",
                        "description": "access role uid"
                      },
                      "business_unit": {
                        "type": "array",
                        "description": "Array of Trade type UIDs (upto 25 trade types)",
                        "items": {
                          "type": "string"
                        }
                      },
                      "custom_fields": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "label": {
                              "type": "string"
                            },
                            "value": {
                              "type": "string"
                            },
                            "type": {
                              "type": "string"
                            },
                            "ref_uid": {
                              "type": "string"
                            },
                            "module_name": {
                              "type": "string",
                              "enum": [
                                "JOB",
                                "CUSTOMER",
                                "EMPLOYEE",
                                "ESTIMATE",
                                "INVOICE",
                                "PRODUCT",
                                "PURCHASE_ORDER",
                                "SERVICE_CONTRACT",
                                "ASSET",
                                "PROPERTY",
                                "ORGANIZATION",
                                "TEAM",
                                "REQUEST",
                                "PROJECT"
                              ]
                            },
                            "hide_to_fe": {
                              "type": "boolean",
                              "default": false
                            },
                            "hide_field": {
                              "type": "boolean",
                              "default": false
                            },
                            "read_only": {
                              "type": "boolean",
                              "default": false
                            },
                            "group_name": {
                              "type": "string"
                            },
                            "group_uid": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "label",
                            "value",
                            "type"
                          ],
                          "type": "object"
                        }
                      },
                      "skillsets": {
                        "type": "array",
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
                      "role_id": {
                        "type": "integer",
                        "description": "role id",
                        "format": "int32"
                      }
                    },
                    "required": [],
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
                    "value": "{\"type\":\"success\",\"message\":\"User details updated successfully\"}"
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
                      "example": "User details updated successfully"
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
                    "value": "{\n\t\t\t\t\"message\": \"\",\n\t\t\t\t\"title\": \"\",\n\t\t\t\t\"type\": \"\"\n}"
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
                    "value": "{\n\t\t\t\t\"message\": \"\",\n\t\t\t\t\"title\": \"\",\n\t\t\t\t\"type\": \"\",\n          \"info\":\"\"\n}"
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
                      "example": ""
                    },
                    "info": {
                      "type": "string",
                      "example": ""
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