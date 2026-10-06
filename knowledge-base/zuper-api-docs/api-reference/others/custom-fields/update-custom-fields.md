---
updatedAt: 2026-08-13T12:36:59.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Custom Fields

<br />

# UPDATE CUSTOM FIELDS

Updates custom fields for any supported module record.

`PATCH /custom_fields`

***

## Supported Modules

| Module            |
| ----------------- |
| JOB               |
| ORGANIZATION      |
| ESTIMATE          |
| PURCHASE\_ORDER   |
| VENDOR            |
| CUSTOMER          |
| PROJECT           |
| SERVICE\_CONTRACT |
| INVOICE           |
| PROPERTY          |
| PRODUCT           |
| ASSET             |
| REQUEST           |

> **Note:** For `PRODUCT`, custom fields are stored under the product's `meta_data` field instead of `custom_fields`. Request payload is unchanged.

***

## Update Behavior (Partial Update)

This API uses a **MERGE strategy**, NOT a full replacement.

* **ONLY** send fields that are **NEW** or **CHANGED**
* Existing fields **NOT** included in the request are **PRESERVED**
* No data loss occurs if you omit unchanged fields
* Fields are matched by: `label` + `group_uid` combination

> **Note:** Fields without a `group_uid` are all matched under a single implicit `Default` group. Two same-labelled fields in *different* groups are distinct records; two same-labelled fields with no group are the *same* record.

### Example

If a record has fields `A`, `B`, `C` and you send only field `B` with a new value, fields `A` and `C` remain unchanged.

***

## Important Notes

1. This API does **NOT** support deletion of custom fields
2. To clear a field's value, send it with `value: ""`
3. At least one custom field must be included in the request
4. `group_uid` values are validated against existing custom field groups
5. Labels not present in the company's custom field settings are still accepted and saved, but with `group_uid`, `group_name` and `ref_uid` forced to `null`.

***

## Request Payload

```json
{
  "module_name": "JOB",
  "module_uid": "uuid-string",
  "custom_fields": [
    {
      "label": "Field Name",
      "value": "Field Value",
      "group_uid": "uuid-or-null",
      "hide_to_fe": false,
      "hide_field": false,
      "read_only": false
    }
  ]
}
```

### Field Descriptions

| Field           | Required | Type   | Description                  |
| --------------- | -------- | ------ | ---------------------------- |
| `module_name`   | ✅        | string | One of the supported modules |
| `module_uid`    | ✅        | string | Valid UUID of the record     |
| `custom_fields` | ✅        | array  | Array with at least 1 field  |

### Custom Field Object

| Field         | Required | Type           | Description                                                                                                                    |
| ------------- | -------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `label`       | ✅        | string         | Field identifier (non-empty)                                                                                                   |
| `value`       | ✅        | string         | New value. Numbers/booleans are accepted and coerced to string. `null` is rejected.                                            |
| `group_uid`   | ❌        | string         | Custom field group UUID, `null`, or the literal `"Default"` for no group                                                       |
| `group_name`  | ❌        | string         | Group name. `"Default"` is treated as no group.                                                                                |
| `type`        | ❌        | string         | Ignored — the field type from custom field settings is always used                                                             |
| `ref_uid`     | ❌        | string         | Reference UID for linked fields                                                                                                |
| `module_name` | ❌        | string         | Per-field module name (distinct from the root `module_name`)                                                                   |
| `meta_data`   | ❌        | object \| null | Additional field metadata. For `MULTI_ITEM`, `selected_values` is always regenerated server-side from `value` split on commas. |
| `hide_to_fe`  | ❌        | boolean        | Hide from frontend                                                                                                             |
| `hide_field`  | ❌        | boolean        | Hide field entirely                                                                                                            |
| `read_only`   | ❌        | boolean        | Make field read-only                                                                                                           |

***

## Response

```json
{
  "type": "SUCCESS",
  "title": "Custom fields updated successfully",
  "message": "Updated 2 custom fields and added 1 custom fields",
  "data": {
    "job_uid": "uuid-string"
  }
}
```

The `data` key is module-specific: `job_uid`, `customer_uid`, `property_uid`, `organization_uid`, `project_uid`, `request_uid`, `estimate_uid`, `invoice_uid`, `product_uid`, `purchase_order_uid`, `asset_uid`, `vendor_uid`, and **`contract_uid`** for `SERVICE_CONTRACT`.

### Errors

| Status | Cause                                                          |
| ------ | -------------------------------------------------------------- |
| `400`  | Validation error (see `errors` array)                          |
| `400`  | Unknown `group_uid` — response includes `group_uids_not_found` |
| `403`  | Job not assigned to caller, or business-unit access denied     |
| `404`  | Record not found for the given `module_name` + `module_uid`    |

***

## Side Effects

* An activity log entry is created when at least one field was added or changed.
* A `<module>.update` notification event is emitted.

***

## Behavior Summary

| Scenario                    | Result                                    |
| --------------------------- | ----------------------------------------- |
| Send only changed fields    | ✅ Other fields preserved                  |
| Send empty array `[]`       | ❌ Validation error (min 1 field required) |
| Omit a field entirely       | ✅ Field remains unchanged                 |
| Send field with `value: ""` | ✅ Field value is cleared (not deleted)    |
| Send unchanged values only  | ✅ Succeeds; no activity logged            |
| Send an unconfigured label  | ✅ Saved, but without group/type metadata  |
| Want to delete a field      | ❌ Not supported by this API               |

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
    "/custom_fields": {
      "patch": {
        "description": "",
        "operationId": "patch_custom_fields",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "type": "SUCCESS",
                      "title": "Custom fields updated successfully",
                      "message": "Updated 2 custom fields and added 1 custom fields",
                      "data": {
                        "job_uid": "uuid-string"
                      }
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "properties": {}
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "examples": {
                  "BAD REQUEST": {
                    "value": {
                      "type": "error",
                      "title": "Validation Error",
                      "message": "Group UIDs not found",
                      "data": {
                        "group_uids_not_found": [
                          "group_uid_1",
                          "group_uid_2"
                        ]
                      }
                    },
                    "summary": "BAD REQUEST"
                  }
                }
              }
            }
          }
        },
        "parameters": [],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "module_name": {
                    "type": "string",
                    "enum": [
                      "JOB",
                      "CUSTOMER",
                      "PROPERTY",
                      "ORGANIZATION",
                      "ESTIMATE",
                      "PURCHASE_ORDER",
                      "VENDOR",
                      "PROJECT",
                      "SERVICE_CONTRACT",
                      "INVOICE",
                      "PRODUCT",
                      "ASSET",
                      "REQUEST"
                    ]
                  },
                  "module_uid": {
                    "type": "string"
                  },
                  "custom_fields": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "label": {
                          "type": "string"
                        },
                        "value": {
                          "type": "string"
                        },
                        "group_uid": {
                          "type": "string"
                        },
                        "group_name": {
                          "type": "string"
                        },
                        "meta_data": {
                          "type": "object",
                          "properties": {}
                        },
                        "hide_to_fe": {
                          "type": "boolean"
                        },
                        "hide_field": {
                          "type": "boolean"
                        },
                        "read_only": {
                          "type": "boolean"
                        }
                      },
                      "type": "object",
                      "required": [
                        "label",
                        "value"
                      ]
                    }
                  }
                },
                "type": "object",
                "required": [
                  "module_name",
                  "module_uid",
                  "custom_fields"
                ]
              }
            }
          }
        },
        "summary": "Update Custom Fields",
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