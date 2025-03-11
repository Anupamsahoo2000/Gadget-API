# Phoenix : IMF Gadget API Development Challenge

Base URL: https://gadget-api-eass.onrender.com

## Postman API Reference

### Get all Gadgets

```http
   GET https://gadget-api-eass.onrender.com/gadgets
```

| Method | Description                                                    |
| :----- | :------------------------------------------------------------- |
| `Get`  | Retrieve all gadgets with a random mission success probability |

### Get Gadgets by Status

```http
  GET https://gadget-api-eass.onrender.com/gadgets/status/{status}
```

| Method | Description                                   |
| :----- | :-------------------------------------------- |
| `GET`  | Retrieve all gadgets filtered by their status |

#### Example

```http
  GET https://gadget-api-eass.onrender.com/gadgets/status/Deployed

```

### Add a New Gadget

```http
  POST https://gadget-api-eass.onrender.com/gadgets

```

| Method | Description                                         |
| :----- | :-------------------------------------------------- |
| `POST` | Add a new gadget with a randomly generated codename |

#### Example Body(No body needed, the name is random)

```
{}
```

### Update a Gadget

```http
  PATCH https://gadget-api-eass.onrender.com/gadgets/{id}

```

| Method  | Description                          |
| :------ | :----------------------------------- |
| `PATCH` | Update gadget details (e.g., status) |

#### Example

```
https://gadget-api-eass.onrender.com/gadgets/456f7890-a12b-3c45-d678-e90123456789
```

```
{
  "status": "Deployed"
}
```

### Decommission (Soft Delete) a Gadget

```http
DELETE https://gadget-api-eass.onrender.com/gadgets/{id}

```

| Method   | Description                                           |
| :------- | :---------------------------------------------------- |
| `DELETE` | Mark a gadget as "Decommissioned" instead of deleting |

#### Example

```
https://gadget-api-eass.onrender.com/gadgets/456f7890-a12b-3c45-d678-e90123456789
```

```
{
  "message": "Gadget decommissioned successfully"
}
```

### Self-Destruct a Gadget

```http
POST https://gadget-api-eass.onrender.com/gadgets/{id}/self-destruct

```

| Method | Description                                 |
| :----- | :------------------------------------------ |
| `POST` | Trigger self-destruct for a specific gadget |

#### Example

```
https://gadget-api-eass.onrender.com/gadgets/456f7890-a12b-3c45-d678-e90123456789/self-destruct
```

```
{
  "message": "Self-destruct sequence initiated!",
  "confirmation_code": "1234"
}
```
