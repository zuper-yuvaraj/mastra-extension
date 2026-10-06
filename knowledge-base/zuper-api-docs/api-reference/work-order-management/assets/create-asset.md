---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Asset

Creates a new asset. `asset_code` and `asset_name` are required and must be non-blank.

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
    "/assets": {
      "post": {
        "summary": "Create Asset",
        "description": "Creates a new asset. `asset_code` and `asset_name` are required and must be non-blank.",
        "operationId": "create-asset",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "asset": {
                    "properties": {
                      "asset_code": {
                        "type": "string"
                      },
                      "asset_name": {
                        "type": "string"
                      },
                      "purchase_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "warranty_expiry_date": {
                        "type": "string",
                        "format": "date"
                      },
                      "placed_in_service": {
                        "type": "string",
                        "format": "date"
                      },
                      "useful_life": {
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "MONTHS",
                              "YEARS",
                              "DAYS"
                            ]
                          },
                          "value": {
                            "type": "integer",
                            "format": "int32"
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "asset_category": {
                        "type": "string"
                      },
                      "asset_parts": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "quantity": {
                              "type": "integer",
                              "format": "int32"
                            },
                            "serial_nos": {
                              "type": "array",
                              "default": [],
                              "items": {
                                "type": "string"
                              }
                            },
                            "product_id": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "customer": {
                        "type": "string"
                      },
                      "asset_inspection_form": {
                        "type": "string"
                      },
                      "property": {
                        "type": "string"
                      },
                      "organization": {
                        "type": "string"
                      },
                      "asset_location": {
                        "type": "object",
                        "properties": {
                          "landmark": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          }
                        }
                      },
                      "billing_address": {
                        "type": "object",
                        "properties": {
                          "landmark": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          }
                        }
                      },
                      "parent_asset": {
                        "type": "string"
                      },
                      "asset_product": {
                        "type": "string"
                      },
                      "asset_serial_number": {
                        "type": "string"
                      },
                      "assigned_to": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string"
                            },
                            "team_uid": {
                              "type": "string"
                            }
                          }
                        }
                      },
                      "secondary_customers": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "description": "Additional customer UIDs."
                      },
                      "location_uid": {
                        "type": "string"
                      },
                      "custom_fields": {
                        "type": "array",
                        "items": {
                          "type": "object",
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
                          }
                        }
                      }
                    },
                    "required": [
                      "asset_code",
                      "asset_name"
                    ],
                    "type": "object"
                  },
                  "asset_attachments": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "file_name": {
                          "type": "string"
                        },
                        "url": {
                          "type": "string"
                        },
                        "file_size": {
                          "type": "integer",
                          "format": "int32"
                        },
                        "visible_to_customer": {
                          "type": "boolean",
                          "default": false
                        }
                      },
                      "required": [
                        "file_name",
                        "url"
                      ],
                      "type": "object"
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
                    "value": "{\n   type: \"success\",\n   message: \"New asset Created successfully\",\n   data: { asset_uid: \"\" }\n}"
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
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"\",\n    \"title\": \"\"\n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "401",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n      message: \"User UnAuthorized To Access The Data\",\n      title: \"Access Denied\",\n      type: \"error\"\n}"
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
                    "value": "{\n    \"type\": \"Error Message\",\n    \"message\": \"Invalid Organization UID\",\n    \"title\": \"Invalid Organization UID\"\n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "Error Message"
                    },
                    "message": {
                      "type": "string",
                      "example": "Invalid Organization UID"
                    },
                    "title": {
                      "type": "string",
                      "example": "Invalid Organization UID"
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
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Error in creating Asset\",\n    \"data\": \"your_error_data_here\"\n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "message": {
                      "type": "string",
                      "example": "Error in creating Asset"
                    },
                    "data": {
                      "type": "string",
                      "example": "your_error_data_here"
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "parameters": [
          {
            "in": "query",
            "name": "check_duplicate_serial_number",
            "schema": {
              "type": "boolean"
            },
            "description": "If true, rejects the request with 409 when another asset already has the same asset_serial_number."
          }
        ]
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