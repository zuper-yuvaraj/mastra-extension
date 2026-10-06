---
updatedAt: 2026-06-09T07:06:25.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Inspection form

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
    "/assets/inspection_form/{asset_form_uid}": {
      "post": {
        "summary": "Create Inspection form",
        "description": "",
        "operationId": "create-inspection-form",
        "parameters": [
          {
            "name": "asset_form_uid",
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
                  "asset_form_field": {
                    "properties": {
                      "label": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      },
                      "description": {
                        "type": "string"
                      },
                      "placeholder": {
                        "type": "string"
                      },
                      "field_validation": {
                        "type": "string"
                      },
                      "is_dependent": {
                        "type": "boolean",
                        "default": false
                      },
                      "dependent_on": {
                        "type": "boolean",
                        "default": false
                      },
                      "dependent_options": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "type": {
                        "type": "string",
                        "enum": [
                          "SINGLE_LINE",
                          "MULTI_LINE",
                          "SINGLE_ITEM",
                          "MULTI_ITEM",
                          "RADIO",
                          "NUMBER",
                          "DATE",
                          "TIME",
                          "BARCODE",
                          "IMAGE",
                          "MULTI_IMAGE",
                          "DATETIME",
                          "SIGNATURE",
                          "HEADER",
                          "FILE",
                          "LOOKUP",
                          "VIDEO",
                          "TABLE"
                        ]
                      },
                      "lookup_module": {
                        "type": "string",
                        "description": "If type is \"LOOKUP\"",
                        "enum": [
                          "PRODUCT",
                          "JOB_PRODUCT",
                          "ASSET_PART"
                        ]
                      },
                      "hide_to_fe": {
                        "type": "boolean",
                        "default": false
                      },
                      "field_options": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "is_required": {
                        "type": "boolean",
                        "default": false
                      },
                      "default_option": {
                        "type": "boolean",
                        "default": false
                      },
                      "default_options": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "min_value": {
                        "type": "string",
                        "description": "If field_validation is \"number\""
                      },
                      "max_value": {
                        "type": "string",
                        "description": "If field_validation is \"number\""
                      },
                      "regex_value": {
                        "type": "string",
                        "description": "If field_validation is \"regex\""
                      },
                      "hide_field": {
                        "type": "boolean",
                        "default": false
                      },
                      "read_only": {
                        "type": "boolean",
                        "default": false
                      },
                      "meta_options": {
                        "type": "object",
                        "properties": {
                          "restrict_to_camera": {
                            "type": "boolean",
                            "default": false
                          },
                          "watermark_timestamp": {
                            "type": "boolean",
                            "default": false
                          },
                          "watermark_geo_cords": {
                            "type": "boolean",
                            "default": false
                          }
                        }
                      },
                      "company_default_folder": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "folder_uid": {
                              "type": "string",
                              "description": "Default folder UID"
                            }
                          },
                          "type": "object"
                        }
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
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Asset Inspection Form Field created successfully\",\n  \"data\": {\n    \"field_uid\": \"44eed013-64db-4c1a-b683-2ea7c86e8fe0\"\n  }\n}"
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
                      "example": "Asset Inspection Form Field created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "field_uid": {
                          "type": "string",
                          "example": "44eed013-64db-4c1a-b683-2ea7c86e8fe0"
                        }
                      }
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
                    "value": "{\n    \"message\": \"Error in Creating Inspection form\",\n    \"title\": \"Error in Creating Inspection form\",\n    \"type\": \"error\",\n    \"data\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Creating Inspection form"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Creating Inspection form"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "data": {
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