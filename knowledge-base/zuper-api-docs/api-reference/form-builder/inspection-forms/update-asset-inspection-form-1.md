---
updatedAt: 2026-06-09T07:07:13.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Asset Inspection Form Field

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
    "/assets/inspection_form/{asset_form_uid}/{field_uid}": {
      "put": {
        "summary": "Update Asset Inspection Form Field",
        "description": "",
        "operationId": "update-asset-inspection-form-1",
        "parameters": [
          {
            "name": "asset_form_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "field_uid",
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
                      "field_options": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "lookup_module": {
                        "type": "string",
                        "enum": [
                          "PRODUCT",
                          "JOB_PRODUCT",
                          "ASSET_PART"
                        ]
                      },
                      "is_dependent": {
                        "type": "boolean",
                        "default": false
                      },
                      "dependent_on": {
                        "type": "string"
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
                      "hide_field": {
                        "type": "boolean",
                        "default": false
                      },
                      "read_only": {
                        "type": "boolean",
                        "default": false
                      },
                      "is_required": {
                        "type": "boolean",
                        "default": false
                      },
                      "hide_to_fe": {
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
                      "field_validation": {
                        "type": "string",
                        "description": "number/regex"
                      },
                      "min_value": {
                        "type": "string",
                        "description": "if field_validation is \"number\""
                      },
                      "max_value": {
                        "type": "string",
                        "description": "if field_validation is \"number\""
                      },
                      "regex_value": {
                        "type": "string",
                        "description": "if field_validation is \"regex\""
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
                    "value": "{\n  \"message\": \"Inspection form field updated successfully\",\n  \"title\": \"Inspection form field updated successfully\",\n  \"type\": \"success\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Inspection form field updated successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "Inspection form field updated successfully"
                    },
                    "type": {
                      "type": "string",
                      "example": "success"
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
                    "value": "{\n  \"type\": \"error\",\n  \"title\": \"Inspection Form UID / Field UID Not Found\",\n  \"message\": \"Inspection Form UID / Field UID Not Found\"\n}"
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
                      "example": "Inspection Form UID / Field UID Not Found"
                    },
                    "message": {
                      "type": "string",
                      "example": "Inspection Form UID / Field UID Not Found"
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
                    "value": "{\n    \"message\": \"Error in Updating Inspection Form Field\",\n    \"title\": \"Error in Updating Inspection Form Field\",\n    \"type\": \"error\",\n    \"data\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Updating Inspection Form Field"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Updating Inspection Form Field"
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