---
updatedAt: 2026-10-02T14:13:28.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Service Territory

Same validation as Create. The duplicate-name check excludes this territory itself.

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
    "/territory/{territory_uid}": {
      "put": {
        "summary": "Update Service Territory",
        "description": "Same validation as Create. The duplicate-name check excludes this territory itself.",
        "operationId": "update-service-territory",
        "parameters": [
          {
            "name": "territory_uid",
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
                  "territory": {
                    "type": "object",
                    "required": [
                      "territory_name",
                      "territory_type"
                    ],
                    "properties": {
                      "territory_name": {
                        "type": "string",
                        "description": "Required. Must be unique per company (case-insensitive) — 409 \"Territory Name Already Exists\" otherwise."
                      },
                      "territory_type": {
                        "type": "string",
                        "enum": [
                          "RADIUS",
                          "GEOFENCE",
                          "ZIPCODE"
                        ],
                        "description": "Required. Determines which of territory_radius / territory_coordinates / territory_zipcodes is required."
                      },
                      "territory_description": {
                        "type": "string"
                      },
                      "territory_color": {
                        "type": "string"
                      },
                      "territory_radius": {
                        "type": "object",
                        "description": "Required when territory_type is RADIUS.",
                        "properties": {
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number"
                            },
                            "description": "[latitude, longitude]"
                          },
                          "radius": {
                            "type": "number"
                          }
                        }
                      },
                      "territory_coordinates": {
                        "type": "array",
                        "description": "Required when territory_type is GEOFENCE. Array of [latitude, longitude] polygon points.",
                        "items": {
                          "type": "array",
                          "items": {
                            "type": "number"
                          }
                        }
                      },
                      "territory_zipcodes": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "description": "Required when territory_type is ZIPCODE."
                      },
                      "teams": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "team_uid": {
                              "type": "string"
                            }
                          }
                        }
                      },
                      "owners": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string"
                            }
                          }
                        },
                        "description": "A user with the Field Executive role cannot be an owner — 400 otherwise. The creator is auto-added as an owner unless the creator is a Field Executive."
                      }
                    }
                  }
                }
              },
              "examples": {
                "Type - Radius": {
                  "value": {
                    "territory": {
                      "territory_name": "Check 1",
                      "territory_description": "check",
                      "territory_type": "RADIUS",
                      "territory_radius": {
                        "geo_cordinates": [
                          12.9211392348233,
                          79.6710848048674
                        ],
                        "radius": 34722
                      },
                      "territory_zipcodes": [],
                      "territory_coordinates": [],
                      "teams": [
                        {
                          "team_uid": "18cada40-021b-11e8-8127-43a5add1a9e2"
                        }
                      ],
                      "owners": [
                        {
                          "user_uid": "48625036-fef6-4637-99e7-f09377a4f9ba"
                        }
                      ],
                      "territory_color": "#4960a0"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Territory Updated successfully\",\n    \"data\": {\n        \"territory_uid\": \"0f4ee337-85c6-472b-a0c9-f471b67f8ea5\"\n    }\n}"
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
                      "example": "Territory Updated successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "territory_uid": {
                          "type": "string",
                          "example": "0f4ee337-85c6-472b-a0c9-f471b67f8ea5"
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
                    "value": "{\"type\": \"error\", \"title\": \"Mandatory data is missing\", \"message\": \"Mandatory data is missing\"}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
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
                    "value": "{\"type\": \"error\", \"message\": \"Unauthorized Request\"}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "text",
              "code": "{\n\t\"territory\": {\n\t\t\"territory_name\": \"Check 1\",\n\t\t\"territory_description\": \"check\",\n\t\t\"territory_type\": \"RADIUS\",\n\t\t\"territory_radius\": null,\n\t\t\"territory_zipcodes\": [\"600028\", \"600026\"],\n\t\t\"territory_coordinates\": [],\n\t\t\"teams\": [{\n\t\t\t\"team_uid\": \"18cada40-021b-11e8-8127-43a5add1a9e2\"\n\t\t}],\n\t\t\"owners\": [{\n\t\t\t\"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\"\n\t\t}],\n\t\t\"territory_color\": \"#4960a0\"\n\t}\n}",
              "name": "Type - Zip Code"
            },
            {
              "language": "text",
              "code": "{\n\t\"territory\": {\n\t\t\"territory_name\": \"Check 1\",\n\t\t\"territory_description\": \"check\",\n\t\t\"territory_type\": \"RADIUS\",\n\t\t\"territory_radius\": null,\n\t\t\"territory_zipcodes\": [],\n\t\t\"territory_coordinates\": [\n\t\t\t[\n\t\t\t\t12.798364882795532,\n\t\t\t\t79.67833954071847\n\t\t\t],\n\t\t\t[\n\t\t\t\t13.02859679389198,\n\t\t\t\t80.04500824189034\n\t\t\t]\n\t\t],\n\t\t\"teams\": [{\n\t\t\t\"team_uid\": \"18cada40-021b-11e8-8127-43a5add1a9e2\"\n\t\t}],\n\t\t\"owners\": [{\n\t\t\t\"user_uid\": \"48625036-fef6-4637-99e7-f09377a4f9ba\"\n\t\t}],\n\t\t\"territory_color\": \"#4960a0\"\n\t}\n}",
              "name": "Type - GeoFence"
            }
          ],
          "samples-languages": [
            "text"
          ]
        },
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