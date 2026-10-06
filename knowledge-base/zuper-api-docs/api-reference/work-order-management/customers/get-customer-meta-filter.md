---
updatedAt: 2026-10-03T07:52:42.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Customer Meta Filter

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
    "/customers/meta/filter": {
      "get": {
        "summary": "Get Customer Meta Filter",
        "operationId": "get-customer-meta-filter",
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
                        "SUCCESS"
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
                          "displayKeyB2B": {
                            "type": "string"
                          },
                          "displayNameB2B": {
                            "type": "string"
                          },
                          "fieldDataKey": {
                            "type": "string",
                            "description": "The exact value to use as `key` in this module's generic-filter endpoint's filter_rules."
                          },
                          "filterOptionKey": {
                            "type": "string"
                          },
                          "fieldLabelKey": {
                            "type": "string"
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
                    "value": "{\"type\": \"SUCCESS\", \"data\": [{\"type\": \"default_field\", \"displayKey\": \"customer_first_name\", \"displayName\": \"First Name\", \"fieldDataKey\": \"customer_first_name\", \"fieldType\": \"TEXT\", \"multiSelect\": false, \"operators\": [{\"displayKey\": \"CONTAINS\", \"displayValue\": \"Contains\"}, {\"displayKey\": \"EQUAL_TO\", \"displayValue\": \"Is\"}]}, {\"type\": \"default_field\", \"displayKey\": \"customer_last_name\", \"displayName\": \"Last Name\", \"fieldDataKey\": \"customer_last_name\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"customer_email\", \"displayName\": \"Email\", \"fieldDataKey\": \"customer_email\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"customer_contact_no.work\", \"displayName\": \"Work Phone\", \"fieldDataKey\": \"customer_contact_no.work\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"customer_contact_no.home\", \"displayName\": \"Home Phone\", \"fieldDataKey\": \"customer_contact_no.home\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"customer_contact_no.mobile\", \"displayName\": \"Mobile Phone\", \"fieldDataKey\": \"customer_contact_no.mobile\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"customer_address.street\", \"displayName\": \"Street\", \"fieldDataKey\": \"customer_address.street\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"customer_address.state\", \"displayName\": \"State\", \"fieldDataKey\": \"customer_address.state\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"Portal Enabled\", \"displayName\": \"Portal Enabled\", \"fieldDataKey\": \"is_portal_enabled\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": false, \"fieldOptions\": [{\"key\": \"true\", \"value\": \"Yes\"}, {\"key\": \"false\", \"value\": \"No\"}], \"operators\": [{\"displayKey\": \"EQUAL_TO\", \"displayValue\": \"Is\"}]}]}"
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