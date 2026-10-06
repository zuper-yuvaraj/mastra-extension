---
updatedAt: 2026-08-11T14:46:49.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Job Status

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
    "/jobs/status/{category_uid}": {
      "put": {
        "summary": "Update Job Status",
        "description": "",
        "operationId": "update-job-status-1",
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
                      "status_uid": {
                        "type": "string"
                      },
                      "status_name": {
                        "type": "string"
                      },
                      "status_type": {
                        "type": "string"
                      },
                      "status_color": {
                        "type": "string"
                      },
                      "require_customer_signature": {
                        "type": "string"
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
                      "parent_status": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "enabled_for_field_executive": {
                        "type": "boolean"
                      },
                      "enabled_for_manager": {
                        "type": "boolean"
                      },
                      "allow_remarks": {
                        "type": "string"
                      },
                      "capture_geo_cords": {
                        "type": "boolean"
                      },
                      "has_parent": {
                        "type": "boolean"
                      },
                      "remarks_values": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "checklist_view_type": {
                        "type": "string"
                      },
                      "prefill_checklist": {
                        "type": "boolean"
                      },
                      "display_status_type": {
                        "type": "string"
                      },
                      "status_description": {
                        "type": "string"
                      },
                      "enabled_to_access_role": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "geo_fencing_radius": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "remarks_type": {
                        "type": "string",
                        "default": "PREDEFINED,FREE_TEXT_BOTH"
                      }
                    }
                  },
                  "RAW_BODY": {
                    "type": "string"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "job_status": {
                      "status_uid": "b34f479c-2dcd-45fd-874d-9f8858566edf",
                      "status_name": "New",
                      "status_type": "NEW",
                      "status_color": "#02B875",
                      "require_customer_signature": "false",
                      "require_preview": false,
                      "require_customer_feedback": false,
                      "require_facial_authentication": false,
                      "require_geo_fencing": false,
                      "parent_status": [],
                      "enabled_for_field_executive": true,
                      "enabled_for_manager": true,
                      "allow_remarks": "false",
                      "capture_geo_cords": false,
                      "has_parent": false,
                      "remarks_values": [],
                      "_id": "63bd113767d3c2d76e647e43",
                      "checklist_view_type": "",
                      "prefill_checklist": false,
                      "display_status_type": "NEW",
                      "status_description": "e",
                      "enabled_to_access_role": []
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
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Job Status updated successfully\"\n}"
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
                      "example": "Job Status updated successfully"
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
                    "value": "{\n      message: \"Category ID / Job Status/ UID Missing\",\n      title: \"Missing Mandatory data - Category ID & Job Status\",\n      type: \"error\"\n}"
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
                    "value": "{\n      message: \"No Status is found for given Category UID\",\n\t\t\ttitle: \"No Status is found\",\n      type: \"error\"\n}"
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