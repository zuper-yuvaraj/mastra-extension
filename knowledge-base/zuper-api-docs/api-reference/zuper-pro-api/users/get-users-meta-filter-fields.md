---
updatedAt: 2026-10-02T15:58:55.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get User Meta Filter

Returns the set of fields available to filter this module on, along with each field's supported operators. `fieldDataKey` values are exactly the `key` values accepted by this module's generic-filter endpoint.

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
    "/users/meta/filter": {
      "get": {
        "summary": "Get User Meta Filter",
        "operationId": "get-users-meta-filter-fields",
        "description": "Returns the set of fields available to filter this module on, along with each field's supported operators. `fieldDataKey` values are exactly the `key` values accepted by this module's generic-filter endpoint.",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "success"
                      ]
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "default_field",
                              "nested_field",
                              "custom_field"
                            ]
                          },
                          "displayKey": {
                            "type": "string"
                          },
                          "displayName": {
                            "type": "string"
                          },
                          "fieldDataKey": {
                            "type": "string",
                            "description": "The exact value to use as `key` in this module's generic-filter endpoint's filter_rules."
                          },
                          "fieldType": {
                            "type": "string",
                            "enum": [
                              "TEXT",
                              "NUMBER",
                              "DATE",
                              "DECIMAL",
                              "DROPDOWN",
                              "LOOKUP"
                            ]
                          },
                          "multiSelect": {
                            "type": "boolean"
                          },
                          "fieldOptions": {
                            "type": "array",
                            "items": {
                              "type": "object"
                            }
                          },
                          "operators": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "displayKey": {
                                  "type": "string"
                                },
                                "displayValue": {
                                  "type": "string"
                                }
                              }
                            }
                          },
                          "data": {
                            "type": "object",
                            "description": "Present on LOOKUP/nested fields — tells the client which API to call for typeahead options.",
                            "properties": {
                              "url": {
                                "type": "string"
                              },
                              "lazyLoad": {
                                "type": "boolean"
                              },
                              "searchParam": {
                                "type": "string"
                              },
                              "dataKey": {
                                "type": "string"
                              },
                              "bindLabel": {
                                "type": "string"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"data\": [{\"type\": \"default_field\", \"displayKey\": \"emp_code\", \"displayName\": \"User Code\", \"fieldDataKey\": \"emp_code\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"first_name\", \"displayName\": \"First Name\", \"fieldDataKey\": \"first_name\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"last_name\", \"displayName\": \"Last Name\", \"fieldDataKey\": \"last_name\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"email\", \"displayName\": \"Email\", \"fieldDataKey\": \"email\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"designation\", \"displayName\": \"Designation\", \"fieldDataKey\": \"designation\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"role_id\", \"displayName\": \"Role\", \"fieldDataKey\": \"role_id\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true}, {\"type\": \"default_field\", \"displayKey\": \"external_login_id\", \"displayName\": \"External Login ID\", \"fieldDataKey\": \"external_login_id\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"access_role_uid\", \"displayName\": \"Access Role\", \"fieldDataKey\": \"access_role_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true}]}"
                  }
                }
              }
            }
          }
        }
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