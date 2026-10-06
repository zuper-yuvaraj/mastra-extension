---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Job Checklist

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
    "/settings/checklist/{checklist_uid}": {
      "put": {
        "summary": "Update Job Checklist",
        "description": "",
        "operationId": "update-job-checklist-1",
        "parameters": [
          {
            "name": "checklist_uid",
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
                  "checklist": {
                    "type": "object",
                    "required": [
                      "field_name"
                    ],
                    "properties": {
                      "field_name": {
                        "type": "string"
                      },
                      "checklist_view_type": {
                        "type": "string",
                        "default": "MULTI_PAGE",
                        "enum": [
                          "SINGLE_PAGE",
                          "MULTI_PAGE"
                        ]
                      },
                      "field_meta": {
                        "type": "object",
                        "properties": {}
                      },
                      "field_type": {
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
                          "LOOKUP",
                          "SIGNATURE",
                          "HEADER",
                          "VIDEO",
                          "FILE",
                          "TABLE"
                        ]
                      },
                      "field_description": {
                        "type": "string"
                      },
                      "field_placeholder": {
                        "type": "string"
                      },
                      "field_options": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "is_required": {
                        "type": "boolean"
                      },
                      "is_dependent": {
                        "type": "boolean"
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
                      "hide_to_fe": {
                        "type": "boolean"
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
                      "lookup_module": {
                        "type": "string",
                        "description": "if field_type is \"LOOKUP\"",
                        "enum": [
                          "JOB",
                          "CUSTOMER",
                          "EMPLOYEE",
                          "ESTIMATE",
                          "INVOICE",
                          "PRODUCT",
                          "JOB_PRODUCT",
                          "PURCHASE_ORDER",
                          "SERVICE_CONTRACT",
                          "ASSET",
                          "PROPERTY",
                          "ORGANIZATION"
                        ]
                      },
                      "copy_to_field": {
                        "type": "object",
                        "properties": {
                          "module": {
                            "type": "string",
                            "enum": [
                              "JOB",
                              "CUSTOMER"
                            ]
                          },
                          "type": {
                            "type": "string",
                            "enum": [
                              "DEFAULT",
                              "CUSTOM_FIELD"
                            ]
                          },
                          "field_uid": {
                            "type": "string",
                            "description": "Custom field UID if type is CUSTOM_FIELD"
                          },
                          "default_field": {
                            "type": "string",
                            "description": "if type is DEFAULT. Eg: job_title / job_description / customer_first_name / customer_last_name "
                          }
                        }
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
                      "meta_options": {
                        "type": "object",
                        "properties": {
                          "restrict_to_camera": {
                            "type": "boolean"
                          },
                          "watermark_image": {
                            "type": "boolean"
                          },
                          "watermark_timestamp": {
                            "type": "boolean"
                          },
                          "watermark_geo_cords": {
                            "type": "boolean"
                          },
                          "restrict_status_update": {
                            "type": "object",
                            "properties": {
                              "is_enabled": {
                                "type": "boolean",
                                "default": false
                              },
                              "restricted_options": {
                                "type": "array",
                                "items": {
                                  "type": "string"
                                }
                              },
                              "message": {
                                "type": "string"
                              }
                            }
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
                        },
                        "description": "Can be used to copy checklist images(field_type - IMAGE/MULTI_IMAGE) to job default albums"
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
                    "value": "{\n  \"message\": \"Checklist updated successfully\",\n  \"title\": \"Checklist updated successfully\",\n  \"type\": \"success\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Checklist updated successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "Checklist updated successfully"
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
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"message\": \"Error in updating checklist\",\n    \"title\": \"Error in updating checklist\",\n    \"type\": \"error\",\n    \"data\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in updating checklist"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in updating checklist"
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