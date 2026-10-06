---
updatedAt: 2026-10-02T14:13:49.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get All Workflow Conditions

Returns the available condition fields (default + custom) for a given module and trigger event — required query params module_name and event_name (400 "Missing Module / Event Name" if either is omitted, 400 "Invalid Module Name" if module_name is unrecognized). Use the values from Get Workflow Modules.

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
    "/workflow/conditions": {
      "get": {
        "summary": "Get All Workflow Conditions",
        "description": "Returns the available condition fields (default + custom) for a given module and trigger event — required query params module_name and event_name (400 \"Missing Module / Event Name\" if either is omitted, 400 \"Invalid Module Name\" if module_name is unrecognized). Use the values from Get Workflow Modules.",
        "operationId": "get-all-workflow-conditions",
        "parameters": [
          {
            "name": "module_name",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "event_name",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"default_fields\": [], \"custom_fields\": [{\"field_name\": \"test_JS\", \"field_type\": \"SINGLE_LINE\", \"field_placeholder\": \"JSSS\", \"field_options\": [], \"lookup_module\": \"PRODUCT\", \"field_validation\": \"/.*/\", \"is_required\": true, \"group\": {\"module_name\": \"JOB\", \"group_name\": \"js\", \"group_uid\": \"6f6e5598-dc1c-40bd-b2bb-7435f6af4030\", \"category\": {\"category_uid\": \"d1da5619-2917-4508-8adc-d37b0c699a93\", \"category_name\": \"test\", \"category_color\": \"#3498db\"}, \"associated_to\": [{\"category_uid\": \"d1da5619-2917-4508-8adc-d37b0c699a93\", \"category_name\": \"test\", \"category_color\": \"#3498db\"}], \"order_no\": 1, \"is_deleted\": false}, \"hide_to_fe\": false, \"field_key\": \"test_JS\"}, {\"field_name\": \"test_JS\", \"field_type\": \"DATETIME\", \"field_description\": null, \"field_placeholder\": \"JSSS\", \"field_options\": [], \"lookup_module\": \"PRODUCT\", \"field_validation\": \"[/.*/][/.*/]\", \"is_required\": true, \"group\": {\"module_name\": \"JOB\", \"group_name\": \"js\", \"group_uid\": \"6f6e5598-dc1c-40bd-b2bb-7435f6af4030\", \"category\": {\"category_uid\": \"d1da5619-2917-4508-8adc-d37b0c699a93\", \"category_name\": \"test\", \"category_color\": \"#3498db\"}, \"associated_to\": [{\"category_uid\": \"d1da5619-2917-4508-8adc-d37b0c699a93\", \"category_name\": \"test\", \"category_color\": \"#3498db\"}], \"order_no\": 1, \"is_deleted\": false}, \"hide_to_fe\": false, \"max_value\": \"12\", \"min_value\": \"0\", \"field_key\": \"test_JS\"}]}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "default_fields": {
                      "type": "array"
                    },
                    "custom_fields": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "field_name": {
                            "type": "string",
                            "example": "test_JS"
                          },
                          "field_type": {
                            "type": "string",
                            "example": "SINGLE_LINE"
                          },
                          "field_placeholder": {
                            "type": "string",
                            "example": "JSSS"
                          },
                          "field_options": {
                            "type": "array"
                          },
                          "lookup_module": {
                            "type": "string",
                            "example": "PRODUCT"
                          },
                          "field_validation": {
                            "type": "string",
                            "example": "/.*/"
                          },
                          "is_required": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "group": {
                            "type": "object",
                            "properties": {
                              "module_name": {
                                "type": "string",
                                "example": "JOB"
                              },
                              "group_name": {
                                "type": "string",
                                "example": "js"
                              },
                              "group_uid": {
                                "type": "string",
                                "example": "6f6e5598-dc1c-40bd-b2bb-7435f6af4030"
                              },
                              "category": {
                                "type": "object",
                                "properties": {
                                  "category_uid": {
                                    "type": "string",
                                    "example": "d1da5619-2917-4508-8adc-d37b0c699a93"
                                  },
                                  "category_name": {
                                    "type": "string",
                                    "example": "test"
                                  },
                                  "category_color": {
                                    "type": "string",
                                    "example": "#3498db"
                                  }
                                }
                              },
                              "associated_to": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "category_uid": {
                                      "type": "string",
                                      "example": "d1da5619-2917-4508-8adc-d37b0c699a93"
                                    },
                                    "category_name": {
                                      "type": "string",
                                      "example": "test"
                                    },
                                    "category_color": {
                                      "type": "string",
                                      "example": "#3498db"
                                    }
                                  }
                                }
                              },
                              "order_no": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "is_deleted": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "hide_to_fe": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "field_key": {
                            "type": "string",
                            "example": "test_JS"
                          }
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
                    "value": "{\"message\": \"No data found for given Module Name\", \"title\": \"Invalid Module Name\", \"type\": \"error\"}"
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
                    "value": "{\"message\": \"Error in getting workflow condition\", \"type\": \"error\", \"title\": \"Error in getting workflow condition\", \"info\": \"Database Error\"}"
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "x-internal": false
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