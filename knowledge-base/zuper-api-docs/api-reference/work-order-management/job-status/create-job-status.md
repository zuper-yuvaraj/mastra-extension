---
updatedAt: 2026-08-11T14:46:49.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Job Status

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
    "/jobs/status_new/{category_uid}": {
      "post": {
        "summary": "Create Job Status",
        "description": "",
        "operationId": "create-job-status",
        "parameters": [
          {
            "name": "category_uid",
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
                  "job_status": {
                    "type": "object",
                    "properties": {
                      "status_name": {
                        "type": "string"
                      },
                      "status_type": {
                        "type": "string"
                      },
                      "status_description": {
                        "type": "string"
                      },
                      "status_color": {
                        "type": "string"
                      },
                      "require_customer_signature": {
                        "type": "boolean"
                      },
                      "require_preview": {
                        "type": "boolean"
                      },
                      "require_customer_feedback": {
                        "type": "boolean"
                      },
                      "require_facial_authentication": {
                        "type": "boolean"
                      },
                      "require_geo_fencing": {
                        "type": "boolean"
                      },
                      "enabled_for_field_executive": {
                        "type": "boolean"
                      },
                      "enabled_for_manager": {
                        "type": "boolean"
                      },
                      "allow_remarks": {
                        "type": "boolean"
                      },
                      "has_parent": {
                        "type": "boolean"
                      },
                      "capture_geo_cords": {
                        "type": "boolean"
                      },
                      "restrict_to_access_role": {
                        "type": "boolean"
                      },
                      "geo_fencing_radius": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "remarks_type": {
                        "type": "string",
                        "enum": [
                          "PREDEFINED",
                          "FREE_TEXT",
                          "BOTH"
                        ]
                      },
                      "remarks_values": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "parent_status": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "enabled_to_access_role": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "track_time_in_status": {
                        "type": "boolean"
                      },
                      "estimated_duration": {
                        "type": "object",
                        "properties": {
                          "days": {
                            "type": "number"
                          },
                          "hours": {
                            "type": "number"
                          },
                          "minutes": {
                            "type": "string"
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
                    "job_status": {
                      "require_customer_signature": "true",
                      "require_preview": "true",
                      "require_customer_feedback": "true",
                      "require_facial_authentication": "true",
                      "require_geo_fencing": "true",
                      "enabled_for_field_executive": "true",
                      "enabled_for_manager": "true",
                      "allow_remarks": "true",
                      "has_parent": "true",
                      "capture_geo_cords": "true",
                      "restrict_to_access_role": "true",
                      "remarks_values": [
                        "We have just started"
                      ],
                      "status_name": "New",
                      "status_type": "NEW",
                      "status_color": "#02B875",
                      "status_description": "Description",
                      "geo_fencing_radius": 20,
                      "remarks_type": "BOTH",
                      "parent_status": [
                        "b7ddff54-b1e7-493f-8cf7-b9cf9ec2fb6c"
                      ],
                      "enabled_to_access_role": [
                        "538a0be7-7664-4ea4-9e48-b2b7eb89841c"
                      ]
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
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Job Status saved successfully\"\n}"
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
                      "example": "Job Status saved successfully"
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
                    "value": "{\n    \"message\": \"Category ID / Job Status Missing\",\n    \"title\": \"Missing Mandatory data - Category ID & Job Status\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Category ID / Job Status Missing"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Mandatory data - Category ID & Job Status"
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
                    "value": "{\n    \"message\": \"No Category is found for given Category UID\",\n    \"title\": \"No Category is found\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "No Category is found for given Category UID"
                    },
                    "title": {
                      "type": "string",
                      "example": "No Category is found"
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
                    "value": "{\n    \"message\":\"Error in getting categories\",\n    \"title\": \"Error in getting categories\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in getting categories"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in getting categories"
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